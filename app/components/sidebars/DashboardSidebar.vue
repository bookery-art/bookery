<template lang="">
    <div class="flex">
        <div class="box-border w-[260px] fixed min-h-full px-5 py-3 z-1 overflow-x-hidden overflow-y-scroll bg-base-200 bottom-0 left-0 grow">
            <div class="flex-col">
                <div id="user-button">
                    <button class="btn btn-primary w-full h-full">
                        <div class="flex flex-row justify-items-start py-3 gap-4">
                            <div class="avatar avatar-placeholder">
                                <div class="bg-neutral text-neutral-content w-12 rounded-full">
                                </div>
                            </div>
                            <div class="flex flex-col justify-start">
                                <p>Name</p>
                                <p>@username</p>
                            </div>
                            <Icon name="material-symbols:keyboard-arrow-down" class="text-3xl" />
                        </div>
                    </button>
                </div>
                <div>
                    
                </div>
                <div class="fixed bottom-0">
                    <p class="text-xl bookery">
                        Bookery
                        <!-- <span class="char">B</span>
                        <span class="char">o</span>
                        <span class="char">o</span>
                        <span class="char">k</span>
                        <span class="char">e</span>
                        <span class="char">r</span>
                        <span class="char">y</span> -->
                    </p>
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