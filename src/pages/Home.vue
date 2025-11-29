<template>
    <!-- <section id="video1" class="video1 h-dvh relative overflow-clip">
        <video autoplay muted loop id="myVideo1" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/home/silhouette-of-a-sports-girl.mp4" type="video/mp4">
        </video>
        <div class="container mx-auto px-4 relative">
            <div class="grid lg:grid-cols-2 lg:grid-rows-2 h-dvh lg:place-items-end place-items-center">
                <div class="col-start-1 col-end-2 row-start-2 row-end-3 ">
                    <div class="content pb-20">
                        Digital solutions that power India’s critical sectors and enable better public outcomes.
                    </div>
                </div>
                
            </div>
        </div>
    </section> -->
    <VideoCarousel v-if="isMobile" :slide1="{video: '/home/silhouette-engineer-and-inspector.mp4', title: '', text: 'Digital solutions that power India’s critical sectors and enable better public outcomes.'}" :slide2="{video: '/home/silhouette-of-a-sports-girl.mp4', title: '', text: 'Meaningful impact through citizen - First Governance Projects'}" />
    <section v-if="!isMobile" id="video2" class="video2 hidden md:block h-dvh relative overflow-clip">
        <!-- <video autoplay muted loop id="myVideo2" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/home/silhouette-engineer-and-inspector.mp4" type="video/mp4">
        </video> -->
        <MediaLoader src="/home/silhouette-engineer-and-inspector.mp4" poster="/logo-bg.svg" class="absolute inset-0 w-full h-full " />
        <div class="container mx-auto px-4 relative">
            <div class="grid lg:grid-cols-2 ">
                <div class="col-start-2 col-end-3 ">
                    <div class="content ">
                        <h2>
                            Driving Change
                        </h2>
                        <p>Meaningful impact through citizen - First Governance Projects</p>
                        <div class="flex gap-4 flex-wrap mt-10">
                            <router-link to="/sector" class="button button-fill">View Sector</router-link>
                            <router-link to="/service" class="button button-white-outline">View Services</router-link>
                        </div>
                    </div>
                </div>
                <!-- Use a button to pause/play the video with JavaScript -->
                <!-- <button id="myBtn" onclick="myFunction()">Pause</button> -->
            </div>
        </div>
    </section>
    <section v-if="!isMobile" id="video3" class="video2 hidden md:block h-dvh relative overflow-clip" style="background: hsla(45, 25%, 91%, 1); background: radial-gradient(circle, hsla(45, 25%, 91%, 1) 0%, hsla(52, 18%, 65%, 1) 78%, hsla(66, 9%, 48%, 1) 100%);">
        <!-- <video autoplay muted loop id="myVideo3" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/home/silhouette-of-a-sports-girl.mp4" type="video/mp4">
        </video> -->
        <MediaLoader src="/home/silhouette-of-a-sports-girl.mp4" poster="/logo-bg.svg" class="absolute inset-0 w-full h-full " />
        <div class="container mx-auto px-4 relative">
            <div class="grid lg:grid-cols-2 ">
                <div class="col-start-2 col-end-3 ">
                    <div class="content ">
                        <h3>Building Economy</h3>
                        <p>Transforming Business Potential Into Sustainable Digital Success</p>
                        <div class="flex gap-4 flex-wrap mt-10">
                            <router-link to="/sector" class="button button-fill">View Sector</router-link>
                            <router-link to="/service" class="button button-white-outline">View Services</router-link>
                        </div>
                    </div>
                </div>
                <!-- Use a button to pause/play the video with JavaScript -->
                <!-- <button id="myBtn" onclick="myFunction()">Pause</button> -->
            </div>
        </div>
    </section>
    <section id="aboutsection" class="about py-12 lg:py-20">
        <div class="container mx-auto px-4 ">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div class="col">
                    <h4 id="abouttitle" class="mb-5">25+ years of building transformational technologies that have delivered citizen, sectoral and economical impact</h4>
                    <p class="mb-6">With 25+ years of experience, 800+ professionals, and over ₹100 Cr in annual revenue, NetProphets delivers transformative technology solutions that power India’s public sector.</p>
                    <p class="mb-12">But impact isn’t just measured in systems delivered. It’s seen in the people who build them. As a people-first organisation, many of our team members have grown with us over the years—building careers, communities, and futures alongside the solutions we create.</p>
                    <router-link class="button button-dark" to="/about">Know the company</router-link>
                </div>
                <div class="col">
                    <div class="stats">
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.3, ease: 'easeOut'}" class="item border-t pb-12">
                            <div class="flex lg:justify-between gap-4 pt-12">
                                <div class="count">500M</div>
                                <div class="detail">Citizen Lives positively impacted worldwide</div>
                            </div>
                        </motion.div>
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.6, ease: 'easeOut'}" class="item border-t pb-12">
                            <div class="flex lg:justify-between gap-4 pt-12">
                                <div class="count">1B+</div>
                                <div class="detail">Investments in Digital Technology</div>
                            </div>
                        </motion.div>
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.9, ease: 'easeOut'}" class="item border-t ">
                            <div class="flex lg:justify-between gap-4 pt-12">
                                <div class="count">1000+</div>
                                <div class="detail">Successful Projects</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="power py-12 lg:py-24">
        <div class="container mx-auto px-4 ">
            <div class="title text-center">
                <h4>
                    Powering India
                </h4>
                <p>Digital infrastructure across India</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12 lg:mt-16 md:px-20">
                <div class="lg:col-start-1 lg:col-end-3 ">
                    <div class="card-green ministry">
                        <p class="px-16 text-balance">Empowering India's Ministries through Innovative Solutions</p>
                        <figure class="text-center mt-12 mb-8">
                            <img src="/icons/satyamev-lg.svg" class="inline-block " alt="">
                        </figure>
                        <p class="text-lg uppercase">Ministry of</p>
                        <Carousel :items-to-show="1.35" :gap="5" :autoplay="5000" :wrap-around="true" :transition="800" transitionEasing="ease-in-out">
                            <Slide>
                                <div class="carousel__item uppercase text-lg">Youth Affairs and Sports</div>
                            </Slide>
                            <Slide>
                                <div class="carousel__item uppercase text-lg">Human Resource Development</div>
                            </Slide>
                            <Slide>
                                <div class="carousel__item uppercase text-lg">Road Transport and Highways</div>
                            </Slide>
                            
                        </Carousel>
                        <!-- <video autoplay muted loop id="motion2" class="absolute inset-0 w-full h-full object-cover object-center">
                            <source src="/home/motion-2.mp4" type="video/mp4">
                        </video> -->
                    </div>
                </div>
                <div class="lg:col-start-3 lg:col-end-6">
                    <div class="card-white states">
                        <p class="px-16">Delivering Excellence State-by-State Across India</p>
                        <div class="pt-12 pb-5 pr-8 md:pr-16 states-list">
                            <Carousel v-bind:="stateCarousel1">
                                <Slide v-for="(state, index) in states1" :key="state.id">
                                    <figure class="carousel__item flex flex-col gap-3 justify-center">
                                        <img :src="state.img" :alt="state.name">
                                        <figcaption>{{state.name}}</figcaption>
                                    </figure>
                                </Slide>
                            </Carousel>
                        </div>
                        <div class="py-5 pl-8 md:pl-16 states-list">
                            <Carousel v-bind="stateCarousel2">
                                <Slide v-for="(state, index) in states2" :key="state.id">
                                    <figure class="carousel__item flex flex-col gap-3 justify-center">
                                        <img :src="state.img" :alt="state.name">
                                        <figcaption>{{state.name}}</figcaption>
                                    </figure>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div class="lg:col-start-1 lg:col-end-4">
                    <div class="card-grey">
                        <p class="text-balance">Trusted Partnership that Makes an Impact</p>
                        <Carousel :autoplay="3500" :wrapAround="true" slideEffect="fade" :transition="800">
                            <Slide>
                                <div class="grid grid-cols-2 w-full lg:grid-cols-3 gap-6 lg:gap-10 px-2 lg:px-10 py-8 lg:py-16 place-items-center">
                                    <figure><img src="/icons/gem.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/cel.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/updesco.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/ddu-gky.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/becil.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/railtel.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                </div>
                            </Slide>
                            <Slide>
                                <div class="grid grid-cols-2 w-full lg:grid-cols-3 gap-6 lg:gap-10 px-2 lg:px-10 py-8 lg:py-16 place-items-center">
                                    <figure><img src="/icons/chips.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/hpelectric.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/mpsedc.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/nicsi.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <figure><img src="/icons/tcil.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure>
                                    <!-- <figure><img src="/icons/railtel.svg" alt="" class="grayscale hover:grayscale-0 transition"></figure> -->
                                </div>
                            </Slide>
                            <!-- <template #addons>
                                <Navigation />
                            </template> -->
                        </Carousel>
                    </div>
                </div>
                <div class="lg:col-start-4 lg:col-end-6">
                    <div class="card-dark px-4 lg:px-10">
                        <p class="text-balance">Certified Excellence Our Trusted Credentials</p>
                        <div class="grid grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10 mb-2 mt-8 lg:my-8 lg:my-24 ">
                            <div v-for="item in certified" :key="item.id" class="flex flex-col">
                                <figure class="h-20 mb-2 lg:mb-4">
                                    <img :src="item.icon" class="mx-auto h-20 object-scale-down object-center" alt="">
                                </figure>
                                <label>{{item.title}}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="techsection" class="technology py-12 lg:py-24 relative">
        <div class="container mx-auto px-4 ">
            <div class="grid lg:grid-cols-2 gap-8">
                <div>
                    <div class="title">Technology for change</div>
                    <div class="logo-bg">
                        <img src="/home/logo-bg-home.svg" class="w-full h-full object-contain" alt="">
                    </div>
                </div>
                <div>
                    <div id="accordion" class="accordion">
                        <div v-for="(item, index) in techFaq" :key="item.id" class="item pt-6 pb-10">
                            <div class="heading flex cursor-pointer" @click="toggle(index)">
                                <span class="count pt-2 basis-10 shrink-0">({{item.id}})</span>
                                <div class="ques grow">{{item.title}} <br><small>{{item.subtitle}}</small> </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" :id="`accicon-${index}`" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_329_2)">
                                            <path d="M10 0V20" stroke="black" stroke-width="2" />
                                            <path d="M0 10H20" stroke="black" stroke-width="2" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_329_2">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></div>
                            </div>
                            <div :id="`acc-${index}`" class="description overflow-clip px-10" v-html="item.description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonials -->
    <Testimonial bgImg="/home/swastik-arora-unsplash.jpg" bgImgMobile="/home/swastik-arora-mobile.jpg"></Testimonial>
    <olive-section btn-link="/contact" />
    <!-- cliets section -->
    <section id="clientsection" class="client-section">
        <div class="container mx-auto py-8 px-4 ">
            <!-- <div class="flex items-center gap-6 md:gap-8 flex-wrap lg:flex-nowrap lg:justify-between overflow-clip">
                <figure><img src="/icons/fabindia.svg" alt=""></figure>
                <figure><img src="/icons/forevermark.svg" alt=""></figure>
                <figure><img src="/icons/symantec.svg" alt=""></figure>
                <figure><img src="/icons/rtah.svg" alt=""></figure>
                <figure><img src="/icons/sdae.svg" alt=""></figure>
                <figure><img src="/icons/sai.svg" alt=""></figure>
                <figure><img src="/icons/nicsi.svg" alt=""></figure>
                <figure><img src="/icons/satyamev.svg" alt=""></figure>
            </div> -->
            <Carousel v-bind="logosConfig">
                <Slide v-for="n in 43" :key="n">
                    <img :src="'/logos/'+n+'.png'" alt="image" />
                </Slide>
                <!-- <template #addons>
                    <Pagination />
                    <Navigation />
                </template> -->
            </Carousel>
        </div>
    </section>

</template>
<script setup>
import OliveSection from '@/components/OliveSection.vue'
import Testimonial from '@/components/Testimonial.vue'
import VideoCarousel from '@/components/VideoCarousel.vue'
import MediaLoader from '@/components/MediaLoader.vue'
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue'
import { viewport } from '@/composables/useBreakpoints'
import { motion } from "motion-v"
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import { useHead } from '@unhead/vue'

const emit = defineEmits(['loading'])

const loading = ref(false)
const pageData = ref({})
const error = ref(false)
const apiurl = ref("")
const mediaurl = ref("")
const baseUrl = ref("")

useHead({
  title: () => pageData.value?.title || 'Home | NetProphets',
  meta: [
    {
      name: 'description',
      content: () => pageData.value?.heading || "25+ years of building transformational technologies"
    },
    {
      property: 'og:title',
      content: () => pageData.value?.title || 'Home'
    },
    {
      property: 'og:description',
      content: () => pageData.value?.heading || '25+ years of building transformational technologies'
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})

onBeforeMount(async () => {

    apiurl.value = import.meta.env.VITE_API_BASE_URL;
    mediaurl.value = localStorage.getItem("media_url");

    try {
        loading.value = true
        emit('loading', true)
        const res = await fetch(apiurl.value + '/home', {
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

        for (var i = 0; i < 10; i++) {
            pageData.value.sectors[i]
            let n = Math.random() * (1.0 - 0.5) + 0.5;
            speed.value.push(n.toFixed(2))
        }

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

const { isMobile, activeBreakpoint } = viewport

const allStates = [
    { "code": "AN", "name": "Andaman and Nicobar Islands" },
    { "code": "AP", "name": "Andhra Pradesh" },
    { "code": "AR", "name": "Arunachal Pradesh" },
    { "code": "AS", "name": "Assam" },
    { "code": "BR", "name": "Bihar" },
    { "code": "CG", "name": "Chandigarh" },
    { "code": "CH", "name": "Chhattisgarh" },
    { "code": "DH", "name": "Dadra and Nagar Haveli" },
    { "code": "DD", "name": "Daman and Diu" },
    { "code": "DL", "name": "Delhi" },
    { "code": "GA", "name": "Goa" },
    { "code": "GJ", "name": "Gujarat" },
    { "code": "HR", "name": "Haryana" },
    { "code": "HP", "name": "Himachal Pradesh" },
    { "code": "JK", "name": "Jammu and Kashmir" },
    { "code": "JH", "name": "Jharkhand" },
    { "code": "KA", "name": "Karnataka" },
    { "code": "KL", "name": "Kerala" },
    { "code": "LD", "name": "Lakshadweep" },
    { "code": "MP", "name": "Madhya Pradesh" },
    { "code": "MH", "name": "Maharashtra" },
    { "code": "MN", "name": "Manipur" },
    { "code": "ML", "name": "Meghalaya" },
    { "code": "MZ", "name": "Mizoram" },
    { "code": "NL", "name": "Nagaland" },
    { "code": "OR", "name": "Odisha" },
    { "code": "PY", "name": "Puducherry" },
    { "code": "PB", "name": "Punjab" },
    { "code": "RJ", "name": "Rajasthan" },
    { "code": "SK", "name": "Sikkim" },
    { "code": "TN", "name": "Tamil Nadu" },
    { "code": "TS", "name": "Telangana" },
    { "code": "TR", "name": "Tripura" },
    { "code": "UK", "name": "Uttarakhand" },
    { "code": "UP", "name": "Uttar Pradesh" },
    { "code": "WB", "name": "West Bengal" }
]
const states1 = ref([
    { code: "hp", name: "Himachal Pradesh", img: "/home/himachal.png" },
    { code: "dl", name: "New Delhi", img: "/home/delhi.png" },
    { code: "PB", name: "Punjab", img: "/home/punjab.png" },
    { code: "cgh", name: "Chattisgarh", img: "/home/chattisgarh.png" },
    { code: "ka", name: "Karnataka", img: "/home/karnataka.png" },
    { code: "gj", name: "Gujarat", img: "/home/gujarat.png" },
    { code: "ap", name: "Andhra Pradesh", img: "/home/andhra-pradesh.png" },
    { code: "ar", name: "Arunachal Pradesh", img: "/home/arunachal-pradesh.png" },
    { code: "as", name: "Assam", img: "/home/assam.png" },
    { code: "bh", name: "Bihar", img: "/home/bihar.png" },
    { code: "ga", name: "Goa", img: "/home/goa.png" },
    { code: "UK", name: "Uttarakhand", img:"/home/uttarakhand.png" },
    { code: "WB", name: "West Bengal", img:"/home/west-bengal.png" }
])
const states2 = ref([
    { code: "up", name: "Uttar Pradesh", img: "/home/uttar-pradesh.png" },
    { code: "rj", name: "Rajasthan", img: "/home/rajasthan.png" },
    { code: "tlg", name: "Telangana", img: "/home/telangana.png" },
    { code: "mpr", name: "Manipur", img: "/home/manipur.png" },
    { code: "ML", name: "Meghalaya", img: "/home/meghalaya.png" },
    { code: "MZ", name: "Mizoram", img: "/home/mizoram.png" },
    { code: "OR", name: "Odisha", img: "/home/odisha.png" },
    { code: "HR", name: "Haryana", img: "/home/haryana.png" },
    { code: "JH", name: "Jharkhand", img: "/home/jharkhand.png" },
    { code: "KL", name: "Kerala", img: "/home/kerala.png" },
    { code: "MH", name: "Maharashtra", img: "/home/maharashtra.png" },
    { code: "SK", name: "Sikkim", img:"/home/sikkim.png" },
    { code: "TN", name: "Tamil Nadu", img:"/home/tamilnadu.png" },
    { code: "TR", name: "Tripura", img:"/home/tripura.png" },
])
const certified = ref([
    { id: "abc1234", icon: "/icons/cmmi3.svg", title: "ISO 9001:2015" },
    { id: "zyx1234", icon: "/icons/iso-color.svg", title: "ISO/IEC 27001:2022" },
    { id: "pqr1234", icon: "/icons/pci-dss-color.svg", title: "ISO/IEC 20000-1:2018" }
])
const techFaq = ref([
    { id: "01", title: "Technology Consulting", subtitle: "Advisory-driven solutions for systems that scale and serve.", description: "Process Strategy & Optimisation <br>Enterprise Process Design<br>Business Process Transformation<br>Solution Architecture & Design<br>Skills Development & Capacity Building<br>Change Management support<br>Regulatory & Compliance advisory" },
    { id: "02", title: "Technology Solutions (Tech Lab)", subtitle: "Building secure, scalable ecosystems that transform service delivery and strengthen governance.", description: "Enterprise software development<br>Process automation & digitisation<br>System integration & data architecture<br>Web & mobile applications<br>Product lifecycle management" },
    { id: "03", title: "Product Engineering (Product Works)", subtitle: "Engineering scalable, customised products that streamline processes, empower institutions, and enhance operational efficiency.", description: "ERP- Enterprise Resource Planning (ERP)<br>Ed-Tech Solutions (LMIS)<br>School Management System (SMS)<br>eOffice & Document Management System<br>Epilepsy Management Platform" },
    { id: "04", title: "Digital Engine", subtitle: "Building powerful platforms, immersive digital experiences and targeted marketing to power engagement.", description: "Commerce Platform Development<br>Performance Marketing<br>Media Planning and Buying<br>Organic Marketing<br>Immersive and projection mapping experiences<br>Digital Infrastructure & Managed Services" },
    { id: "05", title: "Creative Works", subtitle: "Designing strategic identities, intuitive interfaces and visually engaging stories Branding and creative strategy", description: "UI/UX design<br>AR/VR storytelling<br>Video and Visual Production" },
])
const openIndexes = ref([])
const toggle = (index) => {

    /*const tl = gsap.timeline()
    tl.to("#accicon-"+index, { rotation: 90, duration: 0.5, ease: "elastic" })
    tl.to("#acc-"+index, { maxHeight: "99rem", opacity: 1, marginTop: 32, duration: 1 })*/

    if (openIndexes.value.includes(index)) {
        openIndexes.value = openIndexes.value.filter(i => i !== index)
        // console.log(openIndexes.value)
        gsap.to("#acc-" + index, { maxHeight: 0, opacity: 0, margin: 0, duration: 1 })
        gsap.to("#accicon-" + index, { rotation: -90, duration: 1 })

    } else {
        openIndexes.value.push(index)
        gsap.fromTo("#acc-" + index, { maxHeight: 0, opacity: 0, margin: 0 }, { maxHeight: "99rem", opacity: 1, marginTop: 32, duration: 2 })
        gsap.to("#accicon-" + index, { rotation: 90, duration: 1 })
    }
}

const breakpoints = {
    // 300px and up
    300: {
        itemsToShow: 3,
    },
    // 400px and up
    640: {
        itemsToShow: 3,
    },
    // 500px and up
    1100: {
        itemsToShow: 4,
    },
}

const stateCarousel1 = {
    itemsToShow: 4.5,
    dir: "rtl",
    wrapAround: true,
    snapAlign: "end",
    autoplay: 2500,
    transition: 300,
    breakpoints: breakpoints
}

const stateCarousel2 = {
    itemsToShow: 4.5,
    dir: "ltr",
    wrapAround: true,
    snapAlign: "end",
    autoplay: 2500,
    transition: 300,
    breakpoints: breakpoints
}

const logosConfig = {
    // height: 200,
    itemsToShow: 7,
    autoplay: 2500,
    gap: 10,
    wrapAround: true,
    breakpoints: {
        // 300px and up
        300: {
            itemsToShow: 2,
        },
        // 400px and up
        600: {
            itemsToShow: 3,
        },
        // 500px and up
        1100: {
            itemsToShow: 5,
        },
        1400: {
            itemsToShow: 7
        }
    }
}

// animation
onMounted(() => {
    baseUrl.value = localStorage.getItem("base_url")
    /*let video1title = SplitText.create("#video1 .content", {
        type: "lines",
        autoSplit: true,
        mask: "lines",
        onSplit: function(self) {
            return gsap.from(self.lines, {
                y: 80,
                opacity: 0,
                // autoAlpha: 0,
                stagger: 0.15,
                ease: 'power.out',
                onComplete: () => {
                    self.revert()
                }
            });
        }
    })*/
    let videosection = document.querySelector("#video3")
    if (videosection) {
        let videotitle = SplitText.create("#video3 h4", {
            type: "lines",
            autoSplit: true,
            smartWrap: true,
            mask: "lines",
            onSplit: function(self) {
                return gsap.from(self.lines, {
                    y: 90,
                    opacity: 0,
                    // autoAlpha: 0,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: "#video3",
                        start: "top center",
                        toggleActions: "play none none reset",
                    },
                    onComplete: () => {
                        self.revert()
                    }
                });
            }
        })
    }

    const abouttitle = document.querySelector('#abouttitle');
    // console.info(abouttitle)
    if (abouttitle) {
        SplitText.create(abouttitle, {
            type: "lines",
            autoSplit: true,
            mask: "lines",
            onSplit: function(self) {
                return gsap.from(self.lines, {
                    autoAlpha: 0,
                    y: 100,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: "#aboutsection",
                        start: "top 70%",
                        // id: "aboutsection",
                        // markers: true,
                        toggleActions: "play none none reverse", //actions => onEnter, onLeave, onEnterBack, onLeaveBack. Values => "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"

                    },
                    onComplete: () => {
                        self.revert()
                    }
                })
            }
        })
    }


    let abouttl = gsap.timeline({
        delay: 0.75,
        scrollTrigger: {
            trigger: "#aboutsection",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    });
    abouttl.from("#aboutsection p", {
        // autoAlpha: 0,
        opacity: 0,
        y: 80,
        stagger: 0.15,
        ease: "slow",
    })

    let techtl = gsap.timeline({
        scrollTrigger: {
            trigger: "#techsection",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });
    techtl.from("#techsection .title", {
        y: 100,
        opacity: 0,
        // autoAlpha: 0,
        duration: 0.5,
        delay: 0.2,
        // stagger: 0.25,
    })
    techtl.from(".logo-bg img", {
        y: 200,
        opacity: 0,
        // autoAlpha: 0,
        duration: 0.25,
    })
    techtl.from("#accordion .item", {
        y: 100,
        opacity: 0,
        // autoAlpha: 0,
        duration: 0.5,
        stagger: 0.25
    })

    /*let clientTween = gsap.from("#clientsection img", {
        y: 200,
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#clientsection",
            start: "top bottom",
            // end: "+=200",
            toggleActions: "play none none reset",
        }
    })*/

    onBeforeUnmount(() => {
        // ✅ Proper cleanup
        if (abouttl) {
            abouttl.kill() // kills timeline and its ScrollTrigger
            abouttl = null
        }
        if (techtl) {
            techtl.kill()
            techtl = null
        }
        /*if (clientTween) {
            clientTween.kill()
        }*/
    })
})
</script>
<style lang="scss" scoped>
.video1 {
    color: #FFF;
    font-size: 28px;
    font-weight: 100;
    line-height: 34px;
    letter-spacing: -0.84px;

    @media screen and (width >=64rem) {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;

        .content {
            width: 880px;
        }

    }
}

.video2 {
    color: #fff;
    padding-top: 240px;
    background: #FFF3E7;
    background: radial-gradient(circle, rgba(255, 243, 231, 1) 0%, rgba(217, 127, 64, 1) 29%, rgba(83, 47, 23, 1) 100%);

    .content {
        font-size: 20px;
        font-weight: 100;
        line-height: 28px;
        letter-spacing: -0.5px;
    }

    h2,
    h3 {
        font-size: 48px;
        line-height: 44px;
        font-weight: 100;
        mix-blend-mode: overlay;
        letter-spacing: -1px;
    }

    h3 {
        mix-blend-mode: normal;
    }

    @media screen and (width >=64rem) {
        .content {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;
        }

        h2,
        h3 {
            font-size: 110px;
            line-height: 100px;
            letter-spacing: -3px;
        }

    }
}

.about {
    color: $rich-black;
    background-color: $grey1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.42px;

    h4 {
        font-size: 24px;
        font-weight: 100;
        line-height: 32px;
        letter-spacing: -0.7px;
    }

    .stats {
        color: $rich-black;
        font-size: 16px;
        line-height: 24px;

        .item {
            border-color: $grey-cf;
        }
    }

    .count {
        font-size: 60px;
        line-height: 64px;
        font-weight: 100;
        letter-spacing: -1.8px;
        @include text-primary-gradient;
        width: 10rem;
        flex-shrink: 0;
    }

    .detail {
        padding-left: 2rem;
    }

    @media screen and (width >=64rem) {
        font-size: 16px;
        line-height: 30px;
        letter-spacing: -0.48px;

        h4 {
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -1.2px;
        }

        .stats {
            font-size: 18px;
            line-height: 30px;
        }

        .count {
            font-size: 100px;
            line-height: 90px;
            letter-spacing: -3px;
            width: fit-content;
        }

        .detail {
            padding-left: 0;
        }
    }
}


.power {
    color: $rich-black;

    .title {
        font-size: 34px;
        line-height: 44px;
        letter-spacing: -1.8px;

        p {
            font-size: 16px;
            line-height: 30px;
            letter-spacing: -0.48px;
        }
    }

    @mixin card() {
        border-radius: 20px;
        height: 100%;
        text-align: center;
        font-size: 1rem;
        line-height: 24px;
        font-weight: 600;
        letter-spacing: -0.5px;
        border: 1px solid transparent;
        padding-top: 2.25rem;
        padding-bottom: 1.5rem;
    }

    $card-colors: ("green": $olive2, "white": #fff, "grey": $grey1, "dark": $rich-black);

    @each $card,
    $color in $card-colors {
        .card-#{$card} {
            @include card();
            background-color: $color;

            @if $color==#fff {
                border-color: $grey2;
            }

            @else {
                border-color: $color;
            }

            @if $card==dark {
                color: #fff;
            }
        }
    }

    .card-green {
        height: 400px;
    }

    .card-dark {
        .subgrid {}

        figure {}

        label {
            font-size: 13px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: -0.26px;
        }
    }
    .ministry {
        /*.carousel {
            --carousel-opacity-inactive: 0.75;
            --carousel-opacity-active: 1;
        }*/
        
    }

    .states-list {
        font-size: 14px;

        figure {
            min-width: 150px;

            img {
                width: 65px;
                height: 65px;
                object-fit: contain;
                margin: auto;
            }
        }
    }

    @media screen and (width >=64rem) {
        .title {
            font-size: 60px;
            line-height: 80px;

            p {
                font-size: 24px;
                line-height: 38px;
                letter-spacing: -0.72px;
            }
        }

        .card {
            height: 400px;
        }
    }
}

.technology {
    background-color: $grey1;

    .title {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -1.2px;
        @include text-primary-gradient;
    }

    .logo-bg {
        /*position: absolute;
        bottom: 0;
        left: 0;
        height: 60%;*/
        display: none;
    }

    .accordion {
        .item {
            border-bottom: 1px solid $grey2;

            &:last-child {
                border-color: transparent;
            }
        }

        .count {
            font-size: 16px;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.48px;
        }

        .ques {
            font-size: 16px;
            font-weight: 600;
            line-height: 30px;
            letter-spacing: -0.48px;

            small {
                display: inline-block;
                color: $grey-text;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: -0.42px;
            }
        }

        .description {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.48px;
            max-height: 0;
            opacity: 0;
        }
    }

    @media screen and (width >=64rem) {
        min-height: 1100px;

        .title {
            font-size: 80px;
            line-height: 90px;
            letter-spacing: -2.4px;
            position: sticky;
            top: 0;
        }

        .logo-bg {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 560px;
            height: 700px;
            display: block;
        }

        .accordion {
            .ques {
                font-size: 20px;
                letter-spacing: -0.6px;

                small {
                    font-size: 18px;
                    line-height: 26px;
                    letter-spacing: -0.54px;
                }
            }

            .description {
                font-size: 16px;
                line-height: 30px;

            }
        }
    }
}

.client-section {}
</style>