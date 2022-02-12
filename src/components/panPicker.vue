<template>
    <div class="picker" ref="picker" :style="{ zIndex: zIndex }">
        <div class="result-tip" :style="{ visibility: enable ? 'visible' : 'hidden' }">
            <span :style="{ bottom: tipOpt.tipBottom }">{{ tipVal }}</span>
        </div>
        <section class="picker-main" :style="{ height: pickerHeight, width: pickerWidth }">
            <!-- <h3>
                    <span @click="show = false">取消</span>
                    <span>请选择</span>
                    <span @click="sure()">确认</span>
            </h3>-->
            <ul :style="{ visibility: showVPicker ? 'visible' : 'hidden' }">
                <li
                    v-for="item in list"
                    :key="item"
                    :class="activeAttrVal == item.id ? 'active' : activeAttrVal == item.id - 1 || activeAttrVal == item.id + 1 ? 'active2' : null"
                    :ref="el => { if (el) divs_vertical['li' + item.methodName] = el }"
                >{{ item.methodName }}</li>
            </ul>

            <ul class="Hpicker" :style="{ visibility: showHPicker ? 'visible' : 'hidden' }">
                <li
                    v-for="num in numForChoose"
                    :key="num"
                    :class="activeVal == num ? 'active' : activeVal == num - 1 || activeVal == num + 1 ? 'active2' : null"
                    :ref="el => { if (el) divs_horizon['li' + num] = el }"
                >{{ num }}</li>
            </ul>
        </section>
    </div>
</template>


<script setup>

import { ref, onMounted, nextTick, computed, watch, onUnmounted } from 'vue'

const props = defineProps({
    listSrc: { // 纵向属性值列表
        type: Array,
        default: () => {
            return [
                {
                    id: 0,
                    methodName: "北京",
                },
                {
                    id: 1,
                    methodName: "上海",
                },
                {
                    id: 2,
                    methodName: "广州",
                },
                {
                    id: 3,
                    methodName: "深圳",
                },
                {
                    id: 4,
                    methodName: "北海",
                },
            ]
        }
    },
    enable: { // 选择器是否可用
        type: Boolean,
        default: () => {
            return false
        }
    },
    tipOpt: { // tip 显示设置
        type: Object,
        default: () => {
            return {
                tipBottom: '66px'
            }
        }
    },
})

const picker = ref(null)
const divs_vertical = ref({})
const divs_horizon = ref({})
onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    nextTick(() => {
        computeActive();
    });
})
let list = computed(() => {
    return props.listSrc
})
let showVPicker = ref(false) // 是否显示横向选择框
let showHPicker = ref(false) // 是否显示纵向选择框
let activeAttrVal = ref(1) // 初始选中属性值，id 从 1 开始
let activeVal = ref(1) // 初始选中数值，从 0 开始
let result = ref({
    attrVal: list.value[0],
    numVal: null
}) // 初始选中值

let numForChoose = computed(() => {
    let numForChoose = []
    const AttrValItem = props.listSrc.find(item => item.id === activeAttrVal.value)
    if (AttrValItem && AttrValItem.methodName.indexOf('number') > -1) {
        console.log(AttrValItem.methodName)
        // 是数值类的属性值  确定数值范围
        if (AttrValItem.methodName.indexOf('%') > -1) {
            // 百分比为 0-100 如果可以为负值 则是 -100～100
            // TODO: 负值的移动映射有问题
            // numForChoose = AttrValItem.canbeMinus ? formArray(-100, 100) : formArray(0, 100)
            numForChoose = formArray(0, 100)
        } else {
            // 其他类型值为 0-创作区宽度 如果可以为负值 则是 -创作区宽度～创作区宽度
            // numForChoose = AttrValItem.canbeMinus ? formArray(-375, 375) : formArray(0, 375)
            numForChoose = formArray(0, 375)
        }
    }
    console.log(numForChoose)
    return numForChoose
})

function formArray(START, END) {
    return Array.from({ length: END - START }, (x, i) => i + START)
}

// 计算所有横向选项的位置
const listOffsetLeft = computed(() => {
    let listOffsetLeft = [];
    numForChoose.value.forEach(num => {
        let liLeft = divs_horizon.value["li" + num];
        listOffsetLeft.push(liLeft.offsetLeft);
    });
    console.log(listOffsetLeft)
    return listOffsetLeft
})

// 计算所有纵向选项的位置
const listOffsetTop = computed(() => {
    let listOffsetTop = [];
    props.listSrc.forEach((item, index) => {
        let liTop = divs_vertical.value["li" + item.methodName];
        listOffsetTop.push(liTop.offsetTop);
    });
    console.log(listOffsetTop)
    return listOffsetTop
})

// 计算溢出高度
const pickerHeight = computed(() => {
    // TODO: 812px 换成窗口高度,并且可随设备变化
    let height = 812 - 50 + (list.value.length - 1) * 40
    return height + 'px'
})

//溢出宽度，随选择的数字单位是否有正负、是否有上下限判断数值范围
const pickerWidth = computed(() => {
    // TODO: 375px 换成窗口宽度,并且可随设备变化
    let width = Math.ceil(375 / 2) + (numForChoose.value.length) * 50
    return width + 'px'
})

// 调整层级，不可用时层级降低，可用时置于顶层
const zIndex = computed(() => {
    let z = -1
    if (props.enable) {
        z = 10
    }
    return z
})

watch(activeAttrVal, () => {
    sure()
})

watch(activeVal, () => {
    sure()
})
const emit = defineEmits(['change'])
function sure() {
    list.value.map((item, index) => {
        if (item.id == activeAttrVal.value) {
            result.value.attrVal = item
            item.methodName.indexOf('number') > -1 ? (result.value.numVal = numForChoose.value[activeVal.value]) : null
        }
    });
    emit('change', result.value)
}

let tipVal = computed(() => {
    let content = ''
    if (result.value && result.value.attrVal) {
        if (result.value.attrVal.methodName.indexOf('number') > -1) {
            let methodName = result.value.attrVal.methodName.split('-')
            content =  (result.value.numVal ? result.value.numVal : '-' )+ methodName[1]
        } else {
            content = result.value.attrVal.methodName
        }
    }
    return content
})

let timeout = null;
function computeActive() {
    let scroll = picker.value;
    let scroll_Y_Last = 0;
    let scroll_X_Last = 0;
    scroll.addEventListener("scroll",
        () => {
            console.log(scroll.scrollTop, scroll.scrollLeft)
            if (getDeltaScroll(scroll_Y_Last, scroll.scrollTop) > 1) {
                // 纵向滑动
                showVPicker.value = true
                showHPicker.value = false
                listOffsetTop.value.map((item, index) => {
                    if (item <= scroll.scrollTop) {
                        activeAttrVal.value = index + 1
                    }
                });
                if (timeout !== null) clearTimeout(timeout);
                timeout = setTimeout(() => {
                    scroll_Y_Last = scroll.scrollTop
                    scroll_X_Last = scroll.scrollLeft
                    showVPicker.value = false;
                }, 500);
            } else if (getDeltaScroll(scroll_X_Last, scroll.scrollLeft) > 1) {
                // 横向滑动
                showVPicker.value = false
                showHPicker.value = true
                listOffsetLeft.value.map((item, index) => {
                    if (item - Math.ceil(375 / 2) <= scroll.scrollLeft) {
                        activeVal.value = numForChoose.value[index]
                    }
                });
                if (timeout !== null) clearTimeout(timeout);
                timeout = setTimeout(() => {
                    scroll_Y_Last = scroll.scrollTop
                    scroll_X_Last = scroll.scrollLeft
                    showHPicker.value = false;
                }, 500);
            }


        }
    );
}
function getDeltaScroll(old, newV) {
    return Math.abs(old - newV)
}

onUnmounted(() => {
    picker.value.removeEventListener("scroll")
})


</script>
<style lang="less" scoped>
.result-tip {
    display: flex;
    justify-content: center;
    span {
        background-color: #ccc;
        border-radius: 30px;
        position: fixed;
        bottom: 66px;
        padding: 0 10px;
    }
}
.picker {
    // background-color: rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 96px);
    width: 100%;
    position: absolute;
    top: 46px;
    left: 0;
    bottom: 0;
    right: 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .picker-main {
        width: 100%;
        height: 1600px;
        // position: absolute;
        // bottom: 0;
        margin: 0 auto;
        // background-color: #fff;
        background-color: transparent;
        // h3 {
        //     padding: 0;
        //     margin: 0;
        //     // display: flex;
        //     display: none;
        //     justify-content: space-around;
        //     border-bottom: solid 1px #ddd;
        //     font-size: 20px;
        //     line-height: 40px;
        // }
        ul {
            width: calc(0.7 * 100vw);
            padding: 0;
            background-color: #fff;
            position: fixed;
            top: 35%;
            left: calc((100vw * 0.3) / 2);
            li {
                list-style: none;
                font-size: 20px;
                line-height: 40px;
                text-align: center;
                opacity: 0.3;
                height: 40px;
                background-color: #fff;
            }
        }
        ul.Hpicker {
            width: 100%;
            min-width: 100vw;
            padding: 0;
            background-color: #fff;
            position: relative;
            top: 35%;
            left: 0;
            li {
                display: inline-block;
                width: 40px;
                padding: 0 5px;
                list-style: none;
                font-size: 20px;
                line-height: 40px;
                text-align: center;
                opacity: 0.3;
                height: 40px;
                background-color: #fff;
            }
        }
    }
}
.active {
    background-color: #ddd !important;
    color: #333;
    opacity: 1 !important;
}
.active2 {
    color: #333;
    opacity: 0.6 !important;
}
</style>

