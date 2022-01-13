<template>
    <span class="inlineBlockD">
        This is an inline-block division
        <span class="test">1234</span>
    </span>
</template>

<script setup>

</script>

<style scoped lang="less">
.inlineBlockD {
    display: inline-block;
    border: 1px solid #964b4b;
    .test {
        font-size: 22px;
        color: red;
    }
}
</style>