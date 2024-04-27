<template>
    <div class="flex justify-center pt-8">
        <Card class="w-1/2">
            <CardHeader>
                <CardTitle>Create</CardTitle>
                <CardDescription>Add new business card.</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">

                    <div class="grid gap-4 grid-cols-2">

                        <div class="grid gap-2">
                            <Label>First Name</Label>
                            <Input type="firstName" v-model="firstName"></Input>
                        </div>
                        <div class="grid gap-2">
                            <Label>Last Name</Label>
                            <Input type="lastName" v-model="lastName"></Input>
                        </div>
                    </div>

                    <div class="grid gap-4 grid-cols-2">

                        <div class="grid gap-2">
                            <Label>Website</Label>
                            <Input type="website" v-model="website"></Input>
                        </div>
                        <div class="grid gap-2">
                            <Label>Phone</Label>
                            <Input type="phone" v-model="phoneNumber"></Input>
                        </div>
                    </div>
                    <div class="grid gap-4">

                        <div class="grid gap-2">
                            <Label>Email</Label>
                            <Input type="email" v-model="email"></Input>
                        </div>
                        <div class="grid gap-2">
                            <Label>Company</Label>
                            <Input type="text" v-model="company"></Input>
                        </div>
                    </div>
                </div>


            </CardContent>
            <CardFooter class="flex flex-col px-6 pb-6 gap-2">
                <Button variant="outline" @click="submitForm">
                    Create
                </Button>
                <Button variant="ghost">
                    Auto Create by Scanning
                </Button>
            </CardFooter>

        </Card>
        <Dialog :open="processingInfo">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Saving...</DialogTitle>
                    <DialogDescription>
                        Please wait while we saving your information.
                    </DialogDescription>
                </DialogHeader>

                <!-- <DialogFooter>
                    <Button variant="ghost" disabled>
                        Close
                    </Button>
                </DialogFooter> -->
            </DialogContent>
        </Dialog>
    </div>
</template>
<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ref } from "vue";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import { collection, addDoc } from "firebase/firestore";
import { db, storage, auth } from "../firebase.js"; // Assuming your Firebase configuration is in a file named firebase.js


let $form = ref(null);
let firstName = ref("");
let lastName = ref("");
let email = ref("");
let phoneNumber = ref("");
let website = ref("");
let company = ref("");

let processingInfo = ref(false);

console.log(auth.currentUser)




async function submitForm() {
    processingInfo.value = true;
    console.log(firstName.value, lastName.value, email.value, phoneNumber.value, website.value);
    let userData = {
        companyname: company.value,
        firstname: firstName.value,
        lastname: lastName.value,
        website: website.value,
        email: email.value,
        phone: phoneNumber.value,
        ownerid: auth.currentUser.uid,
    }
    const docRef = await addDoc(collection(db, "contacts"), userData);
    debugger;
    console.log(docRef)
    setTimeout(() => {
        processingInfo.value = false;
    }, 1000);
}


</script>