import Top from '../top'
import Header from '../header'
import Footer from '../footer'
import Image from 'next/image'
import logo from '../public/logo.png'


export default function Login(){
    return(
        <main>
            <Top/>
            <Header/>
            <div className='w-[380px]  justify-center items-center ml-96'>
                <Image className='ml-40 mt-10' src={logo} width={50} height={100}  alt='logo'/>
                <h2 className='font-bold text-lg text-center mt-5 '>
                    YOUR ACCOUNT<br/>
                    FOR EVERYTHING<br/>
                    NIKE
                </h2>
                <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Email address"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Password
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Password"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            <div className='flex justify-between mt-5 mb-5'>
            <p className='text-[12px] text-light '>Keep me sigind in</p>
            <p className='text-[12px] text-dark '>Forgetten your password?</p>

            </div>
        
        <p className='text-[12px] text-light text-center mb-5'>By logging in you agree to Nike Privacy Policy<br/> and Terms of Use.</p>

            <button
            type="submit"
            className="bg-black w-full text-dark py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SIGN IN
          </button>
          <p className='text-[12px] text-light text-center mb-5 mt-5'>Not a member Join Us</p>
        </div>
            </div>
            <Footer/>
        </main>
    )
}