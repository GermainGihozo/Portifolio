import React from 'react'
import insta from "../assets/insta.png"
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const instagramProfile = "https://www.instagram.com/realkwizera1/"
  const whatsappMe = "https://wa.me/250726922589"
  return (
    <div className='relative w-full lg:mx-auto mx-5  my-auto bg-blue-600'>
        <div className='flex justify-center items-center text-white p-3 mb-5'>
            <div>
                <h1 className='font-bold text-md my-1'>&copy; KWIZERA Ferdinand <span className='text-orange-600 text-2xl'>|</span> realkwizera1@gmail.com</h1>
                <div className='flex flex-row items-center justify-center gap-10 my-1'>
                    
                    <p onClick={()=>{window.open(instagramProfile,"_blank")}} className='cursor-pointer transtion-transform duration-300 hover:scale-130' ><FaInstagram size={25}/></p>
                    <p onClick={()=>{window.open(whatsappMe,"_blank")}} className='cursor-pointer transition-transform duration-300 hover:scale-130'><FaWhatsapp size={25}/></p>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Footer