import Image from "next/image"
import logo from '../public/logo.png'
import image1 from '../public/image5.png'
import image2 from '../public/shoe2.png'
import pm1 from '../public/pm1 (1).png'
import pm2 from '../public/pm1 (2).png'
import pm3 from '../public/pm1 (3).png'
import pm4 from '../public/pm1 (4).png'
import pm5 from '../public/pm1 (5).png'
import pm6 from '../public/pm1 (6).png'
import pm7 from '../public/pm1 (7).png'
import pm8 from '../public/pm1 (8).png'
import pm9 from '../public/pm1 (9).png'
import pm10 from '../public/pm1 (10).png'
import pm11 from '../public/pm1 (11).png'


import { Lock , MessageSquareText, Package2 , ChevronDown } from 'lucide-react';

export default function Checkout(){
    return(
        <main>
            <div className="flex justify-between mt-5 ml-5 mr-5">
                
                <Image src={logo} width={60} height={5} alt="logo"  />
                
                <div className="flex space-x-5">
                    <p className="text-[14px]">000 800 100 9538</p>
                    <MessageSquareText className="w-[20px] h-[20px]" />
                    <Lock className="w-[20px] h-[20px]" />
                </div>
            </div>

            <div className="flex justify-around ml-20 mr-20 mt-20">
                <div>
                <h2 className="text-side text-[21px] mt-5 mb-2 font-semibold">How would you like to get your order</h2>
                <p className="text-[14px] text-med leading-5 w-[403px] h-[192px]">Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address please click the link for more information. Learn More</p>
                
                <div className="flex space-x-10 border-2 border-side px-6 py-4 rounded-xl">
                    <Package2 className="w-[20px] h-[20px]"/> 
                    <p className="text-side text-[15px] font-semibold">Deliver It</p>
                </div>
                <h2 className="text-side text-[21px] mt-12 mb-8 font-semibold">Enter your name and address:</h2>
                <div className="border-2 border-sec px-6 py-4 rounded mb-6 text-[16px] text-side">First Name</div>
                <div className="border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side">Last Name</div>
                <div className="border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side">Address Line 1</div>
                <div className="border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side">Address Line 2</div>
                <div className="border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side">Address Line 3</div>
                <div className="flex space-x-5">
                <div
                className="flex-1 border-2 border-sec py-4 rounded mt-6 text-[16px] text-side"
                style={{ paddingLeft: "1rem" }} // 1rem = pl-4
                >
                Postal Code
                </div>
                <div
                className="flex-1 border-2 border-sec py-4 rounded mt-6 text-[16px] text-side"
                style={{ paddingLeft: "1rem" }}
                >
                Locality
                </div>
                </div>

                <div className="flex space-x-5">
                <div className="flex-1 border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side flex justify-between">
                    Stat/Territory <ChevronDown />
                </div>
                <div className="flex-1 border-2 border-sec px-6 py-4 rounded mt-6 text-[16px] text-side">
                    India
                </div>
                </div>

                <div className="flex space-x-5 mt-5">
                <label className="mt-1">
                        <input type="checkbox" />
                    </label>
                <p className="text-[14px] text-med mt-1">Save this address to my profile</p>
                </div>

                <div className="flex space-x-5 mt-4">
                <label className="mt-1">
                        <input className="bg-med text-med" type="checkbox" />
                    </label>
                <p className="text-[14px] text-med mt-1">Make this my preferred address</p>
                </div>

                <h2 className="text-side text-[21px] mt-5 mb-8 font-semibold">Whats your contact information?</h2>
                <div className="border-2 border-sec px-6 py-4 rounded mb-2 text-[16px] text-side">Email</div>
                <p className="text-[11px] ml-4 text-med mb-6">A confirmation email will be sent after checkout.</p>
                <div className="border-2 border-sec px-6 py-4 rounded mb-2 text-[16px] text-side">Phone Number</div>                
                <p className="text-[11px] ml-4 text-med mb-6">A carrier might contact you to confirm delivery.</p>

                <h2 className="text-side text-[21px] mt-5 mb-8 font-semibold">Whats your PAN?</h2>   
                <div className="border-2 border-sec px-6 py-4 rounded mb-2 text-[16px] text-side">PAN</div>                
                <p className="text-[11px] ml-4 text-med mb-6">Enter your PAN to enable payment with UPI Net Banking or local<br/> card methods</p>
                <div className="flex space-x-5 mt-4">
                <label className="mt-1">
                        <input className="bg-med text-med" type="checkbox" />
                    </label>
                <p className="text-[14px] text-med mt-1">Save PAN details to Nike Profile</p>
                </div>

                <div className="flex space-x-5 mt-20 mb-16">
                <label className="mt-1">
                        <input className="bg-med text-med" type="checkbox" />
                    </label>
                <p className="w-[404px] h-[42px] text-[14px] text-med mt-1">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</p>
                </div>
                <button
                    type="submit"
                    className="bg-sec w-[440px] h-[60px] text-med text-[15px] rounded-full focus:outline-none focus:shadow-outline mt-5"
                >
                    Continue
                </button>

                <h2 className="text-side text-[20px] mt-6 mb-8 font-semibold border-t-2 border-sec pt-2">Delivery</h2>   
                <h2 className="text-med text-[20px] mt-6 mb-8 font-semibold border-t-2 border-sec pt-2">Shipping</h2>   
                <h2 className="text-med text-[20px] mt-6 mb-8 font-semibold border-t-2 border-sec pt-2">Billing</h2>   
                <h2 className="text-med text-[20px] mt-6 mb-8 font-semibold border-t-2 border-sec pt-2">Payment</h2>   
                
                </div>

                 


                <div>
                <h2 className="text-side text-[21px] md:ml-15 mt-3 font-semibold">Order Summary</h2>
                <div className="flex space-x-44 text-[15px] mt-2 text-med">
                    <h2 className="font-semibold">Subtotal </h2>
                    <h2 className="font-semibold">Free</h2>
                </div>
                <div className="flex justify-between text-[15px] text-med border-b-2 border-sec pb-4 mt-2">
                    <h2 className="font-semibold">Delivery/Shipping</h2>
                    <h2 className="font-semibold">Free</h2>
                </div>
                <div className="flex justify-between border-b-2 border-sec mt-4 pb-4">
                    <h2 className="font-semibold">Total</h2>
                    <h2 className="font-semibold">price</h2>
                </div>
                <p className="text-[9px] mt-4 text-side mb-6">(The total reflects the price of your order, including all duties and taxes)</p>
                <h2 className="text-[15] font-bold mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h2>

                <div className="flex space-x-2 mt-3">
                    <Image src={image1} width={208} height={208} alt="image1"/>
                    <div className="text-[13px] font-semibold">
                    <p className="w-[85px] h-[120px] text-[13px] font-semibold leading-6">Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                    <p className="text-dark">Qty 1</p>
                    <p className="text-dark">Size L</p>
                    <p className="text-dark">230900</p>
                    </div>
                </div>

                <div className="flex space-x-2 mt-5">
                    <Image src={image2} width={208} height={208} alt="image1"/>
                    <div className="text-[13px] font-semibold">
                    <p className="w-[85px] h-[120px] text-[13px] font-semibold leading-6">Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                    <p className="text-dark">Qty 2</p>
                    <p className="text-dark">Size S</p>
                    <p className="text-dark">230900</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex h-[51px] md:w-auto w-[1411px] bg- mt-5 py-4 px-1 justify-between bg-side">
            <div className="flex md:space-x-5 pt-2">
            <p className="text-white font-semibold text-[10px] mt-2 md:mt-0">
                    India
                </p>
              
                <p className="text-gray-400 text-[10px] mt-2 md:mt-0">
                    @2023 Nike, Inc. All Rights Reserved
                </p>

                <ul className="flex flex-wrap space-x-2 mt-2 md:mt-0 text-[10px]">
                    <li className="text-gray-400">Guides</li>
                    <li className="text-gray-400">Terms of Sale</li>
                    <li className="text-gray-400">Terms of Use</li>
                    <li className="text-gray-400">Nike Privacy Policy</li>
                </ul>
                </div>

                <div>
                    <ul>
                        <li className="flex space-x-1">
                            <Image src={pm1} alt="pm1" width={45} height={27}/>
                            <Image src={pm2} alt="pm1" width={45} height={27}/>
                            <Image src={pm3} alt="pm1" width={45} height={27}/>
                            <Image src={pm4} alt="pm1" width={45} height={27}/>
                            <Image src={pm5} alt="pm1" width={45} height={27}/>
                            <Image src={pm6} alt="pm1" width={45} height={27}/>
                            <Image src={pm7} alt="pm1" width={45} height={27}/>
                            <Image src={pm8} alt="pm1" width={45} height={27}/>
                            <Image src={pm9} alt="pm1" width={45} height={27}/>
                            <Image src={pm10} alt="pm1" width={45} height={27}/>
                            <Image src={pm11} alt="pm1" width={45} height={27}/>
                         
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}