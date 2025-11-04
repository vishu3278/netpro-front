<template>
    <div v-if="loading" class="loading  fixed z-10 inset-0 bg-white flex gap-8 flex-col items-center justify-center">
        <span class="spinner "><img src="/logo-bg.svg" alt="" class="w-48 h-48 object-contain"></span>
        <p class="text-gray-500">Loading ...</p>
    </div>
    <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
    </div>
    <template v-else-if="sector">
        <section class="hero relative lg:h-[100vh] w-full bg-cover bg-center flex items-end pb-12 pt-[580px]" :style="{'background-image': `url('${baseUrl}${sector.bannerImage}')`}">
            <!-- Overlay -->
            <div class="absolute inset-0 bgoverlay"></div>
            <!-- Content -->
            <div class="container mx-auto relative px-4 z-10">
                <h1 class="mb-4">
                    {{sector.bannerTitle}}<br>
                </h1>
                <p class="">
                    {{sector.bannerText}}
                </p>
            </div>
        </section>
        <section class="education bg-black text-white py-12 lg:px-20 lg:py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <!-- Left Text Content -->
                    <div class="space-y-6">
                        <h2 class="">
                            {{sector.statsTitle}}
                        </h2>
                        <p>
                            <span>{{sector.statsText}}</span>
                        </p>
                        <!-- <p class="">
                        <span>At NetProphets, we partner with central and state governments to address these gaps.
                            Our goal is to help public education systems become more connected, data-driven, and
                            equitable —
                            so every child, teacher, and institution can thrive.</span>
                    </p> -->
                    </div>
                    <div class="flex justify-end">
                        <img :src="`${baseUrl}${sector.statsImage}`" alt="education network" class="w-72 md:w-96">
                    </div>
                </div>
                <!-- Stats Row -->
                <div class="stats pt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <div v-for="st in sector.stats" class="flex gap-4 lg:space-y-2 border-l border-white py-5 pl-6 lg:pl-10">
                        <p><span class="text-gray-700">[{{st.id}}]</span></p>
                        <h3>{{st.text}}</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="projects bg-white pt-12 pb-6 lg:py-16 px-4 md:px-20">
            <div class="max-w-7xl mx-auto">
                <h4 class="heading mb-8 lg:mb-12 text-center">Key Projects</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Project 1 -->
                    <div v-for="(pr, index) in sector.projects" class="space-y-4 mb-4" :class="[(index+1)%2 == 0 ? '':'lg:pt-30']">
                        <img :src="`${baseUrl}${pr.img}`" :alt="pr.title" class="rounded-lg w-full">
                        <h5 class="mb-2">{{pr.title}}</h5>
                        <p class="">
                            {{pr.description}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="services bg-black text-white py-12 lg:py-20">
            <div class="container mx-auto px-6">
                <h4 class="font-medium mb-8 lg:mb-12 text-center lg:text-left">Services we offer</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(sr, index) in sector.services" class="rounded-[20px] border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8 hover:border-[#d6d1d1] transition-all cursor-pointer">
                        <div class="services-icon mb-10">
                            <img :src="`${baseUrl}${sr.icon}`" alt="" class="" />
                        </div>
                        <h5 class="mb-5">
                            {{sr.title}}</h5>
                        <p class="">
                            {{sr.description}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial :bg-img="baseUrl+sector.testimonialImage" />
        <olive-section title="Partner with us to transform education" btn-text="Let’s Talk" btn-link="/contact" />
    </template>
    <div v-else class="py-80 container mx-auto px-10">
        <p class="text-red-400">Product not found.</p>
    </div>
    
    <SectorCarousel />
</template>
<script setup>
import Testimonial from '@/components/Testimonial.vue'
import OliveSection from "@/components/OliveSection.vue"
import SectorCarousel from "@/components/SectorCarousel.vue"
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let baseUrl = ref("/")
const sector = ref(null)
const loading = ref(true) // 👈 track loading state
const error = ref(null)

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (route.path.includes("/sector/")) {
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
    try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/${route.params.id}.json`)
        if (!res.ok) throw new Error('Failed to load data')
        sector.value = await res.json()
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false // 👈 stop loading
    }
}
</script>
<style lang="scss" scoped>
.hero {
    color: #FFF;

    .bgoverlay {
        /*background: radial-gradient(148.63% 185.37% at 70.4% -9.54%, rgba(0, 0, 0, 0.81) 41.21%, rgba(0, 0, 0, 0.26) 66.12%, rgba(0, 0, 0, 0.26) 100%);*/
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.28) 50%, rgba(0, 0, 0, 0.81) 100%);
    }

    h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: -0.72px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.42px;
    }
}

.education {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.42px;

    h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 32px;
        letter-spacing: -0.72px;
    }

    .stats {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.54px;
    }

}

.projects {
    color: $grey-text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.42px;

    h4 {
        font-size: 34px;
        font-style: normal;
        font-weight: 100;
        line-height: 44px;
        letter-spacing: -1.02px;
    }

    h5 {
        color: $rich-black;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: -0.48px;
    }
}

.services {
    color: $grey-text5;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: 25px;
    letter-spacing: -0.48px;

    h4 {
        font-size: 34px;
        font-style: normal;
        font-weight: 100;
        line-height: 44px;
        letter-spacing: -1.02px;
    }

    h5 {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.48px;
    }
}

@media screen and (width >=64rem) {
    
}
</style>