<template>
    <div class="card-list">
        <van-row>
            <van-col span="8" v-for="item in CardList" :key="item">
                <div class="card-item" >
                    <img class="card-icon" :src="'src/assets/logo.png'" />
                    <p class="card-name">{{ item.name }}</p>
                    <div class="card-process">
                        <span class="process-bar">{{item.curRankNum/item.rankNum}}</span>
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script setup>
import { getAllCardsData } from '@/api/getCardsData';
const CardList = getAllCardsData()

</script>

<style lang="less" scoped>
.card-list {
    .card-item {
        width: 100px;
        height: 100px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: space-around;

        .card-icon {
            width: 40px;
            height: 40px;
        }
    }
}
</style>