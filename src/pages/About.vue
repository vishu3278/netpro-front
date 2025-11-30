<template>
    <section class="about-section pt-24 pb-12 lg:pt-60 lg:pb-10 w-full bg-white">
        <div class="container mx-auto px-4 relative">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 lg:gap-12">
                <!-- Left: Heading -->
                <div class="md:w-1/2">
                    <!-- <h2>
                        Building technology that
                        transforms India and improves
                        the everyday lives of the citizens
                    </h2> -->
                    <h2>{{pageData.heading}}</h2>
                </div>
                <!-- Right: Paragraphs -->
                <div class="md:w-1/3">
                    <!-- <p>
                        For over 25 years, we’ve been building technology that quietly powers lives—helping
                        students learn, citizens access services, and public systems work better. Our journey
                        has taken us across five continents, working with governments, global institutions, and
                        changemakers. Through it all, one belief keeps us grounded: innovation means nothing
                        unless it uplifts people.
                    </p> -->
                    <p>
                        {{pageData.content}}
                    </p>
                </div>
            </div>
            <div class="about-banner py-4 md:py-8">
                <img :src="pageData.bannerImage" alt="" class="w-full h-[345px] object-cover rounded-2xl">
            </div>
        </div>
    </section>
    <section class="our-mission pb-12 lg:pb-20">
        <div class="container mx-auto relative">
            <div class="our-heading text-center mb-4 mb:mb-10 ">
                <h6>Our Mission</h6>
                <p class="max-w-[320px] lg:max-w-[998px] mx-auto">
                    <!-- At the heart of what we do is a belief technology must serve people, not just systems. -->
                    {{pageData.mission}}
                </p>
            </div>
        </div>
        <AboutCarousel />
    </section>
    <section class="py-12 lg:py-20 expertise">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                <!-- Left Image -->
                <div class="frameimg absolute md:static bottom-0 right-0 max-w-[180px] md:max-w-none opacity-30 md:w-1/3 flex justify-center">
                    <img src="/frame-bg.svg" alt="Frame background" class="max-w-full object-cover">
                </div>
                
                <div class="md:w-1/2 space-y-8 lg:pr-60">
                    
                    <!-- <div>
                        <h5 class=" mb-2">Why we do it</h5>
                        <p class="leading-relaxed">
                            To create digital infrastructure that empowers governments, enables institutions, and improves everyday
                            lives. Because when technology works for citizens, society moves forward.
                        </p>
                    </div>
                    <hr class="border border-[#BEE66A]">
                    
                    <div>
                        <h5 class=" mb-2">How we do it</h5>
                        <p class="leading-relaxed">
                            With deep expertise, agile systems, and the scale to solve for India. Every product we build carries public
                            purpose at its core—designed to be secure, scalable, and meaningful.
                        </p>
                    </div> -->
                        
                    <template v-for="(exp, index) in pageData.expertise">
                        <motion.div :initial="{opacity: 0, y:50}" :whileInView="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5, delay: 0.25 }" :inViewOptions="{ once: true }">
                            <h5 class=" mb-2">{{exp.title}}</h5>
                            <p class="leading-relaxed">
                                {{exp.content}}
                            </p>
                        </motion.div>
                        <hr v-if="index != pageData.expertise.length-1" class="border border-[#BEE66A]">
                    </template>
                    <!-- Button -->
                    <div>
                        <router-link to="/service" class="button button-dark"> View our Services</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="impactful" class="py-12 lg:py-40 impactful">
        <div class="container mx-auto px-4">
            <template v-for="(item, index) in pageData.impact">
                <div v-if="index == 0" class="mb-6 md:mb-12">
                    <h2 class="">{{item.title}}</h2>
                    <p class="max-w-[940px]">{{item.subtitle}}</p>
                </div>
                
                <div v-else class="image-move flex flex-col md:flex-row justify-between border-t border-b border-[#D7D7D7] relative overflow-clip">
                    <div class="md:w-1/2  py-6 md:py-12">
                        <h3 class="">{{item.title}}</h3>
                        <p class="max-w-[500px]">{{item.subtitle}}</p>
                    </div>
                    <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                        <img :src="item.image" alt="mentor" class="max-w-full h-full object-contain">
                    </div>
                </div>
            </template>
            <!-- <div class="image-move flex flex-col md:flex-row justify-between border-b border-[#D7D7D7] relative overflow-clip">
                <div class="md:w-1/2  py-6 md:py-12">
                    <h3 class="">Growth, Built In</h3>
                    <p class="max-w-[500px]">Skill-building isn’t optional here—it’s part of how we work and grow.</p>
                </div>
                <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                    <img src="/about/growthbuiltin.jpg" alt="growth" class="max-w-full h-full object-contain">
                </div>
            </div>
            <div class="image-move flex flex-col md:flex-row justify-between border-b border-[#D7D7D7] relative overflow-clip">
                <div class="md:w-1/2  py-6 md:py-12">
                    <h3 class="">Beyond the Project</h3>
                    <p class="max-w-[500px]">People here don’t get stuck—they lead, learn, and grow across teams and challenges.</p>
                </div>
                <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                    <img src="/about/beyondtheproject.jpg" alt="beyond project" class="max-w-full h-full object-contain">
                </div>
            </div> -->
        </div>
    </section>

    <section class="leadership py-12 md:py-30 bg-[#121212]">
        <div class="container mx-auto md:px-8 lg:px-38">
            <h2 class="mb-8 text-center text-white">Our Leadership</h2>
            <!-- Leadership Grid -->
            <LeadershipCarousel v-if="isMobile" key="lead" :data="pageData.leader" ></LeadershipCarousel>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(lead, index) in pageData.leader" :key="lead.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <motion.img :src="lead.image" :initial="{opacity: 0 }" :whileInView="{ opacity: 1 }" :transition="{delay: 0.3, duration: 0.75, ease: 'easeOut'}" :alt="lead.name" class="w-full h-64 object-cover" />
                    <div class="p-8">
                        <h5 class="">
                            <span>{{lead.name}}</span>
                        </h5>
                        <p class="">
                            <span>{{lead.designation}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-12 md:pt-24 md:pb-20 partnering">
        <div class="container mx-auto px-4">
            <div class=" ">
                <h4 class="text-center mb-8 md:mb-14">Partnering With Visionaries Across Continents</h4>
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center place-items-center">
                    <figure><img src="/icons/forevermark.svg" alt="forevermark"></figure>
                    <figure><img src="/icons/symantec.svg" alt="symantec"></figure>
                    <figure><img src="/icons/rtah.svg" alt="Road Transport and Highways"></figure>
                    <figure><img src="/icons/sdae.svg" alt="sdae"></figure>
                    <figure><img src="/icons/satyamev.svg" alt="Satyamev Jayate"></figure>
                    <figure><img src="/icons/fabindia.svg" alt=""></figure>
                    <figure><img src="/icons/nicsi.svg" alt="nicsi"></figure>
                    <figure><img src="/icons/sai.svg" alt="sai"></figure>
                    <figure><img src="/icons/bbc-world.svg" alt="bbc-world"></figure>
                    <figure><img src="/icons/shree-air.svg" alt="shree airlines"></figure>
                    <figure><img src="/icons/reckitt.svg" alt="reckitt"></figure>
                    <figure><img src="/icons/airtel.svg" alt="airtel"></figure>
                    <figure><img src="/icons/ra-spect.svg" alt="ra-spect"></figure>
                    <figure><img src="/icons/ojas-art.svg" alt="ojas-art"></figure>
                    <figure><img src="/icons/breakthrough.svg" alt="breakthrough"></figure>
                    <figure><img src="/icons/mp-shasan.svg" alt="mp shasan"></figure>
                </div>
            </div>
        </div>
    </section>
    <olive-section title="Ready to create change together?" btn-text="Get in Touch" btn-link="/contact" />
</template>
<script setup>
import OliveSection from "@/components/OliveSection.vue"
import AboutCarousel from "@/components/AboutCarousel.vue"
import LeadershipCarousel from "@/components/LeadershipCarousel.vue"
import { ref, onBeforeMount, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { viewport } from '@/composables/useBreakpoints'
import { motion } from "motion-v"

import { gsap } from 'gsap'
import { useHead } from '@unhead/vue'

const { isMobile, activeBreakpoint } = viewport

const loading = ref(false)
const pageData = ref({})
const error = ref(false)
const apiurl = ref("")

const emit = defineEmits(['loading'])

useHead({
  title: () => pageData.value?.title || 'The Best IT Solution Provider In India - NetProphets Cyberworks',
  meta: [
    {
      name: 'description',
      content: 'Discover top IT services company in India with NetProphets Cyberworks, your trusted IT solution provider. The reputed IT company in Noida, India helps brands succeed.'
    },
    {
      property: 'og:title',
      content: 'The Best IT Solution Provider In India - NetProphets Cyberworks'
    },
    {
      property: 'og:description',
      content: 'Discover top IT services company in India with NetProphets Cyberworks, your trusted IT solution provider. The reputed IT company in Noida, India helps brands succeed.'
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})


onBeforeMount(async () => {

    apiurl.value = import.meta.env.VITE_API_BASE_URL;
    // mediaurl.value = localStorage.getItem("media_url");

    try {
        loading.value = true
        emit('loading', true)
        const res = await fetch(apiurl.value + '/about', {
            method: "GET",
            headers: {
                "X-Content-Type-Options": "nosniff"
            }
        })
        // console.log(res.data)
        if (!res.ok) throw new Error('Failed to fetch page data')
        let apidata = await res.json()
        // console.log(apidata.data)
        pageData.value = apidata.data

    }
    catch (err) {
        error.value = err.message
        // sectors.value.sectors = default_sectors
    }
    finally {
        loading.value = false
        emit('loading', false)
    }
})

onMounted(() => {
    // console.log('About Base URL:', import.meta.env.VITE_APP_BASE_URL)
    // bUrl.value = import.meta.env.VITE_APP_BASE_URL
    // bUrl.value = localStorage.getItem("base_url")

    onBeforeUnmount(() => {
        console.info("before unmount")
    })
})

onUpdated(() => {
    const heros = document.querySelectorAll("#impactful .image-move")

    heros.forEach(hero => {
        console.log(hero)
        const image = hero.querySelector('.image')
        // const output = document.querySelector('.output')

        let moveTween = null
        let resetTween = null


        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect()
            // console.info(rect, e.clientX, e.clientY)
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const moveX = (x - centerX) / 2
            const moveY = (y - centerY) / 2

            if (moveTween) moveTween.kill()
            if (resetTween) resetTween.kill()

            moveTween = gsap.to(image, { x: moveX * 1.25, y: moveY / 5, duration: 1.2, scale: 1.5, opacity: 1, ease: 'power3.out' })
            // gsap.to(output, { x: moveX, y: moveY, duration: 0.6 })
        }
        const killMouseMove = (e) => {
            // console.info("mouse leave => remove event listener")
            if (moveTween) moveTween.kill()
            resetTween = gsap.to(image, { x: 0, y: 0, duration: 0.8, scale: 1.1, opacity: 0, ease: 'power2.out' })
            hero.removeEventListener('mousemove', function() {
                console.info("mouse leave => remove event listener")
            })
        }

        hero.addEventListener('mousemove', handleMouseMove)
        hero.addEventListener("mouseleave", killMouseMove)
        // hero.addEventListener("mouseenter", handleMouseEnter)
    })
  
})

const leaders = ref([
    { id: 1, name: "Amitabh Vira", position: "Chief Executive Officer", img: "about/amitabh.jpg" },
    { id: 2, name: "Saurabh Rajpal", position: "Chief Technology Officer", img: "about/saurabh.jpg" },
    { id: 3, name: "Aditya Kandukuri", position: "Chief Operating Officer", img: "about/aditya.jpg" },
    { id: 4, name: "Dipesh Tiwari", position: "Vice President Digital Services", img: "about/dipesh.jpg" },
    { id: 5, name: "Gaurav Arora", position: "Vice President Enterprise Business Services", img: "about/gaurav.jpg" },
    { id: 6, name: "Ashish Chauhan", position: "Vice President Government Sector", img: "about/ashish.jpg" },
    // { id: 7, name: "Aditya Kandukuri", position: "Chief Operating Officer", img: "about/saurabh-rajpal.png" },
    // { id: 8, name: "Dipesh Tiwari", position: "Vice President Digital Services", img: "about/saurabh-rajpal.png" },
    // { id: 9, name: "Saurabh Rajpal", position: "Chief Executive Officer, Co-Founder and Director", img: "about/saurabh-rajpal.png" },

])
</script>
<style lang="scss" scoped>
h2,
h3 {
    font-weight: 100;
    font-size: 34px;
    line-height: 44px;
    letter-spacing: -1.02px;
}

h6 {

    @include text-secondary-gradient;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.48px;
    text-transform: uppercase;
}

p {
    color: $rich-black;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.42px;
}


h5 {
    color: $rich-black;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.72px;
}

h5 span {
    font-weight: 600;
}

h4 {
    color: #000;
    font-size: 40px;
    font-weight: 100;
    line-height: 60px;
    letter-spacing: -1.2px;
    color: #000;

}

.our-mission {

    &,
    p {
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 32px;
        letter-spacing: -0.72px;
    }
}

.expertise {
    background: $olive2;
    backdrop-filter: blur(30px);

    h5 {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.72px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.48px;
    }
}

.impactful {
    h2 {
        font-size: 28px;
        font-style: normal;
        font-weight: 100;
        line-height: 36px;
        letter-spacing: -0.72px;

    }

    h3 {
        font-size: 28px;
        font-style: normal;
        font-weight: 100;
        line-height: 36px;
        letter-spacing: -0.72px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 100;
        line-height: 24px;
        letter-spacing: -0.48px;
    }

    .image {
        /*top: 0;
        bottom: 0;
        right: 0;*/
        inset-inline: 50%;
        height: 120%;
    }
}

.leadership {
    h2 {
        font-size: 34px;
        font-style: normal;
        font-weight: 100;
        line-height: 44px;
        letter-spacing: -1.02px;
    }
}

.partnering {
    h4 {
        font-size: 22px;
        font-style: normal;
        font-weight: 100;
        line-height: 30px;
        letter-spacing: -0.66px;
    }
}

@media screen and (width >=64rem) {
    h2 {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;

    }

    h6 {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: -3%;
    }

    p {

        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.48px;
    }

    .expertise {
        h5 {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;
        }

        p {
            font-size: 18px;
            line-height: 30px;
            letter-spacing: -0.54px;
        }
    }

    .impactful {
        h2 {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
        }

        h3 {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
        }

        p {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;

        }
    }

    .leadership {
        h2 {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
        }
    }

    .partnering {
        h4 {
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -1.2px;
        }
    }
}
</style>