<script setup>
    import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate} from 'vue-router'
import { motion } from 'motion-v'
import { viewport } from '@/composables/useBreakpoints'

const { isMobile, activeBreakpoint } = viewport

/*defineProps({
    mobileMenu: false,
})*/

const isOpen = ref(false)
const route = useRoute()

const closeMenu = () => (isOpen.value = false)
const mobileLinks = [
    {label: "Home", link: "/"},
    {label: "About", link: "/about"},
    {label: "Sectors", link: "/sector"},
    {label: "Services", link: "/service"},
    // {label: "Blog", link: "/blog"},
    {label: "Contact", link: "/contact" },
]
watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId)
    isOpen.value = false
  }
)
/*onBeforeRouteUpdate(async (to, from) => {
  // react to route changes...
  // userData.value = await fetchUser(to.params.id)
    console.log(to)
})*/
</script>
<template>
    <header class="fixed z-30 ">
        <nav class="flex justify-between lg:justify-center items-center px-4 relative">
            <router-link class="nav-link logo shrink-0" to="/"><img src="/logo.svg" alt="NetProphets Cyberworks"></router-link>
            <button type="button" class="mobile-trigger md:hidden" @click="() => isOpen = !isOpen">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                    <path d="M28.5938 0H1.40625C1.03329 0 0.675604 0.144987 0.411881 0.403064C0.148158 0.661142 0 1.01117 0 1.37615C0 1.74112 0.148158 2.09115 0.411881 2.34923C0.675604 2.60731 1.03329 2.75229 1.40625 2.75229H28.5938C28.9667 2.75229 29.3244 2.60731 29.5881 2.34923C29.8518 2.09115 30 1.74112 30 1.37615C30 1.01117 29.8518 0.661142 29.5881 0.403064C29.3244 0.144987 28.9667 0 28.5938 0Z" fill="#121212" />
                    <path d="M28.5938 17.248H1.40625C1.03329 17.248 0.675604 17.393 0.411881 17.6511C0.148158 17.9092 0 18.2592 0 18.6242C0 18.9892 0.148158 19.3392 0.411881 19.5973C0.675604 19.8554 1.03329 20.0003 1.40625 20.0003H28.5938C28.9667 20.0003 29.3244 19.8554 29.5881 19.5973C29.8518 19.3392 30 18.9892 30 18.6242C30 18.2592 29.8518 17.9092 29.5881 17.6511C29.3244 17.393 28.9667 17.248 28.5938 17.248Z" fill="#121212" />
                    <path d="M28.5938 8.62402H1.40625C1.03329 8.62402 0.675604 8.76901 0.411881 9.02709C0.148158 9.28516 0 9.63519 0 10.0002C0 10.3651 0.148158 10.7152 0.411881 10.9733C0.675604 11.2313 1.03329 11.3763 1.40625 11.3763H28.5938C28.9667 11.3763 29.3244 11.2313 29.5881 10.9733C29.8518 10.7152 30 10.3651 30 10.0002C30 9.63519 29.8518 9.28516 29.5881 9.02709C29.3244 8.76901 28.9667 8.62402 28.5938 8.62402Z" fill="#121212" />
                </svg>
            </button>
            <div v-if="!isMobile" class="links-wrap ">
                <router-link class="nav-link" to="/about">Who we are</router-link>
                <router-link class="nav-link" to="/sector">Sector Impact</router-link>
                <router-link class="nav-link" to="/service">Services we offer</router-link>
                <router-link class="nav-link contact border rounded-full" to="/contact">Get in Touch</router-link>
            </div>
        </nav>
    </header>
    <motion.div v-if="isOpen && isMobile" :animate="{'left': 0, opacity: 1, transition: {ease: 'backOut'}}" class="mobile-menu flex flex-col justify-between fixed inset-0 left-full opacity-0 z-40 bg-black  px-4 pt-4 pb-6">
        <div class="flex items-center justify-between">
            <div class="logo">
                <img src="/footer-logo-white.svg" class="max-w-[154px]" alt="logo">
            </div>
            <button class="close-button py-2 px-6" @click="closeMenu">
                Close
            </button>
        </div>
        <div class="links-wrap flex flex-col">
            <router-link class="text-base inline-flex items-center mb-12">Let's talk <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <g clip-path="url(#clip0_1829_1230)">
                        <path d="M13.9265 8.46224L12.5637 13.5483L13.8904 13.8854L15.8891 6.42586L8.42958 4.42708L8.07076 5.76624L13.1397 7.12445L4.24047 12.2624L5.01019 13.5956L13.9265 8.46224Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1829_1230">
                            <rect width="15.0435" height="15.0435" fill="white" transform="translate(7.52174 20.5498) rotate(-120)" />
                        </clipPath>
                    </defs>
                </svg></router-link>
            <router-link v-for="item in mobileLinks" :key="item.label" class="nav-link" :to="item.link" @click="closeMenu">{{item.label}}</router-link>
        </div>
        <ul class="social">
            <li>
                <a href="#">LinkedIn</a>
            </li>
            <li>
                <a href="#">Instagram</a>
            </li>
        </ul>
    </motion.div>
</template>
<style lang="scss" scoped>
header {
    top: 0;
    left: 0;
    right: 0;

    .links-wrap {
        /*display: none;*/
        /*position: absolute;
        background: #fff;
        right: 0;
        top: 100%;*/
        padding: 1rem;
        /*border-left: 1px solid $grey2;
        border-bottom: 1px solid $grey2;*/
    }

    nav {
        //border-bottom: 1px solid $grey2;
        //background: $grey1;
        background: #fff;
        height: 70px;
    }

    @media screen and (width >=64rem) {
        top: 30px;

        /*.mobile-trigger {
            display: none;
        }*/

        nav {
            border: 1px solid $grey2;
            background: $grey1;
            border-radius: 18px;
            width: max-content;
            height: 65px;
            margin-inline: auto;
        }

        .links-wrap {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: static;
            padding: 0;
            border: 0 none;
            background: none transparent;
        }
    }

}

.nav-link {
    color: $rich-black;
    font-size: 1rem;
    line-height: 30px;
    font-weight: normal;
    padding: 6px 20px;
    white-space: nowrap;

    &.logo {
        margin-right: 5.5rem;
        padding-inline: 0;
    }

    &.contact {
        font-weight: 600;
        border-color: $primary1;
    }

    &.router-link-active {
        @include text-primary-gradient;
    }
}

.social {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.42px;
}

.mobile-menu {
    color: white;

    .close-button {
        background: #2d2d2d;
        color: white;
    }

    .nav-link {
        color: white;
        font-size: 60px;
        font-style: normal;
        font-weight: 400;
        line-height: 61px;
        letter-spacing: -1.8px;
        padding-inline: 0;

        &.router-link-active {
            color: $grey-text;
            background: none;
            background-clip: border-box;
            -webkit-background-clip: border-box;
            -webkit-text-fill-color: $grey-text;
        }
    }
}
</style>