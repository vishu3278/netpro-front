<template>
    <section id="olivesection" class="olive2-bg">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid lg:grid-cols-2 place-items-center">
                <div class="col">
                    <div class="content">
                        <div class="title mb-6">
                            {{title}}
                        </div>
                        <router-link :to="btnLink" class="button button-dark">{{btnText}}</router-link>
                    </div>
                </div>
                <div class="col">
                    <figure class="max-h-[670px] overflow-clip opacity-30">
                        <img src="/frame-bg.svg" class="max-w-full" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    title: { type: String, default: "Ready to create change together?" },
    btnText: { type: String, default: "Get in Touch" },
    btnLink: String
})


onMounted(() => {
    let split1 = SplitText.create("#olivesection .title", {
        type: "words",
        autoSplit: true,
        mask: 'lines',
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#olivesection",
            start: "top top",
            end: "+=800",  // 800px scroll distance
            // scrub: 1,
            // pin: true,
            // markers: true,
          }
    });
    tl.from(split1.words, {
        rotationX: -100,
        transformOrigin: "50% 50%",
        // opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3. Out",
        stagger: 0.5,
        mask: "lines",
        onComplete: () => split1.revert()
    }).from(".button", {
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "back.out(2)",
    }).from("#olivesection img", {
        duration: 0.75,
        x: -100, // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        ease: "power2.out",
        // stagger: 0.1,
    })

    let st = ScrollTrigger.create({
        trigger: "#olivesection",
        start: "top 75%",
        end: "bottom 25%",
        // once: false,
        animation: tl,
    });
})
</script>
<style lang="scss" scoped>
.olive2-bg {
    background-color: $olive2;
    color: $rich-black;

    .content {}

    .title {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;
        max-width: 560px;
    }
}
</style>