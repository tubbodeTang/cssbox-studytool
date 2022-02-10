<template>
    <div class="picker" ref="picker" :style="{ zIndex: zIndex }">
        <div class="result-tip" :style="{ visibility: enable ? 'visible' : 'hidden' }">
            <span>{{ result && result.methodName }}</span>
        </div>
        <section class="picker-main" :style="{ height: pickerHeight }">
            <!-- <h3>
                    <span @click="show = false">取消</span>
                    <span>请选择</span>
                    <span @click="sure()">确认</span>
            </h3>-->
            <ul ref="ul" :style="{ visibility: show ? 'visible' : 'hidden' }">
                <li
                    v-for="(item) in list"
                    :key="item"
                    :class="active == item.id ? 'active' : active == item.id - 1 || active == item.id + 1 ? 'active2' : null"
                    :ref="el => { if (el) divs['li' + item.methodName] = el }"
                >{{ item.methodName }}</li>
            </ul>
        </section>
    </div>
</template>


<script setup>

import { ref, onMounted, nextTick, computed, watch, onUnmounted } from 'vue'


const props = defineProps({
    listSrc: {
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
    enable: {
        type: Boolean,
        default: () => {
            return false
        }
    }
})

const ul = ref(null)
const picker = ref(null)
const divs = ref({})
onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    console.log(ul.value) // <div>This is a root element</div>
    nextTick(() => {
        computeActive();
    });
})
let list = computed(() => {
    return props.listSrc
})
let show = ref(false) // 是否显示选择框
let active = ref(1) // 初始选中值，id 从 1 开始
let result = ref(list.value[0]) // 初始选中值

// 计算所有选项的位置
const listOffsetTop = computed(() => {
    let listOffsetTop = [];
    props.listSrc.forEach((item, index) => {
        let liTop = divs.value["li" + item.methodName];
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

// 溢出宽度，随选择的数字单位是否有正负、是否有上下限判断数值范围
// const pickerWidth = computed(() => {
//     // TODO: 812px 换成窗口高度,并且可随设备变化
//     let height = 812 + (list.value.length - 1) * 40
//     return height + 'px'
// })

// 调整层级，不可用时层级降低，可用时置于顶层
const zIndex = computed(() => {
    let z = -1
    if (props.enable) {
        z = 10
    }
    return z
})

watch(active, () => {
    sure()
})
const emit = defineEmits(['change'])
function sure() {
    list.value.map((item, index) => {
        item.id == active.value ? (result.value = item) : null;
    });
    emit('change', result.value)
}

let timeout = null;
function computeActive() {
    // let scroll = ul.value;
    let scroll = picker.value;
    console.log(scroll)
    scroll.addEventListener("scroll",
        () => {
            show.value = true
            listOffsetTop.value.map((item, index) => {
                if (item <= scroll.scrollTop) {
                    active.value = index + 1
                }
            });
            if (timeout !== null) clearTimeout(timeout);
            timeout = setTimeout(() => {
                show.value = false;
            }, 500);
        }
    );
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
            width: 70%;
            // max-height: 250px;
            padding: 0;
            margin: 0 auto;
            // overflow: auto;
            background-color: #fff;
            position: relative;
            top: 35%;
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

