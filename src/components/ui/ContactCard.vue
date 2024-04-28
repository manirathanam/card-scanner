<template>
    <div
        class="w-full flex bg-white  p-3 rounded-lg gap-8 items-center shadow-sm hover:shadow-lg hover:bg-slate-200 transition-all">
        <!-- <div
            class="w-16  md:rounded-full  rounded-sm h-16 bg-blue-500 text-white flex items-center justify-center font-bold">
            {{ firstname[0] }}{{ lastname[0] }}
        </div> -->
        <div class="flex w-full flex-col gap-2 justify-between h-full">
            <div class="flex w-full md:gap-8 flex-col gap-2 md:flex-row justify-between">
                <Label class="text-lg"> 👤 {{ firstname }} {{ lastname }}</Label>
                <a :href="`mailto:${email}`" target="_blank">
                    <Label class="text-md">💌 {{ email }}</Label>
                </a>
            </div>
            <div class="flex w-full md:gap-8 flex-col gap-2 md:flex-row justify-between">
                <a class="" :href="`tel:${phone}`">
                    <Label class="text-md">📞 {{ phone }}</Label>
                </a>
                <a :href="website" target="_blank">
                    <Label class="text-md whitespace-normal overflow-hidden overflow-ellipsis break-all w-full">🌍 {{
                        website
                        }}</Label>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Label } from '@/components/ui/label'


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