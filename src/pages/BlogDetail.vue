<template>
    <section class="w-full bg-white pb-4 pt-24 md:pt-50 blogdetail-page">
        <div class="max-w-4xl mx-auto px-4">
            <div class="max-w-3xl mx-auto">
                <!-- Category -->
                <h6 class=" mb-4">
                    LATEST BLOG
                </h6>
                <!-- Title -->
                <h1 class="mb-4">
                    {{pageData.title}}
                </h1>
                <!-- Short Intro -->
                <div class="flex flex-wrap items-center gap-4 mb-2 justify-between">
                    <div class="w-[482px]  ">
						<p class="mb-6 text-[#5F5F5F] text-base leading-relaxed">{{pageData.excerpt}}
						</p>
                            
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <a href="#">
                            <img src="/blog/share.svg" alt="Share" class="w-5 h-5">
                        </a>
                        <a href="#">
                            <img src="/blog/bookmark.svg" alt="Icon" class="w-5 h-5">
                        </a>
                    </div>
                </div>
                
                <div class="flex flex-wrap items-center gap-4 mb-2">
                    <span>Published in Blog on {{pageData.published_date}} </span>
                    <span>|</span>
                    <span>Last Updated on {{pageData.updated_date}}</span>
                    <span>|</span>
                </div>
                <div>
                    <span>15 mins read</span>
                </div>
            </div>
            <!-- Blog Main Image -->
            <div class=" overflow-hidden mb-10 mt-5">
                <img :src="pageData.featured_image || '/blog/placeholder.jpg'" class="w-full " alt="">
            </div>
            <div class="max-w-3xl mx-auto blog-content">
                <div v-html="pageData.content"></div>
                
                <!-- <p class="mb-6">
                    Selecting the right e-commerce platform is a crucial decision that can define your brand’s
                    online success. Among the various platforms available, Shopify and BigCommerce consistently
                    stand out due to their distinct advantages in terms of features, pricing, and scalability.
                </p>
                <p class="mb-6">
                    To understand the relevance of this choice, consider this: According to the Semrush report,
                    global e-commerce traffic reached nearly 25.5 billion in early 2023. Statista further projects
                    that the global e-commerce market will reach US$6.32 trillion by 2025, with a compound annual
                    growth rate (CAGR) of 20.8%, and it is expected to grow to a massive US$8.69 trillion by 2026.
                </p>
                <p class="mb-6">
                    With e-commerce competition at an all-time high, selecting a platform that aligns with your
                    business requirements is crucial. Keep reading the blog to get a clear understanding of
                    everything you need to know, from key features and pricing comparisons to pros and cons,
                    to help you choose the best platform for selling online.
                </p>
                <h5 class="mb-3">
                    Key Features and Strengths
                </h5>
                <ul class="list-disc pl-6 space-y-2">
                    <li>User-friendly drag-and-drop store builder.</li>
                    <li>Safe and flexible payment options.</li>
                    <li>Design that is responsive on mobile devices.</li>
                    <li>A vast marketplace for apps and integrations.</li>
                    <li>Robust SEO and marketing tools.</li>
                    <li>Customer support is available 24/7.</li>
                    <li>Selling across multiple channels, including social media and marketplaces.</li>
                </ul> -->
            </div>
            <!-- <div class=" overflow-hidden mb-10 mt-5">
                <img src="/blog/blog-banner.webp" class="w-full object-cover" alt="">
            </div> -->
            <!-- <div class="max-w-3xl mx-auto">
                <h5 class="mb-3">1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                <p class="mb-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source.</p>
                <h5 class="mb-3">2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source.</p>
                <p class="mt-8 mb-3 text-[#5F5F5F] w-[582px] font-sans text-[14px] leading-relaxed">
                    Bill Wagner is a command and control, and financial industry technology consultant with
                    over 30 years’ experience as an industry executive in hardware, software, engineering, operations,
                    R&D, product development and introduction, and strategic development.
                </p>
                <div class="flex items-center gap-4">
                    <p class="text-[#5F5F5F] font-sans text-[14px] leading-relaxed">Share this article</p>
                    <a href="#">
                        <img src="/blog/x.svg" alt="Share" class="w-5 h-5">
                    </a>
                    <a href="#">
                        <img src="/blog/linkedin.svg" alt="Icon" class="w-5 h-5">
                    </a>
                    <a href="#">
                        <img src="/blog/facebook.svg" alt="Icon" class="w-5 h-5">
                    </a>
                </div>
            </div> -->
        </div>
    </section>
    <section class="py-20 px-4">
        <div class="container mx-auto px-4">
            <!-- Header -->
            <div class="flex justify-between items-center mb-10 border-t border-[#D7D7D7] pt-10">
                <h4 class="">Read More</h4>
                <div class="flex space-x-4">
                    <button class="">
                        <img src="/left-arrow.svg" alt="">
                    </button>
                    <button class="">
                        <img src="/right-arrow.svg" alt="">
                    </button>
                </div>
            </div>
            <!-- Blog Grid -->
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Blog Card -->
                <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white relative">
                    <img src="/blog/blog-banner.webp" class="w-full object-cover" alt="">
                    <div class="p-6">
                        <span class="py-6">15 May 2024</span>
                        <p class="mb-6">
                            Glimpse of NetProphets at Intersec Italy 2024
                        </p>
                        <a href="#" class="text-sm inline-flex items-center gap-2">
                            Read More <img src="/blog/arrow-right-solid.svg" alt="">
                        </a>
                    </div>
                </div>
                <!-- Blog Card -->
                <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white relative">
                    <img src="/blog/blog-banner.webp" class="w-full object-cover" alt="">
                    <div class="p-6">
                        <span class="py-6">15 May 2024</span>
                        <p class="mb-6">
                            The power of secure system for access management
                        </p>
                        <a href="#" class="text-sm inline-flex items-center gap-2">
                            Read More <img src="/blog/arrow-right-solid.svg" alt="">
                        </a>
                    </div>
                </div>
                <!-- Blog Card -->
                <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white relative">
                    <img src="/blog/blog-banner.webp" class="w-full object-cover" alt="">
                    <div class="p-6">
                        <span class="py-6">15 May 2024</span>
                        <p class="mb-6">
                            BigCommerce vs Shopify: Which Platform Is Right for You in 2025?
                        </p>
                        <a href="#" class="text-sm inline-flex items-center gap-2">
                            Read More <img src="/blog/arrow-right-solid.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { motion } from "motion-v"
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(false)
const pageData = ref({})
const metaData = ref({})
const error = ref(false)
const apiurl = ref("")

useHead({
    title: metaData.value?.meta_title || 'NetProphets blogs',
    meta: [{
            name: 'description',
            content: () => metaData.value?.meta_description
        },
        {
            property: 'og:title',
            content: () => metaData.value?.meta_title
        },
        {
            property: 'og:description',
            content: () => metaData.value?.meta_description
        },
        {
            property: 'og:image',
            content: '/logo.svg'
        }
    ]
})

const emit = defineEmits(['loading'])

onBeforeMount(async () => {

    apiurl.value =
        import.meta.env.VITE_API_BASE_URL;

    try {
        loading.value = true
        emit('loading', true)

        const res = await fetch(apiurl.value + '/blog/' + route.params.id, {
            method: "GET",
            headers: {
                "X-Content-Type-Options": "nosniff"
            }
        })
        // console.log(res.data)
        if (!res.ok) throw new Error('Failed to fetch page data')
        let apidata = await res.json()
        // console.log(apidata.data)
        pageData.value = apidata
        metaData.value = apidata.meta

    } catch (err) {
        error.value = err.message
        // sectors.value.sectors = default_sectors
    } finally {
        loading.value = false
        emit('loading', false)
    }
})
</script>
<style lang="scss" scoped>
h6 {
    background: var(--Highlight-Stroke, linear-gradient(98deg, #171EEC 7.56%, #7000D9 93.65%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
}

h1 {
    color: $rich-black;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -1.2px;
}

.blog-content p,
p {
    color: $rich-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
}

h4 {
    color: $rich-black;
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
}

span {
    color: #5F5F5F;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.42px;
}

h5,
li {
    color: $rich-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
}

h5 {
    font-weight: 600;
}
.blog-content {
	color: $grey-text;
	p {
		margin-bottom: 1rem;
	}
}
</style>