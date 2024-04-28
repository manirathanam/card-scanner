<template>
    <div class="flex justify-center pt-8">
        <Card class="md:w-1/2 w-10/12">
            <CardHeader>
                <CardTitle>Create</CardTitle>
                <CardDescription>Add new business card.</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">

                    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">

                        <div class="grid gap-2">
                            <Label>First Name</Label>
                            <Input type="firstName" v-model="firstName"></Input>
                        </div>
                        <div class="grid gap-2">
                            <Label>Last Name</Label>
                            <Input type="lastName" v-model="lastName"></Input>
                        </div>
                    </div>

                    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">

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

                <Label v-for="error in formError" class="text-red-400">
                    {{ error }}
                </Label>
            </CardContent>
            <CardFooter class="flex flex-col px-6 pb-6 gap-2">
                <Button variant="outline" @click="submitForm">
                    Create
                </Button>
                <Button variant="ghost" @click="uploadFile">
                    Auto Fill by Scanning QR
                </Button>
            </CardFooter>

        </Card>
        <input type="file" @change="processFile" accept="image/*" capture="camera" class="hidden" ref="fileInput" />
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

        <Dialog :open="processingQR">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Processing QR...</DialogTitle>
                    <DialogDescription>
                        <div v-if="QRdata">
                            <div>QR data</div>
                            <div>{{ QRdata }}</div>
                        </div>
                        <span v-else>
                            Please wait while we processing QR information.
                        </span>

                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button variant="ghost" @click="addQRDataToForm">
                        Add to Form
                    </Button>
                </DialogFooter>
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
import { useRouter } from 'vue-router';

let $form = ref(null);
let firstName = ref("");
let lastName = ref("");
let email = ref("");
let phoneNumber = ref("");
let website = ref("");
let company = ref("");
let fileInput = ref("");
let QRdata = ref("");
let formError = ref([""]);

let router = useRouter();

let processingInfo = ref(false);
let processingQR = ref(false);


async function submitForm() {
    formError.value = [];
    if (!firstName.value) {
        formError.value.push("First Name is required.")
        return;
    }
    if (!website.value) {
        formError.value.push("Website is required.")
        return;
    }
    if (!website.value.startsWith("https://")) {
        website.value = "https://" + website.value;
    }
    processingInfo.value = true;
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
    setTimeout(() => {
        processingInfo.value = false;
        router.push("/list");
    }, 1000);
}

function uploadFile() {
    fileInput.value.click();
}

function processFile(e) {
    processingQR.value = true;
    var reader = new FileReader()
    reader.onload = (function (theFile) {
        return function (e) {
            qrcode.decode(e.target.result)
        }
    })(e.target.files[0]);

    qrcode.callback = function (data) {
        QRdata.value = data;
    }
    reader.readAsDataURL(e.target.files[0])

}


function addQRDataToForm() {
    website.value = QRdata.value;
    processingQR.value = false;
}
</script>