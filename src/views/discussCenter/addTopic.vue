<template>
    <div class="container">
        <p class="title">发表评论</p>
        <div class="input-card">
            <van-field v-model="message" rows="2" :label-width="0" autosize maxlength="50" type="textarea"
                placeholder="请输入标题" show-word-limit />
            <div class="van-hairline--bottom"></div>
            <van-field v-model="message" rows="20" :label-width="0" autosize maxlength="500" type="textarea"
                placeholder="请输入留言" show-word-limit />
        </div>

        <van-action-bar>
            <van-action-bar-icon icon="smile-o" />
            <van-action-bar-icon icon="photo-o" />
            <van-action-bar-button color="#ff962a" text="发布" @click="goAddTopic" />
        </van-action-bar>
    </div>


    <!-- <button class="add-btn" @click="goAddTopic">
        <van-icon name="passed" />
    </button> -->

</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { nextTick, onMounted, ref } from 'vue';
const router = useRouter()
const store = useStore()

let message = ref['']


</script>

<style scoped lang="less">
.van-action-bar {
    z-index: 5;
}

.container {
    padding: 16px;
    background: #f7f7f7;

    .title {
        padding-left: 5px;
        color: #666;
        font-weight: bold;
        font-size: 18px;
    }

    .input-card {
        min-height: 500px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 30px #f1f1f1;
        margin-bottom: 16px;
        padding: 16px 0;
    }

    .add-btn {
        position: fixed;
        bottom: 100px;
        right: 16px;
        border-radius: 100%;
        width: 70px;
        height: 70px;
        background: #73c0de;
        border: none;
        font-size: 42px;
        font-weight: bold;
        color: white;
    }
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