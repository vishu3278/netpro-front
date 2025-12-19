<template>
    <section class="w-full bg-white pt-24 md:pt-50 pb-10 blogsection">
        <div class="container mx-auto px-4">
            <!-- Title -->
            <h1 class=" mb-8">
                Latest from the blogs
            </h1>
            <!-- Blog Banner -->
            <div class="relative rounded-2xl overflow-hidden bg-cover bg-center" :style="{backgroundImage: `url(${pageData?.featuredPost?.image || '/blog/featured.webp'})`}">
                <!-- Content Overlay -->
                <div class=" bg-gradient-to-r from-black/60 to-transparent px-8 pt-8 pb-8 md:px-14 md:pt-10 md:pb-20 ">
                    <!-- Featured Tag -->
                    <span class="rounded-full w-fit mb-4 text-white border border-white">
                        Featured
                    </span>
                    <div class="my-6 text-white ">
                        {{pageData?.featuredPost?.date}}
                    </div>
                    <div class="solutions-hd max-w-1/2">
                        <!-- Title -->
                        <h2 class="mb-3">
                            <!-- Staying ahead in the game <br> via Smart IT Solutions -->
                            {{pageData?.featuredPost?.title}}
                        </h2>
                        <!-- Description -->
                        <p class="max-w-md mb-6">
                            {{pageData?.featuredPost?.link}}
                        </p>
                        <div>
    						<router-link :to="`/blog/${pageData?.featuredPost?.link}`" class="featured-link">
    							Read More <img src="/blog/arrow-right.svg" alt="">
    						</router-link>
    					</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w-full bg-white py-8 md:pt-16 md:pb-20  blogpost-section">
        <div class="container mx-auto px-4">
            <div class="">
                <!-- Filters + View All -->
                <div class="flex justify-between items-center mb-10 border-b border-[#D7D7D7] pb-10">
                    <div class="flex gap-3 flex-wrap">
                        <button class="navtaps cursor-pointer bg-gray-900 !text-white">All Topics</button>
                        <button v-for="cat in pageData.taxonomy_list" :key="cat.id" :data-name="cat.id" class="navtaps cursor-pointer transition hover:bg-gray-100">{{cat.name}}</button>
                        <!-- <button class="navtaps">Blogs</button>
                        <button class="navtaps">News</button>
                        <button class="navtaps">Events</button>
                        <button class="navtaps ">Resources</button> -->
                    </div>
                    <a href="#" class="text-sm text-gray-600 hover:underline">
                        View All
                    </a>
                </div>
                <!-- Blog Grid -->
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Blog Card -->
                    <div v-for="blog in pageData.blogs" class="blog-card rounded-2xl flex flex-col justify-between overflow-hidden border border-gray-200 bg-white relative">
                        <figure class="relative">
                            <img :src="blog.image || '/blog/placeholder.jpg'" class="w-full object-cover aspect-[1.85/1]" alt="">
                            <span class="py-5 px-6">{{blog.date}}</span>
                        </figure>
                        <p class="mb-auto pt-6 px-6 line-clamp-4">
                            {{blog.title}}
                        </p>
                        <div class="p-6 ">
                            <router-link :to="'/blog/'+blog.link" class="text-sm inline-flex items-center gap-2">
                                Read More <img src="/blog/arrow-right-solid.svg" alt="read more">
                            </router-link>
                        </div>
                        <template v-for="cat in blog.taxonomy">
                            <input type="hidden" name="cat" :value="cat.category_id">
                        </template>
                            
                    </div>
                    <!-- Blog Card -->
                    <!-- <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white relative">
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
                    </div> -->
                </div>
                <!-- Load More -->
                <div class="text-center mt-10">
                    <button type="button" class="btn text-sm ">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { motion } from "motion-v"
import { useHead } from '@unhead/vue'

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

        const res = await fetch(apiurl.value + '/blogs', {
            method: "GET",
            headers: {
                "X-Content-Type-Options": "nosniff"
            }
        })
        // console.log(res.data)
        if (!res.ok) throw new Error('Failed to fetch page data')
        let apidata = await res.json()
        // console.log(apidata.data)
        pageData.value = apidata.data
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
h1 {
    color: #000;
    font-size: 60px;
    font-weight: 100;
    line-height: 80px;
    letter-spacing: -1.8px;
}

.blogsection {

    span {
        display: inline-flex;
        padding: 6px 20px;
        font-size: 14px;
        font-weight: 600;
        line-height: 30px;
    }

    h2 {
        color: #fff;
        font-size: 40px;
        font-weight: 600;
        line-height: 45px;
        letter-spacing: -1.2px;
    }

    p {
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: -0.42px;
    }

    a {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.48px;
        display: flex;
        align-items: center;
        gap: 0px 10px;
    }
    .featured-link {
        &:hover {
            img { margin-left: 0.5rem; transition: all 200ms ease-out;}
        }
    }
}

.blogpost-section {

    p {
        color: $rich-black;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 38px;
        letter-spacing: -0.72px;
    }

    a {
        color: $rich-black;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.48px;
    }

    button.btn {
        display: inline-flex;
        height: 55px;
        padding: 6px 20px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 55px;
        background: $rich-black;
        color: #FFF;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.54px;
        cursor: pointer;
    }


    .navtaps {
        color: $grey-text;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.54px;
        border-radius: 55px;
        border: 1px solid $border1;
        display: inline-flex;
        height: 55px;
        padding: 6px 20px;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }


}

.blog-card {
    span {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.42px;
        display: block;
        position: absolute;
        top: 0px;
    }
    a:hover {
        img { margin-left: 0.5rem; transition: all 200ms ease-out;}
    }
}
</style>