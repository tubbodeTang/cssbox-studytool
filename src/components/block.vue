<template>
    <div class="blockD" :style="styleObject">This is a block division</div>
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
.blockD {
}
</style>