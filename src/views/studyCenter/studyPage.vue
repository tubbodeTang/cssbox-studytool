<template>
    <div>
        <van-progress :percentage="process" :show-pivot="false"></van-progress>

        <div v-if="process !== 100" class="content">
            <div class="description">{{ curContent.content }}</div>
            <div class="imageContainer"></div>
            <div class="next">
                <button @click="nextPage">下一节</button>
            </div>
        </div>

        <div v-else class="finish">完成章节学习</div>

        <van-popup
            v-model:show="cardShow"
            round
            :style="{
                height: '60%',
                width: 'calc(100vw - 60px)'
            }"
        >
            <transition name="van-slide-up">
                <!-- <div v-show="visible">Slide Up</div> -->
                <card :attr-name="lessonData.targetAttr"></card>
            </transition>
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
console.log(activeModule.value)
const lessonData = getLessonData(activeModule.value)
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
// 使用 mutation
let increment = () => store.commit('increment')


let attrType = ref()
let cardShow = ref(false)

watch(process, (newVal) => {
    if (newVal === 100) {
        cardShow.value = true
    } else {
        cardShow.value = false
    }
})
</script>

<style lang="less" scoped>
</style>