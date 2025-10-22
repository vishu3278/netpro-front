<template>

	<section class="contact-pages pt-60 pb-50 w-full bg-white">
		<div class="container mx-auto">
			<div class="md:flex md:gap-16 mb-5">
				<!-- Left Side -->
				<div class="md:w-1/2 space-y-6">
					<h1>Let’s Connect</h1>
					<p class="max-w-md">
						Tell us more about what you're building and how we can help.
					</p>

					<!-- Circle stripes image -->
					<div class="relative w-90 h-90 mt-20">
						<img src="/public/connect-bg.png" alt="" class="w-full object-cover ">
					</div>
				</div>

				<!-- Right Side -->
				<div class="md:w-1/2 mt-10 md:mt-0 space-y-8">
					<h5 class="">Your info</h5>

					<form class="space-y-6">
						<div>
							<input type="text" placeholder="Full name*"
								class="w-full  focus:border-black outline-none " />
						</div>

						<div>
							<input type="email" placeholder="Your email*"
								class="w-full  focus:border-black outline-none " />
						</div>

						<div>
							<input type="tel" placeholder="Contact number*"
								class="w-full  focus:border-black outline-none " />
						</div>

						<div>
							<input type="email" placeholder="Your email*"
								class="w-full  focus:border-black outline-none " />
						</div>

						<div class="">
							<h4>How can we help?</h4>
							<textarea placeholder="Tell us your design needs in detail" rows="3"
								class="w-full  focus:border-black outline-none  resize-none"></textarea>
						</div>

						<div class="flex items-center gap-2 ">
							<input type="checkbox" id="agree" class="">
							<label for="agree">
								Yes, I do. I agree to the Terms of Service and Privacy Policy.
							</label>
						</div>

						<button type="submit" class="btn">
							Submit
						</button>
					</form>


				</div>
			</div>



			<!-- Footer -->
			<div class="getlist">
				<!-- First Row -->
				<div
					class="pt-12 pb-12 border-b border-gray-300 text-sm grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
					<div>
						<h4 class="font-medium text-gray-800">Get in touch</h4>
					</div>
					<div>
						<p>New Business,<br><a href="mailto:info@rnpglobal.in"
								class="text-black hover:underline">info@rnpglobal.in</a></p>
					</div>
					<div>
						<p>Join the Team,<br><a href="mailto:jobs@rnpglobal.in"
								class="text-black hover:underline">jobs@rnpglobal.in</a></p>
					</div>
				</div>

				<!-- Second Row -->
				<div
					class="pt-12 pb-12 border-b border-gray-300 text-sm grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
					<div></div>
					<div>
						<p>6th Floor, C-56 A/12, Sector 62, Noida, Uttar Pradesh 201301</p>
					</div>
					<div>
						<a href="tel:0120-4784-999" class="text-black hover:underline">0120-4784-999</a>
					</div>
				</div>
			</div>


		</div>
	</section>




</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
h1 {
	color: $rich-black;
	font-size: 80px;
	font-weight: 100;
	line-height: 90px;
	letter-spacing: -2.4px;
}

p {
	color: $rich-black;
	font-size: 24px;
	font-weight: 100;
	line-height: 38px;
	letter-spacing: -0.72px;
}

h4,
h5 {
	color: $rich-black;
	font-size: 40px;
	font-weight: 100;
	line-height: 60px;
	letter-spacing: -1.2px;
}


input,
textarea {
	color: #5F5F5F;
	font-size: 24px;
	font-weight: 100;
	line-height: 38px;
	letter-spacing: -0.72px;
	border-bottom: 1px solid #D7D7D7;
	height: 60px;
}

textarea {
	height: 140px;
	margin-top: 30px;
}

label {
	color: #5F5F5F;
	font-size: 16px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: -0.48px;
}


button {
	display: inline-flex;
	height: 55px;
	padding: 6px 20px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 55px;
	border: 1px solid #000;
	background: #121212;
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: -0.54px;
	cursor: pointer;
}

p,
a {
	color: $rich-black;
	font-size: 24px;
	font-weight: 100;
	line-height: 38px;
	letter-spacing: -0.72px;
	text-decoration: none;
}
</style>