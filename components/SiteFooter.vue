<template>
  <section class="py-5 footer">
      <div class="container">
        <div class="row py-5">
          <div class="col-12 my-auto">
            <p class="text-center footer-text">get in touch</p>
            <div class="icons-tray">
              <a v-for="brand in brands" :key="brand.icon" :href="brand.link" target="_blank" class="social-link">
                <i :class="'fa-brands fa-' + brand.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<script lang="ts" setup>

const brands = ref([
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/sharef.alalem/profilecard/?igsh=OGlwYjdmaWNobnph'
  },
  {
    icon: 'github',
    link: 'https://github.com/SharifAlalem'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/sharif-alalem-281446133/'
  }
])
</script>