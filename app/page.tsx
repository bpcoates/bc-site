import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-600'>
        
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex align-baseline gap-2'>
        <div>
          <Image src="/../public/logo.png" alt='logo image' height={60} width={60} className='hover:scale-105' />
        </div>

        
       <div>
            <p className='text-[#1a363d] sm:font-bold tracking-widest'>welcome to</p>
            <h1  className='text-2xl text-slate-200 sm:text-3xl tracking-widest'>brentcoates.com</h1>
            </div>
            </div>
    </div>
  </div>
  )
}

export default Home