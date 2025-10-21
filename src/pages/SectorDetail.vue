<template>
    <section id="hero" class="hero flex items-center justify-center" >
        <h1 class="text-center">Across every sector we touch, we build brands that move industries forward and make a difference in people’s lives.</h1>
    </section>
    
    <!-- <ParallaxSection v-for="(item, index) in sectors" :key="index" :bg="item.img" :title="item.title" :speed="item.speed" /> -->
</template>
<script setup>
// import ParallaxSection from "@/components/ParallaxSection.vue"
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(SplitText);
// gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const route = useRoute()

onMounted(() => {

    SplitText.create("#hero h1", {
        type: "words",
        autoSplit: true,
        smartWrap: true,
        mask: "lines",
        onSplit: function(self) {
            return gsap.from(self.words, {
                // x: 100,
                y: 100,
                // opacity: 0,
                autoAlpha: 0,
                stagger: 0.025,
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top center",
                    toggleActions: "play none none reset",
                }
            });
        }
    })
})

</script>
<style lang="scss" scoped>
.hero {
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
    padding-top: 17.1875rem;
    padding-bottom: 11.25rem;

    h1 {
        max-width: 1230px;
    }
}

.sector {
    height: 100vh;
    color: #fff;

    .layer-img {}

    .title {
        color: #FFF;
        font-size: 60px;
        font-weight: 400;
        line-height: 80px;
        /* 133.333% */
        letter-spacing: -1.8px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }

    .count {
    	right: 9.375rem;
    	bottom: 4rem;
        text-align: right;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.48px;
    }
}
</style>