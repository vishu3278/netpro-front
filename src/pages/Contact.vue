<template>
    <section class="contact pt-32 pb-16 lg:pt-46 lg:pb-36">
        <div class="container px-4 mx-auto">
            <div class="grid lg:grid-cols-2">
                <div class="mb-12 lg:mb-0">
                    <h1 class="title">Let’s Connect</h1>
                    <p class="subtitle">Tell us more about what you’re building and how we can help.</p>
                    <figure class="hidden lg:block max-w-[600px] mt-16 mb-16">
                        <img src="/logo-bg.svg" class="max-w-full" alt="">
                    </figure>
                </div>
                <div>
                    <motion.legend :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut'}" class="mb-11">Your info</motion.legend>
                    <div class="form">
                        <!-- <MotionConfig :transition="{ duration: 0.5, delay: 0.25, ease: 'easeOut' }"> -->
                            <div class="field-wrapper">
                                <input type="text" required :value="name" @input="event => name = event.target.value">
                                <label>Full name*</label>
                            </div>
                            <div class="field-wrapper">
                                <input type="email" required :value="email" @input="event => email = event.target.value">
                                <label>Your email*</label>
                            </div>
                            <div class="field-wrapper">
                                <input type="text" required :value="contact" @input="event => contact = event.target.value">
                                <label>Contact number*</label>
                            </div>
                            <!-- <div class="field-wrapper">
                            <input type="email" required  >
                            <label>Your email*</label>
                        </div> -->
                        <!-- </MotionConfig> -->
                    </div>
                    <motion.legend :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut'}" class="mb-11">How can we help?</motion.legend>
                    <div class="field-wrapper">
                        <textarea name="" id="" rows="6" v-model="query"> </textarea>
                        <label>
                            Tell us your design needs in detail
                        </label>
                    </div>
                    <div class="checkbox mt-8 mb-8 lg:mb-16">
                        <label>
                            <input type="checkbox" name="" id="" v-model="agree">
                            <span>Yes, I do. I agree to the Terms of Service and Privacy Policy.</span>
                        </label>
                    </div>
                    <div v-show="error" class="bg-rose-100 px-4 py-2 my-8 rounded-lg">{{error}}</div>
                    <div v-show="success" class="bg-teal-100 px-4 py-2 my-8 rounded-lg">Form submitted successfully</div>
                    <button class="button button-dark" @click="submitForm">Submit</button>
                </div>
                <div>
                    <motion.div :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0, transition: {duration: 1, delay: 0.5}}" class="mt-16 lg:mt-52">
                        <h2 class="address-title">Get in touch</h2>
                    </motion.div>
                </div>
                <div>
                    <div class="grid grid-cols-2 mt-4 lg:mt-52">
                        <address class="pb-4 lg:pb-10">
                            New Business.<br>
                            <strong>info@npglobal.in</strong>
                        </address>
                        <address class="pb-4 lg:pb-10">
                            Join the Team. <br>
                            <strong>jobs@npglobal.in</strong>
                        </address>
                    </div>
                </div>
                <div class="border-t border-gray-300"></div>
                <div class="border-t border-gray-300 grid grid-cols-2">
                    <address class="pt-4 lg:pt-10">
                        6th Floor, C-56 A/12,<br>
                        Sector 62, Noida,<br>
                        Uttar Pradesh 201301
                    </address>
                    <address class="pt-4 lg:pt-10">
                        0120-4784-999<br>
                    </address>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { motion, MotionConfig } from "motion-v"

const name = ref("")
const email = ref("")
const contact = ref("")
const query = ref("")
const agree = ref(false)

const error = ref(false)
const success = ref(false)

const submitForm = () => {
    console.info({name: name.value, email: email.value, contact: contact.value, query: query.value})
    // {name: "name", email: "email@domain.in", contact: "98764310", query: " multiline textarea query by client"}
    if (name.value && email.value && contact.value && query.value && agree.value) {
        success.value = true
        error.value = false
        name.value = ""
        email.value = "" 
        contact.value = "" 
        query.value = "" 
        agree.value = false
    } else {
        success.value = false
        error.value = "Fields value missing"
    }
}

</script>
<style lang="scss" scoped>
.contact {
    color: $rich-black;

    h1,
    .title {
        font-size: 34px;
        font-style: normal;
        font-weight: 100;
        line-height: 44px;
        letter-spacing: -1.02px;

    }

    .subtitle,
    .address-title {
        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 32px;
        letter-spacing: -0.72px;
    }

    .title,
    .subtitle {
        max-width: 500px;
    }

    legend {
        font-size: 24px;
        font-style: normal;
        font-weight: 100;
        line-height: 32px;
        letter-spacing: -0.72px;
    }

    h2 {

        font-size: 40px;
        font-weight: 100;
        line-height: 60px;
        letter-spacing: -1.2px;
    }

    address {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.42px;
    }

    @media screen and (width >=64rem) {
        .title {
            font-size: 80px;
            line-height: 90px;
            letter-spacing: -2.4px;
        }

        .subtitle {
            font-size: 24px;
            font-weight: 100;
            line-height: 38px;
            letter-spacing: -0.72px;
        }

        .address-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 100;
            line-height: 60px;
            letter-spacing: -1.2px;
        }

        legend {
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -1.2px;
        }

        address {
            font-size: 24px;
            line-height: 38px;
            letter-spacing: -0.72px;
            font-weight: 100;
        }

    }
}
</style>