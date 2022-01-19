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
    </div>
</template>

<script setup>
import { getLessonData } from '@/api/getLessonData';

import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()


// 在 computed 函数中访问 state
let activeModule = computed(() => store.state.activeModule)
console.log(activeModule.value)
const lessonData = getLessonData(activeModule.value)
console.log(lessonData)
let lessonPage = ref(0)
let process = ref(0)
let curContent = ref(lessonData[0])
store.commit('changeSubPageName', curContent.value.title)
console.log(curContent.value)

function nextPage() {
    if (lessonPage.value++ < lessonData.length - 1) {
        curContent.value = lessonData[lessonPage.value]
        process.value = lessonPage.value / lessonData.length * 100
        store.commit('changeSubPageName', curContent.value.title)
    } else {
        store.commit('changeSubPageName', '完成✅')
        process.value = 100
    }
}
// 使用 mutation
let increment = () => store.commit('increment')


</script>

<style lang="less" scoped>
</style>