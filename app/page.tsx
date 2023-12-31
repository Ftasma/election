"use client"
import Image from 'next/image'
import ui from "../public/download 1ui-logo.png"
import bamssa from "../public/1651480676413 2Bamssa-logo.png"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router= useRouter()
  const route =()=>{
    router.push("/sign-in")
  }
  return (
    <main className=' text-white main-page w-full h-full'>
      <header className=' flex  p-6 justify-between items-center' >
        <aside className='flex gap-2'>
        <div className=' flex gap-1'>
            <Image className='h-10' src={ui} alt='ui logo' height='30' width='30'/>
            <Image  className="h-10" src={bamssa} alt='bamssa logo' height='30' width='30'/>
        </div>
        <div>
          <p className=' text-sm uppercase'>
            Faculty of the basic medical <br /> sciences university of ibadan
          </p>
        </div>
        </aside>
        <aside className=' flex space-x-2 justify-around items-center'>
          <p className='underline cursor-pointer underline-offset-4'>
            Home
          </p>
          <p className=' hover:underline cursor-pointer underline-offset-4'>
            info
          </p>
        <Button onClick={route} className=' rounded-full bg-white text-black' variant="ghost">Vote now</Button>
        </aside>
      </header>
      <section className='flex flex-col items-center w-full'>
        <h1 className='font-bold text-[70px] text-center mt-[15%] capitalize'>
          vote wisely, <br /> vote right!
        </h1>
        <Button onClick={route} className=' p-8 hover:bg-white rounded-full bg-white text-black' >Click here to vote <span className=' ml-2'>&#8594;</span></Button>
      </section>
    </main>
  )
}
