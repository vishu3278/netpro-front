<template>
    <site-header></site-header>
    <div id="smooth-wrapper" class="app-wrapper">
        <div id="smooth-content">
            <router-view @loading="loadingIndicate"></router-view>
            <site-footer></site-footer>
        </div>
        <PageLoading :show="loading" />
    </div>
</template>
<script setup>
import { ref, shallowRef, watch, onMounted } from "vue"
import { useRoute } from 'vue-router';
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import PageLoading from "@/components/PageLoading.vue"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// import { useRoute, onBeforeRouteUpdate} from 'vue-router'
const route = useRoute();
const smoother = ref(null)
const loading = ref(false)

onMounted(() => {
    // create the scrollSmoother before your scrollTriggers

    // Use a gsap.context to isolate GSAP animations
    let ctx = gsap.context(() => {
        smoother.value = ScrollSmoother.create({
            smooth: 1, // How long it takes to "catch up" to native scroll position
            effects: true, // Look for data-speed and data-lag attributes
        });
    });

    // console.log('Base URL:', import.meta.env.VITE_APP_BASE_URL)
    localStorage.setItem("base_url", import.meta.env.VITE_APP_BASE_URL)
})

watch(() => route.fullPath, (newPath, oldPath) => {
        // You can perform any actions here based on the route change
        // For example, update a global state, fetch data, or trigger animations.
        // Use ScrollSmoother's scrollTo method to smoothly scroll to the top
        if (smoother.value) {
            // console.log('Route changed to', newPath);
            smoother.value.scrollTo(0, true); // The second argument `true` makes it smooth
        }
    },
);
watch(
    loading, (newValue) => {
        if (smoother.value && !newValue) {
            console.info('watch',!newValue)
            smoother.value.scrollTo(0, true); // The second argument `true` makes it smooth
        }
    }
)

const loadingIndicate = (payload) => {
    loading.value = payload
}

</script>
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