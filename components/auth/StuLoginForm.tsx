"use client"
import * as z from "zod";
import { CardWapper } from "./Card-Wapper";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
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
import { Stulogin } from "@/actions/Stulogin";
export const StuLoginForm=()=>{
    const [error,setError]=useState<string | undefined>("");
    const [success,setSuccess]=useState<string | undefined>("");
    const [ispending, startTransition]=useTransition();
    const form=useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        },
    })
    const onSubmit=(values: z.infer<typeof LoginSchema>)=>{
        setError("");
        setSuccess("");
        startTransition(()=>{
            Stulogin(values)
            .then((data)=>{
                setError(data.error);
                setSuccess(data.success)
            })
        })
    };
    return(
        <>
        <CardWapper 
        headerLabel="Welcome to student Login Page"
        backButtonLabel="Return to Home Page"
        backButtonHref="/"
        >
            <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}
className="space-y-6"
>
    <div className="space-y-4">
<FormField
control={form.control}
name="email"
render={({field})=>(
    <FormItem>
        <FormLabel>Email</FormLabel>
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
        <FormLabel>Password</FormLabel>
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
Login
    </Button>
</form>
            </Form>
        </CardWapper>
            </>
    )
}