<template>
    
    <div v-if="error" class="error-state">
        <p>{{ error }}</p>
    </div>
    <template v-else-if="pageData">
        <section class="hero relative lg:h-[100vh] w-full bg-cover bg-center flex items-end pb-12 pt-[580px]" :style="{'background-image': `url('${pageData.bannerImage}')`}">
            <!-- Overlay -->
            <div class="absolute inset-0 bgoverlay"></div>
            <!-- Content -->
            <div class="container mx-auto relative px-4 z-10">
                <h1 class="mb-4">
                    {{pageData.bannerTitle}}<br>
                </h1>
                <p class="">
                    {{pageData.bannerText}}
                </p>
            </div>
        </section>
        <section class="education bg-black text-white py-12 lg:px-20 lg:py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <!-- Left Text Content -->
                    <div class="space-y-6">
                        <h2 class="">
                            {{pageData.statsTitle}}
                        </h2>
                        <p>
                            <span>{{pageData.statsText}}</span>
                        </p>
                    </div>
                    <div class="md:flex hidden justify-end">
                        <img :src="`${pageData.statsImage}`" alt="education network" class="w-72 lg:w-96">
                    </div>
                </div>
                <!-- Stats Row -->
                <div class="stats pt-10 lg:pt-20 grid grid-cols-1 sm:grid-cols-3 md:gap-4 lg:gap-10">
                    <div v-for="st in pageData.stats" class="flex gap-4 lg:space-y-2 md:border-l md:border-white py-5 md:pl-5 lg:pl-10">
                        <p><span class="text-gray-700">[{{st.id}}]</span></p>
                        <h3>{{st.text}}</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="projects bg-white py-12 lg:py-16 px-4 md:px-20">
            <div class="max-w-7xl mx-auto">
                <h4 class="heading mb-8 lg:mb-12 text-center">Key Projects</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-5">
                    <!-- Project 1 -->
                    <div v-for="(pr, index) in pageData.projects" class="space-y-4 " :class="[(index+1)%2 == 0 ? '':'lg:pt-30']">
                        <img :src="`${pr.img}`" :alt="pr.title" class="rounded-lg w-full">
                        <h5 class="mb-2">{{pr.title}}</h5>
                        <p class="">
                            {{pr.description}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="services bg-black text-white py-12 lg:py-20">
            <div class="container mx-auto px-4">
                <h4 class="font-medium mb-8 lg:mb-12 text-center lg:text-left">Services we offer</h4>
                
                <div class="services-carousel">
                    <Carousel v-bind="carouselConfig">
                        <!-- Card 1 -->
                        <Slide v-for="(serv, index) in pageData.services" :key="index">
                            <div class="rounded-xl lg:rounded-[20px] carousel__item border border-[#3E3E3E] bg-gradient-to-b from-[#141414] to-[#010101] p-8  hover:border-[#d6d1d1] transition-colors cursor-pointer">
                                <figure class="services-icon mb-auto">
                                    <img :src="serv.icon" :alt="serv.title" class="" />
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
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </section>
        <Testimonial :bgImg="pageData.testimonialImage" ></Testimonial>
    </template>
    <div v-else class="py-80 container mx-auto px-10">
        <p class="text-red-400">Product not found.</p>
    </div>
    <olive-section title="Partner with us to transform education" btn-text="Let’s Talk" btn-link="/contact" />
    <SectorCarousel />
</template>
<script setup>
import Testimonial from '@/components/Testimonial.vue'
import OliveSection from "@/components/OliveSection.vue"
import SectorCarousel from "@/components/SectorCarousel.vue"
import { ref, onBeforeMount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Sector detail | NetProphets',
  meta: [
    {
      name: 'description',
      content: 'This is the contact page of my website.'
    },
    {
      property: 'og:title',
      content: 'Contact Us'
    },
    {
      property: 'og:description',
      content: 'Learn more contact our services and team.'
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})

const route = useRoute()
let baseUrl = ref("/")
const apiurl = ref("")
const mediaurl = ref("")
const sector = ref(null)
const pageData = ref({})
const loading = ref(true) // 👈 track loading state
const error = ref(null)

const emit = defineEmits(['loading'])

const carouselConfig = {
    autoplay: 7500,
    itemsToShow: 4,
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
            itemsToShow: 4.2
        }
    }
}

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (route.path.includes("/sector/")) {
            // apiurl.value = import.meta.env.VITE_API_BASE_URL + "/sectors/" + newId
            // fetchData()
        }
    }
)

onMounted(async () => {
    baseUrl.value = localStorage.getItem("base_url")
    apiurl.value = import.meta.env.VITE_API_BASE_URL + "/sectors/" + route.params.id
    mediaurl.value = localStorage.getItem("media_url");

    fetchData()
    // product.value = products.find(p => p.id === parseInt(route.params.id))
})

const fetchData = async () => {

    // apiurl.value = import.meta.env.VITE_API_BASE_URL;

    try {
        loading.value = true
        emit('loading', true)

        const res = await fetch(apiurl.value, {
            method: "GET",
            headers: {
                "X-Content-Type-Options": "nosniff"
            }
        })
        // console.log(res.data)
        if (!res.ok) throw new Error('Failed to fetch page data')
        let apidata = await res.json()
        // console.log('sector detail',apidata)
        pageData.value = apidata

    }
    catch (err) {
        error.value = err.message
        // sectors.value.sectors = default_sectors
    }
    finally {
        loading.value = false
                emit('loading', false)

    }
}

/*const fetchData = async () => {
    try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/${route.params.id}.json`)
        if (!res.ok) throw new Error('Failed to load data')
        sector.value = await res.json()
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false // 👈 stop loading
    }
}*/
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

.services-carousel {
    color: white;
    padding-bottom: 2rem;
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
        padding-bottom: 6rem;
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

@media screen and (width >=64rem) {
    .hero {
        p {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;
        }

        h1 {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
        }
    }

    .education {
        font-size: 16px;
        font-style: normal;
        letter-spacing: -0.48px;

        h2 {
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -1.2px;
        }
    }

    .stats {
        p {
            color: #FFF;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: -0.48px;
        }

        h3 {
            font-size: 24px;
            line-height: 33px;
            letter-spacing: -0.72px;
        }
    }
}
</style>