<template>
    <div>
      <h1>Upload Image</h1>
      <form @submit.prevent="uploadImage">
        <input type="file" @change="onFileChange" />
        <button type="submit">Upload</button>
      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        file: null,
        message: ''
      };
    },
    methods: {
      onFileChange(event) {
        this.file = event.target.files[0];
      },
      async uploadImage() {
        if (!this.file) {
          this.message = "Please select a file.";
          return;
        }
  
        const formData = new FormData();
        formData.append("file", this.file);
  
        try {
          const response = await axios.post('/api/upload', formData);
          this.message = response.data;
        } catch (error) {
          console.error('Error uploading file:', error);
          this.message = 'Error uploading file';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>