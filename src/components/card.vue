 <template>
    <div class="card">
        <div class="card-icon">
            <img :src="'/src/assets/logo.png'" />
        </div>
        <!-- 属性名 -->
        <p class="card-name">{{ attrName }}</p>
        <!-- 属性功能简介 -->
        <div class="card-content">
            <span class="content">{{ cardInfo.brief }}</span>
        </div>
        <!-- 属性值及级别列举 -->
        <div class="card-item-list">
            <div class="list-item" v-for="item in cardInfo.methods" :key="item">
                <span>{{ item.methodName }}</span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getLessonRelateCard } from '@/api/getCardsData.js'
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


</script>

<style scoped lang="less">
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 100%;
    padding: 0 15px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;

    .card-icon {
        display: flex;
        text-align: center;
        justify-content: space-around;
        img {
            height: 60px;
            width: 60px;
        }
    }

    .card-name {
    }

    .card-content {
    }

    .card-item-list {
    }
}
</style>