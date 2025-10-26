<script setup>
import { watch, onMounted } from "vue"
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// import { useRoute, onBeforeRouteUpdate} from 'vue-router'

onMounted(() => {
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
    console.log('Base URL:', import.meta.env.VITE_APP_BASE_URL)

})

</script>
<template>
    <site-header></site-header>
    <div id="smooth-wrapper" class="app-wrapper">
        <div id="smooth-content">
            <router-view></router-view>
            <site-footer></site-footer>
        </div>
    </div>
</template>
<style lang="scss" scoped>
body,
html {
    background-color: #fff;
}

.box {
    color: $rich-black;
    padding: 1rem;
    @include center;
}
</style>