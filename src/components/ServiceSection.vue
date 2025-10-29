<template>
    <section class="service-section py-20 overflow-clip">
        <div class="container mx-auto px-4 ">
            <div class="flex flex-col lg:flex-row lg:gap-8 lg:justify-between ">
                <div class="col " :class="{'order-last': flip}">
                    <div class="content">
                        <motion.div class="title mb-2" :initial="{opacity: 0, y: 80 }" :whileInView="{opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5} }">
                            {{title}}
                        </motion.div>
                        <ul class="tech-list my-12">
                            <MotionConfig :transition="{ duration: 1, delay: 0.5 }">
                                <motion.li v-for="(li, index) in list" :key="index" :initial="{opacity: 0, y: '10%'}" :whileInView="{opacity: 1, y: 0}" class="flex justify-between">{{li.text}} </motion.li>
                            </MotionConfig>
                        </ul>
                        <motion.div :initial="{opacity: 0, y: '10%'}" :whileInView="{opacity: 1, y: 0, transition: { duration: 0.5, delay: 1}}">
                            <router-link :to="link.path"  class="tech-link inline-flex gap-4">{{link.text}} <img src="/icons/arrow-right-blue.svg" alt=""></router-link>
                        </motion.div>
                    </div>
                </div>
                <div class="col lg:w-1/2" :class="{'order-first': flip}">
                    <motion.figure :initial="{y: '20%', opacity: 0}" :whileInView="{opacity: 1, y: 0, transition: {ease: 'easeOut', duration: 1, delay: 0.75}}" class="max-w-[660px] overflow-clip ">
                        <img :src="bUrl+image" class="max-w-full" alt="">
                    </motion.figure>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { motion, MotionConfig } from "motion-v"
import { gsap } from "gsap";

const props = defineProps({
    title: { type: String, default: "Technology Connection" },
    image: { type: String },
    list: {
        type: Array,
        default: () => {
            return [{ text: "item1" }]
        }
    },
    link: {
        type: Object,
        default: () => {
            return { text: "Explore", path: "/service" }
        }
    },
    flip: false
})

let bUrl = ref("")

onMounted(() => {
    bUrl.value = localStorage.getItem("base_url")
})
</script>
<style lang="scss" scoped>
.service-section {
    color: $rich-black;

    .content {
        max-width: 400px;
    }

    .title {
        font-size: 40px;
        font-weight: 100;
        line-height: 60px;
        letter-spacing: -1.2px;
    }

    .tech-list {
        color: var(--Rich-Black, #121212);
        font-size: 20px;
        font-weight: 600;
        line-height: 80px;
        letter-spacing: -0.6px;

        li {

            border-bottom: 1px solid #D7D7D7;

            &::after {
                content: url('/icons/arrow-right-blue.svg');
                opacity: 0;
                transition: opacity 400ms ease-in;
            }

            &:hover {

                &::after {
                    opacity: 1;
                }
            }
        }
    }

    .tech-link {
        background: linear-gradient(98deg, #171EEC 7.56%, #7000D9 93.65%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        img {
            transition: margin 400ms ease-out;
        }

        &:hover {
            img {
                margin-left: 1rem;
            }
        }
    }
}
</style>