"use client"
import { useRouter } from "next/navigation";
interface  LoginButtonProps{
    children:React.ReactNode;
    mode?:"model"| "redirect";
    asChild?:boolean;
};
export const StuLoginButton = ({
    children,
    mode="redirect",
    asChild} : LoginButtonProps)=>{
        const router =useRouter();
        const onClick=()=>{
            router.push("/auth/student-login");
        };
        return(
            <span onClick={onClick} className="cursor-pointer">
{children}
            </span>
        )
}