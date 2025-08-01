<template lang="">
    <div>
        <div class="navbar bg-base-100 z-100 relative min-h-[65px] shadow-sm px-[20px]">
            <div class="flex-1 navbar-start max-w-fit">
                <NuxtLink class="text-xl bookery typing" to="/">
                    Bookery
                </NuxtLink>
            </div>
            <div class="flex-1 navbar-center gap-4 justify-center hidden md:flex grow">
                <!-- <a href="/b/book" class="navbar-link self-center">Books</a>
                <a href="" class="navbar-link self-center">Bundles</a>
                <a href="" class="navbar-link self-center">Authors</a>
                <a href="" class="navbar-link self-center">Shelves</a>
                <UDropdownMenu
                    :items="items"
                    :content="{
                    align: 'start',
                    side: 'bottom',
                    sideOffset: 8
                    }"
                    :ui="{
                    content: 'w-48'
                    }"
                >
                    <a href="" class="navbar-link self-center">Resources</a>
                </UDropdownMenu> -->
                <UNavigationMenu :items="nav_items" class="w-full justify-center gap-2" variant="link"  />
            </div>  
            <div class="flex gap-4">
                <label class="input  input-primary hidden lg:flex lg:min-w-96 mx-[10px] px-2">
                <Icon class="text-xl text-primary/60" name="material-symbols:search-rounded" />
                <input type="search" class="grow" placeholder="Search for books, authors or genres" />
                </label>
                <div class="indicator hidden">
                <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                    <span class="indicator-item status status-success"></span>
                </div>
                </button>
                </div>
                    <UButton class="navbar-login text-primary/99 justify-center" variant="outline">Log In</UButton>
                    <UButton class="navbar-signup text-white justify-center" variant="soft">Sign Up</UButton>
                <!-- <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-12 rounded-full bg-primary">
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a class="justify-between" href="/dashboard">
                        Profile
                        <span class="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
    {
        label: 'Profile',
    },
    {
        label: 'Billing',
    },
    {
        label: 'Settings',
        icon: 'i-lucide-cog'
    }
])

import type { NavigationMenuItem } from '@nuxt/ui'

const nav_items = ref<NavigationMenuItem[]>([
  {
    label: 'Books',
    to: '/b/book',
  },
  {
    label: 'Authors',
    to: '/composables',
  },
  {
    label: 'Shelves',
    to: '/composables',
  },
  {
    label: 'Bundles',
    to: '/composables',
  },
  {
    label: 'Resources',
    to: '/components',
    children: [
      {
        label: 'Editing',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Covers',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'Formatting',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Guides',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'FAQ',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Help & Support',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  }
])


</script>
