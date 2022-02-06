<template>
    <div>
        <div id="app-content" v-hammer:swipe.horizontal="test"></div>
        {{ msg }}
        <div
            class="content"
            v-hammer:press="test2"
            v-hammer:tap="test"
            v-hammer:pan.left="test"
            v-hammer:panstart="test2"
            v-hammer:panend="test2"
        ></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let msg = ref('Welcome to Your Vue.js App')
function test(e) {
    console.log(e);
}
function test2(e) {
    console.log('aaaa');
}
</script>

<style scoped>
.content {
    width: 100px;
    height: 200px;
    background-color: red;
}
</style>