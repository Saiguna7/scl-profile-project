"use client"

import { useRouter } from "next/navigation";

interface  RegButtonProps{
    children:React.ReactNode;
    mode?:"model"| "redirect";
    asChild?:boolean;
};
export const StuRegButton = ({
    children,
    mode="redirect",
    asChild} : RegButtonProps)=>{
        const router =useRouter();
        const onClick=()=>{
            router.push("/auth/student-register");
        };
        return(
            <span onClick={onClick} className="cursor-pointer">
{children}
            </span>
        )
    }