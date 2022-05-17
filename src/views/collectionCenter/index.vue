<template>
    <div class="card-list">
        <van-row>
            <van-col span="12" v-for="item in cardList" :key="item">
                <div class="card-item" @click="toCardDetail(item)" :class="{ inactive: !item.state }">
                    <div class="card-icon">
                        <img :src="'/src/assets/attrIcon/' + item.attr + '.png'" />
                    </div>

                    <p class="card-name">{{ item.name }}</p>
                    <div class="card-process">
                        <span class="process-bar" :style="{ width: item.curRankNum / item.rankNum * 100 + '%' }"></span>
                        <!-- {{ item.curRankNum / item.rankNum }} -->
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script setup>
import { getAllCardsData } from '@/api/getCardsData';
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const allCardList = getAllCardsData()
const allCardsName = getAllCardsName()

function getAllCardsName() {
    return store.state.activeCardList.map(item => item.attr)
}

const cardList = computed(() => {
    const newList = []
    allCardList.forEach(card => {
        let cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.state = allCardsName.indexOf(card.attr) > -1 ?
            true : false
        newList.push(cardCopy)
    });
    return newList
})
const router = useRouter()
function toCardDetail(card) {
    router.push({
        name: 'CardPage',
        params: { attrName: card.attr }
    })
    store.commit('saveLastPageName', '收集页')
    // store.commit('changeActiveModule', )
}
</script>

<style lang="less" scoped>
:deep(.van-col.van-col--12) {
    margin-bottom: 16px;

    &:nth-child(even) {
        .card-item {
            margin-left: 8px;
        }
    }

    &:nth-child(odd) {
        .card-item {
            margin-right: 8px;
        }
    }
}

.card-list {
    height: calc(100vh - 96px);
    overflow: auto;
    padding-top: 16px;
    background: #f7f7f7;

    .card-item {
        box-shadow: 0px 0px 10px #f1f1f1;
        background: #fff;
        border-radius: 10px;
        height: 180px;
        margin: 0 16px;
        padding: 0 15px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;

        &.inactive {

            .card-icon,
            .card-name,
            .card-process {
                opacity: 0.4;
            }
        }

        .card-icon {
            display: flex;
            text-align: center;
            justify-content: space-around;

            img {
                height: 100px;
                width: 100px;
            }
        }

        .card-name {
            margin: 2px 0;
            font-size: 14px;
        }

        .card-process {
            border-radius: 10px;
            background-color: #dfdfdf;
            margin: 0 15px;
            height: 12px;
            text-align: left;
            box-shadow: 0px 0px 4px 0px inset #ccc;

            .process-bar {
                display: inline-block;
                height: 12px;
                position: relative;
                top: -4px;
                border-radius: 10px;
                background: #acacf7;
            }
        }
    }
}
</style>