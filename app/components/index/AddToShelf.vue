<template>
    <UPopover
        :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8
        }"
    >
        <UButton class="indicator-item index-shelf-button mt-5 mr-12 text-white" color="primary" variant="soft"><Icon name="material-symbols:playlist-add-rounded" />Add to Shelf</UButton>
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
</template>

<script setup lang="ts">
// Retrieve shelves from user

const shelves = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error' as const
    }
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success' as const
    }
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info' as const
    }
  }
])
const label = ref([])
</script>