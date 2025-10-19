<script setup>
import { ref } from 'vue'
// import { motion } from 'motion-v'

/*defineProps({
    msg: String,
})*/

// const count = ref(0)
</script>
<template>
    <header class="fixed z-50 flex justify-center ">
        <nav class="flex justify-between items-center px-4">
            <router-link class="nav-link logo shrink-0" to="/"><img src="/logo.svg" alt="NetProphets Cyberworks"></router-link>
            <router-link class="nav-link" to="/about">Who we are</router-link>
            <router-link class="nav-link" to="/sector">Sector Impact</router-link>
            <router-link class="nav-link" to="/services">Services we offer</router-link>
            <router-link class="nav-link contact border rounded-full" to="/contact">Get in Touch</router-link>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
header {
    top: 30px;
    left: 0;
    right: 0;
    nav {
        border: 1px solid $grey2;
        background: $grey1;
        border-radius: 18px;
        height: 65px;
    }
    @media screen and (min-width: 80rem) {
        
    }

    @media screen and (max-width: 40rem) {
        
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
}
</style>