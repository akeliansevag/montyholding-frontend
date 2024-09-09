<template>
  <NuxtLayout>
    <Header />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: 'Monty Holding',
  ogTitle: 'Monty Holding',
  description: 'Join us in our journey as we create value and change the world',
  ogDescription: 'Join us in our journey as we create value and change the world',
  ogImage: 'https://montyholding.com/ogimage.webp',
  twitterCard: 'https://montyholding.com/ogimage.webp',
})
</script>