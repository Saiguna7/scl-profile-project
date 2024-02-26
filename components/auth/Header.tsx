
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { AcademicCapIcon } from "@heroicons/react/24/solid";



const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}
export const Header = ({ label,}: HeaderProps) => {

  return (
    <div className="w-full flex  justify-center gap-2">
      <AcademicCapIcon className="h-9 w-6" />
      <div className="flex flex-col items-center gap-y-4">
        <h1 className={cn("text-3xl font-semibold ", font.className)}>
            Student Login
        </h1>
        <p className="text-muted-foreground text-sm">
          {label}
          </p>
      </div>
    </div>
  );
};
