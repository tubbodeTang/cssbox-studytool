<template>
    <div>
        <van-progress :percentage="process" :show-pivot="false"></van-progress>

        <div v-if="process !== 100" class="content">
            <div class="description">{{ curContent.content }}</div>
            <div class="imageContainer"></div>
            <div class="next">
                <van-button class="btn" round type="primary" @click="nextPage">下一节</van-button>
            </div>
        </div>

        <div v-else class="finish">完成章节学习</div>

        <van-popup
            v-if="lessonData.targetAttr || lessonData.targetAttrVal"
            v-model:show="cardShow"
            round
            :style="{
                height: '100%',
                width: '100vw',
                borderRadius: 0
            }"
        >
            <div id="test" ref="flyItem" class="fly-item">
                <div ref="flyItem2" class="fly-item2">
                    <card :attr-name="lessonData.targetAttr" @saved="collectAnimate"></card>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script setup>
import { getLessonData } from '@/api/getLessonData';

import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Card from '../../components/card.vue';

const store = useStore()


// 在 computed 函数中访问 state
let activeModule = computed(() => store.state.activeModule)
let activeLesson = computed(() => store.state.activeLesson)
console.log(activeLesson.value)
const lessonData = getLessonData(activeModule.value, activeLesson.value)
const lessonContent = lessonData.lessonContent
console.log(lessonContent)
let lessonPage = ref(0)
let process = ref(0)
let curContent = ref(lessonContent[0])
store.commit('changeSubPageName', curContent.value.title)
console.log(curContent.value)

function nextPage() {
    if (lessonPage.value++ < lessonContent.length - 1) {
        curContent.value = lessonContent[lessonPage.value]
        process.value = lessonPage.value / lessonContent.length * 100
        store.commit('changeSubPageName', curContent.value.title)
    } else {
        store.commit('changeSubPageName', '完成✅')
        process.value = 100
    }
}

let cardShow = ref(false)
let flyItem = ref(null)
let flyItem2 = ref(null)
function collectAnimate() {
    console.log(flyItem.value)
    // 现在卡片距离右上角的距离
    let flyItemBound = flyItem.value.getBoundingClientRect();
    // 卡片中心点距右上角的水平垂直距离
    var offsetX = flyItemBound.left + flyItemBound.width / 2 + 100;
    var offsetY = -(flyItemBound.top + flyItemBound.height / 2 + 600);
    let isRunning = false;
    if (isRunning == false) {
        // 购物车图形出现与初始定位
        flyItem.value.style.display = 'block';
        flyItem.value.style.left = (flyItemBound.left + flyItem.value.clientWidth / 2) + 'px';
        flyItem.value.style.top = (flyItemBound.top + flyItem.value.clientHeight / 2) + 'px';
        // 开始动画
        flyItem.value.style.transform = ' scale(0.5) translateX(' + offsetX + 'px)';
        flyItem2.value.style.transform = ' scale(0.5) translateY(' + offsetY + 'px)';
        // 动画标志量
        isRunning = true;
        setTimeout(() => {
            flyItem.value.style.display = 'none';
            flyItem.value.style.transform = 'translateX(0)';
            flyItem2.value.style.transform = 'translateY(0)';
            isRunning = false;
            cardShow.value = false
        }, 490);
    }
}

watch(process, (newVal) => {
    if (newVal === 100) {
        cardShow.value = true
    } else {
        cardShow.value = false
    }
})
</script>

<style lang="less" scoped>

.content{
    height: calc(100vh - 100px - 30px);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .description{
        min-height: 30%;

    }
    .imageContainer{
        min-height: 30%;
    }
    .next{
        text-align: center;
        .btn{
            width:100px;
            height:100px;
            border-radius: 50%;
        }
    }
}
:deep(.van-popup) {
    background-color: transparent;
}

.fly-item,
.fly-item > .fly-item2 {
    // position: absolute;
    // width: 50px;
    // height: 100%;
    transition: transform 0.5s;
}

.fly-item {
    // display: none;
    transition-timing-function: linear;
}

.fly-item > .fly-item2 {
    transition-timing-function: cubic-bezier(0.55, 0, 0.85, 0.36);
}
</style>