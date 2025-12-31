<template>
    <section class="w-full bg-white pt-24 md:pt-44 pb-10 blogsection">
        <div class="max-w-6xl mx-auto px-4 md:px-6">
            <!-- Title -->
            <h1 class="mb-8 ">
                {{pageData.title || route.name}}
            </h1>
            <!-- content -->
            <div class="solutions-hd" v-html="pageData.content">
            </div>
        </div>
    </section>
    <!--blogsection-->
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const route = useRoute()
const apiurl = ref("")
// const pagetitle = ref("")
const pageData = ref({})
const loading = ref(true) // 👈 track loading state
const error = ref(null)

const emit = defineEmits(['loading'])

useHead({
  title: () => pageData.value?.meta_title || 'NetProphets',
    link: [ { rel: 'canonical', href: () => `https://netprophetsglobal.com${route.fullPath}` } ],
  meta: [
    {
      name: 'description',
      content: () => pageData.value?.meta_description
    },
    {
      property: 'og:title',
      content: () => pageData.value?.meta_title
    },
    {
      property: 'og:description',
      content: () => pageData.value?.meta_description
    },
    {
      property: 'og:image',
      content: '/logo.svg'
    }
  ]
})

watch(
    () => route.path,
    (newId, oldId) => {
        fetchData()
    }
)

onMounted(async () => {
    apiurl.value =
        import.meta.env.VITE_API_BASE_URL + route.path
    // console.log("mounted", route.params.id)
    fetchData()
    // product.value = products.find(p => p.id === parseInt(route.params.id))
})

const fetchData = async () => {

    try {
        loading.value = true
        emit('loading', true)

        const res = await fetch(apiurl.value, {
            method: "GET",
            headers: {
                "X-Content-Type-Options": "nosniff"
            }
        })
        // console.log(res.data)
        if (!res.ok) throw new Error('Failed to fetch page data')
        let apidata = await res.json()
        // console.log('sector detail',apidata)
        pageData.value = apidata.data

    } catch (err) {
        error.value = err.message
        // sectors.value.sectors = default_sectors
    } finally {
        loading.value = false
        emit('loading', false)

    }
}
</script>
<style lang="scss" scoped>
h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.48px;
}

.solutions-hd {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 122%;
    letter-spacing: -0.48px;
}

.solutions-hd {
    p {
        margin-bottom: 0.75rem;
    }

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

@media screen and (width >=64rem) {
    h1 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -1.2px;
    }
}
</style>