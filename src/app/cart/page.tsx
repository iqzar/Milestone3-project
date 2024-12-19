'use client';
import React from 'react';
import { useCart } from '../context/page'; // Import the cart context
import Image from 'next/image';
import Link from 'next/link';
import Top from '../top';
import Header from '../header';
import Footer from '../footer';
import pro from '../public/pro.jpg'
import { Heart, Trash } from 'lucide-react';
import Arrows from '../arrows';

const Cart = () => {
  const { cart } = useCart(); // Access the cart data from the context

  return (
    <main>
      <Top />
      <Header />
      <div className="md:flex md:space-x-8 md:ml-20 md:mr-20 ml-10 mr-10 mt-10">
        {/* Left Section: Cart Items */}
        <div className="flex-1">
          {/* Free Delivery Section */}
          <div className="w-full h-[62px] bg-sec pl-10 text-side flex items-center">
            <div>
              <p className="text-[13px] font-semibold">Free Delivery</p>
              <div className="flex space-x-6">
                <p className="text-[13px]">Applies to orders of ₹ 14 000.00 or more.</p>
                <Link
                  className="text-side font-semibold text-[10px] border-b-2 border-black"
                  href={'/'}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Bag Section */}
          <h2 className="text-side text-[22px] md:ml-15 ml-10 mt-5 font-semibold">Bag</h2>
          {cart.length === 0 ? (
            <p className="text-side text-[18px] mt-5">Your cart is empty!</p>
          ) : (
            <div className="flex flex-col gap-6 mt-10">
              {cart.map((item, index) => (
                <div key={index} className="flex space-x-8 border-b-2 border-sec pb-6">
                  <div>
                    <Image
                      src={item.image} // Use the image property from the cart item
                      alt={item.name}
                      width={150}
                      height={150}
                      className="w-[150px] h-[150px]"
                    />
                  </div>
                  <div className="text-[15px] text-side flex-1">
                    <div className="flex justify-between">
                      <h2 className="font-semibold mt-2">{item.name}</h2>
                      <h2 className="font-semibold mt-2">MRP: {item.price}</h2>
                    </div>
                    <p className="text-pir">{item.detail}</p>
                    <p className="text-pir">{item.color}</p>
                    <div className="flex space-x-14">
                      <p className="text-pir">Size: L</p>
                      <p className="text-pir">Quantity: 1</p>
                    </div>
                    <div className="flex space-x-4 mt-8">
                      <Heart />
                      <Trash />
                    </div>
                  </div>
                  
                </div>
              ))}
              <h2 className='text-[21px] text-side font-semibold leading-tight'>Favourites</h2>
              <p className='text-[15px] text-side font-medium'>There are no items saved to your favourites.</p>
            </div>
          )}
        </div>

        {/* Right Section: Summary */}
        <div className="w-full md:w-[30%] md:sticky md:top-20 mt-10 md:mt-0">
          <h2 className="text-[21px] text-side font-semibold">Summary</h2>
          <div className="flex justify-between text-[15px] mt-4">
            <h2 className="font-semibold">Subtotal :</h2>
            <h2 className="font-semibold">price</h2>
          </div>
          <div className="flex justify-between text-[15px] border-b-2 border-sec pb-4 mt-4">
            <h2 className="font-semibold">Estimated Delivery & Handling</h2>
            <h2 className="font-semibold">Free</h2>
          </div>
          <div className="flex justify-between border-b-2 border-sec mt-4 pb-4">
            <h2 className="font-semibold">Total</h2>
            <h2 className="font-semibold">price</h2>
          </div>
          <button className="w-full h-[60px] bg-black text-white text-[15px] rounded-full mt-6">
            Member Checkout
          </button>
        </div>
      </div>
      <div className='flex justify-between mr-10 mt-20'>
      <h2 className='text-[21px] text-side font-semibold leading-tight ml-10'>
          You May Also Like
      </h2>
      <Arrows/>
      </div>
      <div>
      <Image className='ml-10 mt-5' src={pro} width={431} height={431} alt='pro'/>
      <div className='ml-10'>
            <h1 className="text-[15px] text-side mt-2 font-semibold leading-tight">Nike Air Force 1</h1>
            <p className="text-[15px] text-pir">Mens Shoes</p>
            <h2 className="text-[15px] mt-2 mb-3 text-side font-bold">₹ 8 695.00</h2>
            </div>
            
     
            </div>
<Footer />
    </main>
  );
};

export default Cart;
