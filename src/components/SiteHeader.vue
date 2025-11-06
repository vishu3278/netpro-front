<script setup>
    import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate} from 'vue-router'
import { motion } from 'motion-v'

/*defineProps({
    mobileMenu: false,
})*/

const menu = ref(false)
const route = useRoute()
const closeMenu = () => (menu.value = false)

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId)
    menu.value = false
  }
)
/*onBeforeRouteUpdate(async (to, from) => {
  // react to route changes...
  // userData.value = await fetchUser(to.params.id)
    console.log(to)
})*/
</script>
<template>
    <header class="fixed z-50 ">
        <nav class="flex justify-between lg:justify-center items-center px-4 relative">
            <router-link class="nav-link logo shrink-0" to="/"><img src="/logo.svg" alt="NetProphets Cyberworks"></router-link>
            <button type="button" class="mobile-trigger" @click="() => menu = !menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                    <path d="M28.5938 0H1.40625C1.03329 0 0.675604 0.144987 0.411881 0.403064C0.148158 0.661142 0 1.01117 0 1.37615C0 1.74112 0.148158 2.09115 0.411881 2.34923C0.675604 2.60731 1.03329 2.75229 1.40625 2.75229H28.5938C28.9667 2.75229 29.3244 2.60731 29.5881 2.34923C29.8518 2.09115 30 1.74112 30 1.37615C30 1.01117 29.8518 0.661142 29.5881 0.403064C29.3244 0.144987 28.9667 0 28.5938 0Z" fill="#121212" />
                    <path d="M28.5938 17.248H1.40625C1.03329 17.248 0.675604 17.393 0.411881 17.6511C0.148158 17.9092 0 18.2592 0 18.6242C0 18.9892 0.148158 19.3392 0.411881 19.5973C0.675604 19.8554 1.03329 20.0003 1.40625 20.0003H28.5938C28.9667 20.0003 29.3244 19.8554 29.5881 19.5973C29.8518 19.3392 30 18.9892 30 18.6242C30 18.2592 29.8518 17.9092 29.5881 17.6511C29.3244 17.393 28.9667 17.248 28.5938 17.248Z" fill="#121212" />
                    <path d="M28.5938 8.62402H1.40625C1.03329 8.62402 0.675604 8.76901 0.411881 9.02709C0.148158 9.28516 0 9.63519 0 10.0002C0 10.3651 0.148158 10.7152 0.411881 10.9733C0.675604 11.2313 1.03329 11.3763 1.40625 11.3763H28.5938C28.9667 11.3763 29.3244 11.2313 29.5881 10.9733C29.8518 10.7152 30 10.3651 30 10.0002C30 9.63519 29.8518 9.28516 29.5881 9.02709C29.3244 8.76901 28.9667 8.62402 28.5938 8.62402Z" fill="#121212" />
                </svg>
            </button>
            <transition name="slide">
                <div class="links-wrap" :class="[menu ? 'flex':'hidden']">
                    <router-link class="nav-link" to="/about" @click="closeMenu">Who we are</router-link>
                    <router-link class="nav-link" to="/sector" @click="closeMenu">Sector Impact</router-link>
                    <router-link class="nav-link" to="/service" @click="closeMenu">Services we offer</router-link>
                    <router-link class="nav-link contact border rounded-full" to="/contact" @click="closeMenu">Get in Touch</router-link>
                </div>
            </transition>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100%);
}

header {
    top: 0;
    left: 0;
    right: 0;

    .links-wrap {
        /*display: none;*/
        position: absolute;
        background: #fff;
        right: 0;
        top: 100%;
        padding: 1rem;
        /*border-left: 1px solid $grey2;
        border-bottom: 1px solid $grey2;*/
        flex-direction: column;
    }

    nav {
        //border-bottom: 1px solid $grey2;
        //background: $grey1;
        background: #fff;
        height: 70px;
    }

    @media screen and (width >=64rem) {
        top: 30px;

        .mobile-trigger {
            display: none;
        }

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
</style>