<template>
    <section class="video1 h-dvh relative overflow-clip">
        <video autoplay muted loop id="myVideo1" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/home/silhouette-of-a-sports-girl.mp4" type="video/mp4">
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
        <video autoplay muted loop id="myVideo2" class="absolute inset-0 w-full h-full object-cover object-center">
            <source src="/home/silhouette-engineer-and-inspector.mp4" type="video/mp4">
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
    <section id="aboutsection" class="about py-20">
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
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 0.75}" class="item border-t pb-12">
                            <div class="flex justify-between pt-12">
                                <div class="count">1B+</div>
                                <div class="detail">Investments in Digital Technology</div>
                            </div>
                        </motion.div>
                        <motion.div :initial="{opacity: 0, y: 100}" :whileInView="{ opacity: 1, y: 0 }" :transition="{delay: 1}" class="item border-t ">
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
    <section class="power py-24">
        <div class="container mx-auto px-4 md:px-0">
            <div class="title text-center">
                <h4>
                    Powering India
                </h4>
                <p>Digital infrastructure across India</p>
            </div>
            <div class="grid lg:grid-cols-5 gap-6 mt-16">
                <div class="col-start-1 col-end-3 ">
                    <div class="card-green relative">
                        <video autoplay muted loop id="motion2" class="absolute inset-0 w-full h-full object-cover object-center">
                            <source src="/home/motion-2.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="col-start-3 col-end-6">
                    <div class="card-white">
                        <p>Delivering Excellence State-by-State Across India</p>
                    </div>
                </div>
                <div class="col-start-1 col-end-4">
                    <div class="card-grey">
                        <p>Trusted Partnership that Makes an Impact</p>
                        <div class="grid grid-cols-3 gap-10 px-20 py-16 place-items-center">
                            <figure><img src="/icons/gem.svg" alt=""></figure>
                            <figure><img src="/icons/cel.svg" alt=""></figure>
                            <figure><img src="/icons/updesco.svg" alt=""></figure>
                            <figure><img src="/icons/ddu-gky.svg" alt=""></figure>
                            <figure><img src="/icons/becil.svg" alt=""></figure>
                            <figure><img src="/icons/railtel.svg" alt=""></figure>
                        </div>
                    </div>
                </div>
                <div class="col-start-4 col-end-6">
                    <div class="card-dark">
                        <p>Certified Excellence Our Trusted Credentials</p>
                        <div class="grid grid-cols-3 gap-10 my-24 px-10">
                            <div v-for="item in certified" :key="item.id" class="flex flex-col" >
                                <figure class="h-20 mb-4">
                                    <img :src="`/icons/${item.icon}`" class="mx-auto h-20 object-scale-down object-center" alt="">
                                </figure>
                                <label>{{item.title}}</label>
                            </div>
                            <!-- <figure>
                                <img src="/icons/cmmi5-color.svg" alt="">
                                <figcaption>CMMI Maturity Level-5</figcaption>
                            </figure>
                            <figure>
                                <img src="/icons/iso-color.svg" alt="">
                                <figcaption>ISO 9001:2015</figcaption>
                            </figure>
                            <figure>
                                <img src="/icons/pci-dss-color.svg" alt="">
                                <figcaption>CMMI Maturity Level-5</figcaption>
                            </figure> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="techsection" class="technology py-16 relative">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid lg:grid-cols-2 gap-8">
                <div>
                    <div class="title">Technology for change</div>
                    <div class="logo-bg">
                        <img src="/home/logo-bg-home.svg" class="w-full h-full object-contain" alt="">
                    </div>
                </div>
                <div>
                    <div id="accordion" class="accordion">
                        <div v-for="(item, index) in techFaq" :key="item.id" class="item pt-6 pb-10">
                            <div class="heading flex cursor-pointer" @click="toggle(index)">
                                <span class="count pt-2 basis-10 shrink-0">({{item.id}})</span>
                                <div class="ques grow">{{item.title}} <br><small>{{item.subtitle}}</small> </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" :id="`accicon-${index}`" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <g clip-path="url(#clip0_329_2)">
                                    <path d="M10 0V20" stroke="black" stroke-width="2"/>
                                    <path d="M0 10H20" stroke="black" stroke-width="2"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_329_2">
                                      <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg></div>
                            </div>
                            <div :id="`acc-${index}`" class="description overflow-clip px-10" v-html="item.description"></div>
                        </div>
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
    <section id="clientsection">
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
import { ref, onMounted } from 'vue'
import { motion } from "motion-v"
import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

const certified = ref([
    {id: "abc1234", icon: "cmmi5-color.svg", title: "CMMI Maturity Level-5"},
    {id: "pqr1234", icon: "pci-dss-color.svg", title: "CMMI Maturity Level-5"},
    {id: "zyx1234", icon: "iso-color.svg", title: "ISO 9001:2015"}
])
const techFaq = ref([
    {id: "01", title: "Technology Consulting", subtitle: "Advisory-driven solutions for systems that scale and serve.", description: "Service Includes /nProcess Strategy & Optimisation /nEnterprise Process Design /nBusiness Process Transformation /nSolution Architecture & Design /nSkills Development & Capacity Building /nChange Management support /nRegulatory & Compliance advisory"},
    {id: "02", title: "Technology Solutions (Tech Lab)", subtitle: "Building secure, scalable ecosystems that transform service delivery and strengthen governance.", description: "Service Includes /nProcess Strategy & Optimisation /nEnterprise Process Design /nBusiness Process Transformation /nSolution Architecture & Design /nSkills Development & Capacity Building /nChange Management support /nRegulatory & Compliance advisory"},
    {id: "03", title: "Product Engineering (Product Works)", subtitle: "Engineering scalable, customized products that streamline processes, empower institutions, and enhance operational efficiency.", description: "Service Includes /nProcess Strategy & Optimisation /nEnterprise Process Design /nBusiness Process Transformation /nSolution Architecture & Design /nSkills Development & Capacity Building /nChange Management support /nRegulatory & Compliance advisory"},
    {id: "04", title: "Digital Engine", subtitle: "Building powerful platforms, immersive digital experiences and targeted marketing to power engagement.", description: "Service Includes /nProcess Strategy & Optimisation /nEnterprise Process Design /nBusiness Process Transformation /nSolution Architecture & Design /nSkills Development & Capacity Building /nChange Management support /nRegulatory & Compliance advisory"},
    {id: "05", title: "Creative Works", subtitle: "Designing strategic identities, intuitive interfaces and visually engaging stories", description: "Service Includes /nProcess Strategy & Optimisation /nEnterprise Process Design /nBusiness Process Transformation /nSolution Architecture & Design /nSkills Development & Capacity Building /nChange Management support /nRegulatory & Compliance advisory"},
])
const openIndexes = ref([])
const toggle = (index) => {
    
    /*const tl = gsap.timeline()
    tl.to("#accicon-"+index, { rotation: 90, duration: 0.5, ease: "elastic" })
    tl.to("#acc-"+index, { maxHeight: "99rem", opacity: 1, marginTop: 32, duration: 1 })*/

    if (openIndexes.value.includes(index)) {
        openIndexes.value = openIndexes.value.filter(i => i !== index)
        // console.log(openIndexes.value)
        gsap.to("#acc-"+index, { maxHeight: 0, opacity: 0, margin: 0, duration: 1 })
        gsap.to("#accicon-"+index, { rotation: -90, duration: 1 })
        
    } else {
        openIndexes.value.push(index)
        gsap.fromTo("#acc-"+index, {maxHeight: 0, opacity: 0, margin: 0}, { maxHeight: "99rem", opacity: 1, marginTop: 32, duration: 2 })
        gsap.to("#accicon-"+index, { rotation: 90, duration: 1 })
    }
}

// animation
onMounted(() => {
    let abouttitle = SplitText.create("#aboutsection h4", {
        type: "lines",
        autoSplit: true,
        mask: "lines"
    })

    let abouttl = gsap.timeline();
    abouttl.from(abouttitle.lines, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.05,
    })
    let aboutst = ScrollTrigger.create({
        trigger: "#aboutsection",
        start: "top 80%",
        end: "bottom 20%",
        id: "aboutsection",
        markers: true,
        animation: abouttl,
    });

    let techtitle = SplitText.create("#techsection .title", {
        type: "words",
        autoSplit: true,
        mask: 'lines',
    });

    let techtl = gsap.timeline();
    techtl.from(techtitle.words, {
        rotationX: -100,
        transformOrigin: "50% 50%",
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.25,
    })
    techtl.from(".logo-bg img", {
        x: -200,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.25,
    })
    techtl.from("#accordion .item", {
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.25
    })

    let st = ScrollTrigger.create({
        trigger: "#techsection",
        start: "top 80%",
        end: "+=200",
        id: "techsection",
        // once: false,
        markers: true,
        animation: techtl,
    });
})
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
    background-color: $grey1;
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


.power {
    color: $rich-black;

    .title {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -1.8px;

        p {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;
        }
    }

    @mixin card() {
        border-radius: 20px;
        height: 400px;
        text-align: center;
        font-size: 1rem;
        line-height: 24px;
        font-weight: 600;
        letter-spacing: -0.5px;
        border: 1px solid transparent;
        padding-top: 2.25rem;
        padding-bottom: 1.5rem;
    }

    $card-colors: ("green": $olive2, "white": #fff, "grey": $grey1, "dark": $rich-black);

    @each $card, $color in $card-colors {
        .card-#{$card} {
            @include card();
            background-color: $color;

            @if $color == #fff {
                border-color: $grey2;
            } @else {
                border-color: $color;
            }

            @if $card == dark {
                color: #fff;
            }
        }
    }

    .card-dark {
        .subgrid {
        }
        figure {            
            
        }
        label {
            font-size: 13px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: -0.26px;
        }
    }
}

.technology {
    background-color: $grey1;
    .title {
        font-size: 80px;
        line-height: 90px;
        letter-spacing: -2.4px;
        @include text-primary-gradient;
    }
    .logo-bg {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 60%;
    }
    .accordion {
        .item {
            border-bottom: 1px solid $grey2;
            &:last-child {
                border-color: transparent;
            }
        }
        .count {
            font-size: 16px;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.48px;
        }
        .ques {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            letter-spacing: -0.6px;
            small {
                color: $grey-text;
                font-size: 18px;
                font-weight: 400;
                line-height: 26px;
                letter-spacing: -0.54px;
            }
        }
        .description {
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: -0.48px;
            max-height: 0;
            opacity: 0;
        }
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