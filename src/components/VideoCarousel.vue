<template>
    <section class="video-carousel ">
        <Carousel v-bind="carouselConfig">
            
            <Slide>
                <div class="video2 carousel__item md:hidden h-dvh flex items-center justify-center relative overflow-clip" style="background: radial-gradient(circle, rgba(255, 243, 231, 1) 0%, rgba(217, 127, 64, 1) 29%, rgba(83, 47, 23, 1) 100%);">
                    <MediaLoader :src="slide1?.video" poster="/logo-bg.svg" class="absolute inset-0 w-full h-full " />
                    <div class="content relative px-10 pt-12 space-y-4">
                        <h2>
                            {{slide1?.title}}
                        </h2>
                        <p>{{slide1?.text}}</p>
                        <div class="flex gap-4 flex-wrap mt-6">
                            <router-link to="/sector" class="button button-fill">View Sector</router-link>
                            <router-link to="/service" class="button button-white-outline">View Services</router-link>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div class="video2 carousel__item md:hidden h-dvh flex items-center justify-center relative overflow-clip" style="background: hsla(45, 25%, 91%, 1); background: radial-gradient(circle, hsla(45, 25%, 91%, 1) 0%, hsla(52, 18%, 65%, 1) 78%, hsla(66, 9%, 48%, 1) 100%);">
                    <MediaLoader :src="slide2?.video" poster="/logo-bg.svg" class="absolute inset-0 w-full h-full " />
                    <div class="content relative px-10 pt-12 space-y-4">
                        <h2>{{slide2?.title}}</h2>
                        <p>{{slide2?.text}}</p>
                        <div class="flex gap-4 flex-wrap mt-6">
                            <router-link to="/sector" class="button button-fill">View Sector</router-link>
                            <router-link to="/service" class="button button-white-outline">View Services</router-link>
                        </div>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <!-- <Navigation>
                    <template #prev>
                        <img src="/left-arrow.svg" alt="">
                    </template>
                    <template #next>
                        <img src="/right-arrow.svg" alt="">
                    </template>
                </Navigation> -->
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import MediaLoader from '@/components/MediaLoader.vue'

// import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 10000,
    itemsToShow: 1,
    // slideEffect: "fade",
    wrapAround: true,
    // gap: 20,

}

const props = defineProps({
    // title: { type: String, default: "Our Testimonials" },
    // bgImg: { type: String, default: "home/swastik-arora-unsplash.jpg" },
    // btnLink: String
    slide1: { type: Object, default: () => { return { video: "", title: "", text: "", btnText: "", btnLink: "" } } },
    slide2: { type: Object, default: () => { return { video: "", title: "", text: "", btnText: "", btnLink: "" } } },
})


onMounted(() => {

})
</script>
<style lang="scss" scoped>
.video2 {
    color: #fff;

    .content {
        color: #FFF;
        font-size: 28px;
        font-style: normal;
        font-weight: 100;
        line-height: 34px;
        letter-spacing: -0.84px;
    }

    h2 {
        font-size: 48px;
        line-height: 44px;
        font-weight: 100;
        mix-blend-mode: overlay;
        letter-spacing: -1px;
    }

}

.carousel {

    &__slide {
        align-items: stretch;
    }

}
</style>