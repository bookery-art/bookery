<template lang="">
    <div>
        <div class="navbar bg-base-100 z-100 relative box-border min-h-[65px] shadow-sm px-[20px]">
            <div class="flex-1 navbar-start mr-5">
                <p class="text-xl bookery typing">
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
            <div class="flex-2 navbar-center gap-4">
                <a href="/" class="navbar-link self-center">Books</a>
                <a href="" class="navbar-link self-center">Bundles</a>
                <a href="" class="navbar-link self-center">Authors</a>
            </div>  
            <div class="flex gap-4">
                <label class="input lg:min-w-96 mx-[10px] px-2">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" class="grow input-secondary" placeholder="Search for books, authors or genres" />
                </label>
                <div class="indicator">
                <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                    <span class="indicator-item status status-success"></span>
                </div>
                </button>
                </div>
                <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-12 rounded-full bg-primary">
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
