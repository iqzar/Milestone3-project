import Image from "next/image"
import img from '../public/p3.jpg'
import { ShoppingCart } from "lucide-react"
import Top from "../top"
import Header from "../header"
import Footer from "../footer"

export default function ProductDetail(){
    return(
        <main>
            <Top/>
            <Header/>
            <div className="flex space-x-16 ml-16 mr-28 mt-20 mb-44">
            <Image src={img} height={653} width={653} alt="img"/>

            <div className="w-378">
            <h1 className="text-[42px] text-side mb-6 font-semibold leading-tight">Nike Air Force 1 <br/> 
            PLT.AF.ORM</h1>
            <p className="text-[12px] leading-loose">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
            <h2 className="text-[36px] mt-3 mb-3 font-bold">₹ 8 695.00</h2>
            <button className="flex text-[12px] py-1 px-4 bg-black text-sec rounded-full"><ShoppingCart size={14}/> Add to cart</button>
            </div>

            </div>
            <Footer/>
        </main>
    )
}