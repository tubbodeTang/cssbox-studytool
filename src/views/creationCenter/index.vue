<template>
    <div>
        <van-tabs v-model:active="active" @click-tab="onClickTab">
            <van-tab title="世界">
                <div class="world-list">
                    <van-row>
                        <!-- 列表 -->
                        <van-col span="12" v-for="item in worldList" :key="item">
                            <div
                                class="work-item"
                                :class="{ 'my-work': item.userId === store.state.userId }"
                            >
                                <div class="work-icon">
                                    <img :src="'/src/assets/logo.png'" />
                                </div>
                                <!-- 作品名 -->
                                <p class="work-name">
                                    <span class="name">{{ item.workName }}</span>
                                    <span class="zan">
                                        <!-- <van-icon name="like" v-if="item.myLike" :color="'red'" /> -->
                                        <span
                                            class="heart"
                                            @click="toggleZan(item)"
                                            :class="{ 'is-active': item.showTransaction, 'choosen': item.myLike }"
                                        ></span>
                                        <span>{{ item.likeNum }}</span>
                                    </span>
                                </p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="我的">
                <div class="my-list">
                    <van-row>
                        <!-- 添加 -->
                        <van-col span="12">
                            <div class="work-item add-btn" @click="toAddPage">+</div>
                        </van-col>
                        <!-- 列表 -->
                        <van-col span="12" v-for="item in myWorkList" :key="item">
                            <div class="work-item">
                                <div class="work-icon">
                                    <img :src="'/src/assets/logo.png'" />
                                </div>
                                <!-- 作品名 -->
                                <p class="work-name">
                                    <span class="name">{{ item.workName }}</span>
                                    <span class="zan" v-if="item.status">
                                        <span class="heart"></span>
                                        <span>{{ item.likeNum }}</span>
                                    </span>
                                </p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getWorldListData, getMyWorkListData } from '@/api/getWorksData.js'
import { ref } from 'vue'
const myWorkList = ref(getMyWorkListData())
const worldListSrc = getWorldListData()
const worldList = ref(worldListSrc.map(item => {
    item.showTransaction = false
    return item
}))

const router = useRouter()
const store = useStore()
function toAddPage() {
    router.push({
        name: 'AddCreation'
    })
    store.commit('saveLastPageName', '创意区')
}
function toggleZan(item) {
    if (item.myLike) {
        item.myLike = false
        item.likeNum--
    } else {
        item.showTransaction = true
        setTimeout(() => {
            item.myLike = true
            item.likeNum++
            item.showTransaction = false
        }, 250)
    }
}
</script>

<style scoped lang="less">
:deep(.van-col.van-col--12) {
    margin-bottom: 16px;
    &:nth-child(even) {
        .work-item {
            margin-left: 8px;
        }
    }
    &:nth-child(odd) {
        .work-item {
            margin-right: 8px;
        }
    }
}
.world-list,
.my-list {
    height: calc(100vh - 156px);
    padding-top: 16px;
    overflow: auto;
}
.work-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 15px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    margin: 0 16px;

    .work-icon {
        display: flex;
        text-align: center;
        justify-content: space-around;
        img {
            height: 200px;
            width: 100px;
        }
    }
    .work-name {
        display: flex;
        justify-content: space-between;
        margin: 0;
        span {
            display: inline-block;
            vertical-align: middle;
            line-height: 50px;
        }
        .name {
            max-width: 90px;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &.my-work {
        border: 1px solid #d79d46;
    }
}

.add-btn {
    height: 240px;
    border: 1px dashed #ccc;
    font-size: 64px;
    color: #ccc;
}

span.zan {
    .heart {
        width: 40px;
        height: 40px;
        transform: scale(1);
        display: inline-block;
        background: url("@/assets/heart.png") no-repeat;
        background-size: cover;
        background-position: 0 0;
        cursor: pointer;
        -webkit-transition: background-position 1s steps(28);
        transition: background-position 1s steps(28);
        -webkit-transition-duration: 0s;
        transition-duration: 0s;
        margin-right: -10px;
        &.is-active {
            -webkit-transition-duration: 1s;
            transition-duration: 1s;
            background-position: -1120px 0;
        }
        &.choosen {
            background-position: -1120px 0;
        }
    }
}
</style>