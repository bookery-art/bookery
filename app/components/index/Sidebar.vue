<template lang="">
    <div class="flex">
        <div class="box-border w-[260px] fixed top-[65px] min-h-full px-5 py-3 z-1 overflow-x-hidden overflow-y-scroll bg-base-200 bottom-0 left-0 grow overflow-hidden">
        <!-- browse by genre, tags, price, length + small footer -->
        <div class="flex flex-col justify-between grow"> 
            <div class="mb-5 sidebar-list grow">
                <h1 class="sidebar-h1">Browse by Genre</h1>
                <ul>
                    <li v-for="genre in genres" :key="genre.url">
                        <NuxtLink :to="genre.url"> {{genre.label}} </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="text-primary/99 text-underline">
                        More Genres
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="mb-5 sidebar-list">
                <h1 class="sidebar-h1">Browse by Tag</h1>
                <ul>
                    <li v-for="tag in tags" :key="tag.url">
                        <NuxtLink :to="tag.url" class="sidebar-links"> {{tag.label}} </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="text-primary/99 text-underline">
                        More Tags
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="mb-5 sidebar-list">
                <h1 class="sidebar-h1">Browse by Length</h1>
                <ul>
                    <li v-for="length in lengths" :key="length.url">
                        <NuxtLink :to="length.url"> {{length.label}} </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="mb-5 sidebar-list">
                <h1 class="sidebar-h1">Browse by Price</h1>
                <ul>
                    <li>On Sale <Icon name="material-symbols:percent-rounded" class="text-primary/99 text-lg align-middle"/></li>
                    <li>Free</li>
                    <li>Under $2</li>
                    <li>Under $5</li>
                </ul>
            </div>
        </div>
            <UButton trailing-icon="i-lucide-arrow-right" size="md" class="advanced-search w-full py-2 px-2 text-primary/99" variant="soft" to="/search">Advanced Search</UButton>
            <div class="bottom-0 fixed text-center mb-5">
                2025 &#169; Bookery
            </div>
        </div> 
    </div>
</template>
<script setup>
const genres = [
    {
        label: "Classics",
        url: "/"
    },
    {
        label: "Contemporary",
        url: "/"
    },
    {
        label: "Fantasy",
        url: "/"
    },
    {
        label: "Horror",
        url: "/"
    },
    {
        label: "Paranormal",
        url: "/"
    },
    {
        label: "Romance",
        url: "/"
    },
]

const tags = [
    {
        label: "Transgender",
        url: "/"
    },
    {
        label: "Polyamorous",
        url: "/"
    },
    {
        label: "Mental Health",
        url: "/"
    },
    {
        label: "Anthology",
        url: "/"
    },
    {
        label: "Sports",
        url: "/"
    },
    {
        label: "College",
        url: "/"
    },
]

const lengths = [
    {
        label: "Novel",
        url: "/"
    },
    {
        label: "Novella",
        url: "/"
    },
    {
        label: "Short Story",
        url: "/"
    },
    {
        label: "Poem",
        url: "/"
    },
]

</script>
<style lang="ts">
    


</style>