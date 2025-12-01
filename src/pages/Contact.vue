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
                            <input type="text" required v-model="form.name">
                            <label>Full name*</label>
                            <p v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name }}</p>
                        </div>
                        <div class="field-wrapper">
                            <input type="email" required v-model="form.email">
                            <label>Your email*</label>
                            <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
                        </div>
                        <div class="field-wrapper">
                            <input type="text" required v-model="form.contact">
                            <label>Contact number*</label>
                            <p v-if="errors.contact" class="text-red-600 text-sm mt-1">{{ errors.contact }}</p>
                        </div>
                        <!-- <div class="field-wrapper">
                            <input type="email" required  >
                            <label>Your email*</label>
                        </div> -->
                        <!-- </MotionConfig> -->
                    </div>
                    <motion.legend :initial="{opacity: 0, y: '110%'}" :whileInView="{opacity: 1, y: 0}" :transition="{ease: 'easeOut'}" class="mb-11">How can we help?</motion.legend>
                    <div class="field-wrapper">
                        <textarea name="" id="" rows="6" v-model="form.query"> </textarea>
                        <label>
                            Tell us your design needs in detail
                        </label>
                        <p v-if="errors.query" class="text-red-600 text-sm mt-1">{{ errors.query }}</p>
                    </div>
                    <div class="checkbox mt-8 mb-8 lg:mb-16">
                        <label>
                            <input type="checkbox" name="" id="" v-model="form.agree">
                            <span>Yes, I do. I agree to the Terms of Service and Privacy Policy.</span>
                        </label>
                        <p v-if="errors.agree" class="text-red-600 text-sm mt-1">{{ errors.agree }}</p>
                    </div>
                    <div v-show="loading" class="my-8"><img src="/spinner.svg" class="animate-spin" alt=""></div>
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
                            <strong>hr@npglobal.in</strong>
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
import { ref, onMounted } from 'vue'
import { motion, MotionConfig } from "motion-v"
import { useHead } from '@unhead/vue'

useHead({
  title: 'Get In Touch For Digital Solution - NetProphets Cyberworks',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with us for top-notch web development services. Contact us to discuss your business needs and take your online presence to new heights.'
    },
    {
      property: 'og:title',
      content: 'Get In Touch For Digital Solution - NetProphets Cyberworks'
    },
    {
      property: 'og:description',
      content: 'Get in touch with us for top-notch web development services. Contact us to discuss your business needs and take your online presence to new heights.'
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})

const form = ref({
    name: '',
    email: '',
    contact: '',
    query: '',
    agree: false
})

const errors = ref({})

const agree = ref(false)

const loading = ref(false)
const error = ref(false)
const success = ref(false)
const apiurl = ref("")

// --- Validation rules ---
function validate() {
    errors.value = {} // reset errors

    // Name: required, at least 2 characters
    if (!form.value.name.trim()) {
        errors.value.name = 'Name is required.'
    } else if (form.value.name.length < 2) {
        errors.value.name = 'Name must be at least 2 characters.'
    }

    // Email: required and valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.value.email.trim()) {
        errors.value.email = 'Email is required.'
    } else if (!emailRegex.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address.'
    }

    // Age: required, must be a number and >= 18
    const contact = Number(form.value.contact)
    if (!form.value.contact) {
        errors.value.contact = 'contact is required.'
    } else if (isNaN(contact)) {
        errors.value.contact = 'contact must be a number.'
    } else if (form.value.contact.length < 10) {
        errors.value.contact = 'contact must be 10 digits.'
    }

    // Query
    if (form.value.query.length < 10) {
        errors.value.query = "Query should be more than 10 characters"
    }

    // Agree
    if (!form.value.agree) {
        errors.value.agree = "Agree to terms and conditions"
    }

    // If no errors, return true
    return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
    
    if (validate()) {
        // alert('Form submitted successfully!')
        console.log(form.value)

        // let formbody = { name: name.value, email: email.value, contact: contact.value, query: query.value }
        try {
            loading.value = true
            const res = await fetch(apiurl.value + '/contact', {
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(form.value)
            })
            console.log(res)
            if (!res.ok) throw new Error('Failed to submit form')
            success.value = await res.json()
            form.value = {
                name: '',
                email: '',
                contact: '',
                query: '',
                agree: false
            }
            errors.value = {}
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    } else {
        success.value = false
        // error.value = "Required values missing"
    }
}

onMounted(() => {
    apiurl.value =
        import.meta.env.VITE_API_BASE_URL
})
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