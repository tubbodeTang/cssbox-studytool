<template>
    <div class="browser-head">
        <img src="@/assets/browserBg.png" />
    </div>
    <div class="module-list" ref="container">
        <div class="module flowModule">
            <p>
                <van-icon name="flag-o" />流与布局
            </p>
            <div class="show-stage">
                <span class="js-scroll fade-in" :style="{ animationDuration: `${index / 2}s` }"
                    v-for="(item, index) in text" :ref="el => { if (el) texts.push(el) }" :key="item">
                    <Text class="test" :text="item" :styleObj="styleObjectBlock"></Text>
                </span>
            </div>
            <van-list class="lesson-list">
                <van-cell @click="toLearnPage('flow', lesson.title)" v-for="lesson in getLessonList('flow')"
                    :key="lesson" :title="lesson.title" :class="{ active: lesson.canLearn }" />
            </van-list>
        </div>

        <div class="module boxModule">
            <p>
                <van-icon name="flag-o" />块级排列
            </p>
            <div class="show-stage">
                <div class="js-scroll fade-in-bottom" v-for="item in 4" :ref="el => { if (el) blocks.push(el) }"
                    :key="item">
                    <Block class="test" :styleObj="styleObjectBlock"></Block>
                </div>
            </div>
            <van-list class="lesson-list">
                <van-cell @click="toLearnPage('box_block', lesson.title)" v-for="lesson in getLessonList('box_block')"
                    :key="lesson" :title="lesson.title" :class="{ active: lesson.canLearn }">
                    <template #right-icon>
                        <van-icon name="lock" class="lock-icon" />
                    </template>
                </van-cell>
            </van-list>
        </div>
        <div class="module inlineModule">
            <p>
                <van-icon name="flag-o" />行级排列
            </p>
            <div class="show-stage">
                <span class="js-scroll slide-right" v-for="item in 4" :ref="el => { if (el) inlines.push(el) }"
                    :key="item">
                    <Inline class="test" :styleObj="styleObjectInline"></Inline>
                </span>
            </div>
            <van-list class="lesson-list">
                <van-cell @click="toLearnPage('box_inline', lesson.title)" v-for="lesson in getLessonList('box_inline')"
                    :key="lesson" :title="lesson.title" :class="{ active: lesson.canLearn }">
                    <template #right-icon>
                        <van-icon name="lock" class="lock-icon" />
                    </template>
                </van-cell>
            </van-list>
        </div>
        <div class="module inlineboxModule" @click="toListPage('box_inline_block')">
            <p>
                <van-icon name="flag-o" />行内块级排列
            </p>
            <div class="show-stage">
                <span class="js-scroll slide-right" v-for="item in 4" :ref="el => { if (el) inlines.push(el) }"
                    :key="item">
                    <InlineBlock :styleObj="styleObjectIB"></InlineBlock>
                </span>
            </div>
        </div>
        <div class="module breakFlowModule">
            <p>
                <van-icon name="flag-o" />浮动
            </p>
            <div class="show-stage"></div>
        </div>
        <div class="module breakFlowModule">
            <p>
                <van-icon name="flag-o" />定位
            </p>
            <div class="show-stage"></div>
        </div>
        <div class="module breakFlowModule">
            <p>
                <van-icon name="flag-o" />层叠
            </p>
            <div class="show-stage"></div>
        </div>
    </div>
</template>

<script setup>
import Inline from '@/components/inline.vue'
import InlineBlock from '@/components/inline-block.vue'
import Text from '@/components/text.vue'
import Block from '@/components/block.vue'
import { getColorByType } from '@/utils/getCommon'
import { getLessonList } from '@/api/getLessonData';

import { computed, ref, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()

const styleObjectBlock = {
    color: '#999',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: getColorByType('block', 'bgColor'),
    borderRadius: '5px',
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

function toLearnPage(module, lessonName) {
    router.push({
        name: 'StudyPage'
    })
    store.commit('changeActiveModule', module)
    store.commit('changeActiveLesson', lessonName)

}


const text = '你注意到文字排布的方向了吗？和写字的方向是一样的。'

const texts = ref([])
const blocks = ref([])
const inlines = ref([])

const scrollElements = computed(() => {
    return blocks.value.concat(inlines.value).concat(texts.value)
})

scrollElements.value.forEach((el) => {
    el.style.opacity = 0
})

const elementInView = (el, percentageScroll = 10) => {
    const elementTop = el.getBoundingClientRect().top
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100)
    )
}
const displayScrollElement = (element) => {
    element.classList.add('scrolled')
}
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.value.forEach((el) => {
        elementInView(el, 50) ?
            displayScrollElement(el) : hideScrollElement(el);
    })
}

let throttleTimer = false

const throttle = (callback, time) => {
    if (throttleTimer) return
    // 这里标记一下，以使函数不会重复执行
    throttleTimer = true
    setTimeout(() => {
        // 到了指定的时间，调用传入的回调函数
        callback()
        throttleTimer = false
    }, time)
}
const container = ref(null)

onMounted(() => {
    // DOM 元素将在初始渲染后分配给 ref
    nextTick(() => {
        container.value.addEventListener('scroll', () => {
            throttle(handleScrollAnimation, 250)
        })
    });
})

</script>

<style scoped lang="less">
.browser-head {
    position: fixed;
    top: 46px;

    img {
        width: 100%;
    }
}

.module-list {
    height: calc(100% - 75px);
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 70px;
    background-color: #f7f7f7;
}

.module {
    // height: calc(100% - 60px);
    // border: 1px solid #efefef;

    background-color: #fff;
    box-shadow: 0px 0px 30px #f1f1f1;
    border-radius: 10px;
    padding: 16px;
    margin: 16px;



    p {
        color: #333;
        font-size: 18px;
        margin-top: 0;
        font-weight: bold;

        .van-icon {
            font-size: 32px;
            margin-right: 6px;
            color: #ffb7b7;
            font-weight: bold;
        }
    }

    .show-stage {
        border: 6px #efefef;
        border-style: dotted;
        border-radius: 10px;
        padding: 5px;
        min-height: 100px;
    }

    .lesson-list {
        margin-top: 16px;

        .van-cell {
            padding: 15px 10px;
            color: #ccc;
            box-shadow: 0px 0px 30px #f1f1f1;
            // border: 1px solid #ccc;
            margin: 10px 0;
            border-radius: 10px;
            background: #fff;

            &.active {
                color: #333;

                &:nth-child(even) {
                    background: #73c0de;
                    color: #fff;
                }

                &:nth-child(odd) {
                    background: #ededed;
                }
            }

            // .lock-icon {
            // }
        }
    }
}

.flowModule {}

.boxModule {
    // perspective: 1px;
    // transform-style: preserve-3d;
    // .test {
    //     // &:nth-child(1) {
    //     //     transform: translateZ(-0.5px) scale(1);
    //     // }
    //     &:nth-child(2) {
    //         transform: translate3D(0, -5px, -0.1px) scale(1.2);
    //     }
    //     &:nth-child(3) {
    //         transform: translate3D(0, 5px, -0.2px) scale(1.4);
    //     }
    //     &:nth-child(4) {
    //         transform: translate3D(0, 15px, -0.3px) scale(1.6);
    //     }
    // }
}

.inlineModule {}

.breakFlowModule {}

.js-scroll {
    opacity: 0;
    transition: opacity 500ms;
    position: relative;
}

.js-scroll.scrolled {
    opacity: 1;
}

.scrolled.fade-in {
    // animation: fade-in 1s ease-in-out both;
    animation-name: fade-in;
    animation-fill-mode: both;
}

.scrolled.fade-in-bottom {
    animation: fade-in-bottom 1s ease-in-out both;
}

.scrolled.slide-left {
    animation: slide-in-left 1s ease-in-out both;
}

.scrolled.slide-right {
    animation: slide-in-right 1s ease-in-out both;
}

@keyframes slide-in-left {
    0% {
        // transform: translateX(-100px);
        left: -100px;
        opacity: 0;
    }

    100% {
        // transform: translateX(0);
        left: 0;
        opacity: 1;
    }
}

@keyframes slide-in-right {
    0% {
        // transform: translateX(100px);
        right: -100px;
        opacity: 0;
    }

    100% {
        // transform: translateX(0);
        right: 0;
        opacity: 1;
    }
}

@keyframes fade-in-bottom {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>