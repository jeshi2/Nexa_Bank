import React from 'react'
import { FaCheckCircle, FaExchangeAlt } from 'react-icons/fa';
// import MoneyExchange from "./MoneyExchange"
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12">

      {/*Container1*/}
      <div className="max-w-screen-md p-4 flex-col justify-start items-center gap-12 w-full">
        {/*Sub container */}
        <div className="w-full flex-col justify-start items-center gap-5 ">
          {/*Container*/}
          <div className="max-w-md mt-4 pl-3 pr-5 py-2.5 border border-solid border-neutral-800 bg-neutral-900 rounded-3xl flex justify-start items-center gap-1.5">
            <FaCheckCircle className="w-6 h-6 p-0.5 text-lime-400" />
            <div className="text-white text-lg font-light font-['Lexend'] leading-normal">No LLC Required, No Credit Check.</div>
          </div>
          {/*Text Container*/}
          <div className="w-full mt-3 flex flex-col justify-start items-center gap-3.5">
            <div className="self-stretch"><span className="text-white text-5xl font-medium font-['Lexend'] leading-10">Welcome to Nexa Trust Bank<br />Empowering Your </span><span className="text-lime-400 text-5xl font-medium font-['Lexend'] leading-10">Financial Journey</span></div>
            <div className="self-stretch text-zinc-200 text-lg font-light font-['Lexend'] leading-relaxed">At Nexa Trust Bank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to deliver personalized and innovative services that prioritize our customers' needs.</div>
          </div>
        </div>
        {/*button */}
        <div className="w-44 h-16 mt-3 px-7 py-4 bg-lime-400 rounded-3xl justify-start items-center gap-2.5 inline-flex">
          <Link href="/register">
            <button className="text-zinc-900 text-lg font-normal font-['Lexend'] leading-relaxed">Open Account</button>
          </Link>
        </div>
      </div>

      {/*Container2*/}
      <div className="w-80  mr-2   mt-6 h-96 p-4 bg-gradient-to-bl from-zinc-900 to-zinc-900 rounded-xl border border-lime-400 border-opacity-20 flex-col  justify-start items-center gap-7">
        {/*Sub Container*/}
        <div className="w-80 h-56   flex-col justify-start items-center gap-4 inline-flex">
          <div className="w-80 text-white text-lg font-medium font-['Lexend'] leading-relaxed">Your Transactions</div>
          <div className="w-80 h-44 flex-col justify-start items-center inline-flex">
            <div className="self-stretch px-5 py-3.5 bg-zinc-900 rounded-xl border border-neutral-800 justify-between items-end inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="p-2 bg-lime-400 rounded-3xl justify-start items-start gap-2 flex">
                  <FaExchangeAlt className="w-5 h-5 p-0.5 justify-center items-center flex" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-base font-light font-['Lexend'] leading-normal">Transaction</div>
                  <div className="text-white text-lg font-normal font-['Lexend'] leading-relaxed">Joel Kenley</div>
                </div>
              </div>
              <div className="text-white text-xl font-medium font-['Lexend'] leading-loose">-$68.00</div>
            </div>
            <div className="self-stretch h-20 px-4 opacity-50 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch px-5 py-3.5 bg-zinc-900 rounded-xl border border-neutral-800 justify-between items-end inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="p-2 bg-lime-400 rounded-3xl justify-start items-start gap-2 flex">
                    <FaExchangeAlt className="w-5 h-5 p-0.5 justify-center items-center flex" />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-base font-light font-['Lexend'] leading-normal">Transaction</div>
                    <div className="text-white text-lg font-normal font-['Lexend'] leading-relaxed">Mark Smith</div>
                  </div>
                </div>
                <div className="text-white text-xl font-medium font-['Lexend'] leading-loose">-$68.00</div>
              </div>
            </div>
            <div className="self-stretch h-20 px-9 opacity-20 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch px-5 py-3.5 bg-zinc-900 rounded-xl border border-neutral-800 justify-between items-end inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="p-2 bg-lime-400 rounded-3xl justify-start items-start gap-2 flex">
                    <FaExchangeAlt className="w-5 h-5 p-0.5 justify-center items-center flex" />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-base font-light font-['Lexend'] leading-normal">Transaction</div>
                    <div className="text-white text-lg font-normal font-['Lexend'] leading-relaxed">Lenen Roy</div>
                  </div>
                </div>
                <div className="text-white text-xl font-medium font-['Lexend'] leading-loose">-$68.00</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero