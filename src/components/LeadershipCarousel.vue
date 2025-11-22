<template>
    <div class="leadership pb-8">
        <Carousel v-bind="carouselConfig">
            <Slide v-for="(lead, index) in data" :key="lead.id">
                <div class="bg-white w-full carousel__item rounded-lg shadow-lg overflow-hidden">
                    <img :src="lead.image" :alt="lead.name" class="w-full h-64 object-cover" />
                    <div class="p-8">
                        <h5 class="">
                            <span>{{lead.name}}</span>
                        </h5>
                        <p class="">
                            <span>{{lead.designation}}</span>
                        </p>
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
    </div>
</template>
<script setup>
import { defineProps, onMounted } from 'vue'
import { viewport } from '@/composables/useBreakpoints'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 5500,
    itemsToShow: 4.5,
    // slideEffect: "fade",
    wrapAround: true,
    gap: 20,
    breakpoints: {
        300: {
            itemsToShow: 1.4,
        },
        640: {
            itemsToShow: 3.6,
        },
    }
}

const props = defineProps({
    data: Array,
})

onMounted(() => {
    
})

</script>
<style lang="scss" scoped>
.leadership {
    color: $rich-black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.48px;

    h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.6px;
    }

}

.carousel {
    &__slide {
        align-items: stretch;
    }
}
</style>