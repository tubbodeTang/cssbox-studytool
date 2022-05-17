<template>
    <div class="list-container">
        <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />

        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell-group inset v-for="item in list" :key="item" class="discuss-item" @click="goToDetail(item)">
                <van-cell class="title-info">
                    <template #title>
                        <span class="title">{{ item.title }}</span>
                    </template>
                </van-cell>
                <van-cell class="other-info">
                    <template #title>
                        <div class="info">
                            <van-tag plain color="#666">{{ item.topicLabel }}</van-tag>
                            <div class="update-time">{{ item.updateDate }}</div>
                        </div>
                    </template>
                    <template #value>
                        <div class="avatar" style>
                            <span v-html="item.avatar"></span>
                        </div>
                        <div class="name">
                            <span>{{ item.userName }}</span>
                        </div>
                    </template>
                </van-cell>
            </van-cell-group>
        </van-list>

        <button class="add-btn" @click="goAddTopic">+</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue';
import { getAllCardsName } from '@/api/getCardsData'
import multiavatar from '@multiavatar/multiavatar/esm' // 自动生成头像
import { LoremIpsum } from "lorem-ipsum"; // 自动生成讨论内容

const lorem = new LoremIpsum({ // 生成配置
    sentencesPerParagraph: {
        max: 5,
        min: 1
    },
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const cardsName = getAllCardsName()
const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            list.value.push({
                id: list.value.length + 1,
                title: lorem.generateSentences(1),
                content: lorem.generateParagraphs(Math.floor(Math.random() * 10)),
                zanNum: Math.floor(Math.random() * 10),
                avatar: multiavatar(list.value.length + 1),
                userName: lorem.generateWords(1),
                updateDate: randomDate(startDate, endDate),
                topicLabel: cardsName[i],
                showTransaction: false,
                myLike: false
            });
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);
};
// 生成评论
const generateComment = (topic) => {
    const commentNum = Math.floor(Math.random() * 10)
    topic.comment = []
    for (let i = 0; i < commentNum; i++) {
        topic.comment.push({
            id: i,
            content: lorem.generateWords(Math.floor(Math.random() * 10)) || lorem.generateParagraphs(Math.floor(Math.random() * 10)),
            zanNum: Math.floor(Math.random() * 10),
            avatar: multiavatar(i),
            userName: lorem.generateWords(1),
            updateDate: randomDate(startDate, endDate),
            myLike: false
        });
    }
}
// 开始日期
const startDate = new Date('2021-10-25')
// 截止日期
const endDate = new Date();

const randomDate = (startDate, endDate) => {
    let date = new Date(+startDate + Math.random() * (endDate - startDate));
    let hour = 0 + Math.random() * (23 - 0) | 0;
    let minute = 0 + Math.random() * (59 - 0) | 0;
    let second = 0 + Math.random() * (59 - 0) | 0;
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return dateFtt("yyyy-MM-dd hh:mm:ss", date);
};

function dateFtt(fmt, date) {
    var o = {
        "M+": date.getMonth() + 1,                 //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


const router = useRouter()
const store = useStore()
function goToDetail(topic) {
    router.push({
        name: 'TopicDetail'
    })
    generateComment(topic)
    store.commit('selectTopic', topic)
    store.commit('saveLastPageName', '讨论区')
}
function goAddTopic() {
    router.push({
        name: 'AddTopic'
    })
    store.commit('saveLastPageName', '讨论区')
}
</script>

<style scoped lang="less">
.search {
    position: fixed;
    width: 100vw;
    top: 46px;
    z-index: 100;
}

.add-btn {
    position: fixed;
    bottom: 100px;
    right: 28px;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    background: #73c0de;
    border: none;
    font-size: 36px;
    font-weight: bold;
    color: white;
}

.list-container {
    height: calc(100vh - 96px);
    overflow: auto;
    background-color: #f8f8f8;
    padding-top: 46px;

    .discuss-item {
        margin-top: 16px;

        .title-info {
            padding: 16px;
        }

        .other-info {
            padding: 5px 16px 0 16px;
        }

        .title {
            font-weight: bold;
        }

        .info {
            .update-time {
                font-size: 12px;
                color: #666;
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

        .name {
            span {
                display: inline-block;
                font-size: 12px;
                color: #666;
                position: relative;
                top: -10px;
            }
        }
    }
}
</style>