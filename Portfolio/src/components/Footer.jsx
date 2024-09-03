import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Footer() 
{
  function openWhatsAppChat() {
    const phoneNumber = 8546070100;
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}`;
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isAndroid) {
      const intentUrl = `intent://send/${encodedPhoneNumber}#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end`;
      window.location.href = intentUrl;
  }else if(isIOS){
    const whatsappUrl = `https://wa.me/${encodedPhoneNumber}`
    window.open(whatsappUrl, "_blank")
  }
   else {
      window.open(whatsappWebUrl, '_blank');
  }
  }

  const linkedin =()=>{
    window.open('https://www.linkedin.com/in/avinash-singh-292577230/','_blank')
  }

  const twitter =()=>{
    window.open('https://x.com/the_avinash_dev','_blank')
  }

  const github =()=>{
    window.open('https://github.com/the-avinash-singh','_blank')
  }
  return (
    <>
      <div className='bg-dark w-100 bottom-0 text-white px-3'>
        <div className='fs-6 pt-3'>
          Made by Avinash Singh
        </div>
        <div className='mb-5'>
          2024<sup>
            <FaRegCopyright/>
            </sup>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            Some of other projects by me :
        </div>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-5'>
          <ul className='me-4'>
            <li><a href='https://strong-shortbread-e7dfa2.netlify.app/home' target ="blank" className='text-decoration-none text-white'>Mystuffsafe</a></li>
            <li><a href='https://stellular-biscuit-e8c785.netlify.app/' target ="blank" className='text-decoration-none text-white'>Viemo clone</a></li>
            <li><a href='https://github.com/the-avinash-singh/Newswala.git' target ="blank" className='text-decoration-none text-white'>NewsWala</a></li>
            <li><a href='https://github.com/the-avinash-singh/cropper.git' target ="blank" className='text-decoration-none text-white'>Cropper</a></li>
          </ul>
          <ul>
            <li><a href='https://github.com/the-avinash-singh/deliverit.git' target ="blank" className='text-decoration-none text-white'>DeliverIt</a></li>
            <li><a href='https://github.com/the-avinash-singh/TextUtils.git' target ="blank" className='text-decoration-none text-white'>TextUtils</a></li>
            <li><a href='https://github.com/the-avinash-singh/Excel-to-table.git' target ="blank" className='text-decoration-none text-white'>Excel-to-table</a></li>
          </ul>
            </div>
            <div className='d-flex justify-content-end align-items-end pb-5'>
              < FaWhatsapp className='fs-2 me-3' onClick={openWhatsAppChat}/>
              <FaLinkedin className="fs-2 me-3" onClick={linkedin}/>
              <FaXTwitter className="fs-2 me-3" onClick={twitter}/>
              <FaGithub className="fs-2 me-3" onClick={github}/>
            </div>
      </div>
      
    </>
  )
}
