<template>
    <div>
        <!-- 创作区域 -->
        <div
            class="content"
            v-hammer:swipe.horizontal="test"
            v-hammer:tap="test"
            v-hammer:pan.up="showMethodSelect"
            v-hammer:pan.down="showMethodSelect"
        >
            <CommonBox
                v-for="(item) in elementList"
                :key="item"
                :index="item.id"
                :items="elementList"
                :styleObj="item.styleObject"
                @deleteIndex="del"
                @uploadData="getData"
                @click="setCurRef(item.id)"
            ></CommonBox>
        </div>
        <!-- 纵向选择器  选择属性值（数值类:单位)或者（项目值） -->
        <van-popup
            :show="showMethodPicker"
            :overlay-class="'select-popup'"
            class="select-popup-content"
        >
            <van-picker
                :show-toolbar="false"
                :columns="columns"
                :visible-item-count="itemCount"
                :item-height="itemHeight"
                :columns-field-names="customFieldName"
                @change="attrValChange"
            />
        </van-popup>
        <!-- 添加元素列表 -->
        <!-- <van-action-sheet v-model:show="attrAdd" title="标题">
            <div class="popup-content">内容1</div>
        </van-action-sheet>-->
        <!-- 元素调整选项列表 -->
        <van-action-sheet v-model:show="attrJustify" title="标题">
            <div class="popup-content">
                <van-row>
                    <van-col span="6" v-for="item in cardList" :key="item">
                        <div
                            class="card-item"
                            @click="getMethods(item.attr)"
                            :class="{ inactive: !item.state }"
                        >
                            <div class="card-icon">
                                <img :src="'/src/assets/logo.png'" />
                            </div>
                            <p class="card-name">{{ item.name }}</p>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </van-action-sheet>

        <van-action-bar>
            <van-action-bar-icon icon="plus" text="添加元素" @click="addElement" />
            <van-action-bar-icon
                icon="brush-o"
                text="调整"
                @click="attrJustify = true"
                :color="elementList.length && canOperate ? '#ee0a24' : '#ccc'"
            />
            <!-- TODO: 把 color 换成计算属性 -->
            <van-action-bar-icon
                icon="delete-o"
                text="删除元素"
                @click="deleteElement"
                :color="elementList.length && canOperate ? '#ee0a24' : '#ccc'"
            />
            <van-action-bar-button type="success" text="完成" @click="wordDone" />
        </van-action-bar>
    </div>
</template>

<script setup>
import { getAllCardsData, getCardMethods } from '@/api/getCardsData';
import CommonBox from '@/components/commonBox.vue'
import { ref, computed } from 'vue';
import { useStore } from 'vuex'

let attrJustify = ref(false)

const store = useStore()

function getAllCardsName() {
    return store.state.activeCardList.map(item => item.attr)
}

const allCardList = getAllCardsData()
const allCardsName = getAllCardsName()
// 获取目前可以使用的属性列表
const cardList = computed(() => {
    const newList = []
    allCardList.forEach(card => {
        let cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.state = allCardsName.indexOf(card.attr) > -1 ?
            true : false
        newList.push(cardCopy)
    });
    return newList
})

// 作品元素列表
let elementList = ref([
    {
        id: 1,
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
    let lastId = elementList.value[elementList.value.length - 1].id + 1
    const basicBox = {
        id: lastId,
        styleObject: {
            display: 'block',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#964b4b'
        },
        children: []
    }
    elementList.value.push(basicBox)
}
// 选中当前元素
let canOperate = ref(false)
let curElementId = null
function setCurRef(id) {
    canOperate.value = true
    curElementId = id
}

// 元素删除
function deleteElement() {
    const curElePosi = elementList.value.findIndex(item => item.id === curElementId)
    elementList.value.splice(curElePosi, 1)
    curElementId = null // 清空当前选中标签
}

// 元素属性修改
const columns = ref([])
const customFieldName = {
    text: 'methodName',
    children: 'unit',
};
let itemCount = ref(0)
let itemHeight = ref(44)
let adjustingAttr = '' // 当前正在修改的属性
// 获取属性及属性值信息
function getMethods(attrName) {
    adjustingAttr = attrName
    columns.value = getCardMethods(attrName)
    itemCount.value = columns.value.length
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(height)
    itemHeight.value = (height - 96) / itemCount.value
    console.log(itemHeight.value)


    attrJustify.value = false
}

// 纵向滑动显示属性值选择器并选择
let showMethodPicker = ref(false)
function showMethodSelect(e) {
    console.log(e);
    showMethodPicker.value = true
}

function attrValChange(params) {
    debugger
    if (params.methodName !== 'number') {
        let curEle = elementList.value.find(item => item.id === curElementId)
        curEle.styleObject[adjustingAttr] = params.methodName
        console.log(elementList.value)
        showMethodPicker.value = false
    }
}

function test(e) {
    console.log(e);
}
function test2(e) {
    console.log('aaaa');
}

const wordDone = () => Toast('作品完成');
</script>

<style scoped lang="less">
.van-action-bar {
    z-index: 5;
}
.content {
    height: calc(100vh - 96px);
    background-color: #d59797;
}

.popup-content {
    padding: 16px 16px 160px;

    .card-item {
        height: 100px;
        padding: 0 15px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;

        &.inactive {
            opacity: 0.4;
        }

        .card-icon {
            display: flex;
            text-align: center;
            justify-content: space-around;
            img {
                height: 40px;
                width: 40px;
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
</style>