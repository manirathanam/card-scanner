<template>
    <div class="bg-gradient-to-r from-blue-300 min-h-screen">
        <header class="w-full relative top-0 p-2 bg-white shadow-md">
            <div class="flex gap-4 justify-between items-center">
                <div class="flex gap-4 items-center">
                    <RouterLink to="/list">
                        <Button variant="ghost">List</Button>
                    </RouterLink>
                    <RouterLink to="/create">
                        <Button variant="ghost">Create</Button>
                    </RouterLink>
                </div>
                <div class="flex gap-4 items-center">
                    <Label>{{ user.email }}</Label>
                    <Button variant="ghost" @click="handleSignout">Logout</Button>
                </div>
            </div>
        </header>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import { auth } from "../firebase.js";
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const user = auth.currentUser;
const router = useRouter();


function handleSignout() {
    signOut(auth);
    router.push("/login");
}

</script>