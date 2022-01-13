<template>
    <div class="flowModule"></div>
    <div class="boxModule">
        <Inline :styleObject="styleObjectInline"></Inline>
        <InlineBlock :styleObject="styleObjectIB"></InlineBlock>
        <Text :styleObject="styleObjectText"></Text>
        <Block :styleObject="styleObjectBlock"></Block>
    </div>
    <div class="breakFlowModule"></div>
</template>

<script setup>
import Inline from '@/components/inline.vue'
import InlineBlock from '@/components/inline-block.vue'
import Text from '@/components/text.vue'
import Block from '@/components/block.vue'

</script>

<style scoped lang="less">
.flowModule{
  
}
.boxModule{

}
.breakFlowModule{

}
</style>