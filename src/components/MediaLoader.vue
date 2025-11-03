<template>
    <div ref="mediaWrapper" class="media-loader" :class="{ loaded, error }">
        <!-- LOADER -->
        <div v-if="!loaded && !error && isVisible" class="loader">
            <slot name="loading">
                <img src="/logo-bg.svg" alt="Loading..." />
            </slot>
        </div>
        <!-- IMAGE -->
        <img v-if="isImage && isVisible" v-show="loaded" :src="src" :alt="alt" @load="onLoad" @error="onError" class="media" />
        <!-- VIDEO -->
        <video v-else-if="isVisible" v-show="loaded" :src="src" :poster="poster" autoplay muted loop @loadeddata="onLoad" @error="onError" class="media w-full h-full object-cover object-center" controls></video>
        <!-- ERROR FALLBACK -->
        <div v-if="error" class="error-fallback">
            <img src="/frame-bg.svg" alt="Unavailable" />
            <p>Failed to load media</p>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    poster: { type: String, default: '' },
    threshold: { type: Number, default: 0.1 } // visible % before loading
})

const mediaWrapper = ref(null)
const loaded = ref(false)
const error = ref(false)
const isVisible = ref(false)

const isImage = computed(() =>
    /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(props.src)
)

let observer = null

const onLoad = () => (loaded.value = true)
const onError = () => {
    error.value = true
    loaded.value = false
}

// Observe when media enters viewport
onMounted(() => {
    observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    observer.disconnect() // stop observing once visible
                }
            })
        }, { threshold: props.threshold }
    )

    if (mediaWrapper.value) observer.observe(mediaWrapper.value)
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>
<style lang="scss" scoped>

.media-loader {
    //background-color: #f2f2f2;

    .loader {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fafafa;

        img {
            width: 40px;
            height: 40px;
            opacity: 0.6;
        }
    }

    .media {
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &.loaded .media {
        opacity: 1;
    }

    .error-fallback {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #eee;
        color: #666;
        font-size: 0.9rem;

        img {
            max-width: 50%;
            margin-bottom: 8px;
            opacity: 0.6;
        }
    }
}
</style>