<script setup>
import { ref, watch, onMounted } from "vue"
import { useRoute } from 'vue-router';
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// import { useRoute, onBeforeRouteUpdate} from 'vue-router'
const route = useRoute();
const smoother = ref(null)

onMounted(() => {
    // create the scrollSmoother before your scrollTriggers
    /*smoother.value = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });*/

    // Use a gsap.context to isolate GSAP animations
    let ctx = gsap.context(() => {
        smoother.value = ScrollSmoother.create({
            smooth: 1, // How long it takes to "catch up" to native scroll position
            effects: true, // Look for data-speed and data-lag attributes
        });
    });

    console.log('Base URL:',
        import.meta.env.VITE_APP_BASE_URL)
    localStorage.setItem("base_url", import.meta.env.VITE_APP_BASE_URL)
})


watch(() => route.fullPath,
    (newPath, oldPath) => {
        console.log('Route changed!');
        // console.log('Old path:', oldPath);
        // console.log('New path:', newPath);
        // You can perform any actions here based on the route change
        // For example, update a global state, fetch data, or trigger animations.
        // Use ScrollSmoother's scrollTo method to smoothly scroll to the top
        if (smoother.value) {
            smoother.value.scrollTo(0, true); // The second argument `true` makes it smooth
        }
    }
);
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