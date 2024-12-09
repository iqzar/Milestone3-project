import Image from 'next/image';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import logo from './public/logo.png'
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
export default function Header() {
    return (
        <main>
            <div className='flex md:space-x-36 space-x-2 pt-[10px] pb-[10px] md:ml-10 md:mr-10'>
            <div className="flex h-[60] space-x-5  md:space-x-64 ">
                <Image src={logo} width={60} height={5} alt='logo'/>
                <ul className="md:block hidden md:mr-10 mt-1 font-semibold ">
                    <li className="text-xs space-x-3 hover:border-b-2 border-black">
                    <Link className="hover:border-b-2" href={"/#"}>New & Featured</Link>
                    <Link className="hover:border-b-2" href="/">Mens</Link>
                    <Link className="hover:border-b-2" href="/">Womens</Link>
                    <Link className="hover:border-b-2" href="/">Kids</Link>
                    <Link className="hover:border-b-2" href={"/allproducts"}>Sale</Link>
                    <Link className="hover:border-b-2" href="/">SNRKS</Link>
                   
                    </li>
                 </ul>
                <Sheet>
                <SheetTrigger className="md:hidden"><MenuIcon className="mr-5" /></SheetTrigger>
                <SheetContent className="bg-white ml-5">
                <ul className="bg-white ml-5">
                <li className="flex flex-col font-poppins text-sm leading-loose">
                    <Link href={'/'}>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='#projects'>Projects</Link>
                    <Link href={'/contact'}>Contact</Link>
                </li>
                
                </ul>
                </SheetContent>
                </Sheet> 
            </div>
            <div className="flex space-x-5 font-poppins">
                    <div className="border px-3 py-1 w-[84] h-[18] rounded-full bg-sec flex md:space-x-5">
                       <Search size={16} />
                       <p className="text-xs flex font-poppins text-pir md:pl-12">Search</p>
                    </div>
                    <Heart className="mt-1" size={16} />
                    <ShoppingCart className="mt-1" size={16} />
                </div>
                </div>
        </main>
    );
}