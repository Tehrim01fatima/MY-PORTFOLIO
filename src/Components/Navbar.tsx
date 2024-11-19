
import React from "react";
import{Nav_LINKS}from '../Components/constants'
 import  Image from "next/image"
import Links from 'next/link'
const Navbar = () => {
  return (
    <nav className="padding-container relative z-30 rounded-lg bg-black  text-white shadow-xl ring-1 ring-slate-100 ">
      <div className=".flexBetween max-conatiner">
        <Links href="/banner_bg.png"  className='bold-28 capitilize relative italic'
>T<span className='text-pink-700 italic'>F</span><span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10'></span> 
   </Links>     
        <ul className=" h-full gap-6 flex px-6 py-3">
        <Image
  src="/pictures/icons8-menu.svg"
  alt="menu"
  width={28}
  height={28}
  className="inline-block cursor-pointer"
/>
          {Nav_LINKS.map((link) => (
            <Links href={link.href} key={link.key} className="flexCenter  text-[15px] font-[500] text-white hover:bg-yellow -500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300">
              {link.label}
            </Links>
          ))
          }

</ul>
      </div>
    </nav>
  );
};

export default Navbar;
