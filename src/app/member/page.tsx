import Top from '../top';
import Header from '../header';
import Footer from '../footer';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Member() {
    return (
        <main>
            <Top />
            <Header />
            <div className="flex flex-col items-center px-4 sm:px-0 sm:w-[380px] sm:ml-auto sm:mr-auto">
                <Image className="mt-10" src={logo} width={50} height={100} alt="logo" />
                <h2 className="font-bold text-lg text-center mt-5">BECOME A NIKE MEMBER</h2>
                <p className="text-[12px] text-light text-center mt-5 mb-5">
                    Create your Nike Member profile and get
                    <br />
                    first access to the very best of Nike
                    <br />
                    products, inspiration and community.
                </p>
                <div className="w-full">
                    <label className="block text-white text-sm font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Email address"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="w-full mt-4">
                    <label className="block text-white text-sm font-bold" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        placeholder="Password"
                        className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="w-full mt-4">
                    <label className="block text-white text-sm font-bold" htmlFor="first-name">
                        First Name
                    </label>
                    <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        placeholder="First Name"
                        className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="w-full mt-4">
                    <label className="block text-white text-sm font-bold" htmlFor="last-name">
                        Last Name
                    </label>
                    <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        placeholder="Last Name"
                        className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="w-full mt-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="dob">
                        Date of Birth
                    </label>
                    <input
                        id="dob"
                        name="dob"
                        type="text"
                        placeholder="Date of Birth"
                        className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <p className="text-[12px] text-med text-center mt-2">
                        Get a Nike Member Reward every year on your Birthday.
                    </p>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-white text-sm font-bold" htmlFor="country">
                        Country
                    </label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="India"
                        className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="flex justify-between space-x-4 w-full mt-4">
                    <button className="text-dark text-sm font-semibold border rounded w-full py-2 focus:outline-none focus:shadow-outline">
                        Male
                    </button>
                    <button className="text-dark text-sm font-semibold border rounded w-full py-2 focus:outline-none focus:shadow-outline">
                        Female
                    </button>
                </div>

                <div className="flex items-start space-x-3 mt-5 w-full">
                    <label className="mt-1">
                        <input type="checkbox" />
                    </label>
                    <p className="text-dark text-[12px]">
                        Sign up for emails to get updates from Nike on
                        <br />
                        products, offers and your Member benefits
                    </p>
                </div>

                <p className="text-dark text-[12px] mt-5 text-center">
                    By creating an account, you agree to Nike Privacy
                    <br />
                    Policy and Terms of Use.
                </p>
                <button
                    type="submit"
                    className="bg-black mt-5 w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    JOIN US
                </button>
                <p className="text-[12px] text-light text-center mb-5 mt-5">
                    Already a Member? Log in
                </p>
            </div>
            <Footer />
        </main>
    );
}
