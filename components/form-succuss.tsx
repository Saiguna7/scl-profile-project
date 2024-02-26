import { CheckCircleIcon } from "@heroicons/react/24/outline";
interface FormSuccussProps{
    message?: string;
};
export const FormSuccuss=({
    message,
}:FormSuccussProps)=>{
    if(!message) return null;
    return(
        <div className="p-3 rounded-2xl shadow-lg flex items-center gap-x-2 text-sm  text-green-600 bg-green-200">
        <CheckCircleIcon className="h-4 w-5" />
        <p>{message}</p>
        </div>
    )
}