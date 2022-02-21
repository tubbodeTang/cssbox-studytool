<template>
    <div>
        <div class="compete-content">
            <p class="title">{{ competeData.competeName }}</p>
            <div class="content">
                <p>{{ competeData.content }}</p>
                <img :src="competeData.imgSrc" />
            </div>
        </div>
        <div class="bottom-container">
            <div class="data">
                <span class="join-num">已有{{ competeData.joinNum }}人参加</span>
                <div class="time-num">
                    <!-- <span>还有：</span> -->
                    <van-count-down :time="time" class="count-down">
                        <template #default="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                    </van-count-down>
                    <span>结束</span>
                </div>
            </div>
            <div class="fight">
                <van-button class="fight-btn" round type="primary" @click="toFight">参与挑战</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from "vue";
import { getCompeteItemData } from '@/api/getCompeteData.js'

const time = ref(30 * 60 * 60 * 1000);
const competeData = getCompeteItemData()



const router = useRouter()
const store = useStore()

function toFight() {
    router.push({
        name: 'AddCreation'
    })
    // store.commit('saveLastPageName', '创意区')
}
</script>

<style lang="less" scoped>
.compete-content {
    padding: 5px 16px 0 16px;
    .title {
        text-align: center;
    }
    .content {
        color: #333;
    }
}
.bottom-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    bottom: 90px;
    .data {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        padding: 5px 16px 36px;

        .join-num {
        }
        .time-num {
            .count-down {
                display: inline-block;
                .colon {
                    display: inline-block;
                    margin: 0 4px;
                    color: #ee0a24;
                }
                .block {
                    display: inline-block;
                    width: 15px;
                    color: #ee0a24;
                    font-size: 12px;
                    text-align: center;
                    // background-color: #ee0a24;
                }
            }
        }
    }
    .fight {
        display: flex;
        width: 100%;
        justify-content: center;
        .fight-btn {
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }
    }
}
</style>

