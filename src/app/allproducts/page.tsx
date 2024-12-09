import Top from '../top'
import Header from '../header'
import Footer from '../footer'
import Sidebar from '../sidebar'
import Image from 'next/image'
import p1 from '../public/p1.jpg'
import p2 from '../public/p2.jpg'
import p3 from '../public/p3.jpg'
import p4 from '../public/p4.jpg'
import p5 from '../public/p5.jpg'
import p6 from '../public/p6.jpg'
import p7 from '../public/p7.jpg'
import p8 from '../public/p8.jpg'
import p9 from '../public/p9.jpg'
import p10 from '../public/p10.jpg'
import p11 from '../public/p11.jpg'
import p12 from '../public/p12.jpg'
import p13 from '../public/p13.jpg'
import Link from 'next/link'
export default function Products(){

    const products = [
        { id: 1, image: p1, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 2, image: p2, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 3, image: p3, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 4, image: p4, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 5, image: p5, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 6, image: p6, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 7, image: p7, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 8, image: p8, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 9, image: p9, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 10, image: p10, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 11, image: p11, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 12, image: p12, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 13, image: p13, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
        { id: 14, image: p13, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},

        
    ];


    return(
        <main>
            <Top/>
            <Header/>

            <div className='flex justify-between mt-20'>
            <Sidebar/>

            
            
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 ml-10 mr-10">
  {products.map((product,index) => (
    <div key={product.id}
    className={` ${index >= 3 && (index % 3 === 0) ? "":'mb-8'}`}>

      <Link href={'/productdetail'}> <Image src={product.image} height={348} width={348} alt={product.name}/></Link>
     
      <p className="text-[14px] text-red mt-2 font-semibold">{product.title}</p>
      <p className="text-[14px] mt-1 font-semibold">{product.name}</p>
      <p className="text-[14px] mt-1">{product.detail}</p>
      <p className="text-[14px] mt-1">{product.color}</p>
      <p className="text-[14px] mt-2 text-side font-semibold">MRP: {product.price}</p>
    </div>
  ))}
</div>
</div>

<h2 className='text-[16] text-side ml-10 mt-20 border-t-2 pt-10 mr-10'>Related Catagories</h2>

<div className='flex space-x-1 mb-3 ml-10 mr-10 mt-5'>
<div className='border-2 py-2 px-8 w- rounded-full'>
<p className='text-[12px] text-side' >Best Selling Products</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >Best Shoes</p>
</div>



<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >Best Football Shoes</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >New Mens Shoes</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >New Running Shoes</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >Best Mens Shoes</p>
</div>
</div>

<div className='flex space-x-4 mr-10 ml-10'>
<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >New Modern Shoes</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >Best Womens Shoes</p>
</div>

<div className='border-2 py-2 px-8 w-34 rounded-full'>
<p className='text-[12px] text-side' >Best Training & Gym</p>
</div>


</div>




            <Footer/>

        </main>
    )
}