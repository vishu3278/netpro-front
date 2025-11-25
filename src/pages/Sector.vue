<template>
    <section id="hero" class="hero pt-32 lg:pt-48 pb-6 px-4 flex items-center justify-center">
        <!-- <h1 class="text-center">Across every sector we touch, we build brands that move industries forward and make a difference in people’s lives.</h1> -->
        <h1 class="text-center">{{pageData.main.heading}}</h1>
    </section>
    <section v-for="(sec, index) in pageData.sectors" :key="sec.id" class="sector relative flex items-center justify-center overflow-clip">
        <figure class="layer-img absolute lg:inset-0 -inset-16 bg-no-repeat bg-cover bg-center " :style="{'background-image': `url(${sec.img})`}" :data-speed="speed[index]"></figure>
        <div class="title ">{{sec.name}}</div>
        <div class="count ">0{{index+1}}</div>
        <router-link :to="'sector/'+sec.link" class="absolute inset-0 isolate z-10"></router-link>
    </section>
    <!-- <ParallaxSection v-for="(item, index) in sectors" :key="index" :bg="item.img" :title="item.title" :speed="item.speed" /> -->
</template>
<script setup>
// import ParallaxSection from "@/components/ParallaxSection.vue"
import { ref, onBeforeMount, onMounted, onUpdated } from 'vue'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

import { useHead } from '@unhead/vue'

useHead({
  title: 'Service detail | NetProphets',
  meta: [
    {
      name: 'description',
      content: 'This is the Service page of my website.'
    },
    {
      property: 'og:title',
      content: 'Service detail'
    },
    {
      property: 'og:description',
      content: 'Learn more about our services.'
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})

const loading = ref(false)
const pageData = ref({})
const error = ref(false)
const apiurl = ref("")
const mediaurl = ref("")

const speed = ref([])

const emit = defineEmits(['loading'])

onBeforeMount(async () => {

    apiurl.value = import.meta.env.VITE_API_BASE_URL;
    mediaurl.value = localStorage.getItem("media_url");

    try {
        loading.value = true
        emit('loading', true)

        const res = await fetch(apiurl.value + '/sectors', {
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
            let n = Math.random() * (1.0 - 0.4) + 0.5;
            speed.value.push(n.toFixed(2))
        }

    }
    catch (err) {
        error.value = err.message
        pageData.value.sectors = default_sectors
    }
    finally {
        loading.value = false
        emit('loading', false)

    }
})

onMounted( () => {


    SplitText.create("#hero h1", {
        type: "lines",
        autoSplit: true,
        smartWrap: true,
        mask: "lines",
        onSplit: function(self) {
            return gsap.from(self.lines, {
                duration: 0.8,
                y: 100,
                // opacity: 0,
                autoAlpha: 0,
                stagger: 0.15,
                /*scrollTrigger: {
                    trigger: "#hero",
                    start: "top center",
                    toggleActions: "play none none reset",
                },*/
                onComplete: () => self.revert()

            });
        },
    })

})

onUpdated(() => {
    ScrollSmoother.create({
        smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
})

const default_sectors = [
    { id: "educat01", img: "sectors/education.jpg", name: "Education", link: "/sector/education", speed: 0.85 },
    { id: "health01", img: "sectors/healthcare.jpg", name: "Healthcare", link: "/sector/healthcare", speed: 0.75 },
    { id: "sports01", img: "sectors/sports.jpg", name: "Sports", link: "/sector/sports", speed: 0.65 },
    { id: "transp01", img: "sectors/transport.jpg", name: "Transportation", link: "/sector/transport", speed: 0.75 },
    { id: "telecom01", img: "sectors/telecom.jpg", name: "Telecom", link: "/sector/telecom", speed: 0.9 },
    { id: "culture01", img: "sectors/culture.jpg", name: "Culture", link: "/sector/culture", speed: 0.75 },
    { id: "pblcsrv01", img: "sectors/public-service.jpg", name: "Public Service", link: "/sector/publicservices", speed: 0.85 },
    { id: "skiling01", img: "sectors/skilling.jpg", name: "Skilling", link: "/sector/skilling", speed: 0.55 },
    // { id: "ecomm01", img: "sectors/ecommerce.jpg", name: "E-Commerce", link: "/sector/ecommerce", speed: 0.65 },
]
</script>
<style lang="scss" scoped>
.hero {
    font-size: 34px;
    font-style: normal;
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -1.02px;

    h1 {
        max-width: 1230px;
    }
}

.sector {
    height: 60vh;
    color: #fff;

    .layer-img {}

    .title,
    .count {
        position: absolute;
        bottom: 1.5rem;
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.48px;
    }

    .title {
        left: 2.5rem;
    }

    .count {
        right: 2.5rem;
        text-align: right;
    }
}

@media screen and (width >=64rem) {
    .hero {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;
    }

    .sector {
        height: 100vh;

        .title {
            font-size: 60px;
            font-weight: 400;
            line-height: 80px;
            letter-spacing: -1.8px;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-underline-position: from-font;
            position: relative;
        }

        .count {
            right: 9.375rem;
            bottom: 4rem;

        }
    }
}
</style>