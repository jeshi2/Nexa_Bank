import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="FooterSection mt-20 max-w-full px-4 py-8 bg-zinc-900 flex flex-col justify-start items-center gap-4">
      <div className="Container flex flex-col justify-start items-center gap-4">
        <div className="Logo flex items-center gap-2">
          <img src="logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <div className="LogoName text-white text-base font-medium">Nexa Trust Bank</div>
        </div>
        <div className="ButtonsContainer flex justify-center items-center gap-6">
          <Link href="/" className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">Home</Link>
          <Link href="/careers" className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">Careers</Link>
          <Link href="/about" className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">About</Link>
          <Link href="/security" className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">Security</Link>
          <Link href="/contactus" className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">Contact</Link>
        </div>
      </div>
      <div className="Line w-full h-px bg-neutral-800"></div>
      <div className="Container flex flex-col justify-center items-center gap-4">
        <div className="Button flex justify-start items-center gap-2">
          <div className="Icon w-5 h-5 text-lime-400 rounded-full flex justify-center items-center">
            <FaEnvelope />
          </div>
          <div className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">info@nexatrustbank.com</div>
        </div>
        <div className="Button flex justify-start items-center gap-2">
          <div className="Icon w-5 h-5 text-lime-400 rounded-full flex justify-center items-center">
            <FaPhone />
          </div>
          <div className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">+254 768 534 284</div>
        </div>
        <div className="Button flex justify-start items-center gap-2">
          <div className="Icon w-5 h-5 text-lime-400 rounded-full flex justify-center items-center">
            <FaMapMarker />
          </div>
          <div className="TextButton text-zinc-200 text-base font-normal font-Lexend leading-normal">Somewhere in the World</div>
        </div>
      </div>
      <div className="Line w-full h-px bg-neutral-800"></div>
      <div className="Container flex justify-between items-center gap-4">
        <div className="ButtonsContainer flex justify-start items-start gap-2">
          <div className="Button p-3 bg-lime-400 rounded-full flex justify-center items-center gap-2">
            <div className="Icon w-5 h-5  rounded-full flex justify-center items-center">
              <FaFacebook className='w-10 h-10' />
            </div>
          </div>
          <div className="Button p-3 bg-lime-400 rounded-full flex justify-center items-center gap-2">
            <div className="Icon w-5 h-5  rounded-full flex justify-center items-center">
              <FaTwitter className='w-10 h-10' />
            </div>
          </div>
          <div className="Button p-3 bg-lime-400 rounded-full flex justify-center items-center gap-2">
            <div className="Icon w-5 h-5 rounded-full flex justify-center items-center">
              <FaLinkedin className='w-10 h-10' />
            </div>
          </div>
        </div>
        <div className="Text text-zinc-400 text-sm font-light font-Lexend leading-tight text-center sm:text-left">Nexa Trust Bank All Rights Reserved</div>

      </div>
    </div>
  )
}

export default Footer