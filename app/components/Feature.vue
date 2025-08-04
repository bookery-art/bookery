<template lang="">
    <div class="feature-item py-2 px-3 mt-1">
        <Icon :name="feature.icon" size="4rem" class="text-primary/99 mr-2" />
        <div class="max-w-7/8 ml-2">
            <h1 class="uppercase font-black text-muted ">{{feature.title}}</h1>
            <p>{{feature.description}}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    feature: {
        type: Object,
        required: true,
    },
});
const { feature } = props;
</script>
<style lang="">
    
</style>