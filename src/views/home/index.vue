<template>
    <van-nav-bar
        :title="pageTitle"
        :left-arrow="showBackBtn"
        @click-left="goBack"
        safe-area-inset-top
    >
        <template #right>
            <van-icon name="diamond" @click="toCardList" />
        </template>
    </van-nav-bar>
    <div class="container">
        <!-- <StudyListVue></StudyListVue> -->
        <router-view></router-view>
    </div>
    <van-tabbar route safe-area-inset-bottom  @change="onChange">
        <van-tabbar-item replace to="/study" icon="home-o" name="学习中心">学习中心</van-tabbar-item>
        <van-tabbar-item replace to="/discussCenter" icon="friends-o" name="讨论区" badge="5">讨论区</van-tabbar-item>
        <van-tabbar-item replace to="/creationCenter" icon="search" name="创意区">创意区</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


const store = useStore()

// 在 computed 函数中访问 state
let pageTitle = computed(() => store.state.pageTitle)
let showBackBtn = computed(() => store.state.showBackBtn)

const router = useRouter()
function goBack() {
    router.go(-1)
    store.commit('popOldPageName')

}
function toCardList() {
    router.push({
        name: 'CardList'
    })
    store.commit('changePageName', "收集页")
}
const onChange = (index) => store.commit('changePageName', index);
</script>

<style lang="less">
.container {
    height: calc(100vh - 96px);
}
</style>