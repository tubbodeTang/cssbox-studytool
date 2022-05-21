<template>
    <div>
        <!-- 创作区域 -->
        <div class="content" @click.self="cleanCurEle">
            <div ref="paint" class="paint">
                <CommonBox
                    v-for="(item) in elementList"
                    :key="item"
                    :boxItem="item"
                    @click.stop="setCurEle(item.id)"
                ></CommonBox>
            </div>

            <!-- 纵向选择器  选择属性值（数值类:单位)或者（项目值） -->
            <PanPicker
                :listSrc="columns"
                :enable="showMethodPicker"
                @change="attrValChange"
                :tipOpt="tipOpt"
            ></PanPicker>
            <ColorPicker
                ref="colorPicker"
                :enable="showColorPicker"
                @change="colorChange"
                :tipOpt="colorTipOpt"
            ></ColorPicker>
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
                            <!-- <div class="card-item" @click="getMethods(item.attr)"> -->
                            <div class="card-icon">
                                <img :src="'/src/assets/attrIcon/' + item.attr + '.png'" />
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

        <!-- 颜色选择 -->
        <div class="color-picker" v-if="showColor">
            <div class="opacity" @touchmove.stop="opacityChange">
                <div class="opacity-bg"></div>
                <div ref="opa-slide" class="slide" :style="{ left: colorSlide.opaLeft }"></div>
            </div>

            <div class="hue" @touchmove.stop="hueChange">
                <div ref="hue-slide" class="slide" :style="{ left: colorSlide.hueLeft }"></div>
            </div>
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
                v-if="showMethodPicker || showColorPicker"
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
            <van-action-bar-button type="success" color="#73c0de" text="保存" @click="workDone" />
            <van-action-bar-button color="#ff962a" text="发布" @click="workDespatch" />
        </van-action-bar>
    </div>
</template>

<script setup>
import { getAllCardsData, getCardMethods } from '@/api/getCardsData';
import PanPicker from '@/components/panPicker.vue'
import ColorPicker from '@/components/colorPicker.vue'
import { TinyColor } from '@ctrl/tinycolor';
import { GeneratePicture } from '@/utils/html2img.js'
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


const store = useStore()

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
    if (!showMethodPicker.value || !showColorPicker.value) {
        adjustingAttr.value = ''
        // 清空当前选中标签？
        store.commit('clearCreateActiveEleID')
    }
}
function releaseCurEle() {
    showMethodPicker.value = false
    showColorPicker.value = false
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
let showColorPicker = ref(false)// 颜色选择器并选择
// 获取属性及属性值信息
function getMethods(attrName) {
    adjustingAttr.value = attrName
    attrJustify.value = false
    if (attrName.indexOf('color') > -1) {
        showColorPicker.value = true
    } else {
        columns.value = getCardMethods(attrName)
        showMethodPicker.value = true
    }

}

// 显示方位选择
let showDirection = computed(() => {
    return adjustingAttr.value === 'padding' || adjustingAttr.value === 'margin' || adjustingAttr.value === 'border-style' || adjustingAttr.value === 'border-width' || adjustingAttr.value === 'border-color' || adjustingAttr.value === 'position-offset' ? true : false
})

let direction = ref('top')
function changeDirection(params) {
    direction.value = params
}

// 显示颜色选择
const colorPicker = ref(null)
let showColor = computed(() => {
    return adjustingAttr.value.indexOf('color') > -1 ? true : false
})
let bg_color = ref({
    h: 0,
    s: "100%",
    l: "50%",
    a: 1
});
let colorSlide = ref({
    hueLeft: 0,
    opaLeft: 0
})
function hueChange(e) {
    console.log(e)
    let x = e.touches[0].pageX
    // - hue.getBoundingClientRect().top;
    if (x < 0) x = 0.1;
    if (x > 375) x = 370;
    colorSlide.value.hueLeft = x + "px";
    bg_color.value.h = (x / 375) * 360;
    let a = new TinyColor(bg_color.value)
    colorPicker.value.draw(a.toHexString())
}

function opacityChange(e) {
    let x = e.touches[0].pageX
    if (x < 0) x = 0.1;
    if (x > 375) x = 370;
    colorSlide.value.opaLeft = x + "px";
    bg_color.value.a = 1 - x / 375;
}

function colorChange(params) {
    let hsvValue = 1 - params.top / 255;
    let hsvSaturation = params.left / 255;
    let lightness = (hsvValue / 2) * (2 - hsvSaturation);
    let saturation =
        (hsvValue * hsvSaturation) / (1 - Math.abs(2 * lightness - 1));
    bg_color.value.l = lightness * 100 + "%";
    bg_color.value.s = saturation * 100 + "%";
    changeBg()
}

function changeBg() {
    let color = new TinyColor(bg_color.value).toHexString();

    let curEle = deepFind(elementList.value, store.state.createActiveEleID, 0)
    curEle.ele.styleObject[getAttrName()] = color

    // value.style.background = color;
    // value.style.color = parseInt(bg_color.l) >= 50 ? "black" : "white";
}

let colorTipOpt = computed(() => {
    let tipOpt = {
        tipBottom: showColor.value ? '146px' : '86px',
        tipVal: new TinyColor(bg_color.value).toHexString()
    }
    return tipOpt
})

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
let paint = ref(null)
const workDone = () => {
    GeneratePicture(paint.value).then(function (canvas) {
        debugger
        let c = canvas.toDataURL('image/png')
        console.log(c)
        // console.log(canvas);
        // let imgUrl = canvas.toDataURL("image/png");
        // var tempLink = document.createElement('a'); // 创建一个a标签
        // tempLink.style.display = 'none';
        // tempLink.href = imgUrl;
        // tempLink.setAttribute('download', id); // 给a标签添加下载属性
        // if (typeof tempLink.download === 'undefined') {
        //     tempLink.setAttribute('target', '_blank');
        // }
        // document.body.appendChild(tempLink); // 将a标签添加到body当中
        // tempLink.click(); // 启动下载
        // document.body.removeChild(tempLink); // 下载完毕删除a标签
        // window.URL.revokeObjectURL(imgUrl);
        store.commit('saveList', c)
        alert('保存成功')
        store.commit('createEleIDClear') // 编号归位
        router.go(-1)
        store.commit('popOldPageName')
    });

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
.color-picker {
    position: fixed;
    bottom: 80px;
    left: 0;
    right: 0;
    z-index: 15;
    .opacity {
        --bg: linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.4) 25%,
                transparent 25%,
                transparent 75%,
                rgba(0, 0, 0, 0.4) 75%,
                rgba(0, 0, 0, 0.4)
            ),
            linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.4) 25%,
                transparent 25%,
                transparent 75%,
                rgba(0, 0, 0, 0.4) 75%,
                rgba(0, 0, 0, 0.4)
            );
        position: relative;
        // width: 25px;
        height: 30px;
        background: var(--bg);
        background-size: 10px 10px;
        background-position: 0 0, 5px 5px;
        cursor: pointer;
    }

    .opacity-bg {
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
        );
    }

    .hue {
        position: relative;
        // width: 25px;
        height: 30px;
        background: linear-gradient(
            to right,
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
        );
        cursor: pointer;
    }

    .slide {
        width: 5px;
        height: 30px;
        border: 1px solid #eee;
        position: absolute;
        left: -2px;
        top: 0;
    }
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
    .paint {
        height: 100%;
    }
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