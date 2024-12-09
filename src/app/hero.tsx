import Image from "next/image";
import hero from './public/hero2.jpg';


export default function Hero() {
    return (
        <main>
            {/* Top Banner */}
            <div className="bg-sec h-[46px] text-center pt-1 leading-tight">
                <p className="font-bold text-[15px]">Hello Nike App</p>
                <p className="text-[10px] pb-1">
                    Download the app to access everything Nike.
                    <span className="font-semibold text-sm"> Get Your Great</span>
                </p>
            </div>

            {/* Hero Image Section */}
            <div className="flex justify-center">
                <Image 
                    src={hero} 
                    alt="hero" 
                    className="object-cover w-full max-w-[1200px] h-auto" 
                    priority 
                />
            </div>
        </main>
    );
}