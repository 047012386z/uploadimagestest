<template>
    <div>
      <h1>Gallery</h1>
      <div v-if="images.length === 0">No images available</div>
      <div v-else class="gallery">
        <img v-for="image in images" :key="image.name" :src="image.url" :alt="image.name" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const images = ref([]);
  
  onMounted(async () => {
    const res = await fetch("/api/images");
    images.value = await res.json();
  });
  </script>
  
  <style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  .gallery img {
    width: 100%;
    height: auto;
  }
  </style>
  