import { Search, ThumbsDown, ThumbsUp } from "lucide-react";

export default function Left() {
    return (
        <main>
            <div id="left">
                <div className="w-full max-w-lg mx-auto">
                    <div className="flex justify-between items-center text-pir font-bold mb-2 border-2 rounded py-2 px-4 mt-5">
                        <p className="text-sm sm:text-base">What can I help you with?</p>
                        <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                </div>

                <div className="px-4 lg:px-10 text-side mt-8 md:w-[750px]">
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-side mb-5 font-semibold">
                        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                    </h2>
                    <p className="text-sm mb-5">
                        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the
                        following payment options:
                    </p>
                    <p className="text-sm ml-4 lg:ml-10 mb-5">
                        Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                    </p>
                    <p className="text-sm ml-4 lg:ml-10 mb-5">
                        If you enter your PAN information at checkout, youll be able to pay for your order with PayTM or a
                        local credit or debit card.
                    </p>
                    <p className="text-sm ml-4 lg:ml-10 mb-5">Apple Pay</p>
                    <p className="text-sm mb-5">
                        Nike Members can store multiple debit or credit cards in their profile for faster checkout. If
                        youre not already a Member, join us today.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-5 px-4 lg:px-10">
                    <button className="flex justify-center items-center text-sm py-2 px-4 bg-black text-white rounded-full">
                        JOIN US
                    </button>
                    <button className="flex justify-center items-center text-sm py-2 px-6 bg-black text-white rounded-full">
                        SHOP NIKE
                    </button>
                </div>

                <div className="px-4 lg:px-10 mt-5 text-side text-sm">
                    <p className="font-bold mb-2">Does my card need international purchases enabled?</p>
                    <p className="leading-6">
                        Yes, we recommend asking your bank to enable international purchases on your card. You will be
                        notified at checkout if international purchases need to be enabled.
                    </p>
                </div>

                <p className="mb-3 px-4 lg:px-10">
                    Please note some banks may charge a small transaction fee for international orders.
                </p>

                <div className="px-4 lg:px-10 mt-5 text-side text-sm">
                    <p className="font-bold mb-2">Can I pay for my order with multiple methods?</p>
                    <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                </div>

                <div className="px-4 lg:px-10 mt-5 text-side text-sm">
                    <p className="font-bold mb-2">What payment method is accepted for SNKRS orders?</p>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>

                <div className="px-4 lg:px-10 mt-5 text-side text-sm mb-5">
                    <p className="font-bold mb-2">Why dont I see Apple Pay as an option?</p>
                    <p className="leading-6">
                        To see Apple Pay as an option in the Nike App or on Nike.com, youll need to use a compatible Apple
                        device running the latest OS, be signed in to your iCloud account, and have a supported card in your
                        Wallet. Additionally, youll need to use Safari to use Apple Pay on Nike.com.
                    </p>
                </div>

                <p className="mb-2 px-4 lg:px-10">Was this answer helpful?</p>
                <div className="flex space-x-3 px-4 lg:px-10 text-black">
                    <ThumbsUp className="h-5 w-5" />
                    <ThumbsDown className="h-5 w-5" />
                </div>

                <h2 className="px-4 lg:px-10 text-sm text-med mt-4 mb-5">RELATED</h2>

                <div className="px-10">
                    <h2 className="text-sm text-side font-semibold mb-3">
                        WHAT ARE NIKE DELIVERY OPTIONS?
                    </h2>
                    <h2 className="text-sm text-side font-semibold mb-3">
                        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                    </h2>
                </div>
            </div>
        </main>
    );
}
