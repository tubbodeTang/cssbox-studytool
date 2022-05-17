<template>
    <div class="container">
        <div class="input-card">
            <van-field v-model="message" rows="2" :label-width="0" autosize maxlength="50" type="textarea"
                placeholder="请输入标题" show-word-limit />
            <div class="van-hairline--bottom"></div>
            <van-field v-model="message" rows="20" :label-width="0" autosize maxlength="500" type="textarea"
                placeholder="请输入留言" show-word-limit />
        </div>
    </div>

    <button class="add-btn" @click="goAddTopic"><van-icon name="passed" /></button>

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
.container {
    padding: 16px;
    background: #f7f7f7;

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
</style>