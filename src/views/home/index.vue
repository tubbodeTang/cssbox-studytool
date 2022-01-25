<template>
    <van-nav-bar :title="pageTitle" safe-area-inset-top>
        <template #left>
            <van-icon name="arrow-left" v-if="showBackBtn" @click="goBack" />
            <van-icon name="smile-o" @click="showPopup" />
        </template>
        <template #right>
            <van-icon name="diamond" @click="toCardList" />
        </template>
    </van-nav-bar>
    <div class="container">
        <!-- <StudyListVue></StudyListVue> -->
        <router-view></router-view>

        <van-popup
            :show="show"
            position="left"
            :style="{
                height: '100%',
                width: '100px'
            }"
            :close-on-click-overlay="true"
        >
            <van-sidebar v-model="active">
                <van-sidebar-item title="标签名称" dot />
                <van-sidebar-item title="标签名称" badge="5" />
                <van-sidebar-item title="标签名称" badge="20" />
            </van-sidebar>
        </van-popup>
    </div>
    <van-tabbar route safe-area-inset-bottom @change="onChange">
        <van-tabbar-item replace to="/study" icon="home-o" name="学习中心">学习中心</van-tabbar-item>
        <van-tabbar-item replace to="/discussCenter" icon="friends-o" name="讨论区" badge="5">讨论区</van-tabbar-item>
        <van-tabbar-item replace to="/creationCenter" icon="search" name="创意区">创意区</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>

import { computed, ref } from 'vue'
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

const show = ref(false);
const showPopup = () => {
    show.value = true;
};
</script>

<style lang="less">
.container {
    height: calc(100vh - 96px);
}
</style>