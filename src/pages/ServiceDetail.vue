<template>
    <div v-if="loading" class="loading  fixed z-10 inset-0 bg-white flex gap-8 flex-col items-center justify-center">
        <span class="spinner "><img src="/logo-bg.svg" alt="" class="w-48 h-48 object-contain"></span>
        <p class="text-gray-500">Loading ...</p>
    </div>
    <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
    </div>
    <template v-else-if="service">
        <section class="relative h-[60vh] w-full bg-cover bg-center flex items-end pb-20" :style="{'background-image': `url('${baseUrl}${service.bannerImage}')`}">
            <!-- Content -->
            <div class="container mx-auto relative z-10">
                <h1 class="">
                    {{service.bannerTitle}}
                </h1>
            </div>
        </section>
        <section class="w-full bg-white py-32">
            <div class="container mx-auto relative z-10">
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
                    <router-link to="/contact" class="button button-dark">Get in Touch</router-link>
                </div>
            </div>
        </section>
        <section class="bg-black text-white py-20 pl-25 slidersection">
            <!-- Heading -->
            <h3 class="font-medium mb-12">Services we offer in {{service.pageName}}</h3>
            <!-- Service Cards -->
            <div class="services-carousel">
                <Carousel v-bind="carouselConfig">
                    <!-- Card 1 -->
                    <Slide v-for="(serv, index) in service.services" :key="index">
                        <div class="rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img :src="baseUrl+serv.icon" :alt="serv.title" class="" />
                            </figure>
                            <h3 class="mt-5 mb-5">{{serv.title}}</h3>
                            <p>{{serv.description}}</p>
                        </div>
                    </Slide>
                    <!-- <Slide>
                        <div class="rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img src="/services/services-vector2.svg" alt="" class="" />
                            </figure>
                            <h3 class="mt-12 mb-5">
                                Enterprise Process Design
                            </h3>
                            <p>
                                From multilingual content platforms to outcome-tracking dashboards, we engineer scalable
                                solutions that support learning access and performance visibility.
                            </p>
                        </div>
                    </Slide>
                    <Slide>
                        <div class="rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img src="/services/services-vector3.svg" alt="" class="" />
                            </figure>
                            <h3 class="mt-12 mb-5">
                                Business Process Transformation
                            </h3>
                            <p>
                                We manage the backend—keeping school data systems secure, fast, and available. Our support
                                ensures uptime for nationwide education tech.
                            </p>
                        </div>
                    </Slide>
                    <Slide>
                        <div class="rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img src="/services/services-vector4.svg" alt="" class="" />
                            </figure>
                            <h3 class="mt-12 mb-5">
                                Solution Architecture & Design
                            </h3>
                            <p>
                                We support government bodies with transformation consulting, data-backed insights, and the tools
                                to roll out policy at scale with confidence.
                            </p>
                        </div>
                    </Slide>
                    <Slide>
                        <div class="rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                            <figure class="services-icon mb-auto">
                                <img src="/services/services-vector1.svg" alt="" class="" />
                            </figure>
                            <h3 class="mt-12 mb-5">
                                Skills Development & Capacity Building</h3>
                            <p>
                                We build unified portals for school monitoring, student data, teacher tracking, and policy
                                compliance—streamlining how education is planned and delivered.
                            </p>
                        </div>
                    </Slide> -->
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
        <section class="bg-white py-20  md:px-20 keyprojects">
            <div class="max-w-7xl mx-auto">
                <h4 class=" mb-12 text-center">Key Projects</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Project 1 -->
                    <div v-for="(proj, index) in service.projects" :class="{'pt-30': (index+1)%2!=0}" class="space-y-4 ">
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
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
}

h2,
h3,
h4 {
    color: $rich-black;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -1.2px;
}

h5 {
    color: $rich-black;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.6px;
}


h4 {
    font-weight: 100;
}

h3 {
    color: #fff;
    font-weight: 100;
}

p {
    //color: $rich-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.48px;
}

button.btn {
    color: $rich-black;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.54px;
    border-radius: 55px;
    border: 1px solid var(--New, #2033D5);
    display: inline-flex;
    height: 55px;
    padding: 6px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

button {
    cursor: pointer;
}

h6 {
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
    background: var(--Highlight-Stroke, linear-gradient(98deg, #171EEC 7.56%, #7000D9 93.65%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.services-carousel {
    color: white;
    padding-bottom: 6rem;

    &,
    p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: -0.32px;
    }

    h3 {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: -0.72px;
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

}

.keyprojects {
    h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.6px;
    }

    p {
        color: $grey-text;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: -0.54px;
    }
}
</style>