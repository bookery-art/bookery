<template lang="">
    <div class="flex flex-col w-full h-full justify-center py-5 pb-10">
        <div class="flex-1 max-w-fit justify-center self-center mb-5">
            <NuxtLink class="bookery-preview typing -mb-3" to="/">
                Bookery
            </NuxtLink>
            <p class="text-center -mt-3">An indie book marketplace, <span class="text-primary/99">coming soon.</span></p>
        </div>
        <div class="w-2/5 self-center">
            <h1 class="uppercase font-black text-muted text-center my-2">For Everyone</h1>
            <div v-for="feature in readers" class="gap-2">
                <Feature :feature="feature" />
            </div>
        </div>
        <USeparator />
        <h1 class="uppercase font-black text-muted text-center my-2">For Authors</h1>
        <div v-for="feature in authors" class="w-2/5 self-center gap-2 rounded-md">
            <Feature :feature="feature" />
        </div>

        <!-- <UStepper :items="items" class="w-2/5 self-center mt-5" /> -->
        <!-- Title
        Subtitle
        Newsletter
        Feature List-->
    </div>
</template>
<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const authors = [
    {
        icon: "material-symbols:plug-connect-outline-rounded",
        title: "Plug and Play",
        description: "Authors can simply sign up, create a book listing and start selling, or add links to external shops."
    },
    {
        icon: "material-symbols:connect-without-contact-rounded",
        title: "Expert Bank",
        description: "Easily find editors, formatters, sensitivity readers and cover artists so that you only have to worry about putting the words down."
    },
    {
        icon: "material-symbols:percent-rounded",
        title: "Bundles",
        description: "Bundle your works or collaborate with other authors to sell works at a discounted price."
    },
    {
        icon: "ph:money",
        title: "Pay-What-You-Want",
        description: "Allow your readers to tip on their purchases."
    },
]

const readers = [
    {
        icon: "material-symbols:bookmark-add-outline-rounded",
        title: "Shelves",
        description: "Save books for later or organize them into categories."
    },
    {
        icon: "material-symbols:category-search-outline-rounded",
        title: "Advanced Search",
        description: "Customize your search to include or exclude tags, genres, authors, lengths, prices and content warnings."
    },
    {
        icon: "material-symbols:bookmark-heart-outline-rounded",
        title: "Wishlist",
        description: "Add books to a Wishlist and allow other people to purchase those to your account. "
    },
    {
        icon: "material-symbols:shopping-cart-outline-rounded",
        title: "Shopping Cart",
        description: "Buy multiple books at once, even from different authors."
    },
]

const items = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Checkout',
    description: 'Confirm your order'
  }
])


definePageMeta({
    layout: 'blank'
})
</script>
<style lang="">
    
</style>