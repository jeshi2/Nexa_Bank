import React from 'react'
import AbstractDesign from "./assets/AbstractDesign";

const OverviewSecurity = ({ className = "" }) => {
  return (
    <div
      className={`font-lexend relative inline-flex w-full flex-row items-start rounded-3xl bg-neutral-900 p-12 text-left tracking-[0px]  ${className}`}
    >
      <div className="absolute right-0 top-0 flex h-96 w-96 items-center justify-center" >
        <AbstractDesign className="h-96 w-96" />
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between self-stretch">
        <div className="flex flex-col items-center justify-center gap-y-6 rounded-l-3xl lg:rounded-l-none rounded-br-[80px] bg-neutral-900 lg:bg-transparent p-10 lg:p-20 lg:w-[50%]">
          <div className="self-stretch text-2xl lg:text-[58px] font-medium leading-tight">
            <span className="text-white">{"Your Security is Our "}</span>
            <span className="text-lime-300">Top Priority</span>
          </div>
          <div className="self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
            At Nexa Trust Bank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
          </div>
        </div>
        <div className="flex items-center self-stretch lg:w-[50%]">
          <div className="relative h-60 lg:h-96 w-full lg:w-auto">
            <div className="bg-background-0 absolute inset-0 rounded-2xl bg-cover bg-center" />
            <div className="bg-background-1 absolute inset-0 rounded-2xl bg-cover bg-center" />
            <div className="bg-background-2 absolute inset-0 rounded-2xl bg-cover bg-center mix-blend-overlay" />
          </div>
          <img className=" inset-0 rounded-2xl object-cover" src="security.png" />
        </div>
      </div>
    </div>
  )
}

export default OverviewSecurity