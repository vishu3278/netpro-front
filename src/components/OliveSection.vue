<template>
    <section id="olivesection" class="olive2-bg pt-12 pb-24 relative overflow-clip">
        <div class="container mx-auto px-4 ">
            <div class="grid lg:grid-cols-2 place-items-center">
                <div class="col">
                    <div class="content relative z-2">
                        <div class="title mb-6">
                            {{title}}
                        </div>
                        <router-link :to="btnLink" class="button button-dark">{{btnText}}</router-link>
                    </div>
                </div>
                <div class="col section-image absolute bottom-0 z-0 lg:static">
                    <figure class="max-h-[670px] overflow-clip opacity-[15]">
                        <img src="/frame-bg.svg" class="max-w-full max-h-full object-contain" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    title: { type: String, default: "Ready to create change together?" },
    btnText: { type: String, default: "Get in Touch" },
    btnLink: {type: String, default: "/contact" }
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
            start: "top center",
            // end: "+=800",  // 800px scroll distance
            // scrub: 1,
            // pin: true,
            // markers: true,
          }
    });
    tl.from(split1.words, {
        // rotationX: -100,
        // transformOrigin: "50% 50%",
        opacity: 0,
        y: 100,
        autoAlpha: 0,
        duration: 0.5,
        // ease: "power3.Out",
        stagger: 0.25,
        mask: "lines",
        onComplete: () => split1.revert()
    }).from("#olivesection .button", {
        y: 50,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        // ease: "back.out(2)",
    }).from("#olivesection img", {
        opacity: 0,
        duration: 0.5,
        y: 100, // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        ease: "power2.out",
        // stagger: 0.1,
    })

    /*let st = ScrollTrigger.create({
        trigger: "#olivesection",
        start: "top center",
        // end: "bottom 25%",
        // once: false,
        animation: tl,
    });*/

    onBeforeUnmount(() => {
        // ✅ Proper cleanup
        if (tl) {
            tl.kill()
            tl = null
        }
        /*if (abouttl) {
            abouttl.kill() // kills timeline and its ScrollTrigger
            abouttl = null
        }
        if (techtl) {
            techtl.kill()
            techtl = null
        }
        if (clientTween) {
            clientTween.kill()
        }*/
    })
})
</script>
<style lang="scss" scoped>
.olive2-bg {
    background-color: $olive2;
    color: $rich-black;

    .content {
        text-align: center;
    }

    .title {
        font-size: 34px;
        line-height: 44px;
        letter-spacing: -1.8px;
        max-width: 560px;
        text-wrap-style: balance;
    }
    .section-image {
        max-height: 90%;
        figure {
            max-width: 90vw;
        }
    }
    @media screen and (width >= 64rem){
        .content {
            text-align: left;
        }
        .title {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
            max-width: 560px;
        }
        .section-image {
            max-height: none;
        }
    }
}
</style>