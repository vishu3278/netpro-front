<template>
    <section class="contact pt-32 pb-16 lg:pt-46 lg:pb-36">
        <div class="container px-4 mx-auto">
            <div class="grid lg:grid-cols-2">
                <div>
                    <h1 class="title">Let’s Connect</h1>
                    <p class="subtitle">Tell us more about what you’re building and how we can help.</p>
                    <figure class="max-w-[600px] mt-16 mb-16">
                        <img src="/logo-bg.svg" class="max-w-full" alt="">
                    </figure>
                </div>
                <div>
                    <motion.legend :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" class="mb-11">Your info</motion.legend>
                    <div class="form">
                        <MotionConfig :transition="{ duration: 0.5, delay: 0.25 }">
                            <motion.div :initial="{opacity: 0, y: '80%'}" :whileInView="{opacity: 1, y: 0}" class="field-wrapper">
                                <input type="text" required :value="name" @input="event => name = event.target.value">
                                <label>Full name*</label>
                            </motion.div>
                            <motion.div :initial="{opacity: 0, y: '80%'}" :whileInView="{opacity: 1, y: 0}" class="field-wrapper">
                                <input type="email" required :value="email" @input="event => email = event.target.value">
                                <label>Your email*</label>
                            </motion.div>
                            <motion.div :initial="{opacity: 0, y: '80%'}" :whileInView="{opacity: 1, y: 0}" class="field-wrapper">
                                <input type="text" required :value="contact" @input="event => contact = event.target.value">
                                <label>Contact number*</label>
                            </motion.div>
                            <!-- <div class="field-wrapper">
                            <input type="email" required  >
                            <label>Your email*</label>
                        </div> -->
                        </MotionConfig>
                    </div>
                    <motion.legend :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" class="mb-11">How can we help?</motion.legend>
                    <motion.div :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" class="field-wrapper">
                        <textarea name="" id="" rows="6"> </textarea>
                        <label>
                            Tell us your design needs in detail
                        </label>
                    </motion.div>
                    <motion.div :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" class="checkbox mt-8 mb-8 lg:mb-16">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Yes, I do. I agree to the Terms of Service and Privacy Policy.</span>
                        </label>
                    </motion.div>
                    <motion.button :initial="{opacity: 0, x: '150%'}" :whileInView="{opacity: 1, x: 0, transition: {delay: 0.5}}" class="button button-dark">Submit</motion.button>
                </div>
                <div>
                    <motion.div :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0, transition: {delay: 0.7}}" class="mt-16 lg:mt-52">
                        <h2>Get in touch</h2>
                    </motion.div>
                </div>
                <div>
                    <div class="mt-4 lg:mt-52">
                        <motion.address :initial="{opacity: 0, y: '110%', rotate: -15}" :whileInView="{opacity: 1, y: 0, rotate: 0, transition: {delay: 0.8}}" class="pb-4 lg:pb-10">
                            New Business.<br>
                            info@npglobal.in
                        </motion.address>
                    </div>
                </div>
                <div class="border-t border-gray-300"></div>
                <div class="border-t border-gray-300">
                    <motion.address :initial="{opacity: 0, y: '110%', rotate: 15}" :whileInView="{opacity: 1, y: 0, rotate: 0, transition: {delay: 0.9}}" class="pt-4 lg:pt-10">
                        6th Floor, C-56 A/12,<br>
                        Sector 62, Noida,<br>
                        Uttar Pradesh 201301
                    </motion.address>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { motion, MotionConfig } from "motion-v"

const name = ref("")
const email = ref("email@domain.com")
const contact = ref("")
</script>
<style lang="scss" scoped>
.contact {
    color: $rich-black;

    h1,
    .title {
        font-size: 80px;
        font-weight: 100;
        line-height: 90px;
        letter-spacing: -2.4px;
    }

    .subtitle {
        font-size: 24px;
        font-weight: 100;
        line-height: 38px;
        letter-spacing: -0.72px;
    }

    .title,
    .subtitle {
        max-width: 500px;
    }

    legend {
        font-size: 40px;
        font-style: normal;
        font-weight: 100;
        line-height: 60px;
        letter-spacing: -1.2px;
    }

    h2 {

        font-size: 40px;
        font-weight: 100;
        line-height: 60px;
        letter-spacing: -1.2px;
    }

    address {

        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 38px;
        letter-spacing: -0.72px;
    }
}
</style>