import Arrows from './arrows';
import Image from 'next/image';
import p1 from './public/shoe1.jpg';
import p2 from './public/shoe2.png';



export default function Airmax() {

    const products = [
        { id: 1, image: p1, title: "NIKE Air Max Pulse", price: "$13.995", detail: "Women's Shoes"},
        { id: 1, image: p1, title: "NIKE Air Max Puls", price: "$13.995", detail: "Men's Shoes"},
        { id: 1, image: p2, title: "NIKE Air Max 97 SE", price: "$16.995", detail: "Men's Shoes"},
        { id: 1, image: p2, title: "NIkE Air Max 97 SE", price: "$16.995", detail: "Men's Shoes"}
        
    ];



    return(
        <main>
            <div className='flex justify-between mt-20 ml-10 mr-10 mb-5'>
            <h2 className='text-[18px] md:text-[22px] font-semibold'>Best of Air Max</h2>
            <div className='flex space-x-3'>
            <p className='text-[15px]'>Shop</p>
            <Arrows/>
            </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-evenly md:ml-0 ml-20 md:mt-0 mt-8'>
            {products.map((product) => (
                    <div key={product.id}>
                        
            <Image src={product.image} height={200} width={200} alt='shoe1'/>
            <div className='flex flex-col md:flex-row  md:justify-between mt-5 text-[10px] text-black'>
                <p className='font-semibold'>{product.title}</p>
                <p>{product.price}</p>
            </div>
            <p className='text-[10px] text-sec'>{product.detail}</p>
            </div>
            
            ))}
            </div>
        </main>
    )
}