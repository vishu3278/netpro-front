<script setup>
import { ref } from 'vue'
// import logo from './NetProphetsCyberworks-mono.svg'
import { motion } from 'motion-v'

/*defineProps({
    msg: String,
})*/

// const count = ref(0)
</script>
<template>
    <header class="fixed z-50 px-4">
        <nav class="flex justify-between items-center">
            <router-link class="nav-link logo" to="/"><img src="/logo.svg" alt="NetProphets Cyberworks"></router-link>
            <router-link class="nav-link" to="/about">Who we are</router-link>
            <router-link class="nav-link" to="/sector">Sector Impact</router-link>
            <router-link class="nav-link" to="/service">Services we offer</router-link>
            <router-link class="nav-link contact border rounded-full" to="/contact">Get in Touch</router-link>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
header {
    border-radius: 18px;
    background: $grey1;
    border: 1px solid $grey2;
    top: 30px;
    left: 50%; 
    transform: translateX(-50%);
    max-width: 875px;
    nav {
        height: 65px;
    }

    @media screen and (max-width: 40rem) {
        .footer-section2 {
            margin-top: 3rem;
            line-height: normal;
        }
    }
}

.nav-link {
    color: $rich-black;
    font-size: 1rem;
    line-height: 30px;
    font-weight: normal;
    padding: 6px 20px;
    &.logo {
        margin-right: 5.5rem;
        padding-inline: 0;
    }
    &.contact {
        font-weight: 600;
        border-color: $primary1;
    }
}
</style>