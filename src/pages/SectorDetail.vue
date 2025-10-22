<template>
	<!-- Hero Banner -->
	<section class="relative h-[90vh] w-full bg-cover bg-center flex items-end pb-20"
		style="background-image: url('/public/sector-detail/sector-detail-banner.jpg');">

		<!-- Overlay -->
		<div class="absolute inset-0 bg-black/40"></div>

		<!-- Content -->
		<div class="container mx-auto relative z-10">
			<h1 class="">
				Empowering education<br>
				through scalable technology.
			</h1>

			<p class="">
				From real-time school monitoring to nationwide student databases —<br>
				we build digital solutions that strengthen India’s education<br>
				infrastructure and expand access to quality learning.
			</p>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
h1 {
	color: #FFF;
	font-size: 60px;
	font-weight: 100;
	line-height: 80px;
	letter-spacing: -1.8px;
}

p {
	color: #FFF;
	font-size: 24px;
	font-weight: 100;
	line-height: 38px;
	letter-spacing: -0.72px;
	max-width: 780px;
}
</style>