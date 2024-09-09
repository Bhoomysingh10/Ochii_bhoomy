import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-white-800 flex gap-10  whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["Oswald"] font-semibold  pt-2 pb-11 -mb-10 text-white'>WE ARE OCHII</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}}className='text-[17vw] leading-none font-["Oswald"] font-semibold pt-2 pb-11 -mb-10 text-white'>WE ARE OCHII</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}}className='text-[17vw] leading-none font-["Oswald"] font-semibold pt-2 pb-11 -mb-10 text-white'>WE ARE OCHII</motion.h1>
        </div>
    </div>
  )
}

export default Marquee