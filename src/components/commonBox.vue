<template>
    <div class="boxD" :style="styleObject">This is a commonBox:{{ index }}</div>
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

<style scoped>
.boxD {
}
</style>