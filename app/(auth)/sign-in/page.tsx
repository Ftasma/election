"use client"
import Navbar from "../_components/Navbar";
import Image from "next/image";
import pic from '../../../public/Picture.png'
import ui from '../../../public/download 1ui-logo.png'
import help from '../../../public/Vector.png'
import bamssa from '../../../public/1651480676413 2Bamssa-logo.png'
import { useRouter } from "next/navigation";

const Signin = () => {
    
    return (  
        <main className=" flex">
            <section className=" flex-1 space-y-8 p-5">
            <Navbar/>
                <div className="flex ">
                    <Image src={ui} alt="ui logo" height='30' width='30'/>
                    <Image src={bamssa} alt="bamssa logo" height='30' width='30'/>
                </div>
                <h1>
                    Sign in
                </h1>
                <p className=" text-[#646464;] font-normal">
                    Just fill in the required details and complete the voting process in a jiffy.
                </p>
                <h3>
                    Matric no
                </h3>
                <input type="text" className=" border-gray-300 border rounded-full h-[10%] w-[85%] placeholder:pl-2 focus-within:outline-none pl-2" placeholder="256778" />
                <label className=" flex items-center gap-x-2">
                 <input className="block" type="checkbox" />
                 I don&apos;t have access to my school e-mail
                </label>
                <button className="    bg-black text-white w-[80%] h-[10%] rounded-full">
                    continue <div className=" ml-[25%] inline-block">&#8594;</div>
                </button>
                <footer className=" pt-9 w-full flex items-center space-x-2">
                <p>
                <Image className=" h-4" src={help} alt="help logo" height='10' width='10'/>
                    </p>
                <p>Need help?</p>
                </footer>
            </section>
            <section className="w-full hidden md:block flex-1">
                <Image className=" object-cover h-[100vh]" src={pic} alt="background" height={1000} width={1000}/>
            </section>
        </main>
    );
}
 
export default Signin;