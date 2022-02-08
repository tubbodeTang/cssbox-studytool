<template>
    <div>
        <button @click="showPicker()">选择器</button>
        <span>{{ city }}</span>

        <div class="picker" ref="picker">
            <section class="picker-main" :style="{ height: pickerHeight }">
                <h3>
                    <span @click="show = false">取消</span>
                    <span>请选择</span>
                    <span @click="sure()">确认</span>
                </h3>
                <ul ref="ul" :style="{ visibility: show ? 'visible' : 'hidden' }">
                    <li
                        v-for="(item, index) in list"
                        :key="index"
                        :class="active == item.id ? 'active' : active == item.id - 1 || active == item.id + 1 ? 'active2' : null"
                        :ref="el => { if (el) divs['li' + item.label] = el }"
                    >{{ item.val }}</li>
                </ul>
            </section>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted, nextTick, computed, watch } from 'vue'

const ul = ref(null)
const picker = ref(null)
const divs = ref({})
onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    console.log(ul.value) // <div>This is a root element</div>
    nextTick(() => {
        getOffsetTop();
        computeActive();
    });
})
let list = ref([
    {
        id: 0,
        val: "北京",
        label: "bj"
    },
    {
        id: 1,
        val: "上海",
        label: "sh"
    },
    {
        id: 2,
        val: "广州",
        label: "gz"
    },
    {
        id: 3,
        val: "深圳",
        label: "sz"
    },
    {
        id: 4,
        val: "北海",
        label: "bh"
    },
])

let show = ref(false)
let active = ref(0)
let city = ref("")
let listOffsetTop = []
let timer = null

const pickerHeight = computed(() => {
    // TODO: 812px 换成窗口高度,并且可随设备变化
    let height = 812 + (list.value.length - 1) * 40
    return height + 'px'
})

// function showPicker() {
//     show.value = true;
//     active.value = 0;
//     nextTick(() => {
//         getOffsetTop();
//         computeActive();
//     });
// }

watch(active, () => {
    sure()
})
function sure() {
    list.value.map((item, index) => {
        item.id == active.value ? (city.value = item.val) : null;
    });
    show.value = false;
}
function getOffsetTop() {
    listOffsetTop = [];
    list.value.map((item, index) => {
        let liTop = divs.value["li" + item.label];
        listOffsetTop.push(liTop.offsetTop);
    });
    console.log(listOffsetTop)
}
function computeActive() {
    // let scroll = ul.value;
    let scroll = picker.value;
    console.log(scroll)
    scroll.addEventListener("scroll", () => {
        show.value = true
        listOffsetTop.map((item, index) => {
            item <= scroll.scrollTop ? (active.value = index) : null;
        });
    });
}
</script>
<style lang="less" scoped>
.picker {
    background-color: rgba(0, 0, 0, 0.2);
    max-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    overflow: auto;
    .picker-main {
        width: 100%;
        height: 1600px;
        // position: absolute;
        // bottom: 0;
        margin: 0 auto;
        // background-color: #fff;
        background-color: transparent;
        h3 {
            padding: 0;
            margin: 0;
            // display: flex;
            display: none;
            justify-content: space-around;
            border-bottom: solid 1px #ddd;
            font-size: 20px;
            line-height: 40px;
        }
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

