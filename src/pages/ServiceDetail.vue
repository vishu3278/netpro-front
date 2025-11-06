<template>
    <div v-if="loading" class="loading fixed z-10 inset-0 bg-white flex gap-8 flex-col items-center justify-center">
        <span class="spinner "><img src="/logo-bg.svg" alt="" class="w-48 h-48 object-contain"></span>
        <p class="text-gray-500">Loading ...</p>
    </div>
    <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
    </div>
    <template v-else-if="service">
        <section class="relative lg:h-[60vh] w-full bg-cover bg-center flex items-end pt-42 pb-16 lg:pt-0 lg:pb-20" :style="{'background-image': `url('${baseUrl}${service.bannerImage}')`}">
            <!-- Content -->
            <div class="container mx-auto px-4 relative z-10">
                <h1 class="">
                    {{service.bannerTitle}}
                </h1>
            </div>
        </section>
        <section class="w-full bg-white py-12 lg:py-32">
            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-2xl mx-auto">
                    <!-- Small Heading -->
                    <h6 class="mb-4">
                        {{service.pageName}}
                    </h6>
                    <!-- Main Heading -->
                    <h2 class="mb-6">
                        {{service.pageTitle}}
                    </h2>
                    <!-- Paragraph -->
                    <p class=" mb-10">
                        {{service.pageText}}
                    </p>
                    <!-- Button -->
                    <!-- <button type="button" class="text-sm hover:bg-gray-100 transition btn">
                    Get in Touch
                </button> -->
                    <router-link to="/contact" class="button button-outline">Get in Touch</router-link>
                </div>
            </div>
        </section>
        <section class="bg-black text-white px-4 py-12 lg:py-20 lg:pl-25 slidersection">
            <h3 class="slider-title mb-12">Services we offer in {{service.pageName}}</h3>
            <!-- Service Cards -->
            <div class="services-carousel">
                <Carousel v-bind="carouselConfig">
                    <!-- Card 1 -->
                    <Slide v-for="(serv, index) in service.services" :key="index">
                        <div class="rounded-xl lg:rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img :src="baseUrl+serv.icon" :alt="serv.title" class="" />
                            </figure>
                            <h3 class="mt-5 mb-5">{{serv.title}}</h3>
                            <p>{{serv.description}}</p>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation>
                            <template #prev>
                                <img src="/white-arrow-left.svg" alt="">
                            </template>
                            <template #next>
                                <img src="/white-arrow-right.svg" alt="">
                            </template>
                        </Navigation>
                        <!-- <Pagination /> -->
                    </template>
                </Carousel>
            </div>
            <!-- <div class="flex space-x-5 mt-8">
            <button class="">
                <img src="/white-arrow-left.svg" alt="">
            </button>
            <button class="">
                <img src="/white-arrow-right.svg" alt="">
            </button>
        </div> -->
        </section>
        <section class="bg-white py-12 lg:py-20 md:px-20 keyprojects">
            <div class="max-w-6xl mx-auto px-4">
                <h4 class="mb-8 lg:mb-12 text-center">Key Projects</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Project 1 -->
                    <div v-for="(proj, index) in service.projects" :class="{'lg:pt-30': (index+1)%2!=0}" class="space-y-4 mb-4">
                        <img :src="baseUrl+proj.img" alt="" class="rounded-lg w-full">
                        <h5 class="mb-2">{{proj.title}}</h5>
                        <p>
                            {{proj.description}}
                        </p>
                    </div>
                    <!-- Project 2 -->
                    <!-- <div class="space-y-4">
                        <img src="/sectors/project-2.jpg" alt="" class="rounded-lg w-full">
                        <h5 class="mb-2">Student Database Management System (SDMS)</h5>
                        <p class="!text-[#5F5F5F] text-sm  !text-[18px] font-normal !leading-[26px] !tracking-[-0.54px]">
                            Built the digital backbone for consultations across stakeholders, helping shape India’s new
                            school curriculum through structured, inclusive digital participation.
                        </p>
                    </div> -->
                </div>
            </div>
        </section>
    </template>
    <div v-else class="py-80 container mx-auto px-10">
        <p class="text-red-400">Product not found.</p>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useRoute } from 'vue-router'

const carouselConfig = {
    autoplay: 7500,
    itemsToShow: 4.5,
    // slideEffect: "fade",
    wrapAround: true,
    gap: 20,
    snapAlign: 'start',
    breakpoints: {
        300: {
            itemsToShow: 1.2,
            snapAlign: 'center'
        },
        700: {
            itemsToShow: 2.5
        },
        1100: {
            itemsToShow: 4.7
        }
    }
}
let baseUrl = ref("/")
const route = useRoute()
const service = ref(null)
const loading = ref(true) // 👈 track loading state
const error = ref(null)

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (route.path.includes("/service/")) {
            fetchData()
        }
    }
)

onMounted(async () => {
    baseUrl.value = localStorage.getItem("base_url")

    fetchData()
    // product.value = products.find(p => p.id === parseInt(route.params.id))
})
const fetchData = async () => {
    let jsonfile
    switch (route.params.id) {
        case "technology-solutions":
            // Code to execute if expression matches value1
            jsonfile = "technology-solutions.json"
            break;
        case "technology-consulting":
            // Code to execute if expression matches value2
            jsonfile = "technology-consulting.json"
            break;
        case "product-engineering":
            // Code to execute if expression matches value2
            jsonfile = "product-engineering.json"
            break;
        case "digital-engine":
            // Code to execute if expression matches value2
            jsonfile = "digital-engine.json"
            break;
        case "creative-works":
            // Code to execute if expression matches value2
            jsonfile = "creative-works.json"
            break;
        default:
            // Code to execute if no case matches the expression
            break;
    }
    try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/${route.params.id}.json`)
        // const res = await fetch(`${import.meta.env.BASE_URL}data/${jsonfile}`)
        if (!res.ok) throw new Error('Failed to load data')
        service.value = await res.json()
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false // 👈 stop loading
    }
}
</script>
<style lang="scss" scoped>
h1 {
    color: #FFF;
    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.0px;

}

h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 100;
    line-height: 32px;
    letter-spacing: -0.72px;
}

h4 {

    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.02px;

}


h5 {
    color: $rich-black;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.6px;
}

h6 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
    @include text-secondary-gradient;

}

p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.42px;
}

.slider-title {
    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.02px;
}

.services-carousel {
    color: white;
    padding-bottom: 6rem;

    &,
    p {
        color: $grey-text5;
        font-size: 16px;
        font-style: normal;
        font-weight: 100;
        line-height: 25px;
        letter-spacing: -0.48px;
    }

    h3 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.48px;
        text-transform: capitalize;
    }

    .carousel {
        --vc-nav-background: rgba(0, 0, 0, 0);
        --vc-nav-color: white;
        --vc-nav-color-hover: white;
        --vc-nav-border-radius: 50%;
        --vc-nav-width: 50px;
        --vc-nav-height: 50px;

        &__slide {
            align-items: stretch;
        }

        &__item {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (width >=64rem) {

        &,
        p {
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.32px;
        }

        h3 {
            font-size: 24px;
            line-height: 34px;
            letter-spacing: -0.72px;

        }
    }
}

.keyprojects {
    h5 {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: -0.48px;

    }

    p {
        color: $grey-text;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.42px;
    }
}

@media screen and (width >=64rem) {
    h1 {
        font-size: 60px;
        font-weight: 100;
        line-height: 80px;
        letter-spacing: -1.8px;
    }

    h2 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -1.2px;
    }

    h4 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -1.2px;
    }

    h6 {
        font-size: 14px;
        line-height: 30px;
    }

    p {
        font-size: 16px;
        line-height: 30px;
        letter-spacing: -0.48px;
    }

    .keyprojects {
        h5 {
            font-size: 20px;
            line-height: 30px;
            letter-spacing: -0.6px;

        }

        p {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.54px;

        }
    }
}
</style>