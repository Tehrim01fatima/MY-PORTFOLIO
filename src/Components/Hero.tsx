"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32
    md:gap-20 lg:flex-row">
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10">
   </span>
{/* left */}
<div className="relative z-20 flex flex-1 flex-col pt-16">
    
    <h4 className='bold-20 '>Hello,</h4>
    <h1 className='bold-48 lg:bold-64 relative'>I'am Tehrim Fatima</h1>
    <h2 className='bold-28 lg:bold-32 text-[1.8rem] capititalize'>
      A {'  '}
  
      <span>
      <Typewriter
            words={['programmer', '', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
      </span>
      </h2>
      <p className="regular-16 max-w-[555px] my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias ex itaque deleniti, unde ab, quis animi nam dignissimos laboriosam, delectus provident pariatur voluptate dolores? Hic incidunt eaque veritatis soluta architecto laborum corporis modi.
      </p>
      </div>
    </section>
  )
}

export default Hero