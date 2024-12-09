import Top from '../top'
import Header from '../header'
import Footer from '../footer'
import Image from 'next/image'
import logo from '../public/logo.png'


export default function Member(){
    return(
        <main>
            <Top/>
            <Header/>
            <div className='w-[380px]  justify-center items-center ml-96'>
                <Image className='ml-40 mt-10' src={logo} width={50} height={100}  alt='logo'/>
                <h2 className='font-bold text-lg text-center mt-5 '>
                    BECOME A NIKE MEMBER
                </h2>
                <p className='text-[12px] text-light text-center mt-5 mb-5'>Create your Nike Member profile and get<br/> first access to the very best of Nike<br/> products, inspiration and community.</p>
                <div>
          <label className="block text-white text-sm font-bold" htmlFor="name">
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
          <label className="block text-white text-sm font-bold" htmlFor="name">
            Password
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Password"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            </div>
            <div>
          <label className="block text-white text-sm font-bold" htmlFor="name">
            Password
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            </div>
            <div>
          <label className="block text-white text-sm font-bold" htmlFor="name">
            First Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Last Name"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            </div>
            <div>
          <label className="block text-white text-sm font-bold mb-5" htmlFor="name">
            
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Date of Birth"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            <p className='text-[12px] text-med text-center mt-2'>Get a Nike Member Reward every year on your Birthday.</p>
            </div>
        
            <div>
          <label className="block text-white text-sm font-bold" htmlFor="name">
            First Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="India"
            className="appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            required/>
            </div>


            <div className='flex space-x-5'>
            <div>
          <button className="block text-dark text-sm  font-semibold border rounded w-full py-2 px-[70px] mt-4 leading-tight focus:outline-none focus:shadow-outline">
           Male
           </button>
            </div>

            <div>
          <button className="block text-dark text-sm font-semibold  border rounded w-full py-2 px-[70px] mt-4 leading-tight focus:outline-none focus:shadow-outline">
          Female
           </button>
            </div>
            </div>

<div className='flex space-x-6 mt-4 ml-5 mr-5'>
<div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[12px]'>Sign up for emails to get updates from Nike on<br/> products, offers and your Member benefits</p>

</div>
           
      
<p className='text-dark text-[12px] mt-4 text-center'>By creating an account, you agree to Nike's Privacy<br/> Policy and Terms of Use.</p>
            <button
            type="submit"
            className="bg-black mt-5 w-full text-dark py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            JOIN US
          </button>
          <p className='text-[12px] text-light text-center mb-5 mt-5'>Already a Member login</p>
       
            </div>
            <Footer/>
        </main>
    )
}