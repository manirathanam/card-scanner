<template>
    <div class="w-full flex border border-solid border-white p-3 rounded-lg gap-8 items-center">
        <div
            class="w-16 md:rounded-full  rounded-sm h-16 bg-white text-blue-500 flex items-center justify-center font-bold">
            {{ firstName[0] }}{{ lastName[0] }}
        </div>
        <div class="flex w-full flex-col gap-2 ">
            <div class="flex w-full md:gap-8 flex-col gap-2 md:flex-row">
                <label class="w-40">{{ firstName }} {{ lastName }}</label>
                <label>{{ email }}</label>
            </div>
            <div class="flex w-full md:gap-8 flex-col gap-2 md:flex-row">
                <label class="w-40">{{ phone }}</label>
                <label>{{ website }}</label>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    }
})
</script>