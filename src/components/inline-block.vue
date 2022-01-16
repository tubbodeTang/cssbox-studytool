<template>
    <span class="inlineBlockD" :style="props.styleObj">
        This is an inline-block division
        <!-- <span class="test">1234</span> -->
    </span>
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

<style scoped lang="less">
.inlineBlockD {
  
    // .test {
    //     font-size: 22px;
    //     color: red;
    // }
}
</style>