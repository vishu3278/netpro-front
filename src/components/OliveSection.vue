<template>
    <section class="olive2-bg">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid lg:grid-cols-2 place-items-center">
                <div class="col">
                    <div class="content">
                        <div class="title mb-6">
                            Ready to create change together?
                        </div>
                        <router-link class="button button-dark">Get in Touch</router-link>
                    </div>
                </div>
                <div class="col">
                    <figure class="max-h-[670px] overflow-clip opacity-30">
                        <img src="/frame-bg.svg" class="max-w-full" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: { type: String, default: "Ready to create change together?" },
    btnText: { type: String, default: "Get in Touch" },
    btnLink: String
})
</script>
<style lang="scss" scoped>
.olive2-bg {
    background-color: $olive2;
    color: $rich-black;
    .content {

    }

    .title {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;
        max-width: 550px;
    }
}
</style>