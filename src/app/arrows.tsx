import { ArrowLeft , ArrowRight } from 'lucide-react';

export default function Arrows(){
    return(
        <main className='flex space-x-3'>
              <div className='border h-[28px] w-[28px] bg-sec rounded-full'>
                    <ArrowLeft className='h-5 w-5 pt-1 pl-1' />
                </div>
            <div className='border  h-[28px] w-[28px] bg-sec rounded-full'>
            <ArrowRight className='h-5 w-5 pt-1 pl-1' />
            </div> 
        </main>
    )
}