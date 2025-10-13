<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>
<template>
    <div class="app-wrapper">
        <site-header></site-header>
        <!-- <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav> -->
        <router-view></router-view>
        <site-footer></site-footer>
    </div>
</template>
<style lang="scss" scoped>
  body, html {
    background-color: #fff;
  }
  
.box {
  color: $rich-black;
  padding: 1rem;
  @include center;
}
</style>