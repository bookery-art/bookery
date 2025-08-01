<template lang="">
    <div class="bg-base-200 h-full">
        <Navbar />
        <div class="book-body h-full bg-base-200">
        <div class="grid grid-cols-4 px-5 py-3 w-full h-full bg-base-200">
            <div class="col-span-1 flex flex-col w-full">
                    <div class="w-full self-center bg-primary aspect-2/3 max-w-[300px]">
                        <NuxtImg src="images/willowisps.jpg" class="rounded-sm" />
                    </div>
                    <UButton class="w-full max-w-[300px] self-center my-2 justify-center py-2 text-white" label="Preview" icon="mynaui:eye" color="primary" />
            </div>
            <div class="col-span-2 flex flex-col w-full text-justify px-5">
                <!-- Multiple text containes --> 
                <h1>Book Title</h1>
                <h2>Author Name</h2>
                <div class="flex content-start gap-1 mt-2">
                    <UBadge v-for="genre in genres" color="info" variant="soft" :key="genre.id">{{genre.label}}</UBadge>
                </div>
                <div class="mt-5">
                    <p class="text-sm uppercase font-bold">Description</p>
                    <p class="leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat cursus semper. In eget pulvinar lorem. Mauris scelerisque, nibh sit amet ornare molestie, nisi mauris lobortis est, eu mollis ante nunc quis purus. In faucibus, ligula in maximus convallis, lectus est tempor leo, quis elementum tortor ex quis nulla. Cras non mollis dolor. Nunc eget elit sit amet odio luctus commodo. Nulla ac lectus a ex congue congue. 
                    </p>
                </div>
                <div class="flex content-start gap-1 mt-2">
                    <UBadge v-for="genre in genres" color="success" variant="soft" :key="genre.id">{{genre.label}}</UBadge>
                </div>
                <div class="border-1 border-white rounded-sm py-2 px-2 mt-5">
                    <UAccordion :items="items">
                        <template #content="{ item }">
                            <div class="flex content-start gap-1 mt-2">
                            <UBadge v-for="tag in tags" color="warning" variant="soft" :key="tag.id">{{tag.label}}</UBadge>
                            </div>
                        </template>
                    </UAccordion>
                </div>
                <slot />
            </div>
            <div class="col-span-1 flex flex-col w-full">
                    <div class="w-full bg-base-200 aspect-2/3 flex flex-col px-3 gap-1">
                        <h1>$3.00 <span class="text-xs text-muted text-light">or more <Icon name="material-symbols:info-outline-rounded" /></span></h1>
                    <UButtonGroup orientation="vertical">
                        <UModal>
                        <UButton size="md" class="py-1 justify-center text-white" color="primary" variant="outline">Buy Now</UButton>
                        </UModal>
                        <UPopover :content="{
                            align: 'start',
                            side: 'left',
                            sideOffset: 8
                            }">
                            <UButton icon="material-symbols:playlist-add-rounded" size="md" color="primary" variant="outline" class="text-white py-1 justify-center">Add to Shelf</UButton>
                            <template #content>
                                <UCommandPalette
                                    v-model="label"
                                    multiple
                                    placeholder="Search shelves..."
                                    :groups="[{ id: 'labels', shelves }]"
                                    :ui="{ input: '[&>input]:h-8 [&>input]:text-sm' }"
                                />
                            </template>
                        </UPopover>
                        <UButton  size="md" color="primary" variant="outline" class="text-white py-1 justify-center">Grab a Community Copy</UButton>
                    </UButtonGroup>
                    </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'
import { Label } from 'reka-ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Content Warnings',
    icon: 'material-symbols:warning-outline-rounded',
}
])

const photos = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]

const genres = [
    {
        id: 1,
        label: "Horror"
    },
    {
        id: 1,
        label: "Historical"
    },
    {
        id: 1,
        label: "Romance"
    }
]

const tags = [
    {
        id: 1,
        label: 'Major Character Death',
    },
    {
        id: 2,
        label: 'Blood',
    },
    {
        id: 3,
        label: 'Gore',
    }
]
</script>
<style lang="">
    
</style>