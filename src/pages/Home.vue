<template>
    <section class="video1 h-dvh relative overflow-clip">
        <video autoplay muted loop id="myVideo" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/silhouette-of-a-sports-girl.mp4" type="video/mp4">
        </video>
        <div class="container mx-auto relative">
            <div class="grid grid-cols-2 grid-rows-2 h-dvh place-items-end">
                <div class="col-start-1 col-end-2 row-start-2 row-end-3 ">
                    <div class="content pb-20">
                        Digital solutions that power India’s critical sectors and enable better public outcomes.
                    </div>
                </div>
                <!-- Use a button to pause/play the video with JavaScript -->
                <!-- <button id="myBtn" onclick="myFunction()">Pause</button> -->
            </div>
        </div>
    </section>
    <section class="video2 h-dvh relative overflow-clip">
        <video autoplay muted loop id="myVideo" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/silhouette-engineer-and-inspector.mp4" type="video/mp4">
        </video>
        <div class="container mx-auto relative">
            <div class="grid grid-cols-2 ">
                <div class="col-start-2 col-end-3 ">
                    <div class="content ">
                        <h2>
                            Driving Change
                        </h2>
                        <p>Meaningful impact through citizen - First Governance Projects</p>
                        <div class="flex gap-4 flex-wrap mt-10">
                            <router-link to="" class="button button-fill">View Sector</router-link>
                            <router-link to="" class="button button-outline">View Services</router-link>
                        </div>
                    </div>
                </div>
                <!-- Use a button to pause/play the video with JavaScript -->
                <!-- <button id="myBtn" onclick="myFunction()">Pause</button> -->
            </div>
        </div>
    </section>
    <section class="about py-20">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid lg:grid-cols-2 gap-16">
                <div class="col">
                    <h4 class="mb-5">25+ years of building transformational technologies that have delivered citizen, sectoral and economical impact</h4>
                    <p class="mb-6">With 25+ years of experience, 800+ professionals, and over ₹100 Cr in annual revenue, NetProphets delivers transformative technology solutions that power India’s public sector.</p>
                    <p class="mb-12">But impact isn’t just measured in systems delivered. It’s seen in the people who build them. As a people-first organisation, many of our team members have grown with us over the years—building careers, communities, and futures alongside the solutions we create.</p>
                    <router-link class="button button-dark" to="/about">Know the company</router-link>
                </div>
                <div class="col">
                    <div class="stats">
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.5}" class="item border-t pb-12">
                            <div class="flex justify-between pt-12">
                                <div class="count">500M</div>
                                <div class="detail">Citizen Lives positively impacted worldwide</div>
                            </div>
                        </motion.div>
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.5}" class="item border-t pb-12">
                            <div class="flex justify-between pt-12">
                                <div class="count">1B+</div>
                                <div class="detail">Investments in Digital Technology</div>
                            </div>
                        </motion.div>
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.5}" class="item border-t ">
                            <div class="flex justify-between pt-12">
                                <div class="count">1000+</div>
                                <div class="detail">Successful Projects</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="testimonials py-16">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3">
                <div class="col-start-3 col-end-4">
                    <div class="wrapper py-12 px-16">
                        <h5 class="uppercase">Our Testimonials</h5>
                        <blockquote>
                            <p>NetProphets has been instrumental in helping us scale our education infrastructure and improve access to students nationwide.</p>
                            <small>Keith Norman, Director, GTI System</small>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <olive-section />
    <section>
        <div class="container mx-auto py-8 overflow-auto">
            <div class="flex items-center gap-16">
                <figure><img src="/icons/fabindia.svg" alt=""></figure>
                <figure><img src="/icons/forevermark.svg" alt=""></figure>
                <figure><img src="/icons/symantec.svg" alt=""></figure>
                <figure><img src="/icons/rtah.svg" alt=""></figure>
                <figure><img src="/icons/sdae.svg" alt=""></figure>
                <figure><img src="/icons/sai.svg" alt=""></figure>
                <figure><img src="/icons/nicsi.svg" alt=""></figure>
                <figure><img src="/icons/satyamev.svg" alt=""></figure>
            </div>
        </div>
    </section>
</template>
<script setup>
import OliveSection from '@/components/OliveSection.vue'
import { ref } from 'vue'
import { motion } from "motion-v"
</script>
<style lang="scss" scoped>
.video1 {
    color: #FFF;
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;

    .content {
        width: 880px;
    }
}

.video2 {
    color: #fff;
    padding-top: 240px;

    .content {
        font-size: 24px;
        font-weight: 100;
        line-height: 38px;
        letter-spacing: -0.7px;
    }

    h2 {
        font-size: 110px;
        line-height: 100px;
        font-weight: 100;
        mix-blend-mode: overlay;
        letter-spacing: -3.3px;
    }
}

.about {
    color: $rich-black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.48px;

    h4 {
        font-size: 40px;
        font-weight: 100;
        line-height: 60px;
        letter-spacing: -1.2px;
    }

    .stats {
        color: $rich-black;
        font-size: 18px;
        line-height: 30px;

        .item {
            border-color: $grey-cf;
        }
    }

    .count {
        font-size: 100px;
        line-height: 90px;
        font-weight: 100;
        letter-spacing: -3px;
        @include text-primary-gradient;
    }

    .detail {
        /*font-weight: normal;*/
    }
}

.testimonials {
    background: url(../home/swastik-arora-unsplash.jpg) no-repeat center / cover;

    .wrapper {
        border-radius: 10px;
        background: rgba(17, 17, 17, 0.65);
        backdrop-filter: blur(10px);
        font-size: 1rem;
        line-height: 30px;
        color: #fff;
        letter-spacing: -0.5px;
    }

    h5 {
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: -0.4px;
    }

    blockquote {
        font-size: 30px;
        font-weight: 100;
        line-height: 45px;
        letter-spacing: -0.8px;

        small {
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
        }
    }
}
</style>