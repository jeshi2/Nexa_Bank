import React from 'react'
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className="font-lexend inline-flex w-full justify-center flex-row flex-wrap items-center gap-y-5 gap-x-96 rounded-[100px] border border-solid border-neutral-800 bg-neutral-900 py-5 px-8 text-lg font-normal leading-normal tracking-[0px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <Link href="/">
        <div class="flex items-center justify-center gap-x-1">
          <div class="flex h-10 w-10 items-center justify-center pb-px">
            <div class="h-10 w-10 mix-blend-normal">
              <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0002 19.9999L20.0002 9.99992L30.0002 19.9999L20.0002 29.9999L10.0002 19.9999Z" fill="#CAFF33" /><path d="M36.6668 13.3333L30.0002 19.9999V9.99992H20.0002L26.6668 3.33325H36.6668V13.3333Z" fill="#CAFF33" /><path d="M36.6668 26.6666L30.0002 19.9999V29.9999H20.0002L26.6668 36.6666H36.6668V26.6666Z" fill="#CAFF33" /><path d="M3.3335 26.6666L10.0002 19.9999V29.9999H20.0002L13.3335 36.6666H3.3335L3.3335 26.6666Z" fill="#CAFF33" /><path d="M3.3335 13.3333L10.0002 19.9999V9.99992H20.0002L13.3335 3.33325H3.3335L3.3335 13.3333Z" fill="#CAFF33" /></svg>
            </div>
          </div>

          <div class="h-5 flex-grow text-xl text-white font-semibold">
            Nexa Trust Bank
          </div>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/" className="px-2 py-0.5 hover:bg-yellow-400 hover:rounded-full text-white text-lg font-normal font-lexend leading-27 focus:outline-none">Home</Link>
        <Link href="/careers" className="px-2 py-0.5 hover:bg-yellow-400 hover:rounded-full text-white text-lg font-normal font-lexend leading-27 focus:outline-none">Careers</Link>
        <Link href="/about" className="px-2 py-0.5 hover:bg-yellow-400 hover:rounded-full text-white text-lg font-normal font-lexend leading-27 focus:outline-none">About</Link>
        <Link href="/security" className="px-2 py-0.5 hover:bg-yellow-400 hover:rounded-full text-white text-lg font-normal font-lexend leading-27 focus:outline-none">Security</Link>
      </div>
      <div className="flex gap-8 text-lg font-normal font-lexend leading-27">
        <Link href="/register" className="px-4 py-1.5 mt-1  focus:outline-none text-white rounded-full text-lg font-normal font-lexend leading-27 transition-colors duration-300 hover:bg-yellow-400 hover:rounded-full">
          Sign Up
        </Link>
        <Link href="/login">
          <button className="flex justify-end self-stretch rounded-[82px] bg-lime-400 py-3.5 px-8 text-right text-neutral-900">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar