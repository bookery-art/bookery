<template>
  <div>
  <UApp>
    <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    </div>
  </UApp>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Bookery` : 'Bookery';
  }
})
</script>


