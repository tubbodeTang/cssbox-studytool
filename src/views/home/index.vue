<template>
    <van-nav-bar title="标题" />
    <div class="container">
        <!-- <StudyListVue></StudyListVue> -->
        <router-view></router-view>

    </div>
    <van-tabbar route safe-area-inset-bottom>
        <van-tabbar-item replace to="/study" icon="home-o">学习中心</van-tabbar-item>
        <van-tabbar-item replace to="/discussCenter" icon="friends-o" badge="5">讨论区</van-tabbar-item>
        <van-tabbar-item replace to="/discuss" icon="search">创意区</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>

</script>

<style lang="less">
.container {
    height: calc(100vh - 96px);
}
</style>