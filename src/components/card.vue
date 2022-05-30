 <template>
    <div class="card">
        <div>
            <div class="card-icon">
                <img :src="'/src/assets/attrIcon/' + cardInfo.attr + '.png'" />
            </div>
            <!-- 属性名 -->
            <p class="card-name">{{ attrName }}</p>
        </div>

        <!-- 属性功能简介 -->
        <div class="card-content">
            <span class="content">{{ cardInfo.brief }}</span>
        </div>
        <!-- 属性值及级别列举 -->
        <div class="card-item-list">
            <div class="list-item" v-for="item in cardInfo.methods" :key="item">
                <span class="title">{{ item.methodName }}</span>
                <span class="content">
                    {{ item.methodBreif }}
                    <van-rate v-model="value" readonly allow-half />
                </span>
            </div>
        </div>

        <van-button class="check-btn" round type="primary" @click="saveCard">确定</van-button>
    </div>
</template>

<script setup>
import { getLessonRelateCard } from '@/api/getCardsData.js'
import { useStore } from 'vuex'
import { countCardProgress } from '@/utils/getCommon.js'

let props = defineProps({
    attrName: {
        type: String,
        default: () => {
            return ""
        }
    }
})
const cardInfo = getLessonRelateCard(props.attrName)
console.log(cardInfo)

const store = useStore()
const emit = defineEmits(['saved'])
function saveCard() {
    //TODO：不一定是card积累，有可能是技能积累
    const cardRank = countCardProgress(cardInfo, store.state.activeCardList)
    if (cardRank > 0) {
        store.commit('updateCardProgress', { card: cardInfo, cardRank: cardRank + 1 })
    } else {
        cardInfo.curRankNum = 1 // 从一级开始记录
        store.commit('pushActiveCard', cardInfo)
    }
    emit('saved')
}
</script>

<style scoped lang="less">
.card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    // height: 100%;
    height: 60vh;
    width: calc(100vw - 60px);
    position: relative;
    top: calc((40vh) / 2);
    left: 30px;

    padding: 0 15px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;

    animation-name: example;
    animation-duration: 1s;

    // top: 20%;
    // left: 8%;
    .card-icon {
        display: flex;
        text-align: center;
        justify-content: space-around;

        img {
            height: 150px;
            width: 150px;
        }

    }

    .card-name {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
    }

    .card-content {}

    .card-item-list {
        padding: 0 10px;

        .list-item {
            display: flex;
            justify-content: space-between;

            .title {
                text-align: left;
                width: 100px;
                white-space: nowrap;
            }

            .content {
                text-align: right;
            }
        }
    }

    .check-btn {
        padding: 0 20px;
        font-size: 18px;
        background: #73c0de;
        border-color: #73c0de;
    }
}

/* 动画代码 */
@keyframes example {
    0% {
        transform: rotateY(0deg);
    }

    25% {
        transform: rotateY(130deg);
    }

    50% {
        transform: rotateY(260deg);
    }

    75% {
        transform: rotateY(300deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}
</style>