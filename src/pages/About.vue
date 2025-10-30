<template>
    <section class="about-section pt-60 pb-10 w-full bg-white">
        <div class="container mx-auto relative">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                <!-- Left: Heading -->
                <div class="md:w-1/2">
                    <h2>
                        Building technology that
                        transforms India and improves
                        the everyday lives of the citizens
                    </h2>
                </div>
                <!-- Right: Paragraphs -->
                <div class="md:w-1/3">
                    <p>
                        For over 25 years, we’ve been building technology that quietly powers lives—helping
                        students learn, citizens access services, and public systems work better. Our journey
                        has taken us across five continents, working with governments, global institutions, and
                        changemakers. Through it all, one belief keeps us grounded: innovation means nothing
                        unless it uplifts people.
                    </p>
                    <p>
                        With 850+ dedicated minds behind us, we don’t just create digital solutions—we stand beside
                        our partners to solve real problems, shape better futures, and build systems that serve
                        society with purpose.
                    </p>
                </div>
            </div>
            <div class="about-banner py-8">
                <img src="/about/about-banner.jpg" alt="" class="max-w-full rounded-2xl">
            </div>
        </div>
    </section>
    <!---about-section-->
    <section class="our-mission pb-20">
        <div class="container mx-auto relative">
            <div class="our-heading text-center mb-10">
                <h6>Our Mission</h6>
                <h3 class="max-w-[998px] mx-auto">
                    At the heart of what we do is a belief technology must serve people, not just systems.
                </h3>
            </div>
        </div>
        <!-- <div class="flex flex-col gap-6 md:flex-row md:gap-8 justify-center items-start">
            <div class="overflow-hidden w-full md:w-1/5">
                <img src="/about/school-children.jpg" alt="Education" class="w-full h-48 object-cover rounded-2xl">
                <div class=" py-4">
                    <p>
                        To track and prevent student drop out and enable policy action to identify literacy trends.
                    </p>
                </div>
            </div>
            <div class="overflow-hidden w-full md:w-1/5">
                <img src="/about/heath-education.jpg" alt="Health" class="w-full h-48 object-cover rounded-2xl">
                <div class=" py-4">
                    <p>
                        Enabling skilled and providing accessible health education in remote areas.
                    </p>
                </div>
            </div>
            <div class="overflow-hidden w-full md:w-1/5">
                <img src="/about/sporting.jpg" alt="Sports" class="w-full h-48 object-cover rounded-2xl">
                <div class=" py-4">
                    <p>
                        Bringing transparency to sporting information, allowing sportspersons to focus on performance.
                    </p>
                </div>
            </div>
            <div class="overflow-hidden w-full md:w-1/5">
                <img src="/about/driving.jpg" alt="Transport" class="w-full h-48 object-cover rounded-2xl">
                <div class=" py-4">
                    <p>
                        Delivering driving licenses without queues and bureaucratic hurdles.
                    </p>
                </div>
            </div>
            <div class="overflow-hidden w-full md:w-1/5">
                <img src="/about/helping-decision.jpg" alt="Workplace" class="w-full h-48 object-cover rounded-2xl">
                <div class="py-4">
                    <p>
                        Enhancing outcomes and helping decision makers in the workplace.
                    </p>
                </div>
            </div>
        </div> -->
        <AboutCarousel />
    </section>
    <!--our-mission-->
    <section class=" py-40 expertise">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <!-- Left Image -->
            <div class="frameimg md:w-1/3 flex justify-center">
                <img src="/frame-bg.svg" alt="Frame background" class="max-w-full object-cover">
            </div>
            <!-- Right Content -->
            <div class="md:w-1/2 space-y-8 pr-60">
                <!-- Why we do it -->
                <div>
                    <h5 class=" mb-2">Why we do it</h5>
                    <p class="leading-relaxed">
                        To create digital infrastructure that empowers governments, enables institutions, and improves everyday
                        lives. Because when technology works for citizens, society moves forward.
                    </p>
                </div>
                <hr class="border border-[#BEE66A]">
                <!-- How we do it -->
                <div>
                    <h5 class=" mb-2">How we do it</h5>
                    <p class="leading-relaxed">
                        With deep expertise, agile systems, and the scale to solve for India. Every product we build carries public
                        purpose at its core—designed to be secure, scalable, and meaningful.
                    </p>
                </div>
                <hr class="border border-[#BEE66A]">
                <!-- What Keeps Us Going -->
                <div>
                    <h5 class=" mb-2">What Keeps Us Going</h5>
                    <p class="leading-relaxed">
                        Seeing a student get access to learning. Watching a citizen solve a need without friction. Knowing our work
                        makes lives easier—that’s what drives us.
                    </p>
                </div>
                <!-- Button -->
                <div>
                    <router-link to="/service" class="button button-dark"> View our Services</router-link>
                </div>
            </div>
        </div>
    </section>
    <!--expertise-->
    <section class="py-40 impactful">
        <div class="container mx-auto">
            <!-- Heading Section -->
            <div class="mb-12">
                <h2 class="">How do we achieve such impactful results?</h2>
                <p class="max-w-[940px]">Real impact begins with the people who build it. At NetProphets, we seek out
                    talent with purpose, grow them over time, and create space for them to thrive—because strong systems are built
                    by stronger teams.</p>
            </div>
            <!-- Mentors Section -->
            <div class="image-move flex flex-col md:flex-row items-center justify-between border-t border-b border-[#D7D7D7] relative overflow-clip">
                <div class="md:w-1/2 text-center md:text-left py-12">
                    <h3 class="">Mentors, Not Managers</h3>
                    <p class="max-w-[500px]">We guide careers with care—through coaching, not control.</p>
                </div>
                <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                    <img src="/about/Managers.jpg" alt="Mentoring" class="max-w-full h-full object-contain">
                </div>
                <!-- <output class=" output absolute z-10 inset-1/2 w-max h-fit bg-lime-500 px-2 py-1 rounded-lg">mouse position</output> -->
            </div>
            <!-- Growth Section -->
            <div class="image-move flex flex-col md:flex-row items-center justify-between border-b border-[#D7D7D7] relative overflow-clip">
                <div class="md:w-1/2 text-center md:text-left py-12">
                    <h3 class="">Growth, Built In</h3>
                    <p class="max-w-[500px]">Skill-building isn’t optional here—it’s part of <br> how we work and grow.</p>
                </div>
                <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                    <img src="/about/Managers.jpg" alt="Mentoring" class="max-w-full h-full object-contain">
                </div>
            </div>
            <!-- Beyond Project Section -->
            <div class="image-move flex flex-col md:flex-row items-center justify-between border-b border-[#D7D7D7] relative overflow-clip">
                <div class="md:w-1/2 text-center md:text-left py-12">
                    <h3 class="">Beyond the Project</h3>
                    <p class="max-w-[500px]">People here don’t get stuck—they lead, learn, and grow across teams and challenges.</p>
                </div>
                <div class=" opacity-0 absolute image w-1/3 h-full scale-110">
                    <img src="/about/Managers.jpg" alt="Mentoring" class="max-w-full h-full object-contain">
                </div>
            </div>
        </div>
    </section>
    <!---impactful-->
    <section class="our-leadership py-30 bg-[#121212]">
        <div class="container mx-auto px-38">
            <h2 class="mb-8 text-center "><span class="text-white">Our Leadership</span> </h2>
            <!-- Leadership Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <!-- Leader Card (Repeat for each person) -->
                <div v-for="(lead, index) in leaders" :key="lead.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img :src="bUrl+lead.img" :alt="lead.name" class="w-full h-64 object-cover">
                    <div class="p-8">
                        <h5 class="">
                            <span>{{lead.name}}</span>
                        </h5>
                        <p class="">
                            <span>{{lead.position}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-24 pb-20 partnering">
        <div class="container mx-auto px-4">
            <div class=" ">
                <h4 class="text-center mb-14">Partnering With Visionaries Across Continents</h4>
                <div class="grid grid-cols-8 gap-8 items-center place-items-center">
                    <figure><img src="/icons/forevermark.svg" alt="forevermark"></figure>
                    <figure><img src="/icons/symantec.svg" alt="symantec"></figure>
                    <figure><img src="/icons/rtah.svg" alt="Road Transport and Highways"></figure>
                    <figure><img src="/icons/sdae.svg" alt="sdae"></figure>
                    <figure><img src="/icons/satyamev.svg" alt="Satyamev Jayate"></figure>
                    <figure><img src="/icons/fabindia.svg" alt=""></figure>
                    <figure><img src="/icons/nicsi.svg" alt="nicsi"></figure>
                    <figure><img src="/icons/sai.svg" alt="sai"></figure>
                    <figure><img src="/icons/bbc-world.svg" alt="bbc-world"></figure>
                    <figure><img src="/icons/shree-air.svg" alt="shree airlines"></figure>
                    <figure><img src="/icons/reckitt.svg" alt="reckitt"></figure>
                    <figure><img src="/icons/airtel.svg" alt="airtel"></figure>
                    <figure><img src="/icons/ra-spect.svg" alt="ra-spect"></figure>
                    <figure><img src="/icons/ojas-art.svg" alt="ojas-art"></figure>
                    <figure><img src="/icons/breakthrough.svg" alt="breakthrough"></figure>
                    <figure><img src="/icons/mp-shasan.svg" alt="mp shasan"></figure>
                </div>
            </div>
        </div>
    </section>
    <olive-section title="Let’s Build Something That Matters" btn-text="Let’s Talk" btn-link="/contact" />
</template>
<script setup>
import OliveSection from "@/components/OliveSection.vue"
import AboutCarousel from "@/components/AboutCarousel.vue"
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

let bUrl = ref("")
// const heroRef = ref(null)
let ctx

onMounted(() => {
    console.log('About Base URL:',
        import.meta.env.VITE_APP_BASE_URL)
    // bUrl.value = import.meta.env.VITE_APP_BASE_URL
    bUrl.value = localStorage.getItem("base_url")

    // const hero = heroRef.value
    

    /*const handleMouseEnter = (e) => {
        console.info("mouse enter")
    }*/

    // ctx = gsap.context(() => {
        const heros = document.querySelectorAll(".impactful .image-move")

        heros.forEach(hero => {
            // console.log(hero)
            const image = hero.querySelector('.image')
            // const output = document.querySelector('.output')

            let moveTween = null
            let resetTween = null


            const handleMouseMove = (e) => {
                const rect = hero.getBoundingClientRect()
                // console.info(rect, e.clientX, e.clientY)
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const moveX = (x - centerX) / 2
                const moveY = (y - centerY) / 2

                // output.textContent = `${rect} -> ${moveX} - ${moveY}`

                if (moveTween) moveTween.kill()
                if (resetTween) resetTween.kill()

                moveTween = gsap.to(image, { x: moveX * 1.25, y: moveY / 5, duration: 1.2, scale: 1.5, opacity: 1, ease: 'power3.out' })
                // gsap.to(output, { x: moveX, y: moveY, duration: 0.6 })
            }
            const killMouseMove = (e) => {
                console.info("mouse leave => remove event listener")
                if (moveTween) moveTween.kill()
                resetTween = gsap.to(image, { x: 0, y: 0, duration: 0.8, scale: 1.1, opacity: 0, ease: 'power2.out' })
                hero.removeEventListener('mousemove', function() {
                    console.info("mouse leave => remove event listener")
                })
                // ctx && ctx.revert()
            }
            
            hero.addEventListener('mousemove', handleMouseMove)
            hero.addEventListener("mouseleave", killMouseMove)
            // hero.addEventListener("mouseenter", handleMouseEnter)
        })

    // }, heroRef)

    onBeforeUnmount(() => {
        // hero.removeEventListener('mousemove', handleMouseMove)
        // ctx && ctx.revert()
        // hero.removeEventListener('mousemove', handleMove)
        // hero.removeEventListener('mouseleave', handleLeave)
        // if (moveTween) moveTween.kill()
        // if (resetTween) resetTween.kill()
        console.info("before unmount")
    })
})

const leaders = ref([
    { id: 1, name: "Amitabh Vira", position: "Chief Executive Officer, Founder and Director", img: "/about/saurabh-rajpal.png" },
    { id: 2, name: "Saurabh Rajpal", position: "Chief Executive Officer, Co-Founder and Director", img: "/about/saurabh-rajpal.png" },
    { id: 3, name: "Aditya Kandukuri", position: "Chief Operating Officer", img: "/about/saurabh-rajpal.png" },
    { id: 4, name: "Dipesh Tiwari", position: "Vice President Digital Services", img: "/about/saurabh-rajpal.png" },
    { id: 5, name: "Gaurav Arora", position: "Vice President Enterprise Business Services", img: "/about/saurabh-rajpal.png" },
    { id: 6, name: "Ashish Chauhan", position: "Vice President Government Sector", img: "/about/saurabh-rajpal.png" },
    { id: 7, name: "Aditya Kandukuri", position: "Chief Operating Officer", img: "/about/saurabh-rajpal.png" },
    { id: 8, name: "Dipesh Tiwari", position: "Vice President Digital Services", img: "/about/saurabh-rajpal.png" },
    { id: 9, name: "Saurabh Rajpal", position: "Chief Executive Officer, Co-Founder and Director", img: "/about/saurabh-rajpal.png" },

])
</script>
<style lang="scss" scoped>
h2,
h3 {
    color: $rich-black;
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
}

h6 {
    /*background: var(--Highlight-Stroke, linear-gradient(98deg, #171EEC 7.56%, #7000D9 93.65%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;*/
    @include text-primary-gradient;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -3%;
}

p {
    color: $rich-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.48px;
}


h5 {
    color: $rich-black;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.72px;
}

h5 span {
    font-weight: 600;
}

h4 {
    color: #000;
    font-size: 40px;
    font-weight: 100;
    line-height: 60px;
    letter-spacing: -1.2px;
    color: #000;

}

.expertise {
    background: $olive2;
    backdrop-filter: blur(30px);

    p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.54px;
    }
}

.impactful {
    p {
        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 38px;
        letter-spacing: -0.72px;

    }
    .image {
        /*top: 0;
        bottom: 0;
        right: 0;*/
        inset-inline: 50%;
        height: 120%;
    }
}
</style>