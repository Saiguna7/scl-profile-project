"use client";
import { Card,CardContent,CardFooter,CardHeader } from "@/components/ui/card";
import { Header } from "./Header";
import { BackButton } from "@/components/auth/back-button";
interface CardWapperProps{
    children:React.ReactNode;
    headerLabel:string,
    backButtonLabel:string,
    backButtonHref:string,
};
export const CardWapper =({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
}:CardWapperProps)=>{
    return(
        <>
        <Card className="w-[400px] shadow-lg backdrop-blur">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton
                href={backButtonHref}
                label={backButtonLabel}
                />
            </CardFooter>
        </Card>
                </>
    )
}