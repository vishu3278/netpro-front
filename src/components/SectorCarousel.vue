<template>
    <section id="sectorCarousel" class="py-8 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
                <h4 class="title">Explore more sectors</h4>
                <!-- <div class="flex space-x-2">
                    <button class="">
                        <img src="/left-arrow.svg" alt="">
                    </button>
                    <button class="">
                        <img src="/right-arrow.svg" alt="">
                    </button>
                </div> -->
            </div>
            <!-- Cards Grid -->
            <div class="sector-carousel">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="(slide, index) in sectors" :key="slide.id">
                        <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                            <img :src="baseUrl+slide.img" :alt="slide.title" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <router-link :to="slide.link" class="absolute inset-8 flex items-end text-white transition-all duration-500 group-hover:pb-4">{{slide.title}}</router-link>
                        </div>
                    </Slide>
                    <template #addons>
                        <CarouselNavigation>
                            <template #prev>
                                <img src="/left-arrow.svg" alt="">
                            </template>
                            <template #next>
                                <img src="/right-arrow.svg" alt="">
                            </template>
                        </CarouselNavigation>
                        <!-- <Pagination /> -->
                    </template>
                </Carousel>
                <!-- <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src="/sectors/culture-small.jpg" alt="Culture" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white text-lg font-medium">Culture</div>
                </div>
                <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src="/sectors/skilling-small.jpg" alt="Skilling" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white text-lg font-medium">Skilling</div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let baseUrl = ref("/")

/*const props = defineProps({
    title: { type: String, default: "Ready to create change together?" },
    btnText: { type: String, default: "Get in Touch" },
    btnLink: {type: String, default: "/contact" }
})*/

// import 'vue3-carousel/carousel.css'
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

const sectors = ref([
    { id: "education", img: "sectors/education-small.jpg", title: "Education", link: "/sector/education" },
    { id: "healthcare", img: "sectors/healthcare-small.jpg", title: "Healthcare", link: "/sector/healthcare" },
    { id: "sports", img: "sectors/sports-small.jpg", title: "Sports", link: "/sector/sports" },
    { id: "transport", img: "sectors/transport-small.jpg", title: "Transportation", link: "/sector/transport" },
    { id: "telecom", img: "sectors/telecom-small.jpg", title: "Telecom", link: "/sector/telecom" },
    { id: "culture", img: "sectors/culture-small.jpg", title: "Culture", link: "/sector/culture" },
    { id: "publicservices", img: "sectors/public-small.jpg", title: "Public Service", link: "/sector/publicservices" },
    { id: "skilling", img: "sectors/skilling-small.jpg", title: "Skilling", link: "/sector/skilling" },
])

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (route.path.includes("/sector/")) {
            sectors.value = sectors.value.filter(s => s.id != newId)
        }
    }
)

onMounted(() => {
    baseUrl.value = localStorage.getItem("base_url")
    /*if (route.path.includes("/sector/")) {
        sectors.value = sectors.value.filter(s => s.id != route.params.id)
    }*/
})
</script>
<style lang="scss" scoped>
.title {
    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.02px;
}

.sector-carousel {
    font-size: 24px;
    font-style: normal;
    font-weight: 100;
    line-height: 32px;
    letter-spacing: -0.72px;
}

@media screen and (width >=64rem) {
    .title {
        font-size: 60px;
        font-style: normal;
        font-weight: 100;
        line-height: 80px;
        letter-spacing: -1.8px;
    }

    .sector-carousel {
        font-size: 40px;
        line-height: 60px;
        letter-spacing: -1.2px;
    }
}

.carousel {

    --vc-nav-background: rgba(0, 0, 0, 0);
    --vc-nav-color: white;
    --vc-nav-color-hover: #e5e5e5;
    --vc-nav-border-radius: 50%;
    --vc-nav-width: 50px;
    --vc-nav-height: 50px;

}
</style>