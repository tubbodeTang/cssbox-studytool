<template>
    <van-nav-bar :title="pageTitle" safe-area-inset-top>
        <template #left>
            <van-icon name="arrow-left" v-if="showBackBtn" @click="goBack" />
            <van-icon class="big-icon" name="smile-o" @click="showPopup" v-if="isFirstPage" />
        </template>
        <template #right>
            <van-icon class="big-icon yellow" name="diamond" @click="toCardList" />
        </template>
    </van-nav-bar>
    <div class="container">
        <router-view></router-view>

        <van-popup
            :show="show"
            position="left"
            :style="{
                height: '100%',
                width: '150px'
            }"
            @click-overlay="closeSideBar"
        >
            <div class="user-info">
                <div class="avatar">
                    <span v-html="avatar"></span>
                </div>
                <div class="user-name">txb406</div>
                <div class="achieve"></div>
            </div>
            <van-sidebar v-model="active">
                <div class="group">
                    <van-sidebar-item title="数据统计" dot @click="goStatistic"/>
                    <van-sidebar-item title="新消息" badge="5" />
                    <van-sidebar-item title="内容收藏" />
                </div>
                <div class="group">
                    <van-sidebar-item title="重置学习记录" />
                    <van-sidebar-item title="学习提醒" />
                    <van-sidebar-item title="夜间模式" />
                </div>
            </van-sidebar>
        </van-popup>
    </div>
    <van-tabbar route safe-area-inset-bottom @change="onChange">
        <van-tabbar-item replace to="/study" icon="home-o" name="学习中心">学习中心</van-tabbar-item>
        <van-tabbar-item replace to="/creationCenter" icon="flower-o" name="创意区">创意区</van-tabbar-item>
        <van-tabbar-item replace to="/discussCenter" icon="friends-o" name="讨论区" badge="5">讨论区</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import multiavatar from '@multiavatar/multiavatar/esm' // 自动生成头像

let avatar = ref(multiavatar('txb406'))

const store = useStore()

// 在 computed 函数中访问 state
let pageTitle = computed(() => store.state.pageTitle)
let showBackBtn = computed(() => store.state.showBackBtn)
const route = useRoute()
let isFirstPage = computed(() => {
    console.log(route.fullPath)
    return route.fullPath === '/study/studyList' ||
        route.fullPath === '/creationCenter/creation' ||
        route.fullPath === '/discussCenter/discuss'
})

const router = useRouter()
function goBack() {
    router.go(-1)
    store.commit('popOldPageName')
    store.commit('createEleIDClear') // 退出创作页组件编号回归1
}
function toCardList() {
    router.push({
        name: 'CardList'
    })
    store.commit('changePageName', "收集页")
}

function goStatistic(){
    show.value = false;
     router.push({
        name: 'Statistic'
    })
    store.commit('changePageName', "学习统计")
}

const onChange = (index) => store.commit('changePageName', index);
const closeSideBar = (index) => {
    show.value = false;
};

const show = ref(false);
const showPopup = () => {
    show.value = true;
};
</script>

<style lang="less">
.big-icon {
    font-size: 20px !important;
    &.yellow {
        color: #c09918;
    }
}
.container {
    height: calc(100vh - 96px);
    overflow: hidden;

    .user-info {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;
        .avatar {
            span {
                width: 100px;
                height: 100px;
                display: inline-block;
            }
        }
        .achieve {
            margin: 10px;
            border-bottom: 1px solid #efefef;
        }
        .achieve {
        }
    }
    .van-sidebar {
        margin-top: 10px;
        width: 100%;
        .group {
            margin-bottom: 20px;
        }
    }
}
</style>