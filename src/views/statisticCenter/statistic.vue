<template>
    <div class="container">
        <div class="nav-name">学习数据</div>
        <div class="view-card">
            <p class="info">今日已学<span class="number">1</span>分钟</p>
            <div id="statistic-bar"></div>
            <div id="statistic-line" v-if="false"></div>
        </div>
        <div class="view-card">
            <div class="sub-name">学习概览</div>
            <van-row justify="space-around">
                <van-col span="8" v-for="dataItem in staticData" :key="dataItem">
                    <div class="data-item">
                        <span class="number">{{ dataItem.number }}</span>
                        <span class="name">{{ dataItem.name }}</span>
                    </div>
                </van-col>
            </van-row>
        </div>

        <div class="view-card">
            <div class="sub-name">学习记录</div>
            <div class="box-table">
                <span class="box" :class="{ active: boxItem.isActive }" v-for="boxItem in boxData" :key="boxItem">
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { nextTick, onMounted, ref } from 'vue';
import * as echarts from 'echarts'
import { random } from '@ctrl/tinycolor';
const router = useRouter()
const store = useStore()

const topic = ref(store.state.selectedTopic);
console.log(topic)
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const staticData = ref([
    {
        name: "完成关卡",
        number: "3"
    },
    {
        name: "收集卡片",
        number: "5"
    },
    {
        name: "发布创意",
        number: "0"
    },
    {
        name: "参与挑战",
        number: "0"
    },
    {
        name: "参与讨论",
        number: "0"
    },
    {
        name: "获得夸赞",
        number: "1"
    }
])
let boxData = ref([])
for (let i=0;i<366;i++){
    boxData.value.push({
        isActive: Math.random()< 0.5
    })
}
let barChart
onMounted(() => {
    nextTick(() => {
        const chartDom = document.getElementById('statistic-bar')
        if (chartDom) {
            barChart = echarts.init(chartDom)
            barChart.setOption(chartOpt)
        }
    })
})

const chartOpt = {
    color: '#73c0de',
    grid: {
        top: 15,
        bottom: 20
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        name: 'min',
        nameTextStyle: {
            padding: [0, 0, -10, 16]
        },
        type: 'value',
        max: function (value) {
            return value.max + 20;
        }
    },
    series: [
        {
            data: [20, 0, 15, 1, 35, 12, 32],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
}
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


</script>

<style scoped lang="less">
#statistic-bar {
    height: 200px;
}

.container {
    padding: 16px;
    background: #fefefe;

    .nav-name {
        color: #333;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    .view-card {
        min-height: 100px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 30px #f1f1f1;
        margin-bottom: 16px;
        padding: 16px;

        .info {
            color: #666;

            .number {
                color: orange;
                font-size: 25px;
                font-weight: bold;
            }
        }

        .sub-name {
            color: #333;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .data-item {
            margin: 8px 0;
            text-align: center;

            .number {
                display: block;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 4px;
            }

            .name {
                color: #666;
            }
        }

        .box-table {
            .box {
                display: inline-block;
                height: 10px;
                width: 10px;
                background: #eee;
                border: 1px solid #ccc;
                border-radius: 3px;

                &.active {
                    background: orange;
                }
            }
        }
    }
}
</style>