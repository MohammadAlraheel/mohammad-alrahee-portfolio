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
                    <span>I’m Sharif, a Frontend Developer. I’ve always been drawn to <br/>  <span class="highlight">creativity</span> and technology — I started with a passion for <br/> helping others build <span class="highlight">clean, functional web experiences</span>, even before I knew how to code. Over time, I transitioned from exploring design tools to diving into JavaScript and building interfaces. Today, I focus on crafting modern, user-friendly applications using <span class="highlight"> Vue.js and React.</span></span>
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
