<template>
    <div class="text-center max-w-[800px] mx-auto">
        <h2 v-if="props.title" class="mb-10 text-5xl font-bold">{{ props.title }}</h2>
        <p class="text-xl" v-if="props.description">{{ props.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'description']);
</script>