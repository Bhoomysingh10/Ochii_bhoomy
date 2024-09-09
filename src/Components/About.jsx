import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue Montreal"]  text-[3.8vw] leading-[4.5vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <h2 className='border-t-[1px] border-gray-400 mt-10 gap-2 flex justify-between items-start py-5 px-5'>
  <p className='text-md font-light tracking-light leading-none'>
    What you can expect
  </p>

  <p className='text-md font-light tracking-light leading-normal'>
    We create tailored presentations to help <br /> you persuade your colleagues, clients, or<br /> investors. Whether it’s live or digital, <br /> delivered for one or a hundred people.<br />
    We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing,<br /> and captivating.
  </p>
</h2> 
<div className='w-full  flex gap-5 border-t-[1px] pt-10 border-gray-400 '>
<div className='w-1/2'>
<h1 className='text-6xl  tracking-tighter'>Our approach:</h1>
<button className='px-10 py-4 uppercase bg-zinc-900 rounded-full mt-7 text-white  items-center flex justify-between relative gap-10 '>Read More
<div className=' w-2 h-2 bg-zinc-100 rounded-full'></div></button>
</div>
<div className='w-1/2 h-[70vh]'>
<img src="ochii2.jpg" alt="ochii2" className='rounded-3xl' />
</div>

</div>


    </div>
  )
}

export default About