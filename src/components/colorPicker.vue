<template>
    <div class="picker" ref="picker" :style="{ zIndex: zIndex }">
        <div class="result-tip" :style="{ visibility: enable ? 'visible' : 'hidden' }">
            <span
                :style="{ bottom: tipOpt.tipBottom, backgroundColor: tipOpt.tipVal }"
            >{{ tipOpt.tipVal }}</span>
        </div>
        <section class="picker-main" :style="{ height: pickerHeight, width: pickerWidth }">
            <div class="spectrum" :style="{ visibility: showPicker ? 'visible' : 'hidden' }">
                <canvas ref="canvas"></canvas>
                <div
                    class="color-cursor"
                    :style="{
                        left: activeVal.left == 0 ?
                            activeVal.left - 10 + 'px' : activeVal.left + 'px',
                        top: activeVal.top == 0 || activeVal.top == 255 ?
                            activeVal.top - 10 + 'px' : activeVal.top + 'px'
                    }"
                ></div>
            </div>
        </section>
    </div>
</template>


<script setup>

import { ref, onMounted, nextTick, computed, watch, onUnmounted } from 'vue'

const props = defineProps({

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
                tipBottom: '66px',
                tipVal: ''
            }
        }
    },
})

const picker = ref(null)
const canvas = ref(null)
let ctx = null

function draw(color) {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    if (!color) color = "#f00";

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    let whiteGradient = ctx.createLinearGradient(0, 0, canvas.value.width, 0);
    whiteGradient.addColorStop(0, "#fff");
    whiteGradient.addColorStop(1, "transparent");
    ctx.fillStyle = whiteGradient;
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    let blackGradient = ctx.createLinearGradient(0, 0, 0, canvas.value.height);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "#000");
    ctx.fillStyle = blackGradient;
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
}

defineExpose({ draw })

onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    nextTick(() => {
        ctx = canvas.value.getContext("2d");
        draw()
        computeActive();
    });
})

let showPicker = ref(false) // 是否显示选择器
let activeVal = ref({ left: 255, top: 255 }) // 初始选中数值，从 (0,0)? 开始

// 计算溢出高度
const pickerHeight = computed(() => {
    // TODO: 812px 换成窗口高度,并且可随设备变化
    let height = 812 + 2560
    return height + 'px'
})

//溢出宽度，随选择的数字单位是否有正负、是否有上下限判断数值范围
const pickerWidth = computed(() => {
    // TODO: 375px 换成窗口宽度,并且可随设备变化
    let width = 375 + 2560
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


watch(activeVal, () => {
    console.log("++++++", activeVal.value)
    sure()
}, { deep: true })
const emit = defineEmits(['change'])
function sure() {
    emit('change', activeVal.value)
}

let timeout = null;
function computeActive() {
    let scroll = picker.value;
    let scroll_Y_Last = 0;
    let scroll_X_Last = 0;
    scroll.addEventListener("scroll",
        () => {
            console.log(scroll.scrollTop, scroll.scrollLeft)
            // if (getDeltaScroll(scroll_Y_Last, scroll.scrollTop) > 1) {
            // 纵向滑动
            showPicker.value = true
            if (scroll.scrollTop - scroll_Y_Last > 0) {  // 正向滑动
                activeVal.value.top = activeVal.value.top > 0 ?
                    activeVal.value.top - (scroll.scrollTop - scroll_Y_Last) : 0
            } else {  // 反向滑动
                activeVal.value.top = activeVal.value.top < 255 ?
                    activeVal.value.top + (scroll_Y_Last - scroll.scrollTop) : 255
            }
            // } else if (getDeltaScroll(scroll_X_Last, scroll.scrollLeft) > 1) {
            // 横向滑动
            if (scroll.scrollLeft - scroll_X_Last > 0) {  // 正向滑动
                activeVal.value.left = activeVal.value.left > 0 ?
                    activeVal.value.left - (scroll.scrollLeft - scroll_X_Last) : 0
            } else { // 反向滑动
                activeVal.value.left = activeVal.value.left < 255 ?
                    activeVal.value.left + (scroll_X_Last - scroll.scrollLeft) : 255
            }
            if (timeout !== null) clearTimeout(timeout);
            timeout = setTimeout(() => {
                scroll_Y_Last = scroll.scrollTop
                scroll_X_Last = scroll.scrollLeft
                showPicker.value = false;
            }, 500);
            // }
        }
    );
}
// function getDeltaScroll(old, newV) {
//     return Math.abs(old - newV)
// }

// onUnmounted(() => {
//     picker.value.removeEventListener("scroll")
// })


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
    // top: 46px;
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

        .spectrum {
            width: calc(0.7 * 100vw);
            height: 255px;
            // position: relative;
            position: fixed;
            top: 35%;
            left: calc((100vw * 0.3) / 2);
            canvas {
                width: 100%;
                height: 100%;
                // top: 0;
                // left: 0;
                // right: 0;
                // bottom: 0;
            }
            .color-cursor {
                width: 20px;
                height: 20px;
                background: #ccc;
                border-radius: 100%;
                box-sizing: border-box;
                position: absolute;
                pointer-events: none;
                border: 1px solid #eee;
                left: 0;
                top: 0;
            }
        }
    }
}
</style>

