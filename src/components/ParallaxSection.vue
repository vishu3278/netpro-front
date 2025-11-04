<template>
  <section class="parallax-section" ref="sectionRef">
    <div class="layer layer-bg" :style="{ backgroundImage: `url(${bg})` }"></div>
    <div class="title">{{ title }}</div>
  </section>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  bg: { type: String, required: true },
  title: { type: String, required: true },
  speed: { type: Number, default: 40 } // how fast the background moves
})

const sectionRef = ref(null)

onMounted(() => {
  const section = sectionRef.value

  gsap.to('.parallax-section .layer-bg', {
    y: `${props.speed}%`,
    // ease: 'none',
    scrollTrigger: {
      trigger: ".parallax-section",
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
.parallax-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.layer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.75);
}
</style>
