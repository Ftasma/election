"use client"
import { ModeToggle } from "@/components/toggle";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const route =()=>{
        router.push("/")
      }
    return ( 
        <div className="flex justify-between">
            <div className=" cursor-pointer" onClick={route}>
            &#8592;
            </div>
            <div>
                <ModeToggle/>
            </div>
        </div>
     );
}
 
export default Navbar;