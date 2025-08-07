<template lang="">
    <div class="w-full h-full fixed overflow-y-auto flex bg-base-200 self-center justify-center place-self-center">
        <UContainer class="md:w-2/4 w-full h-3/4 md:mx-0 mx-5 self-center justify-center place-self-center bg-base-100 rounded-lg overflow-y-auto -mt-[65px]">
            <UForm class="w-full self-center relative h-full">
                <UFormField class="self-center rounded-sm">
                    <UInput placeholder="Search within results for..." class="w-full self-center py-2" size="xl" />
                </UFormField>
                <USeparator label="Include" />
                <UAccordion :items="items" type="multiple" >
                    <template #body="{ item }">
                        <UFormField>
                            <UInputMenu v-model="include" multiple :items="items" size="xl" />
                        </UFormField>
                    </template>
                </UAccordion>
                <USeparator label="Exclude" />
                <UAccordion :items="items" type="multiple">
                    <template #body="{ item }">
                    <UFormField>
                        <UInputMenu v-model="exclude" multiple :items="items" size="xl" />
                    </UFormField>
                    </template>
                </UAccordion>
                <UButton type="submit" class="absolute bottom-0 w-full self-center justify-center py-1 mb-3 mt-5">
                    Search
                </UButton>
            </UForm>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui';
definePageMeta({
    layout: 'default',
    title: 'Search'
})

const items: AccordionItem[] = [
    {
        label: 'Genres',
    },
    {
        label: 'Tags',
    },
    {
        label: 'Content Warnings',
    }
]

const include = ref(['Backlog', 'Todo'])
const exclude = ref(['Backlog', 'Todo'])
</script>
<style lang="">
    
</style>