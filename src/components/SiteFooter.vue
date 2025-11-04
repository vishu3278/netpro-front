<script setup>
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'

onMounted(() => {
    

})
</script>
<template>
    <footer class="py-12 lg:pt-24 lg:pb-20">
        <div class="container px-4 mx-auto">
            <div id="footerSection1" class="grid md:grid-cols-2 footer-section1">
                <div class="pb-6 md:pb-1">
                    <div class="title">
                        <motion.div :initial="{opacity:0, y:100}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut', duration: 1}" id="footerh1" class="h1 mb-2 md:mb-8" >Technology that drives meaningful change</motion.div>
                        <motion.p :initial="{opacity:0, y:80}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut', duration: 0.75, delay: 0.25}">New Business: <br>hello@netprophetsglobal.com</motion.p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row main-links">
                    <ul class="md:grow">
                        <li>
                            <router-link to="/sectordetail">Education</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Healthcare</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Culture</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Transport</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Skilling</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Telecom</router-link>
                        </li>
                        <li>
                            <router-link to="/sectordetail">Public Service</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/sectordetail">E-Commerce</router-link>
                        </li> -->
                    </ul>
                    <ul class="md:grow">
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/service">Services</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Careers</router-link>
                        </li>
                        <li>
                            <router-link to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
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
                    <!-- <figure class="max-w-[30%]">
                        <img src="/logo-mono.svg" class="w-full" alt="">
                    </figure> -->
                    <figure id="logoText" class="lg:max-w-[70%] md:max-w-[80%]">
                        <img src="/footer-logo.svg" class="w-full" alt="">
                    </figure>
                    <!-- <div id="logoText" class="logo-text min-w-fit">
                        NetProphets<br>Cyberworks
                    </div> -->
                </div>
                <div class="md:flex md:gap-8 lg:gap-16 items-end">
                    <div class="icons py-4 md:py-2">
                        <div class="flex md:flex-col lg:flex-row items-center gap-4">
                            <div class="max-w-[72px]">
                                <img src="/icons/cmmi5.svg" class="w-full" alt="">
                            </div>
                            <div class="max-w-[72px]">
                                <img src="/icons/iso.svg" class="w-full" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="copy pb-2 grow">
                        <p class="mb-4  leading-normal">© 2025 NetProphets Cyberworks Private Limited, Inc. All rights reserved</p>
                        <ul class="flex gap-2  lg:justify-between flex-wrap lg:flex-nowrap">
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
    background-color: #000;
    color: #fff;

    .footer-section2 {
        margin-top: 300px;
        font-size: 14px;
        /*line-height: 42px;*/
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
    //width: auto;

    .h1 {
        font-size: 26px;
        line-height: 36px;
        letter-spacing: -0.78px;
    }

    p {
        font-size: 20px;
        line-height: 32px;
        font-weight: normal;
        letter-spacing: -0.6px;
    }

    @media screen and (width >=64rem) {
        width: 550px;

        .h1 {
            font-size: 60px;
            line-height: 80px;
            letter-spacing: -1.8px;
        }

        /*h1 {
            font-size: clamp(2rem, 36px, 3rem);
            line-height: normal;
        }*/
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