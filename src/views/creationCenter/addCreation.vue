<template>
    <div>
        <!-- 创作区域 -->
        <div class="content" @click="cleanCurEle">
            <CommonBox
                v-for="(item) in elementList"
                :key="item"
                :boxItem="item"
                @click.stop="setCurEle(item.id)"
            ></CommonBox>
            <!-- 纵向选择器  选择属性值（数值类:单位)或者（项目值） -->
            <PanPicker
                :listSrc="columns"
                :enable="showMethodPicker"
                @change="attrValChange"
                :tipOpt="tipOpt"
            ></PanPicker>
        </div>
        <!-- 元素调整选项列表 -->
        <van-action-sheet v-model:show="attrJustify" title="属性">
            <div class="popup-content">
                <van-row>
                    <van-col span="12" v-for="item in cardList" :key="item">
                        <div
                            class="card-item"
                            @click="item.state && getMethods(item.attr)"
                            :class="{ inactive: !item.state }"
                        >
                            <div class="card-icon">
                                <img :src="'/src/assets/attrIcon/'+item.attr+'.png'" />
                            </div>
                            <p class="card-name">{{ item.name }}</p>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </van-action-sheet>

        <!-- 方位选择 -->
        <div class="direction-picker" v-if="showDirection">
            <van-tag
                :plain="direction !== 'top'"
                round
                type="primary"
                @click="changeDirection('top')"
            >top</van-tag>
            <van-tag
                :plain="direction !== 'bottom'"
                round
                type="primary"
                @click="changeDirection('bottom')"
            >bottom</van-tag>
            <van-tag
                :plain="direction !== 'left'"
                round
                type="primary"
                @click="changeDirection('left')"
            >left</van-tag>
            <van-tag
                :plain="direction !== 'right'"
                round
                type="primary"
                @click="changeDirection('right')"
            >right</van-tag>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="plus" text="添加元素" @click="addElement" />
            <van-action-bar-icon
                icon="brush-o"
                text="调整"
                @click="showAttrAdjust"
                :color="elementList.length && canOperate ? '#ee0a24' : '#ccc'"
            />
            <!-- TODO: 把 color 换成计算属性 -->
            <van-action-bar-icon
                v-if="showMethodPicker"
                icon="success"
                text="保存修改"
                @click="releaseCurEle"
                :color="'#ee0a24'"
            />
            <van-action-bar-icon
                v-else
                icon="delete-o"
                text="删除元素"
                @click="deleteElement"
                :color="elementList.length && canOperate ? '#ee0a24' : '#ccc'"
            />
            <van-action-bar-button type="success" text="保存" @click="workDone" />
            <van-action-bar-button color="#ff962a" text="发布" @click="workDespatch" />
        </van-action-bar>
    </div>
</template>

<script setup>
import { getAllCardsData, getCardMethods } from '@/api/getCardsData';
import PanPicker from '@/components/panPicker.vue'
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


const store = useStore()
store.commit('changeSubPageName', '新创作')

function getActiveCardsName() {
    return store.state.activeCardList.map(item => item.attr)
}

const allCardList = getAllCardsData()
const activeCardsName = getActiveCardsName()
// 获取目前可以使用的属性列表
const cardList = computed(() => {
    const newList = []
    allCardList.forEach(card => {
        let cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.state = activeCardsName.indexOf(card.attr) > -1 ?
            true : false
        newList.push(cardCopy)
    });
    return newList
})

// 作品元素列表
let elementList = ref([
    {
        id: store.state.createEleID,
        styleObject: {
            display: 'block',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#964b4b'
        },
        children: []
    }
])

// 添加新的元素
function addElement(params) {
    store.commit('createEleIDPlus') // 编号加一
    const basicBox = {
        id: store.state.createEleID,
        styleObject: {
            display: 'block',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#964b4b'
        },
        children: []
    }
    if (store.state.createActiveEleID) {
        const curEle = deepFind(elementList.value, store.state.createActiveEleID, 0)
        curEle.ele.children.push(basicBox)
    } else {
        elementList.value.push(basicBox)
    }
}

// 选中当前元素
let canOperate = computed(() => {
    return store.state.createActiveEleID ? true : false
})

function setCurEle(id) {
    store.commit('changeCreateActiveEleID', id)
}
function cleanCurEle() {
    if (!showMethodPicker.value) {
        adjustingAttr.value = ''
        // 清空当前选中标签？
        store.commit('clearCreateActiveEleID')
    }
}
function releaseCurEle() {
    showMethodPicker.value = false
    adjustingAttr.value = ''
    // 清空当前选中标签？
    // store.commit('clearCreateActiveEleID')
}

// 元素删除
function deleteElement() {
    if (elementList.value.length && canOperate.value) {
        const curEle = deepFind(elementList.value, store.state.createActiveEleID, 0)
        if (curEle.ele) {
            if (curEle.fatherId === 0) {
                elementList.value.splice(curEle.posi, 1)
            } else {
                const curFatherEle = deepFind(elementList.value, curEle.fatherId, 0)
                curFatherEle.ele.children.splice(curEle.posi, 1)
            }
        }
        adjustingAttr.value = ''
        // 清空当前选中标签
        store.commit('clearCreateActiveEleID')
    }
}

// 元素属性修改
let attrJustify = ref(false)
function showAttrAdjust() {
    attrJustify.value = elementList.value.length && canOperate.value ? true : false
}

const columns = ref([])
let adjustingAttr = ref('') // 当前正在修改的属性
let showMethodPicker = ref(false)// 纵向滑动显示属性值选择器并选择
// 获取属性及属性值信息
function getMethods(attrName) {
    adjustingAttr.value = attrName
    columns.value = getCardMethods(attrName)
    attrJustify.value = false
    showMethodPicker.value = true
}

// 显示方位选择
let showDirection = computed(() => {
    return adjustingAttr.value === 'padding' || adjustingAttr.value === 'margin' || adjustingAttr.value === 'border-style' || adjustingAttr.value === 'border-width' || adjustingAttr.value === 'border-color' || adjustingAttr.value === 'position-offset' ? true : false
})

let direction = ref('top')
function changeDirection(params) {
    direction.value = params
}
// 获取真实属性名
function getAttrName() {
    let attrName = ''
    if (adjustingAttr.value === 'padding' || adjustingAttr.value === 'margin') {
        attrName = adjustingAttr.value + '-' + direction.value
    } else if (adjustingAttr.value === 'border-style' ||
        adjustingAttr.value === 'border-width' ||
        adjustingAttr.value === 'border-color') {
        const seperate = adjustingAttr.value.split('-')
        attrName = seperate[0] + '-' + direction.value + '-' + seperate[1]
    } else if (adjustingAttr.value === 'position-offset') {
        attrName = direction.value
    } else {
        attrName = adjustingAttr.value
    }
    return attrName
}

let tipOpt = computed(() => {
    let tipOpt = {
        tipBottom: showDirection.value ? '86px' : '66px'
    }
    return tipOpt
})
// 属性值修改
function attrValChange(params) {
    let curEle = deepFind(elementList.value, store.state.createActiveEleID, 0)
    if (params.attrVal.methodName.indexOf('number') === -1) {
        curEle.ele.styleObject[getAttrName()] = params.attrVal.methodName
        console.log(elementList.value)
    } else {
        const seperate = params.attrVal.methodName.split('-')
        curEle.ele.styleObject[getAttrName()] = params.numVal + seperate[1]
    }
}

function deepFind(list, id, fatherId) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return { ele: list[i], fatherId: fatherId, posi: i }
        } else if (list[i].children.length > 0) {
            return deepFind(list[i].children, id, list[i].id)
        }
    }
    return undefined
}

const router = useRouter()
const workDone = () => {
    alert('保存成功')
    store.commit('createEleIDClear') // 编号归位
    router.go(-1)
    store.commit('popOldPageName')
};
const workDespatch = () => {
    alert('作品发布')
    store.commit('createEleIDClear') // 编号归位
    router.go(-1)
    store.commit('popOldPageName')
};

</script>

<style scoped lang="less">
.van-action-bar {
    z-index: 5;
}
.direction-picker {
    padding: 8px 10px;
    background-color: rgb(235 235 235, 50%);
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 15;
    display: flex;
    justify-content: space-evenly;
}
.content {
    height: calc(100vh - 100px);
    // background-color: #d59797;
    border: 2px dashed #ccc;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
}

.popup-content {
    padding: 16px 16px 160px;

    .card-item {
        height: 150px;
        padding: 0 15px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;

        &.inactive {
            opacity: 0.3;
        }

        .card-icon {
            display: flex;
            text-align: center;
            justify-content: space-around;
            img {
                height: 100px;
                width: 100px;
            }
        }
        .card-name {
            margin: 2px 0;
            font-size: 14px;
        }
    }
}

:deep(.select-popup) {
    background: rgba(255, 255, 255, 0.2);
}
:deep(.select-popup-content) {
    width: 100%;
    background: transparent;
}

:deep(.van-action-bar-icon) {
    min-width: 60px;
}
:deep(.van-action-bar-button) {
    border-radius: 999px;
}

:deep(.van-action-bar-button--first) {
    margin-right: 5px;
    margin-left: 10px;
}
</style>