import Image from "next/image";
import img from '../public/p3.jpg';
import { ShoppingCart } from "lucide-react";
import Top from "../top";
import Header from "../header";
import Footer from "../footer";

export default function ProductDetail() {
    return (
        <main>
            <Top />
            <Header />

            <div className="flex flex-col lg:flex-row lg:space-x-16 ml-4 lg:ml-16 mr-4 lg:mr-28 mt-10 lg:mt-20 mb-20 lg:mb-44">
                <div className="flex justify-center lg:justify-start mb-10 lg:mb-0">
                    <Image 
                        src={img} 
                        height={653} 
                        width={653} 
                        alt="Nike Air Force 1" 
                        className="max-w-full h-auto"
                    />
                </div>

                <div className="w-full lg:w-378 px-4 lg:px-0">
                    <h1 className="text-[28px] lg:text-[42px] text-side mb-6 font-semibold leading-tight">
                        Nike Air Force 1 <br /> PLT.AF.ORM
                    </h1>
                    <p className="text-[14px] lg:text-[12px] leading-loose">
                        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired 
                        construction, including unique layering and exposed foam accents, ups the ante on this 
                        timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted 
                        appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic 
                        give this release an artisan finish.
                    </p>
                    <h2 className="text-[28px] lg:text-[36px] mt-3 mb-3 font-bold">₹ 8,695.00</h2>
                    <button className="flex items-center text-[14px] lg:text-[12px] py-2 px-6 lg:py-1 lg:px-4 bg-black text-sec rounded-full">
                        <ShoppingCart size={16} className="mr-2" /> Add to cart
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
