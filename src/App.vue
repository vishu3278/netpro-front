<script setup>
import { onMounted } from "vue"
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

onMounted(() => {
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
})
</script>
<template>
    <div id="smooth-wrapper" class="app-wrapper">
        <div id="smooth-content">
            <site-header></site-header>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/contact">Contact</router-link>
            </nav>
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