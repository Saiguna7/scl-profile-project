"use client"
import * as z from "zod";
import {CardWapper} from "./Card-Wapper";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "@/schemas";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState, useTransition} from "react";
import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { FormError } from "@/components/form-error";
import { FormSuccuss } from "../form-succuss";
import { StuReg } from "@/actions/StuReg";

export const StuRegForm=()=>{
    const [error,setError]=useState<string | undefined>("");
    const [success,setSuccess]=useState<string | undefined>("");
    const [ispending, startTransition]=useTransition();
    const form=useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        },
    })
    const onSubmit=(values: z.infer<typeof RegisterSchema>)=>{
        setError("");
        setSuccess("");
        startTransition(()=>{
            StuReg(values)
            .then((data)=>{
                setError(data.error);
                setSuccess(data.success)
            })
        })
    }
    return(
        <>
        <CardWapper
        headerLabel="Creat an account"
        backButtonLabel="Return to your profile"
        backButtonHref="/auth/admin/profile"
        >
            <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}
className="space-y-6"
>
    <div className="space-y-4">
    <FormField
control={form.control}
name="name"
render={({field})=>(
    <FormItem>
        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">User Name</FormLabel>
        <FormControl>
            <Input
            {...field}
            disabled={ispending}
            placeholder="john deo"
            className=" placeholder-slate-400"
            />
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>
<FormField
control={form.control}
name="email"
render={({field})=>(
    <FormItem>
        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">Email</FormLabel>
        <FormControl>
            <Input
            {...field}
            disabled={ispending}
            placeholder="john.doe@example.com"
            type="email"
            />
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>
<FormField
control={form.control}
name="password"
render={({field})=>(
    <FormItem>
        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">Password</FormLabel>
        <FormControl>
            <Input
            {...field}
            disabled={ispending}
            placeholder="******"
            type="password"
            />
        </FormControl>
        <FormMessage/>
    </FormItem>
    
)}
/>
<FormField
control={form.control}
name="confirmPassword"
render={({field})=>(
    <FormItem>
        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">Confirm Password</FormLabel>
        <FormControl>
            <Input
            {...field}
            disabled={ispending}
            placeholder="******"
            type="password"
            />
        </FormControl>
        <FormMessage/>
    </FormItem>
    
)}
/>
   <FormSuccuss message={success}/>
   <FormError message={error}/>
    </div>
    <Button type="submit"
    disabled={ispending}
    className="w-full text-black bg-orange-600 rounded-2xl font-semibold hover:bg-black hover:text-white hover:font-extrabold
    ">
Registor
    </Button>
</form>
            </Form>
        </CardWapper>
            </>
    )
}
