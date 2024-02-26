"use server"
import * as z from "zod"
import {LoginSchema} from "@/schemas"
export const  Stulogin=async (values:any)=>{
    const validatedFields=LoginSchema.safeParse(values);
    if(!validatedFields.success){
        return {error: "Invaild fields!"};
    }
    return {success: "Email sent!"}
}