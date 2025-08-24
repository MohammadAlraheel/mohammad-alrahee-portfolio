<script setup lang="ts">
import { useImageStore } from "~/store/image";

const store = useImageStore();
store.getImage();

const theImage = computed(() => {
  return store.$state.images[0]?.fields.source.fields.file;
});

const loading = computed(() => {
  return store.$state.imageLoading;
})
</script>
<template>
  <section class="py-5">
      <div class="container">
        <div class="row gap-lg-0 gap-5 flex-lg-row flex-column-reverse">
          <div class="col-lg-7 my-auto">
            <div>
                <p class="hero-text">
                <span>
  I’m Mohammad Alraheel, a Network & System Engineer. I’ve always been fascinated by how technology 
  connects people and keeps businesses running smoothly. I started out with a passion for 
  <span class="highlight">solving technical problems</span> and ensuring systems stay 
  <span class="highlight">secure and reliable</span>. Over time, I transitioned from handling 
  day-to-day troubleshooting to <span class="highlight">designing, deploying, and maintaining 
  scalable networks</span> and robust infrastructures. Today, with 7 years of experience, I focus on 
  building <span class="highlight">efficient, secure, and high-performing systems</span> that 
  empower teams to work without disruption.
</span>
                </p>
            </div>
          </div>
          <div class="col-lg-5 position-relative">
              <div class="rounded-md overflow-hidden w-100 img-container">
                <img
                  v-if="theImage"
                  :src="theImage.url"
                  alt="Sharif Alalem"
                  class="img-fluid hero-img w-100 position-relative"
                >
              </div>
          </div>
        </div>
      </div>
  </section>
</template>
