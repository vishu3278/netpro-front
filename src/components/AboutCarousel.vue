<template>
    <section id="aboutCarousel" class="about-carousel py-4 lg:py-16 ">
        <Carousel v-bind="carouselConfig">
            <!-- <Slide v-for="(slide, index) in testimonials" :key="index">
                <div class="carousel__item">
                    <blockquote>
                        <p class="mb-3">{{slide.content}}</p>
                        <small>{{slide.meta}}</small>
                    </blockquote>
                </div>
            </Slide> -->
            <Slide>
                <div class="carousel__item overflow-hidden w-full ">
                    <img src="/about/school-children.jpg" alt="Education" class="w-full h-48 object-cover rounded-2xl">
                    <div class=" py-4">
                        <p>
                            To track and prevent student drop out and enable policy action to identify literacy trends.
                        </p>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item overflow-hidden w-full ">
                    <img src="/about/heath-education.jpg" alt="Health" class="w-full h-48 object-cover rounded-2xl">
                    <div class=" py-4">
                        <p>
                            Enabling skilled and providing accessible health education in remote areas.
                        </p>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item overflow-hidden w-full ">
                    <img src="/about/sporting.jpg" alt="Sports" class="w-full h-48 object-cover rounded-2xl">
                    <div class=" py-4">
                        <p>
                            Bringing transparency to sporting information, allowing sportspersons to focus on performance.
                        </p>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item overflow-hidden w-full ">
                    <img src="/about/driving.jpg" alt="Transport" class="w-full h-48 object-cover rounded-2xl">
                    <div class=" py-4">
                        <p>
                            Delivering driving licenses without queues and bureaucratic hurdles.
                        </p>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item overflow-hidden w-full ">
                    <img src="/about/helping-decision.jpg" alt="Workplace" class="w-full h-48 object-cover rounded-2xl">
                    <div class="py-4">
                        <p>
                            Enhancing outcomes and helping decision makers in the workplace.
                        </p>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Navigation>
                    <template #prev>
                        <img src="/left-arrow.svg" alt="">
                    </template>
                    <template #next>
                        <img src="/right-arrow.svg" alt="">
                    </template>
                </Navigation>
                <!-- <Pagination /> -->
            </template>
        </Carousel>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 5500,
    itemsToShow: 4.5,
    // slideEffect: "fade",
    wrapAround: true,
    gap: 20,
    breakpoints: {
        300: {
            itemsToShow: 1.5,
        },
        600: {
            itemsToShow: 2.5
        },
        1100: {
            itemsToShow: 4.5
        }
    }
}

const props = defineProps({
    // title: { type: String, default: "Our Testimonials" },
    // bgImg: { type: String, default: "home/swastik-arora-unsplash.jpg" },
    // btnLink: String
    testimonials: {
        type: Array,
        default: () => {
            return [
                { content: 'NetProphets has been instrumental in helping us scale our education infrastructure and improve access to students nationwide.', meta: "Keith Norman, Director, GTI System" },
                { content: 'NetProphets has been instrumental in helping us scale our education infrastructure and improve access to students .', meta: "Keith Norman, Director, GTI System" },
                { content: 'NetProphets has been crucial in helping us scale our education facilities and improve access to students nationwide.', meta: "Keith Norman, Director, GTI System" }
            ]
        }
    }
})


onMounted(() => {

})
</script>
<style lang="scss" scoped>

.about-carousel {

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.48px;
    text-align: left;

    @media screen and (width >=64rem) {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.48px;
    }
}

.carousel {
    --vc-pgn-width: 10px;
    --vc-pgn-height: 10px;
    --vc-pgn-background-color: #454545;
    --vc-pgn-active-color: #d9d9d9;
    --vc-pgn-gap: 10px;
    --vc-pgn-border-radius: 10px;

    --vc-nav-background: rgba(0, 0, 0, 0);
    --vc-nav-color: white;
    --vc-nav-color-hover: #e5e5e5;
    --vc-nav-border-radius: 50%;
    --vc-nav-width: 50px;
    --vc-nav-height: 50px;

    &__slide {
        align-items: stretch;
    }

    &__pagination {
        position: relative;
        left: 0;
        justify-content: start;
        transform: none;
        margin-top: 1rem;
    }
    
}

</style>