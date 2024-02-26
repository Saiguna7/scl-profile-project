import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
interface FormErrorProps{
    message?: string;
};
export const FormError=({
    message,
}:FormErrorProps)=>{
    if(!message) return null;
    return(
        <div className="p-3 rounded-2xl  flex items-center gap-x-2 text-sm  text-red-600 bg-red-200 shadow-lg">
        <ExclamationTriangleIcon className="h-4 w-5" />
        <p>{message}</p>
        </div>
    )
}