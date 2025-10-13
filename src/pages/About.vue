<template>
  <section class="about-section pt-60 pb-10 w-full bg-white">
    <div class="container mx-auto relative">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

        <!-- Left: Heading -->
        <div class="md:w-1/2">
          <h2>
            Building technology that
            transforms India and improves
            the everyday lives of the citizens
          </h2>
        </div>

        <!-- Right: Paragraphs -->
        <div class="md:w-1/3">
          <p>
            For over 25 years, we’ve been building technology that quietly powers lives—helping
            students learn, citizens access services, and public systems work better. Our journey
            has taken us across five continents, working with governments, global institutions, and
            changemakers. Through it all, one belief keeps us grounded: innovation means nothing
            unless it uplifts people.
          </p>
          <p>
            With 850+ dedicated minds behind us, we don’t just create digital solutions—we stand beside
            our partners to solve real problems, shape better futures, and build systems that serve
            society with purpose.
          </p>
        </div>
      </div>
      
      <div class="about-banner py-8">
        <img src="/public/about/about-banner.jpg" alt="" class="max-w-full rounded-2xl">
      </div>

    </div>
  </section><!---about-section-->


  <section class="our-mission">
    <div class="container mx-auto relative">
      <div class="our-heading text-center mb-10">
        <h6>Our Mission</h6>
        <h3 class="max-w-[998px] mx-auto">
          At the heart of what we do is a belief technology must serve people, not just systems.
        </h3>
      </div>
    </div>

  </section>









</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
h2,
h3 {
  color: $rich-black;
  font-size: 60px;
  font-weight: 100;
  line-height: 80px;
  letter-spacing: -1.8px;
}

h6 {
  background: var(--Highlight-Stroke, linear-gradient(98deg, #171EEC 7.56%, #7000D9 93.65%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -3%;
}

p {
  color: $rich-black;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.48px;
}
</style>
