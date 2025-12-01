<template>
    <section class="w-full bg-white pt-24 md:pt-44 pb-10 blogsection">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Title -->
            <h1 class="mb-4 capitalize">
                {{pagetitle || `Static page`}}
            </h1>
            <!-- content -->
            <div class="solutions-hd">
                <p class="text-lg">1. Information We Collect</p>
                <p>We may collect the following types of information:</p>
                <ul>
                	<li>Personal Information – such as your name, email address, phone number, and company details when you fill out enquiry forms, request a catalogue, or contact us.</li>
                	<li>Usage Data – including your browser type, IP address, pages visited, and time spent on our site, collected through analytics tools and cookies.</li>
                	<li>Communication Data – messages, feedback, or correspondence you send to us via contact forms or email.</li>
                </ul>

            </div>
        </div>
    </section>
    <!--blogsection-->
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pagetitle = ref("")

onMounted(() => {
    pagetitle.value = route.name
})
</script>
<style lang="scss" scoped>
h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -3%;
}

.solutions-hd,
p {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 122%;
    letter-spacing: -0.48px;
}
.solutions-hd {
	p { margin-bottom: 0.5rem;}
	ul {
		list-style-type: disc;
		margin: 0.5rem 1.5rem;
		padding-left: 1rem;
	}
	ol {
		list-style-type: decimal;
		margin: 0.5rem 1.5rem;
		padding-left: 1rem;
	}
}

a {
    color: $primary1;
    text-decoration: underline;
}
</style>