<template>
    <section class="hero relative bg-no-repeat bg-cover bg-center">
        <motion.figure :initial="{opacity: 0.5, scale: 1.1}" :animate="{opacity: 1, scale: 1}" :transition="{duration: 1}" class="layer-bg absolute inset-0 "></motion.figure>
        <div class="container mx-auto px-4">
            <div class="content flex items-end">
                <h1>Our Services</h1>
            </div>
        </div>
    </section>
    <ServiceSection title="Technology Consulting" :list="techConsult" image="/services/technology.jpg" :link="{text: 'Explore Technology Consulting', path: '/servicedetail'}" />
    <ServiceSection title="Technology Solutions (Tech Lab)" :flip="true" :list="techConsult" image="/services/tech-solution.jpg" :link="{text: 'Explore Technology Solutions', path: '/servicedetail'}" />
    <ServiceSection title="Product Engineering (Product Works)" :list="techConsult" image="/services/product-engg.jpg" :link="{text: 'Explore Product Engineering', path: '/servicedetail'}" />
    <ServiceSection title="Digital Engine" :list="techConsult" :flip="true" image="/services/digital-engine.jpg" :link="{text: 'Explore Digital Engine', path: '/servicedetail'}" />
    <ServiceSection title="Creative Works" :list="techConsult" image="/services/creative.jpg" :link="{text: 'Explore Creative Works', path: '/servicedetail'}" />
</template>
<script setup>
import ServiceSection from "@/components/ServiceSection.vue"
import { ref, onMounted } from 'vue'
import { motion } from "motion-v"
const techConsult = ref([
    { text: "Process Strategy & Optimisation" },
    { text: "Enterprise Process Design" },
    { text: "Business Process Transformation" },
    { text: "Solution Architecture & Design" },
    { text: "Skills Development & Capacity Building" },
    { text: "Change Management support" },
    { text: "Regulatory & Compliance advisory" }
])
</script>
<style lang="scss" scoped>
.hero {
    padding-top: 100px;
    background-image: url('/services/hero-banner.jpg');
    color: #fff;

    .layer-bg {

        background: linear-gradient(117deg, #2033D5 20.48%, #4E6CFE 123.16%);
        mix-blend-mode: color;
    }

    .content {
        height: 400px;
        padding-bottom: 80px;
    }

    h1 {

        font-size: 60px;
        font-weight: 100;
        line-height: 80px;
        letter-spacing: -1.8px;
    }
}
</style>