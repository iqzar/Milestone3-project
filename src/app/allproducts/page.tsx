'use client';
import Top from '../top';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/cartcontext'; // Import the cart context
import p1 from '../public/p1.jpg';
import p2 from '../public/p2.jpg';
import p3 from '../public/p3.jpg';
import p4 from '../public/p4.jpg';
import p5 from '../public/p5.jpg';
import p6 from '../public/p6.jpg';
import p7 from '../public/p7.jpg';
import p8 from '../public/p8.jpg';
import p9 from '../public/p9.jpg';
import p10 from '../public/p10.jpg';
import p11 from '../public/p11.jpg';
import p12 from '../public/p12.jpg';
import p13 from '../public/p13.png';
import p14 from '../public/p14.png';
import p15 from '../public/p51.png';
import p16 from '../public/p16.png';
import p17 from '../public/p17.png';
import p18 from '../public/p18.png';
import p19 from '../public/p19.png';
import p20 from '../public/p20.png';
import p21 from '../public/p21.png';
import p22 from '../public/p22.png';
import p23 from '../public/p23.png';
import p24 from '../public/p24.png';
import p25 from '../public/p25.png';
import p26 from '../public/p26.png';
import p27 from '../public/p27.png';
import p28 from '../public/p28.png';
import p29 from '../public/p29.png';
import p30 from '../public/p30.png';
import p31 from '../public/p31.png';
import p32 from '../public/p32.png';
import p33 from '../public/p33.png';
import p34 from '../public/p34.png';
import p35 from '../public/p35.png';
import p36 from '../public/p36.png';
import p37 from '../public/p37.png';
import p38 from '../public/p38.png';
import p39 from '../public/p39.png';
import p40 from '../public/p40.png';
import p41 from '../public/p41.png';
import p42 from '../public/p42.png';
import p43 from '../public/p43.png';
import p44 from '../public/p44.png';
import p45 from '../public/p45.png';
import p46 from '../public/p46.png';
import p47 from '../public/p47.png';
import p48 from '../public/p48.png';
import p49 from '../public/p49.png';
import p50 from '../public/p50.png';
import p51 from '../public/p51.png';
import p52 from '../public/p52.png';
import p53 from '../public/p53.png';
import p54 from '../public/p54.png';
import p55 from '../public/p55.png';
import p56 from '../public/p56.png';
import p57 from '../public/p57.png';
import p58 from '../public/p58.png';
import p59 from '../public/p59.png';
import p60 from '../public/p60.png';
import p61 from '../public/p61.png';
import p62 from '../public/p62.png';
import p63 from '../public/p63.png';
import p64 from '../public/p64.png';
import p65 from '../public/p65.png';
import p66 from '../public/p66.png';
import p67 from '../public/p67.png';
import p68 from '../public/p68.png';
import p69 from '../public/p69.png';
import p70 from '../public/p70.png';
import p71 from '../public/p71.png';
import p72 from '../public/p72.png';
import p73 from '../public/p73.png';
import p74 from '../public/p74.png';
import p75 from '../public/p75.png';
import p76 from '../public/p76.png';
import p77 from '../public/p77.png';
import p78 from '../public/p78.png';
import p79 from '../public/p79.png';
import p80 from '../public/p80.png';
import p81 from '../public/p81.png';
import p82 from '../public/p82.png';
import p83 from '../public/p83.png';
import p84 from '../public/p84.png';
import p85 from '../public/p85.png';
import p86 from '../public/p86.png';
import p87 from '../public/p87.png';
import p88 from '../public/p88.png';
import p89 from '../public/p89.png';
import p90 from '../public/p90.png';
import p91 from '../public/p91.png';
import p92 from '../public/p92.png';
import p93 from '../public/p93.png';



const products = [
  { id: 1, image: p1, title: "Just In", name:"Nike Air Force 1 Mid '07", color:"Color 1", price: "$13.995", detail: "Mens Shoes"},
  { id: 2, image: p2, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 3, image: p3, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 4, image: p4, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 5, image: p5, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 6, image: p6, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 7, image: p7, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 8, image: p8, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 9, image: p9, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 10, image: p10, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 11, image: p11, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 12, image: p12, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 13, image: p13, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 14, image: p14, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 15, image: p15, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 16, image: p16, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 17, image: p17, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 18, image: p18, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 19, image: p19, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 20, image: p20, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 21, image: p21, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 22, image: p22, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 23, image: p23, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 24, image: p24, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 25, image: p25, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 26, image: p26, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 27, image: p27, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 28, image: p28, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 29, image: p29, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 30, image: p30, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 31, image: p31, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 32, image: p32, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 33, image: p33, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 34, image: p34, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 35, image: p35, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 36, image: p36, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 37, image: p37, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 38, image: p38, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 39, image: p39, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 40, image: p40, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 41, image: p41, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 42, image: p42, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 43, image: p43, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 44, image: p44, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 45, image: p45, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 46, image: p46, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 47, image: p47, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 48, image: p48, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 49, image: p49, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 50, image: p50, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 51, image: p51, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 52, image: p52, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 53, image: p53, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 54, image: p54, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 55, image: p55, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 56, image: p56, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 57, image: p57, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 58, image: p58, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 59, image: p59, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 60, image: p60, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 61, image: p61, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 62, image: p62, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 63, image: p63, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 64, image: p64, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 65, image: p65, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 66, image: p66, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 67, image: p67, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 68, image: p68, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 69, image: p69, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 70, image: p70, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 71, image: p71, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 72, image: p72, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 73, image: p73, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 74, image: p74, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 75, image: p75, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 76, image: p76, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 77, image: p77, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 78, image: p78, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 79, image: p79, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 80, image: p80, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 81, image: p81, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 82, image: p82, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 83, image: p83, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 84, image: p84, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 85, image: p85, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 86, image: p86, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 87, image: p87, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 88, image: p88, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 89, image: p89, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 90, image: p90, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 91, image: p91, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 92, image: p92, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" },
  { id: 93, image: p93, title: "Just In", name: "Nike Air Force 1 Mid '07", color: "Color 1", price: "$13.995", detail: "Mens Shoes" }

        
  // Add other products here...
];

const ProductCard: React.FC = () => {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext
  const router = useRouter();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    router.push('/cart') // Add product to cart
  };

  return (
    <main>
      <Top />
      <Header />

      <div className="flex md:justify-between space-x-5 md:mt-16 md:ml-5">
        <Sidebar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 md:ml-10 md:mr-10">
          {products.map((product, index) => (
            <div key={product.id} className={` ${index >= 3 && index % 3 === 0 ? '' : 'mb-8'}`}>
              <div className="group relative overflow-hidden mr-4 md:mr-10">
                <Link href={'/productdetail'}>
                  <Image src={product.image} height={348} width={348} alt={product.name} />
                </Link>
                <button
                  onClick={() => handleAddToCart(product)} // Pass product to addToCart
                  className="h-[30px] top-48 absolute inset-0 flex justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity text-white"
                >
                  Add to Cart
                </button>
              </div>

              <p className="text-[14px] text-red mt-2 font-semibold">{product.title}</p>
              <p className="text-[14px] mt-1 font-semibold">{product.name}</p>
              <p className="text-[14px] mt-1">{product.detail}</p>
              <p className="text-[14px] mt-1">{product.color}</p>
              <p className="text-[14px] mt-2 text-side font-semibold">MRP: {product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProductCard;