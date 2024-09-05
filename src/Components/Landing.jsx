import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  return (
    <div className='w-full h-screen bg-white-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create" ,"Eye-Opening","Presentations"].map((item,index)=>{
                return  (
                    <div className='masker'>
  <div className='w-fit flex items-center'>
    {index === 1 && (
      <img
        src="content-image01 (1).jpg"
        alt="Description"
        className='w-[17vh] h-[5vw] pt-1.5 object-cover rounded  ml-5'
      />
    )}
    <h1 className='uppercase text-[7vw] leading-[6.5vw] tracking-tight font-["Oswald"] font-bold ml-4'>
      {item}
    </h1>
  </div>
</div>

                  

         
                );
            })}
           
        </div>
        <div className='border-t-[1px]  border-white-800 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-light leading-none'>{item}</p> 
            )
            }
            
        
        <div className='start flex items-center gap-5 '>
            <div className='px-5 py-2 border-[1px] border-white-400  rounded-full font-light uppercase text-md'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-white-400 capitalize  rounded-full '>
            <span className='rotate-[45deg]'>
            <FaLongArrowAltUp/>
            </span>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Landing