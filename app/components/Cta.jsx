import React from 'react'
import Link from 'next/link';

const Cta = () => {
    return (
        <div className="font-lexend relative inline-flex flex-col md:flex-row h-auto md:h-72 w-full flex-wrap md:flex-nowrap rounded-3xl leading-normal tracking-[0px]">
            <div className="absolute inset-0 rounded-3xl bg-[#1C1C1C]"></div>
            <div className="bg-background-1 absolute inset-0 rounded-3xl bg-repeat opacity-50 mix-blend-screen"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]"></div>
            <div className="relative flex h-auto md:h-full w-full items-start overflow-clip rounded-3xl border border-solid border-neutral-800 pr-6 md:pr-20">
                <div className="mb-4 md:mb-0 flex h-auto md:h-72 flex-grow flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-36">
                    <div className="flex flex-grow items-center justify-center self-stretch text-center md:text-left">
                        <div className="md:w-[900px] ml-0 md:ml-[-203px] flex items-start justify-center self-stretch pb-2.5">
                            <div className="flex flex-grow flex-col items-center justify-center gap-y-3.5 self-stretch">
                                <div className="self-stretch text-lg md:text-2xl font-normal leading-normal">
                                    <span className="text-white">Start your financial journey with </span>
                                    <span className="text-lime-400">Nexa Trust Bank today!</span>
                                </div>
                                <div className="self-stretch  text-base md:text-lg font-light leading-normal text-neutral-400">
                                    Ready to take control of your finances? Join Nexa Trust Bank now,
                                    and let us help you achieve your financial goals with our
                                    tailored solutions and exceptional customer service
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/register" className="mb-2.5  flex justify-center md:justify-end rounded-[82px] bg-lime-400 py-3 md:py-5 px-6 md:px-8 text-center md:text-right text-lg font-normal leading-normal text-neutral-900">
                        Open Account
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default Cta