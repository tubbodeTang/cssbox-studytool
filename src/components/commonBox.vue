<template>
    <div
        class="boxD"
        :style="boxItem.styleObject"
        :class="{ active: store.state.createActiveEleID === boxItem.id }"
    >
        This is a commonBox:{{ boxItem.id }}
        <CommonBox
            v-for="(item) in boxItem.children"
            :key="item"
            :boxItem="item"
            @click.stop="setCurEle(item.id)"
        ></CommonBox>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    boxItem: {
        type: Object,
        default: () => {
            return null
        }
    }
})
const boxItem = ref(props.boxItem)

function setCurEle(params) {
    store.commit('changeCreateActiveEleID', params)
}

</script>

<style scoped lang="less">
.boxD {
    opacity: 0.5;
    &.active {
        opacity: 1;
    }
}
</style>