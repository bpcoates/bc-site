import React from 'react'

const Contact = () => {
  const rows : number = 10;
  return (
    <div className='w-full h-screen bg-slate-600 text-slate-200 p-4 flex justify-center items-center'>
        <form method="Post" action="https://getform.io/f/705216f2-38dc-45e2-95cb-9d587645884d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
            <p className='py-2 text-xl tracking-widest text-slate-400 border-b-2 border-[#1a363d] '>contact</p>
                <p className='text-slate-200 py-1 text-sm tracking-wider'> Submit the form below or send me an email at bpcoates@hotmail.com </p>
            </div>
            <input className='my-4 p-2 rounded-sm bg-slate-200 text-sm text-slate-900 placeholder:tracking-wider placeholder:italic placeholder:text-slate-600' type="text" placeholder='name' name='name'/>
            <input className='my-4 p-2 rounded-sm bg-slate-200 text-sm text-slate-900 placeholder:tracking-wider placeholder:italic placeholder:text-slate-600' type='email' placeholder='email' name='email'/>
            <textarea className='my-4 p-2 rounded-sm bg-slate-200 text-sm text-slate-900 placeholder:tracking-wider placeholder:italic placeholder:text-slate-600' placeholder='message' name='message' rows={rows}></textarea>
            <button className=' text-slate-400 tracking-widest rounded-md border-2 border-slate-400 hover:border-[#1a363d] hover:bg-slate-500 px-4 py-2 my-8 mx-auto flex items-center'>submit</button>
        </form>
    </div>
  )
}

export default Contact