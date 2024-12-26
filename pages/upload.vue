<template>
  <div>
    <h1>Upload Image</h1>
    <form @submit.prevent="uploadImage">
      <input type="file" ref="fileInput" />
      <button type="submit">Upload</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fileInput = ref(null);
const message = ref("");

const uploadImage = async () => {
  if (!fileInput.value.files[0]) {
    message.value = "Please select a file to upload.";
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.value.files[0]);

  const res = await fetch("/.netlify/functions/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  message.value = data.message;
};
</script>
