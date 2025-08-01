<template lang="">
    <div class="flex">
        <div class="w-[260px] fixed min-h-full px-3 py-3 z-1 overflow-x-hidden overflow-y-scroll bg-base-200 bottom-0 left-0 grow">
            <div class="flex-col">
                <UDropdownMenu
                    size="xl"
                    :items="items"
                    :content="{
                    align: 'start'
                    }"
                    :ui="{
                    content: 'w-full'
                    }"
                    class="w-full px-2"
                >
                <UButton size="xl" trailing-icon="material-symbols:keyboard-double-arrow-down-rounded" color="neutral" variant="outline" class="dashboard-user-button w-full justify-between">
                    <div class="avatar avatar-placeholder justify-start">
                        <div class="bg-primary w-10 rounded-full">
                        </div>
                    </div>
                    <div class="justify-start grow">
                        <p>Ophelia Balzac</p>
                        <p>@username</p>
                    </div>
                </UButton>
                </UDropdownMenu>
                <div class="mt-3">
                    <UNavigationMenu orientation="vertical" :items="items1" class="data-[orientation=vertical]:w-full text-md" />
                    <div class="divider"></div>
                    <UNavigationMenu orientation="vertical" :items="items2" class="data-[orientation=vertical]:w-full text-md" />
                    <div class="divider"></div>
                    <UNavigationMenu orientation="vertical" :items="items3" class="data-[orientation=vertical]:w-full text-md" />
                </div>
                <div class="fixed bottom-0 text-center w-[260px]">
                    <p class="text-xl bookery text-center">
                        Bookery
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items1 = ref<NavigationMenuItem[][]>([
    [
    {
        label: 'Overview',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        class: 'dashboard-menu-item',
    },
    {
        label: 'Password',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'material-symbols:lock',
        class: 'dashboard-menu-item',
    },
    {
        label: 'Notifications',
        icon: 'material-symbols:notifications-outline-rounded',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Profile',
        icon: 'material-symbols:person-outline-rounded',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Settings',
        icon: 'i-lucide-cog',
        class: 'dashboard-menu-item'
    }
    ],
])

const items2 = ref<NavigationMenuItem[][]>([
    [
    {
        label: 'Wallet',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'material-symbols:account-balance-wallet-outline',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Payment',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'material-symbols:payments-outline-rounded',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Payouts',
        icon: 'material-symbols:arrow-downward-rounded',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        class: 'dashboard-menu-item'
    },
    ],
])

const items3 = ref<NavigationMenuItem[][]>([
    [
    {
        label: 'Books',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'material-symbols:book-2-outline-rounded',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Shelves',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'material-symbols:collections-bookmark-outline-rounded',
        class: 'dashboard-menu-item'
    },
    {
        label: 'Purchases',
        icon: 'material-symbols:shopping-bag-outline',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        class: 'dashboard-menu-item'
    },
    ],
])

import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
    {
        label: 'Profile',
        icon: 'i-lucide-user'
    },
    {
        label: 'Billing',
        icon: 'i-lucide-credit-card'
    },
    {
        label: 'Settings',
        icon: 'i-lucide-cog'
    }
])
</script>

<style lang="">
    
</style>