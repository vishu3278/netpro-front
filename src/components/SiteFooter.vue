<script setup>
import { ref, onMounted } from 'vue'
// import logo from './NetProphetsCyberworks-mono.svg'
import { motion } from 'motion-v'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    document.fonts.ready.then(() => {

        let split1 = SplitText.create("#footerh1", {
            type: "words",
            autoSplit: true,
            mask: 'lines',
        });

        let split2 = SplitText.create("#logoText", {
            type: "chars",
        });

        let tl = gsap.timeline();
        tl.from(split1.words, {
            rotationX: -100,
            transformOrigin: "50% 50%",
            // yPercent: 120,
            // opacity: 0,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.5,
            mask: "lines",
            onComplete: () => split1.revert()
        }).from(".main-links ul", {
            y: 100,
            opacity: 0,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.25,
        }).from(split2.chars, {
            duration: 0.5,
            // mask: 'lines',
            y: 50, // animate from 100px below
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: 0.1,
            onComplete: () => split2.revert()
        })

        let st = ScrollTrigger.create({
            trigger: "#footerSection1",
            start: "top center",
            // end: "+=200",
            // once: false,
            animation: tl,
        });
    })

    /*let anim1 = gsap.from(split1.words, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        yPercent: 120,
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
        ease: "power3",
        stagger: 0.5,
        onComplete: () => split1.revert()
    })*/

    /*let anim2 = gsap.from(split2.chars, {
        duration: 1,
        // mask: 'lines',
        y: 100, // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.1,
        onComplete: () => split2.revert()
    })*/

    /*let anim3 = gsap.from(".main-links li", {
        y: 100,
        autoAlpha: 0,
        stagger: 0.1,
        delay: 1
    })*/

    /*const sto = setTimeout(function() {
        anim1.play(0)
        anim2.play(0)
        // anim3.play(0)
    }, 2000)*/

})
</script>
<template>
    <footer class="pt-24 pb-20">
        <div class="container px-4 md:px-0 mx-auto">
            <div id="footerSection1" class="grid md:grid-cols-2 footer-section1">
                <div class="pb-6 md:pb-1">
                    <div class="title">
                        <div id="footerh1" class="h1 mb-2 md:mb-8" :initial="{opacity: 0, y: 100}" :animate="{opacity: 1, y: 0}">Technology that drives meaningful change</div>
                        <p>New Business: <br>hello@netprophetsglobal.com</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row main-links">
                    <ul class="md:grow">
                        <li><a href="#">Education</a></li>
                        <li>
                            <a href="#">Healthcare</a>
                        </li>
                        <li>
                            <a href="#">Culture</a>
                        </li>
                        <li>
                            <a href="#">Transport</a>
                        </li>
                        <li>
                            <a href="#">Skilling</a>
                        </li>
                        <li>
                            <a href="#">Telecom</a>
                        </li>
                        <li>
                            <a href="#">Public Service</a>
                        </li>
                        <li>
                            <a href="#">E-Commerce</a>
                        </li>
                    </ul>
                    <ul class="md:grow">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <ul class="md:grow">
                        <li>
                            <a href="#">X-Twitter</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="grid md:grid-cols-2 footer-section2">
                <div class="flex gap-4 items-center ">
                    <figure class="max-w-[30%]">
                        <img src="/logo-mono.svg" class="w-full" alt="">
                    </figure>
                    <!-- <figure class="max-w-[70%]">
                        <img src="/NetProphetsCyberworks-mono.svg" class="w-full" alt="">
                    </figure> -->
                    <div id="logoText" class="logo-text min-w-fit">
                        NetProphets<br>Cyberworks
                    </div>
                </div>
                <div class="md:flex gap-16 items-end">
                    <div class="icons py-4 md:py-2">
                        <div class="flex items-center gap-4">
                            <div class="max-w-[72px]">
                                <img src="/icons/cmmi5.svg" class="w-full" alt="">
                            </div>
                            <div class="max-w-[72px]">
                                <img src="/icons/iso.svg" class="w-full" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="copy grow">
                        <p class="mb-4 md:mb-1">© 2025 Zypsy, Inc. All rights reserved</p>
                        <ul class="flex gap-2 md:justify-between flex-wrap md:flex-nowrap">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">IT Policy</a></li>
                            <li><a href="#">POSH Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    background-color: #002;
    color: #fff;

    .footer-section2 {
        margin-top: 300px;
        font-size: 14px;
        line-height: 42px;
        color: $grey3;
        font-weight: normal;

        li {
            color: $olive;
        }
    }

    @media screen and (max-width: 40rem) {
        .footer-section2 {
            margin-top: 3rem;
            line-height: normal;
        }
    }
}

.title {
    width: 550px;

    .h1 {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;
    }

    p {
        font-size: 20px;
        line-height: 32px;
        font-weight: normal;
        letter-spacing: -0.6px;
    }

    @media screen and (max-width: 40rem) {
        width: auto;

        h1 {
            font-size: clamp(2rem, 36px, 3rem);
            line-height: normal;
        }
    }
}

.logo-text {
    color: #353535;
    font-size: 90px;
    font-weight: 600;
    line-height: 100px;
    letter-spacing: -1.8px;
}

.main-links {
    color: $grey3;
    font-size: 20px;
    line-height: 40px;
    font-weight: normal;
}
</style>