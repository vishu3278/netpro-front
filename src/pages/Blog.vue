<template>
	<section class="w-full bg-white pt-50 pb-10 blogsection">
		<div class="max-w-6xl mx-auto px-6">

			<!-- Title -->
			<h1 class=" mb-8">
				Latest from the blogs
			</h1>

			<!-- Blog Banner -->
			<div class="relative rounded-2xl overflow-hidden h-100 md:h-100 bg-cover bg-center"
				style="background-image: url('/public/Blog/blog-banner.jpg');">

				<!-- Content Overlay -->
				<div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-between px-16 pt-16 md:py-6">

					<!-- Featured Tag -->
					<span class=" w-fit mb-4">
						Featured
					</span>

					<div class="solutions-hd">
						<!-- Title -->
					<h2 class="mb-3">
						Staying ahead in the game <br> via Smart IT Solutions
					</h2>

					<!-- Description -->
					<p class="max-w-md mb-6">
						For exclusive stories we have brought to you an insider story of companies that has made tech
						disucssion.
					</p>

					<!-- Button - Read More -->
					<div>
						<a href="#" class="">
							Read More <img src="/public/Blog/arrow-right.svg" alt="">
						</a>
					</div>
					</div>

				</div>
			</div>

		</div>
	</section><!--blogsection-->

</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
h1 {
	color: #000;
	font-size: 60px;
	font-weight: 100;
	line-height: 80px;
	letter-spacing: -1.8px;
}

span {
	display: inline-flex;
	padding: 6px 20px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 55px;
	border: 1px solid var(--White, #FFF);
	color: #FFF;
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
</style>