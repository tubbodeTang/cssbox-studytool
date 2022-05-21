 <template>
    <div class="container">
        <div class="card-base">
            <div class="card-icon">
                <img :src="'/src/assets/attrIcon/' + cardInfo.attr + '.png'" />
            </div>
            <div>
                <!-- 属性名 -->
                <p class="card-name">{{ cardInfo.attr }}</p>
                <!-- 属性功能简介 -->
                <span class="card-content">{{ cardInfo.brief }}</span>
            </div>
        </div>

        <!-- 属性值及级别列举 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item v-for="(item, index) in cardInfo.methods" :key="item" :name="index">
                <template #title>
                    <div class="list-title">
                        <span class="title">{{ item.methodName }}</span>
                        <span class="rate">
                            <van-rate v-model="item.methodCurRank" readonly allow-half />
                        </span>
                    </div>
                </template>
                <span class="list-content">{{ item.methodBreif }}</span>
            </van-collapse-item>
        </van-collapse>
    </div>

</template>

<script setup>
import { getCardInfo } from '@/api/getCardsData.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
console.log(route.params.attrName)

const cardInfo = getCardInfo(route.params.attrName)
console.log(cardInfo)

const activeNames = ref([0, 1, 2]);


</script>

<style scoped lang="less">
.container {
    padding: 16px;
    background: #f7f7f7;
}

.card-base {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 36px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 30px #f1f1f1;

    .card-icon {
        display: flex;
        text-align: center;
        justify-content: space-around;
        padding: 20px;

        img {
            height: 120px;
            width: 120px;
        }
    }

    .card-name {
        font-size: 24px;
        margin: 20px 0 16px;
    }

    .card-content {}
}

.van-collapse-item {
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px #f1f1f1;
}

:deep(.van-cell--clickable ){
    padding: 20px;
    border-radius: 10px 10px 0px 0px ;
}

:deep(.van-collapse-item__wrapper) {
    border-radius: 0px 0px 10px 10px ;
}

.list-title {
    .title {
        font-size: 20px;
    }

    .rate {
        float: right;
        margin-right: 20px;
    }
}

.list-content {}
</style>