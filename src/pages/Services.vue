<template>
    <section class="hero relative bg-no-repeat bg-cover bg-center overflow-clip">
        <motion.figure :initial="{opacity: 0.5, scale: 1.1}" :animate="{opacity: 1, scale: 1}" :transition="{duration: 1}" class="layer-bg absolute inset-0 "></motion.figure>
        <div class="container mx-auto px-4">
            <div class="content flex items-end">
                <h1>Our Services</h1>
            </div>
        </div>
    </section>
    <ServiceSection title="Technology Consulting" :list="techConsult" image="services/technology.jpg" :link="{text: 'Explore Technology Consulting', path: '/service/technology-consulting'}" />
    <ServiceSection title="Technology Solutions (Tech Lab)" :flip="true" :list="techSolution" image="services/tech-solution.jpg" :link="{text: 'Explore Technology Solutions', path: '/service/technology-solutions'}" />
    <ServiceSection title="Product Engineering (Product Works)" :list="prodEngg" image="services/product-engg.jpg" :link="{text: 'Explore Product Engineering', path: '/service/product-engineering'}" />
    <ServiceSection title="Digital Engine" :list="digitalEngine" :flip="true" image="services/digital-engine.jpg" :link="{text: 'Explore Digital Engine', path: '/service/digital-engine'}" />
    <ServiceSection title="Creative Works" :list="creativeWorks" image="services/creative.jpg" :link="{text: 'Explore Creative Works', path: '/service/creative-works'}" />
</template>
<script setup>
import ServiceSection from "@/components/ServiceSection.vue"
import { ref, onMounted } from 'vue'
import { motion } from "motion-v"
const techConsult = ref([
    "Process Strategy & Optimisation",
    "Enterprise Process Design",
    "Business Process Transformation",
    "Solution Architecture & Design",
    "Skills Development & Capacity Building",
    "Change Management support",
    "Regulatory & Compliance advisory"
])
const techSolution = ref([
    "Enterprise software development",
    "Process automation & digitisation",
    "System integration & data architecture",
    "Web & mobile applications",
    "Product lifecycle management"
])

const prodEngg = ref([
    "ERP- Enterprise Resource Planning (ERP)",
    "Ed-Tech Solutions (LMIS)",
    "School Management System (SMS)",
    "eOffice & Document Management System",
    "Epilepsy Management Platform"
])
const digitalEngine = ref([
    "Commerce Platform Development",
    "Performance Marketing",
    "Media Planning and Buying",
    "Organic Marketing",
    "Immersive and projection mapping experiences",
    "Digital Infrastructure & Managed Services"
])
const creativeWorks = ref([
    "UI/UX design",
    "AR/VR storytelling",
    "Video and Visual Production"
])

// { id: "01", title: "Technology Consulting", subtitle: "Advisory-driven solutions for systems that scale and serve.", description: "Process Strategy & Optimisation <br>Enterprise Process Design<br>Business Process Transformation<br>Solution Architecture & Design<br>Skills Development & Capacity Building<br>Change Management support<br>Regulatory & Compliance advisory" },
// { id: "02", title: "Technology Solutions (Tech Lab)", subtitle: "Building secure, scalable ecosystems that transform service delivery and strengthen governance.", description: "Enterprise software development<br>Process automation & digitisation<br>System integration & data architecture<br>Web & mobile applications<br>Product lifecycle management" },
// { id: "03", title: "Product Engineering (Product Works)", subtitle: "Engineering scalable, customised products that streamline processes, empower institutions, and enhance operational efficiency.", description: "ERP- Enterprise Resource Planning (ERP)<br>Ed-Tech Solutions (LMIS)<br>School Management System (SMS)<br>eOffice & Document Management System<br>Epilepsy Management Platform" },
// { id: "04", title: "Digital Engine", subtitle: "Building powerful platforms, immersive digital experiences and targeted marketing to power engagement.", description: "Commerce Platform Development<br>Performance Marketing<br>Media Planning and Buying<br>Organic Marketing<br>Immersive and projection mapping experiences<br>Digital Infrastructure & Managed Services" },
// { id: "05", title: "Creative Works", subtitle: "Designing strategic identities, intuitive interfaces and visually engaging stories Branding and creative strategy", description: "UI/UX design<br>AR/VR storytelling<br>Video and Visual Production" }
</script>
<style lang="scss" scoped>
.hero {
    padding-top: 0;
    background-image: url('/services/hero-banner.jpg');
    color: #fff;
    margin-bottom: -10rem;
    z-index: -1;

    .layer-bg {

        background: linear-gradient(117deg, #2033D5 20.48%, #4E6CFE 123.16%);
        mix-blend-mode: color;
    }

    .content {
        padding-top: 135px;
        padding-bottom: 200px;
    }

    h1 {
        font-size: 34px;
        font-style: normal;
        font-weight: 100;
        line-height: 44px;
        letter-spacing: -1.02px;
    }
}

@media screen and (width >=64rem) {
    .hero {
        padding-top: 100px;
        margin-bottom: 0;
    }
    .content {
        padding-top: 0;
        padding-bottom: 80px;
        height: 400px;

    }

    h1 {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;

    }
}
</style>