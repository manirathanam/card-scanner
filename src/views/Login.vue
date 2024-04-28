<template>
    <div class="bg-gradient-to-r from-blue-300 w-lvw h-lvh flex items-center  justify-center">
        <Card class="md:w-[450px] w-full md:h-auto h-auto ">
            <CardHeader>
                <CardTitle>Card Scanner</CardTitle>
                <CardDescription>Scan Business cards in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="flex gap-4 flex-col">

                    <div class="flex gap-2 flex-col">
                        <Label>Email</Label>
                        <Input type="email" v-model="email"></Input>
                    </div>
                    <div class="flex gap-2 flex-col">
                        <Label>Password</Label>
                        <Input type="password" v-model="password"></Input>
                    </div>
                </div>

            </CardContent>
            <CardFooter class="flex flex-col px-6 pb-6 gap-2">
                <Button variant="outline" @click="signin">
                    Login
                </Button>
                <Button variant="link">
                    forgot password?
                </Button>
            </CardFooter>
        </Card>
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
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from 'vue-router';

let email = ref("");
let password = ref("");

let router = useRouter();


function signin() {
    signInWithEmailAndPassword(auth, email.value, password.value).then((res) => {
        router.push("/list");
    }).catch((rej) => { console.log(rej) })
}

</script>