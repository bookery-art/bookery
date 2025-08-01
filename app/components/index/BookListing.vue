<template lang="">
    <div>
        <div class="flex flex-col py-3">
            <div>
                <!-- <NuxtImg src="/images/afterbirth cover smaller.jpg" class="w-[200px] h-[300px] rounded-lg" /> -->
                <div class="book-listing-cover indicator rounded-sm">
                    <div class="bg-base-200 h-[300px] w-[200px] flex justify-items-end">
                        <!-- Add API Route for Shelf -->
                        <IndexAddToShelf />
                    </div>
                </div>
                <div class="flex flex-row mt-2">
                    <div class="grow flex-col">
                        <p class="book-listing-title">Book Title</p>
                        <p class="book-listing-author">Book Author</p>
                    </div>
                    <div class="flex-none">
                        <div class="badge badge-soft badge-primary px-2">Free</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>