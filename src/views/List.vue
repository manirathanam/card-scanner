<template>
    <div class="md:p-8 p-4 flex items-center justify-center">
        <Card class="w-2/4 mt-8" v-if="processing">
            <CardHeader>
                <CardTitle>Fetching Data</CardTitle>
                <CardDescription class="p-4">
                    <Progress v-model="progress" />
                </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
        </Card>
        <div v-else class="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <template v-for="contact in contactsData">
                <ContactCard v-bind="contact"></ContactCard>
            </template>
        </div>
    </div>
</template>
<script setup>

import { ref } from "vue";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import ContactCard from "@/components/ui/ContactCard.vue";


let contactsData = ref([]);
const progress = ref(1);
let timer = "";
let processing = ref(true);


async function fetchData() {
    let userData = [];
    const querySnapshot = await getDocs(collection(db, "contacts"));
    querySnapshot.forEach((doc) => {
        userData.push({ ...doc.data(), id: doc.id });
    });
    console.log(userData);
    contactsData.value = userData;
    processing.value = false;
    clearInterval(timer)
}

setTimeout(fetchData, 3000)


timer = setInterval(() => {
    progress.value = progress.value + 1;
}, 100)
</script>