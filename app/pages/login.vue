<template lang="">
    <div class="h-full w-full fixed bg-base-200 grid px-1/2">
        <div class="fixed md:w-[500px] h-2/4 bg-base-100 rounded-sm place-self-center -mt-[160px] p-4">
            <h1>Login to your account</h1>
            <UForm class="p-5 w-full" :schema="schema" :state="state" @submit="onSubmit">
                <UFormField label="Email" class="my-2" name="email">
                    <UInput placeholder="Enter your email" class="w-full" v-model="state.email" />
                </UFormField>
                <UFormField label="Password" class="my-2" name="password">
                    <UInput type="password" class="w-full" />
                </UFormField>
                <UButton type="submit" class="w-1/2 justify-center">
                    Log In
                </UButton>
            </UForm>
            <USeparator label="or" />
        </div>
    </div>
</template>
<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

const schema = z.object({
    email: z.string().email('Invalid email')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}

</script>
<style lang="">
    
</style>