<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of the application.</p>
        <nuxt-link to="/data">Go to Data Page</nuxt-link>
        <nuxt-link to="/gallery">Go to Gallery Page</nuxt-link>
        <nuxt-link to="/upload">Go to Upload Page</nuxt-link>
    </div>
</template>
<script>

export default {
    name: 'HomePage'
}
</script>

<style scoped>
h1 {    
    color: #333;
}
p {
    font-size: 16px;
}
</style>