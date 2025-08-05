<template lang="">
    <div class="w-full h-full fixed flex bg-base-200 self-center justify-center place-self-center">
        <UContainer class="md:w-2/4 w-full md:mx-0 mx-5 self-center justify-center place-self-center bg-base-100 h-3/4 rounded-lg">
            <UForm class="w-full self-center relative h-full">
                <UFormField class="self-center rounded-md" size="xl">
                    <UInput placeholder="Search" class="w-full self-center py-2" />
                </UFormField>
                <USeparator label="Include" />
                <UFormField>
                    <UInputMenu v-model="include" multiple :items="items" size="xl" />
                </UFormField>
                <USeparator label="Exclude" />
                <UFormField>
                    <UInputMenu v-model="exclude" multiple :items="items" size="xl" />
                </UFormField>
                <UButton type="submit" class="absolute bottom-0 w-full self-center justify-center py-1 mb-3">
                    Search
                </UButton>
            </UForm>
        </UContainer>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'default',
    title: 'Search'
})

const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const include = ref(['Backlog', 'Todo'])
const exclude = ref(['Backlog', 'Todo'])
</script>
<style lang="">
    
</style>