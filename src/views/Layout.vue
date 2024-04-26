<template>
    <div class="bg-gradient-to-r from-blue-300 w-lvw h-lvh">
        <header class="w-full relative top-0">
            <ul class="flex gap-20 p-5 bg-white w-full  px-20">
                <li>
                    <RouterLink to="/list">List</RouterLink>
                </li>
                <li>
                    <RouterLink to="/login">Login</RouterLink>
                </li>
            </ul>
        </header>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>