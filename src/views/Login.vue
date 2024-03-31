<template>
    <div class="bg-gradient-to-r from-blue-300 w-lvw h-lvh flex items-center justify-center">
        <Card class="w-[450px]">
            <CardHeader>
                <CardTitle>Card Scanner</CardTitle>
                <CardDescription>Scan Business cards in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="flex gap-4 flex-col">

                    <div class="flex gap-2 flex-col">
                        <Label>Email</Label>
                        <Input type="email"></Input>
                    </div>
                    <div class="flex gap-2 flex-col">
                        <Label>Password</Label>
                        <Input type="password"></Input>
                    </div>
                </div>

            </CardContent>
            <CardFooter class="flex flex-col px-6 pb-6 gap-2">
                <Button variant="outline">
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



</script>