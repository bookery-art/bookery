<template lang="">
    <div>
        <GlobalNavbar />
        <IndexSidebar class="hidden md:block" />
        <div class="top-[65px] md:left-[260px] fixed w-full h-full overflow-y-auto md:content-max-dimensions">
            <slot />
        </div>
        <GlobalDock class="fixed md:hidden" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>