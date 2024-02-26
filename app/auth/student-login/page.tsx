
import Image from "next/image"
import BackImg from "@/images/Pms24f.gif"
import { StuLoginForm } from "@/components/auth/StuLoginForm"
const StuLoginpage = () => {
  return (
    
   <>
    <div className=" bg-cover h-screen w-screen fixed">
        <Image
        unoptimized
          priority
          src={BackImg} // Corrected path
          alt="Study image"
          quality={100}
          style={{
            width: '100vw',
            height: '100vh',
          }}
        />
      </div>
      <div className="relative">
       <StuLoginForm/>
      </div>
   </>
  )
}

export default StuLoginpage
