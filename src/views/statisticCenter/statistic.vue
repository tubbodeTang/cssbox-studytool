<template>
    <div class="container">
        <div class="nav-name">学习数据</div>
        <div class="view-card">
          
        </div>
        <div class="nav-name">评论</div>
        <div class="view-card">
          
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue';
const router = useRouter()
const store = useStore()

const topic = ref(store.state.selectedTopic);
console.log(topic)
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
        list.value = topic.value.comment.map(item => {
            item.showTransaction = false
            return item
        })
        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= topic.value.comment.length) {
            finished.value = true;
        }
    }, 1000);
};


</script>

<style scoped lang="less">

</style>