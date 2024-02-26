import { Button } from "@/components/ui/button";
import { Poppins } from 'next/font/google'; // Assuming correct import path
import { cn } from '@/lib/utils';
import { StuLoginButton } from '@/components/auth/Student-Login-button';
import { StuRegButton } from '@/components/auth/Student-Reg-button';
// Correct usage of Poppins font:
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <>      
      <main className="flex h-full flex-col items-center justify-center ">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              'text-5xl font-semibold text-black drop-shadow-md',
              font.className // Apply font classNamees correctly
            )}
          >
            Staff Login
          </h1>
        </div>
        <StuLoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </StuLoginButton>
        <StuRegButton>
          <Button variant="secondary" size="lg">
             Registation Sign In
          </Button>
        </StuRegButton>
      </main>
    </>
  );
}
