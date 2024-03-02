import React from 'react'
import Link from 'next/link';

const OurFeature = () => {
    return (
        <div className="font-lexend inline-flex w-full  flex-col items-start gap-y-3.5 leading-normal" >
            <div className="w-[1296px] text-left text-5xl px-4 max-w-6xl mx-auto font-medium leading-normal tracking-[0px]" >
                <span className="text-white">Our</span>
                <span className="whitespace-pre text-lime-400"> Features</span>
            </div>
            <div className="w-full text-left text-lg max-w-6xl mx-auto px-4  font-light leading-normal tracking-[0px] text-neutral-400" >
                Experience a host of powerful features at Nexa Trust Bank, including seamless
                online banking, secure transactions, and personalized financial
                insights, all designed to enhance your banking experience
            </div>
            <div className="flex flex-grow flex-wrap items-start justify-center gap-y-8 gap-x-8 self-stretch pt-16" >
                <div className="flex flex-col items-center justify-center gap-y-6 rounded-xl bg-neutral-900 p-12 text-lg font-normal leading-normal tracking-[0px]" >
                    <Link href="/login" className="flex items-center rounded-[100px] border border-solid border-neutral-800 bg-neutral-900 py-4 pl-6 pr-12 text-left text-lime-400" >
                        <div className="flex-grow">Online Banking</div>
                    </Link>
                    <div className="flex items-center rounded-[100px] border border-solid border-neutral-800 py-4 pl-6 pr-14 text-left text-white" >
                        <div className="flex-grow">Financial Tools</div>
                    </div>
                    <Link href="/contactus" className="flex items-center justify-center rounded-[100px] border border-solid border-neutral-800 py-4 px-6 text-center text-white" >
                        <div className="flex flex-grow justify-center">Customer Support</div>
                    </Link>
                </div>
                <div className="flex w-96 flex-col items-center justify-center gap-y-8 self-stretch text-left" >
                    <div className="flex flex-col items-center gap-y-8 self-stretch rounded-xl border border-solid border-neutral-800 bg-neutral-900 px-12 pb-20 pt-12" >
                        <div className="flex items-center justify-center gap-x-2.5 self-stretch text-[22px] font-normal leading-normal tracking-[0px] text-white" >
                            <div className="w-96 self-stretch">24/7 Account Access</div>
                            <div className="h-9 w-9">
                                <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </div>
                        </div>
                        <div className="self-stretch text-lg font-light leading-normal tracking-[-0.16px] text-neutral-400" >
                            Enjoy the convenience of accessing your accounts anytime,
                            anywhere through our secure online banking platform. Check
                            balances, transfer funds, and pay bills with ease.
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-8 self-stretch rounded-xl border border-solid border-neutral-800 bg-neutral-900 p-12" >
                        <div className="flex items-center justify-center gap-x-2.5 self-stretch text-[22px] font-normal leading-normal tracking-[0px] text-white" >
                            <div className="w-96 self-stretch">Secure Transactions</div>
                            <div className="h-9 w-9">
                                <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </div>
                        </div>
                        <div className="self-stretch text-lg font-light leading-normal tracking-[-0.16px] text-neutral-400" >
                            Rest assured knowing that your transactions are protected by
                            industry-leading security measures. We employ encryption and
                            multi-factor authentication to safeguard your financial
                            information.
                        </div>
                    </div>
                </div>
                <div className="flex w-96 flex-col items-center justify-center gap-y-8 self-stretch text-left" >
                    <div className="flex flex-col items-center gap-y-8 self-stretch rounded-xl border border-solid border-neutral-800 bg-neutral-900 px-12 pb-20 pt-12" >
                        <div className="flex items-center justify-center gap-x-2.5 self-stretch text-[22px] font-normal leading-normal tracking-[0px] text-white" >
                            <div className="w-96 self-stretch">Bill Pay and Transfers</div>
                            <div className="h-9 w-9">
                                <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </div>
                        </div>
                        <div className="self-stretch text-lg font-light leading-normal tracking-[-0.16px] text-neutral-400" >
                            Save time and avoid late fees with our convenient bill pay
                            service. Set up recurring payments or make one-time transfers
                            between your accounts with just a few clicks.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurFeature