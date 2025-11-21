<template>
    <transition name="fade">
        <div v-if="show" class="loader-wrapper">
            <div class="loader-content">
                <!-- Optional Logo -->
                <slot name="logo">
                    <div class="spinner"></div>
                </slot>
                <p v-if="text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { watch, onUnmounted } from "vue";

const props = defineProps({
  show: Boolean,
  text: { type: String, default: "" }
});
// Disable scrolling when loader is visible
const lockScroll = () => document.body.style.overflow = "hidden";
const unlockScroll = () => document.body.style.overflow = "";

watch(
    () => props.show,
    (val) => {
        if (val) lockScroll();
        else unlockScroll();
    }, { immediate: true }
);

// Ensure scroll returns if component unmounts
onUnmounted(() => unlockScroll());
</script>
<style lang="scss" scoped>
.loader-wrapper {
    position: fixed;
    inset: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.loader-content {
    text-align: center;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #ddd;
    border-top-color: $primary1;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

p {
    margin-top: 1rem;
    font-size: 1.125rem;
    color: $grey-text;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Fade Animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>