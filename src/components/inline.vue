<template>
    <span class="inlineD" :style="styleObject">This is an inline division</span>
</template>

<script setup>
import { ref } from '@vue/reactivity';
const props = defineProps({
    styleObj: {
        type: Object,
        default: () => {
            return {}
        }
    }
})
const styleObject = ref(props.styleObj)
</script>

<style scoped>
.inlineD {
}
</style>