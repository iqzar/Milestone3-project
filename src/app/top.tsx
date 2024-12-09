import Image from "next/image";
import top from './public/top.png';
import Link from "next/link";

export default function Top() {
    return (
        <main className="bg-sec h-[36px] w-full flex items-center justify-between md:pt-2 md:pl-5 md:pr-5 space-x-5 md:space-x-10">
            
            {/* Logo/Image Section */}
            <div>
                <Image 
                    src={top} 
                    width={18} 
                    height={5} 
                    alt="top" 
                    className="pb-1"
                />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-1 md:space-x-3 text-[13px] font-semibold">
                <p>Find a share</p>
                <p>|</p>
                <p><Link href={'/help'}>Help</Link></p>
                <p>|</p>
                <p>Join us</p>
                <p>|</p>
                <p>Sign in</p>
            </div>

            {/* Mobile Links */}
            <div className="md:hidden flex space-x-2 text-[12px]">
                <Link href={'/help'}>Help</Link>
                <span>|</span>
                <Link href={'/join'}>Join us</Link>
                <span>|</span>
                <Link href={'/signin'}>Sign in</Link>
            </div>

        </main>
    );
}