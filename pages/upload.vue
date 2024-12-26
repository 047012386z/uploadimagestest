<template>
    <div>
      <h1>Upload Image</h1>
      <form @submit.prevent="uploadImage">
        <input v-model="name" placeholder="File name" />
        <input v-model="url" placeholder="File URL" />
        <button type="submit">Upload</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const name = ref("");
  const url = ref("");
  const message = ref("");
  
  const uploadImage = async () => {
    const res = await fetch("/.netlify/functions/upload", {
      method: "POST",
      body: JSON.stringify({ name: name.value, url: url.value }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.text();
    message.value = data;
  };
  </script>
  