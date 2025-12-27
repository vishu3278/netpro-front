<template>
    <section id="blogCarousel" class="py-12 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h4 class="title">{{title}}</h4>
            </div>
            
            <div class="blog-carousel mb-6 md:mb-0">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="(slide, index) in blogs" :key="slide.id">
                        
                        <div class="blog-card rounded-2xl flex flex-col justify-between overflow-hidden border border-gray-200 bg-white relative">
                            <figure class="relative">
                                <img :src="slide.image || '/blog/placeholder.jpg'" class="w-full object-cover aspect-[1.85/1]" :alt="slide.title">
                                <span class="py-5 px-6">{{slide.date}}</span>
                            </figure>
                            <p class="mb-auto pt-6 px-6 min-h-[100px] line-clamp-2">
                                {{slide.title}}
                            </p>
                            <div class="pt-3 pb-6 px-6">
                                <router-link :to="slide.link" class="text-sm inline-flex items-center gap-2">
                                    Read More <img src="/blog/arrow-right-solid.svg" alt="read more">
                                </router-link>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <CarouselNavigation>
                            <template #prev>
                                <img src="/left-arrow.svg" class="hover:opacity-70" alt="">
                            </template>
                            <template #next>
                                <img src="/right-arrow.svg" class="hover:opacity-70" alt="">
                            </template>
                        </CarouselNavigation>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
    blogs: { type: Array, default: [] },
    title: { type: String, default: "Read More" },
})

import { Carousel, Slide, Pagination, Navigation as CarouselNavigation } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 5500,
    itemsToShow: 3,
    // slideEffect: "fade",
    wrapAround: true,
    gap: 20,
    snapAlign: 'start',
    breakpoints: {
        300: {
            itemsToShow: 1.25,
        },
        600: {
            itemsToShow: 2.25
        },
        1100: {
            itemsToShow: 3
        }
    }
}

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (route.path.includes("/blog/")) {
            console.info(newId)
        }
    }
)

</script>
<style lang="scss" scoped>
.title {
    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.02px;
}

.blog-carousel {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.72px;
}
.blog-card {
    span {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.42px;
        display: block;
        position: absolute;
        top: 0px;
    }
    a:hover {
        img { margin-left: 0.5rem; transition: all 200ms ease-out;}
    }
}

@media screen and (width >=64rem) {
    .title {
        font-size: 60px;
        font-style: normal;
        font-weight: 100;
        line-height: 80px;
        letter-spacing: -1.8px;
    }

    .blog-carousel {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: -0.72px;
    }
}

.carousel {

    --vc-nav-background: rgba(0, 0, 0, 0);
    --vc-nav-color: white;
    --vc-nav-color-hover: #e5e5e5;
    --vc-nav-border-radius: 50%;
    --vc-nav-width: 50px;
    --vc-nav-height: 50px;
    --vc-png-bottom: -16px;
}
</style>