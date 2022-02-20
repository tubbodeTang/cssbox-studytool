<template>
    <div class="container">
        <div class="hoster">
            <van-cell-group class="discuss-item">
                <van-cell>
                    <template #title>
                        <div>
                            <span class="title">{{ topic.title }}</span>
                        </div>
                        <div>
                            <p>{{ topic.content }}</p>
                        </div>
                    </template>
                </van-cell>
                <van-cell class="other-info">
                    <template #title>
                        <div class="info">
                            <div class="avatar" style>
                                <span v-html="topic.avatar"></span>
                            </div>
                            <div class="update-time">{{ topic.updateDate }}</div>
                        </div>
                    </template>
                    <template #value>
                        <span class="zan">
                            <span
                                class="heart"
                                @click="toggleZan(topic)"
                                :class="{ 'is-active': topic.showTransaction, 'choosen': topic.myLike }"
                            ></span>
                            <span>{{ topic.zanNum }}</span>
                        </span>
                    </template>
                </van-cell>
            </van-cell-group>
        </div>
        <div class="nav-name">评论</div>
        <div class="list-container">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-cell-group inset v-for="item in list" :key="item" class="discuss-item">
                    <van-cell class="title-info">
                        <template #title>
                            <span class="comment">{{ item.content }}</span>
                        </template>
                    </van-cell>
                    <van-cell class="other-info">
                        <template #title>
                            <div class="info">
                                <div class="avatar" style>
                                    <span v-html="item.avatar"></span>
                                </div>
                                <div class="update-time">{{ item.updateDate }}</div>
                            </div>
                        </template>
                        <template #value>
                            <span class="zan">
                                <span
                                    class="heart"
                                    @click="toggleZan(item)"
                                    :class="{ 'is-active': item.showTransaction, 'choosen': item.myLike }"
                                ></span>
                                <span>{{ item.zanNum }}</span>
                            </span>
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-list>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue';
const router = useRouter()
const store = useStore()

const topic = ref(store.state.selectedTopic);
console.log(topic)
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
        list.value = topic.value.comment.map(item => {
            item.showTransaction = false
            return item
        })
        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= topic.value.comment.length) {
            finished.value = true;
        }
    }, 1000);
};


function toggleZan(item) {
    if (item.myLike) {
        item.myLike = false
        item.zanNum--
    } else {
        item.showTransaction = true
        setTimeout(() => {
            item.myLike = true
            item.zanNum++
            item.showTransaction = false
        }, 250)
    }
}
</script>

<style scoped lang="less">
.search {
    position: fixed;
    width: 100vw;
    top: 46px;
    z-index: 100;
}
.container {
    height: calc(100vh - 96px);
    overflow: auto;
    background-color: #f8f8f8;
}
.nav-name {
    padding: 16px;
    color: #333;
    font-size: 14px;
        padding-bottom: 0;
}
.list-container,
.hoster {
    .discuss-item {
        .title-info {
            padding: 16px;
        }
        .other-info {
            padding: 5px 16px 0 16px;
        }
        margin-top: 16px;
        .title {
            font-weight: bold;
        }
        .info {
            display: flex;
            padding-top: 5px;

            .update-time {
                width: 80px;
                font-size: 12px;
                color: #666;
                line-height: 14px;
                margin-left: 10px;
            }
        }
        .avatar {
            span {
                display: inline-block;
                width: 25px;
                height: 25px;
                background: #ccc;
                border-radius: 50px;
            }
        }
    }
}

.hoster {
    .discuss-item {
        margin-top: 0;
    }
}
.zan {
    span {
        vertical-align: middle;
    }
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
        vertical-align: middle;
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