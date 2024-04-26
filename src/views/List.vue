<template>
    <div>
        <div class="p-2">

            <ScrollArea class="h-[500px] rounded-md border p-4">
                <div class="m-2" v-for="row in table.getRowModel().rows" :key="row.id">
                    <ContactCard :firstName="row.getAllCells()[0].getValue()"
                        :lastName="row.getAllCells()[1].getValue()" :email="row.getAllCells()[2].getValue()"
                        :phone="row.getAllCells()[3].getValue()" :website="row.getAllCells()[4].getValue()">
                    </ContactCard>
                </div>
            </ScrollArea>

        </div>
    </div>
</template>
<script setup>
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper,
} from '@tanstack/vue-table';
import { ref, h } from 'vue'
import ContactCard from "@/components/ui/ContactCard.vue";
import { ScrollArea } from '@/components/ui/scroll-area';

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('firstName', {
        cell: (row) => {
            return h('div', { class: 'text-right font-medium' }, row.getValue())
        }
    }),
    columnHelper.accessor('lastName', {
        cell: (row) => {
            return h('div', { class: 'text-right font-medium' }, row.getValue())
        }
    }),
    columnHelper.accessor('email', {
        cell: (row) => {
            return h('div', { class: 'text-right font-medium' }, row.getValue())
        }
    }),
    columnHelper.accessor('phone', {
        cell: (row) => {
            return h('div', { class: 'text-right font-medium' }, row.getValue())
        }
    }),
    columnHelper.accessor('website', {
        cell: (row) => {
            return h('div', { class: 'text-right font-medium' }, row.getValue())
        }
    }),
];

const defaultData = [
    {
        firstName: 'Manirathanam',
        lastName: 'M',
        email: 'manirathanam@gmail.com',
        phone: 9965049534,
        website: 'www.google.com',
    },
    {
        firstName: 'Kevin',
        lastName: 'Malone',
        email: 'kevin@office.com',
        phone: 9934231219,
        website: 'www.office.com',
    },
    {
        firstName: 'Michel',
        lastName: 'Scott',
        email: 'michel@office.com',
        phone: 93453312321,
        website: 'www.office.com',
    },
    {
        firstName: 'Manirathanam',
        lastName: 'M',
        id: "firstName",
        email: 'manirathanam@gmail.com',
        phone: 9965049534,
        website: 'www.google.com',
    },
    {
        firstName: 'Kevin',
        lastName: 'Malone',
        email: 'kevin@office.com',
        phone: 9934231219,
        website: 'www.office.com',
    },
    {
        firstName: 'Michel',
        lastName: 'Scott',
        email: 'michel@office.com',
        phone: 93453312321,
        website: 'www.office.com',
    },
    {
        firstName: 'Manirathanam',
        lastName: 'M',
        id: "firstName",
        email: 'manirathanam@gmail.com',
        phone: 9965049534,
        website: 'www.google.com',
    },
    {
        firstName: 'Kevin',
        lastName: 'Malone',
        email: 'kevin@office.com',
        phone: 9934231219,
        website: 'www.office.com',
    },
    {
        firstName: 'Michel',
        lastName: 'Scott',
        email: 'michel@office.com',
        phone: 93453312321,
        website: 'www.office.com',
    },
];

const data = ref(defaultData)


const table = useVueTable({
    get data() {
        return data.value
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
})

console.log(table.getRowModel().rows);


const rerender = () => {
    data.value = defaultData
}


</script>