<script setup>
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'

onMounted(() => {


})
</script>
<template>
    <footer class="py-6 lg:pt-24 lg:pb-20">
        <div class="container px-4 mx-auto">
            <div id="footerSection1" class="md:grid md:grid-cols-2 footer-section1 hidden">
                <div class="pb-6 md:pb-1">
                    <div class="title">
                        <motion.div :initial="{opacity:0, y:100}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut', duration: 1}" id="footerh1" class="h1 mb-2 md:mb-8">Technology that drives meaningful change</motion.div>
                        <motion.p :initial="{opacity:0, y:80}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut', duration: 0.75, delay: 0.25}">New Business: <br>info@npglobal.in</motion.p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row main-links">
                    <ul class="md:grow">
                        <li>
                            <router-link to="/sector/education">Education</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/healthcare">Healthcare</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/culture">Culture</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/transportation">Transport</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/skilling">Skilling</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/telecom">Telecom</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/public-service">Public Service</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/sector/education">E-Commerce</router-link>
                        </li> -->
                    </ul>
                    <ul class="md:grow">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about-us">Who we are</router-link>
                        </li>
                        <li>
                            <router-link to="/service">Services</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/contact">Careers</router-link>
                        </li> -->
                        <!-- <li>
                            <router-link to="/blog">Blog</router-link>
                        </li> -->
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                    <ul class="md:grow">
                        <li>
                            <a href="https://x.com/npglobal" target="_blank">X-Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/netprophetscyberworks/" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/netprophets-global-cyberworks/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-mobile flex md:hidden">
                <div class="col1 grow">
                    <ul class="text-2xl leading-relaxed mb-10">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about-us">Who we are</router-link>
                        </li>
                        <li>
                            <router-link to="/service">Services</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/contact">Careers</router-link>
                        </li> -->
                        <!-- <li>
                            <router-link to="/blog">Blog</router-link>
                        </li> -->
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                    <ul class="text-sm leading-loose">
                        <li>
                            <router-link to="/sector/education">Education</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/healthcare">Healthcare</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/culture">Culture</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/transportation">Transport</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/skilling">Skilling</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/telecom">Telecom</router-link>
                        </li>
                        <li>
                            <router-link to="/sector/public-service">Public Service</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/sectordetail">E-Commerce</router-link>
                        </li> -->
                    </ul>
                </div>
                <div class="col2">
                    <ul class="text-sm leading-loose mb-8">
                        <li>
                            <a href="https://x.com/npglobal" target="_blank">X-Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/netprophetscyberworks/" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/netprophets-global-cyberworks/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                    <p class="text-sm leading-loose">New Business: <br>info@npglobal.in</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 footer-section2">
                <div class="mb-6 md:mb-0">
                    <figure id="logoText" class="max-w-[90%] lg:max-w-[70%] md:max-w-[80%]">
                        <img src="/footer-logo.svg" class="w-full hidden lg:block" alt="">
                        <img src="/footer-logo-white.svg" class="w-full lg:hidden" alt="">
                    </figure>
                </div>
                <div class="md:flex md:gap-8 lg:gap-16 items-end">
                    <div class="icons hidden lg:block py-4 md:py-2">
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
                        <p class="mb-4 border-b border-gray-800 lg:border-0 pb-3 leading-normal">©Copyright 2000 - 2025. NetProphets Cyberworks Private Limited. All rights reserved</p>
                        <ul class="flex gap-2 lg:justify-between flex-wrap lg:flex-nowrap">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-conditions">Terms of Service</a></li>
                            <li><a href="/posh-policy">POSH Policy</a></li>
                            <li><a href="/it-policy">IT Policy</a></li>
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
        margin-top: 100px;
        /*line-height: 42px;*/
        color: $grey3;
        font-size: 13px;
        font-weight: normal;

        li {
            color: $grey-text;
        }
    }

    @media screen and (width >=64rem) {
        .footer-section2 {
            margin-top: 280px;
            font-size: 14px;
            line-height: normal;

            li {
                color: $olive;
            }
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

.copy {
    font-size: 13px;
    line-height: 20px;
    color: $grey-text;
}
</style>