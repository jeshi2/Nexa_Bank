import React from 'react'

const MoneyExchange = () => {
    return (
        <div className="w-full flex flex-col justify-start items-end gap-6">
            <div className="w-96 text-white text-lg font-medium font-['Lexend'] leading-relaxed">Money Exchange</div>
            <div className="w-96 h-44 rounded-xl border border-neutral-800 flex-col justify-start items-start inline-flex">
                <div className="w-96 h-24 justify-start items-start inline-flex">
                    <div className="w-56 h-24 p-4 bg-zinc-900 flex-col justify-start items-center gap-2 inline-flex">
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <img className="w-9 h-9 rounded-full" src="/indian_flag.png" />
                            <div className="grow shrink basis-0 text-white text-base font-normal font-['Lexend'] leading-normal">INR</div>
                        </div>
                        <div className="self-stretch text-zinc-200 text-sm font-light font-['Lexend'] leading-tight">Indian Rupees</div>
                    </div>

                    <div className="w-24 h-px origin-top-left rotate-90 border border-neutral-800"></div>

                    <div className="w-56 h-24 p-4 bg-zinc-900 flex-col justify-start items-center gap-2 inline-flex">
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <img className="w-9 h-9 rounded-full" src="/usa_flag.jpg" />
                            <div className="grow shrink basis-0 text-white text-base font-normal font-['Lexend'] leading-normal">USD</div>
                        </div>
                        <div className="self-stretch text-zinc-200 text-sm font-light font-['Lexend'] leading-tight">United States Dollar</div>
                    </div>
                </div>

                <div className="w-96 h-px border border-neutral-800"></div>

                <div className="w-96 h-20 justify-start items-start inline-flex">
                    <div className="w-56 h-20 px-4 py-7 bg-zinc-900 justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-white text-lg font-medium font-['Lexend'] leading-relaxed">5,0000</div>
                    </div>
                    <div className="w-20 h-px origin-top-left rotate-90 border border-neutral-800"></div>
                    <div className="w-56 h-20 px-4 py-7 bg-zinc-900 justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-white text-lg font-medium font-['Lexend'] leading-relaxed">12.00</div>
                    </div>

                </div>
                <button className="w-96 h-12 px-7 py-3.5 bg-stone-800 rounded-3xl justify-center items-center gap-2 inline-flex">
                    <div className="text-lime-300 text-base font-normal font-['Lexend'] leading-normal">Exchange</div>
                </button>
            </div>

        </div>
    )
}

export default MoneyExchange