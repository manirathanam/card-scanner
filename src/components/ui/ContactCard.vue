<template>
    <div
        class="w-full flex bg-white  p-3 rounded-lg gap-8 items-center shadow-sm hover:shadow-lg hover:bg-slate-200 transition-all">
        <!-- <div
            class="w-16  md:rounded-full  rounded-sm h-16 bg-blue-500 text-white flex items-center justify-center font-bold">
            {{ firstname[0] }}{{ lastname[0] }}
        </div> -->
        <div class="flex w-full flex-col gap-2 ">
            <div class="flex w-full md:gap-8 flex-col gap-2 md:flex-row">
                <label class="w-40">{{ firstname }} {{ lastname }}</label>
                <label class="text-wrap break-words overflow-ellipsis overflow-hidden">{{ email }}</label>
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
    firstname: {
        type: String,
    },
    lastname: {
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
    },
    companyname: {
        type: String
    }
})
</script>