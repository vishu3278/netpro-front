<template>
    <section id="testimonials" class="testimonials py-16" :style="{backgroundImage: `url(${bgImg})`}">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3">
                <div class="col-start-3 col-end-4">
                    <div class="wrapper py-12 px-16">
                        <h5 class="uppercase">{{title}}</h5>
                        <Carousel v-bind="carouselConfig">
                            <Slide v-for="slide in 3" :key="slide">
                                <div class="carousel__item">
                                    <blockquote>
                                        <p>NetProphets has been instrumental in helping us scale our education infrastructure and improve access to students nationwide.</p>
                                        <small>Keith Norman, Director, GTI System</small>
                                    </blockquote>
                                </div>
                            </Slide>
                            <template #addons>
                                <!-- <Navigation /> -->
                                <Pagination />
                            </template>
                        </Carousel>
                        <!-- <blockquote>
                            <p>NetProphets has been instrumental in helping us scale our education infrastructure and improve access to students nationwide.</p>
                            <small>Keith Norman, Director, GTI System</small>
                        </blockquote> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(SplitText)
// gsap.registerPlugin(ScrollTrigger)

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 15500,
    // itemsToShow: 2.5,
    slideEffect: "fade",
    wrapAround: true
}

const props = defineProps({
    title: { type: String, default: "Our Testimonials" },
    bgImg: { type: String, default: "home/swastik-arora-unsplash.jpg" },
    // btnLink: String
})


onMounted(() => {

})
</script>
<style lang="scss" scoped>
/*:root {

    --vc-clr-primary: #000;
    --vc-clr-secondary: #090f207f;
    --vc-clr-white: #ffffff;

    --vc-pgn-active-color: var(--vc-clr-primary);
    --vc-pgn-background-color: var(--vc-clr-secondary);
    --vc-pgn-border-radius: 0;
    --vc-pgn-gap: 6px;
    --vc-pgn-height: 4px;
    --vc-png-bottom: 10px;
    --vc-png-left: auto;
    --vc-png-right: 10px;
    --vc-pgn-width: 16px;
}*/

.testimonials {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .wrapper {
        border-radius: 10px;
        background: rgba(17, 17, 17, 0.65);
        backdrop-filter: blur(10px);
        font-size: 1rem;
        line-height: 30px;
        color: #fff;
        letter-spacing: -0.5px;
    }

    h5 {
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: -0.4px;
    }

    blockquote {
        font-size: 30px;
        font-weight: 100;
        line-height: 45px;
        letter-spacing: -0.8px;

        small {
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
        }
    }
}

.carousel {
    --vc-pgn-width: 10px;
    --vc-pgn-height: 10px;
    --vc-pgn-background-color: #454545;
    --vc-pgn-active-color: #d9d9d9;
    --vc-pgn-gap: 10px;
    --vc-pgn-border-radius: 10px;
    
    &__pagination {
        position: relative;
        left: 0;
        justify-content: start;
        transform: none;
        margin-top: 1rem;
    }
}
</style>