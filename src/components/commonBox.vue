<template>
    <div
        class="boxD"
        :style="styleObject"
        :class="{ active: isActive }"
    >This is a commonBox:{{ index }}</div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
    styleObj: {
        type: Object,
        default: () => {
            return {
                width: '100px',
                height: '100px',
                backgroundColor: '#ccc'
            }
        }
    },
    isActive: {
        type: Boolean,
        default: () => {
            return false
        }
    },
    index: {
        type: Number,
        default: () => {
            return null
        }
    }
})
const styleObject = ref(props.styleObj)
console.log(props.styleObj)
</script>

<style scoped lang="less">
.boxD {
    opacity: 0.5;
    &.active {
        opacity: 1;
    }
}
</style>