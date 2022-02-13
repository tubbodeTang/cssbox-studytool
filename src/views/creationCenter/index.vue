<template>
    <div>
        <van-tabs v-model:active="active" @click-tab="onClickTab">
            <van-tab title="我的">
                <div class="my-list">
                    <van-row>
                        <van-col span="12">
                            <div class="add-btn" @click="toAddPage">+</div>
                        </van-col>
                        <van-col span="12" v-for="item in myWorkList" :key="item">
                            <div class="word-item">
                                <div class="work-icon">
                                    <img :src="'/src/assets/logo.png'" />
                                </div>
                                <!-- 属性名 -->
                                <p class="work-name">{{ item.workName }}</p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="世界">
                <div class="world-list"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const myWorkList = [{
    workName: '测试1'
}, {
    workName: '测试2'
}]

const router = useRouter()
const store = useStore()
function toAddPage() {
    router.push({
        name: 'AddCreation'
    })
    store.commit('saveLastPageName', '创意区')
}
</script>

<style scoped lang="less">
.add-btn {
    height: 155px;
    border: 1px dashed #ccc;
    border-radius: 10px;
    padding: 0 15px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    font-size: 64px;
    color: #ccc;
}
.word-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 15px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    .work-icon {
        display: flex;
        text-align: center;
        justify-content: space-around;
        img {
            height: 100px;
            width: 100px;
        }
        .work-name {
        }
    }
}
</style>