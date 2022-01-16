<template>
    <div class="module flowModule" @click="toLearnPage('flow')">你注意到文字排布的方向了吗？</div>

    <div class="module boxModule">
        这些就是各种各样的元素，你可以点击看看究竟有什么不同
        <Block :styleObj="styleObjectBlock" @click="toLearnPage('box_block')"></Block>
        <Inline :styleObj="styleObjectInline" @click="toLearnPage('box_inline')"></Inline>
        <!-- <Text :styleObject="styleObjectText"></Text> -->
        <InlineBlock :styleObj="styleObjectIB" @click="toLearnPage('box_inline_block')"></InlineBlock>
    </div>

    <div class="module breakFlowModule">流也不是绝对的</div>
</template>

<script setup>
import Inline from '@/components/inline.vue'
import InlineBlock from '@/components/inline-block.vue'
import Text from '@/components/text.vue'
import Block from '@/components/block.vue'
import { getColorByType } from '@/utils/getCommon'

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter} from 'vue-router'

const store = useStore()

const styleObjectBlock = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: '5px',
    backgroundColor: getColorByType('block', 'bgColor')
}

const styleObjectInline = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#207227'
}

const styleObjectIB = {
    display: 'inline-block',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#964b4b'
}

const router = useRouter()
function toLearnPage(type) {
     router.push({
        name: 'StudyPage'
      })
    store.commit('changeActiveModule', type)

}
</script>

<style scoped lang="less">
.module {
    border: 1px solid #efefef;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
.flowModule {
}
.boxModule {
}
.breakFlowModule {
}
</style>