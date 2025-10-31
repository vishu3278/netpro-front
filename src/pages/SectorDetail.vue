<template>
    <div v-if="loading" class="loading  fixed z-10 inset-0 bg-white flex gap-8 flex-col items-center justify-center">
        <span class="spinner "><img src="/logo-bg.svg" alt="" class="w-48 h-48 object-contain"></span>
        <p class="text-gray-500">Loading ...</p>
    </div>
    <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
    </div>
    <template v-else-if="sector">
        <section class="relative h-[90vh] w-full bg-cover bg-center flex items-end pb-20" :style="{'background-image': `url('${baseUrl}${sector.bannerImage}')`}">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40"></div>
            <!-- Content -->
            <div class="container mx-auto relative z-10">
                <h1 class="">
                    {{sector.bannerTitle}}<br>
                </h1>
                <p class="">
                    {{sector.bannerText}}
                </p>
            </div>
        </section>
        <section class="education-section bg-black text-white px-6 md:px-20 py-20">
            <div class="container mx-auto">
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
                <div class="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <div v-for="st in sector.stats" class="space-y-2 border-l border-[#fff] py-5 pl-10">
                        <p><span>[{{st.id}}]</span></p>
                        <h3>{{st.text}}</h3>
                    </div>
                    <!-- <div class="space-y-2 border-l border-[#fff] py-5 pl-10">
                    <p><span>[02]</span></p>
                    <h3>1.5 Million+ Schools Digitised</h3>
                </div>
                <div class="space-y-2 border-l border-[#fff] py-5 pl-10">
                    <p><span>[03]</span></p>
                    <h3>80 Lakh+ Teachers Supported</h3>
                </div> -->
                </div>
            </div>
        </section>
        <section class="bg-white py-16 px-6 md:px-20">
            <div class="max-w-7xl mx-auto">
                <h4 class=" mb-12 text-center">Key Projects</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Project 1 -->
                    <div v-for="(pr, index) in sector.projects" class="space-y-4 " :class="[(index+1)%2 == 0 ? '':'pt-30']">
                        <img :src="`${baseUrl}${pr.img}`" alt="" class="rounded-lg w-full">
                        <h5 class="mb-2">{{pr.title}}</h5>
                        <p class="!text-[#5F5F5F] text-sm  !text-[18px] font-normal !leading-[26px] !tracking-[-0.54px]">
                            {{pr.description}}
                        </p>
                    </div>
                    <!-- <div class="space-y-4">
                    <img src="/sectors/project-2.jpg" alt="" class="rounded-lg w-full">
                    <h5 class="mb-2">Student Lifecycle Management System (SLMS)</h5>
                    <p class="!text-[#5F5F5F] text-sm  !text-[18px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        A unified student ID and learning journey tracking system enabling transparency and real-time
                        data insights for schools.
                    </p>
                </div>
                
                <div class="space-y-4 pt-30">
                    <img src="/sectors/project-3.jpg" alt="" class="rounded-lg w-full">
                    <h5 class="mb-2">National Achievement Survey (NAS)</h5>
                    <p class="!text-[#5F5F5F] text-sm  !text-[18px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        A large-scale national-level assessment to measure learning outcomes and transform school
                        education across India.
                    </p>
                </div>
                
                <div class="space-y-4">
                    <img src="/sectors/project-1.jpg" alt="" class="rounded-lg w-full">
                    <h5 class="mb-2">Unique Monitoring Platform</h5>
                    <p class="!text-[#5F5F5F] text-sm  !text-[18px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        A centralized platform to monitor school performance, infrastructure, training, and classroom
                        accessibility metrics.
                    </p>
                </div> -->
                </div>
            </div>
        </section>
        <section class="bg-black text-white py-20">
            <div class="container mx-auto px-6">
                <h1 class="font-medium mb-12">Services we offer</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(sr, index) in sector.services" class="rounded-[20px] border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8 hover:border-[#d6d1d1] transition-all cursor-pointer">
                        <div class="services-icon mb-10">
                            <img :src="`${baseUrl}${sr.icon}`" alt="" class="" />
                        </div>
                        <h3 class="!text-[#fff] !text-[20px] font-normal !leading-[30px] !tracking-[-0.6px] mb-5">
                            {{sr.title}}</h3>
                        <p class="!text-[#E5E5E5] !text-[16px] font-normal !leading-[26px] !tracking-[-0.54px]">
                            {{sr.description}}
                        </p>
                    </div>
                    <!-- <div class="rounded-[20px] border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8 hover:border-[#d6d1d1] transition-all cursor-pointer">
                    <div class="services-icon mb-10">
                        <img src="/services/services-vector2.svg" alt="" class="" />
                    </div>
                    <h3 class="!text-[#fff] !text-[20px] font-normal !leading-[30px] !tracking-[-0.6px] mb-5">
                        Product Engineering and Emerging Technology
                    </h3>
                    <p class="!text-[#E5E5E5] !text-[16px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        From new digital content platforms to customer-facing technologies, we engineer scalable
                        solutions that support learning access and performance visibility.
                    </p>
                </div>
                
                <div class="rounded-[20px] border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8 hover:border-[#d6d1d1] transition-all cursor-pointer">
                    <div class="services-icon mb-10">
                        <img src="/services/services-vector3.svg" alt="" class="" />
                    </div>
                    <h3 class="!text-[#fff] !text-[20px] font-normal !leading-[30px] !tracking-[-0.6px] mb-5">
                        Digital Infrastructure and Managed Services
                    </h3>
                    <p class="!text-[#E5E5E5] !text-[16px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        We manage technology — keeping school data systems secure, fast, and reliable.
                        Our support services power nationwide education needs.
                    </p>
                </div>
                
                <div class="rounded-[20px] border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8 hover:border-[#d6d1d1] transition-all cursor-pointer">
                    <div class="services-icon mb-10">
                        <img src="/services/services-vector4.svg" alt="" class="" />
                    </div>
                    <h3 class="!text-[#fff] !text-[20px] font-normal !leading-[30px] !tracking-[-0.6px] mb-5">
                        Strategy and Capability Building
                    </h3>
                    <p class="!text-[#E5E5E5] !text-[16px] font-normal !leading-[26px] !tracking-[-0.54px]">
                        We support government bodies with transformation consulting, data-backed insights,
                        and the tools to roll out policy at scale with confidence.
                    </p>
                </div> -->
                </div>
            </div>
        </section>
        <!-- <section class="testimonials py-16">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3">
                <div class="col-start-3 col-end-4">
                    <div class="wrapper py-12 px-16">
                        <h5 class="uppercase">Our Testimonials</h5>
                        <blockquote>
                            <p>“NetProphets helped us modernize how we track, manage, and measure educational outcomes
                                across the state. Their systems are robust, secure, and designed with real public needs
                                in mind.”</p>
                            <small>Keith Norman, Director, GTI System</small>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
        <Testimonial :bg-img="baseUrl+sector.testimonialImage" />
        <olive-section title="Partner with us to transform education" btn-text="Let’s Talk" btn-link="/contact" />
    </template>
    <div v-else class="py-80 container mx-auto px-10">
      <p class="text-red-400">Product not found.</p>
    </div>
    <section class="py-20">
        <div class="container mx-auto">
            <!-- Header -->
            <div class="flex justify-between items-center mb-6">
                <h4 class="">Explore more sectors</h4>
                <div class="flex space-x-2">
                    <button class="">
                        <img src="/left-arrow.svg" alt="">
                    </button>
                    <button class="">
                        <img src="/right-arrow.svg" alt="">
                    </button>
                </div>
            </div>
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src="/sectors/healthcare-small.jpg" alt="Healthcare" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white text-lg font-medium">Healthcare</div>
                </div>
                <!-- Card 2 -->
                <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src="/sectors/culture-small.jpg" alt="Culture" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white text-lg font-medium">Culture</div>
                </div>
                <!-- Card 3 -->
                <div class="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src="/sectors/skilling-small.jpg" alt="Skilling" class="w-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white text-lg font-medium">Skilling</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Testimonial from '@/components/Testimonial.vue'
import OliveSection from "@/components/OliveSection.vue"
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sector = ref(null)
let baseUrl = ref("")
const loading = ref(true) // 👈 track loading state
const error = ref(null)

onMounted(async () => {
    baseUrl.value = localStorage.getItem("base_url")
    try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/${route.params.id}.json`)
        if (!res.ok) throw new Error('Failed to load data')
        sector.value = await res.json()
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false // 👈 stop loading
    }
    // product.value = products.find(p => p.id === parseInt(route.params.id))
})
</script>
<style lang="scss" scoped>
.testimonials {
    background-position: center;
    background-size: cover;
    padding-top: 260px;
    background: url(../sectors/nehal-patel.jpg) no-repeat center / cover;

    .wrapper {
        border-radius: 10px;
        background: rgba(17, 17, 17, 0.65);
        backdrop-filter: blur(10px);
        color: #fff;
        letter-spacing: -0.5px;
    }

    h5 {
        color: #FFF;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.42px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    blockquote {
        color: #FFF;
        font-size: 30px;
        font-weight: 100;
        line-height: 45px;
        letter-spacing: -0.9px;

        small {
            color: #FFF;
            font-size: 16px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: -0.32px;
        }
    }
}



h1,
h4 {
    color: #FFF;
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
}

h4 {
    color: $rich-black;
}

p {
    color: #FFF;
    font-size: 24px;
    font-weight: 100;
    line-height: 38px;
    letter-spacing: -0.72px;
    max-width: 780px;
}

p span {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.48px;
}

h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 100;
    line-height: 60px;
    letter-spacing: -1.2px;
}

h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: -0.72px;
}

h5 {
    color: $rich-black;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.6px;
}
</style>