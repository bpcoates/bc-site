import React from 'react'

const About = () => {
  return (

    <div className='flex w-full h-screen py-16 bg-slate-600 p-4 justify-center items-center'>
        <div className=' max-w-[1240px] m-auto md:grid px-8 grid-cols-3'> 
            <div className='col-span-2'>
                <p className='py-2 text-xl tracking-widest text-slate-400 border-b-2 border-[#1a363d] '>about</p>
                <p className='px-2 text-sm pt-2 text-slate-200'>i have been working in the technical field for the last 20 years. 
                    i got my start in stillwater oklahoma helping customers with installation and configuration of their sound cards and other computer peripherals.
                    i later moved into testing and qa and eventually headed out to the seattle area to continue that journey. 
                    there my experience has been in system setup and administration and scripting to support hardware and software testing and development. 
                    i am currently working as a data center administrator and continue expanding my skills into areas such as web development and cloud technologies.</p>
            </div>
            <div></div>
        </div>
        
    </div>
    
  );
};

export default About