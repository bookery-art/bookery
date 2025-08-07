<template lang="">
    <div>
        <GlobalNavbar />
        <IndexSidebar />
        <div class="top-[65px] left-[260px] fixed w-full h-full overflow-y-auto content-max-dimensions">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>