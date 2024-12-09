import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <main className="w-full bg-black mt-20">
            
            {/* Main Footer Content */}
            <div className="flex flex-wrap md:justify-between md:space-x-10 pt-8 px-5">
                
                {/* Navigation Links */}
                <div className="flex flex-wrap space-y-4 md:space-y-0">
                    <ul className="text-[10px] text-white leading-8">
                        <li>FIND A STORE</li>
                        <li><Link href="/member">BECOME A MEMBER</Link></li>
                        <li><Link href="/login">SIGN UP FOR EMAIL</Link></li>
                        <li>Send us feedback</li>
                        <li>STUDENTS DISCOUNTS</li>
                    </ul>
                </div>

                <div className="flex flex-wrap space-y-4 md:space-y-0">
                    <ul className="text-[10px] text-white leading-8">
                        <li>GET HELP</li>
                        <li className="text-gray-400">Order Status</li>
                        <li className="text-gray-400">Delivery</li>
                        <li className="text-gray-400">Payment Options</li>
                        <li className="text-gray-400">Contact Us On Nike.com Inquiries</li>
                        <li className="text-gray-400">Contact Us On Nike.com All Other Inquiries</li>
                    </ul>
                </div>

                <div className="flex flex-wrap space-y-4 md:space-y-0">
                    <ul className="text-[10px] text-white leading-8">
                        <li>ABOUT LINKS</li>
                        <li className="text-gray-400">News</li>
                        <li className="text-gray-400">Careers</li>
                        <li className="text-gray-400">Investors</li>
                        <li className="text-gray-400">Sustainability</li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6 mt-3 md:mt-0">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white" />
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="flex flex-wrap md:flex-row flex-col justify-between items-center mt-5 px-5 md:space-x-5">
                <p className="text-gray-400 text-[10px] mt-2 md:mt-0">
                    @2023 Nike, Inc. All Rights Reserved
                </p>

                <ul className="flex flex-wrap space-x-4 mt-2 md:mt-0 text-[10px]">
                    <li className="text-gray-400">Guides</li>
                    <li className="text-gray-400">Terms of Sale</li>
                    <li className="text-gray-400">Terms of Use</li>
                    <li className="text-gray-400">Nike Privacy Policy</li>
                </ul>
            </div>
        </main>
    );
}