import React from 'react';
import Link from 'next/link';

const OurProducts = () => {
    return (
        <div class="font-lexend inline-flex w-full flex-col items-center gap-y-24 leading-normal tracking-[0px]" >
            <div class="ml-0 flex flex-wrap items-end justify-center gap-y-11 gap-x-8 md:gap-x-12 lg:gap-x-24 xl:gap-x-72 self-stretch pr-0">
                <div class="flex w-full md:w-[600px] lg:w-[740px] flex-col items-center justify-center gap-y-3.5 self-stretch text-left">
                    <div class="self-stretch ml-2 mt-2 text-3xl md:text-5xl font-medium leading-normal">
                        <span class="text-white">Our </span>
                        <span class="text-lime-400">Products</span>
                    </div>
                    <div class="self-stretch ml-2 text-base md:text-lg font-light leading-normal text-neutral-400">
                        Discover a range of comprehensive and customizable banking
                        products at Nexa Trust Bank, designed to suit your unique financial needs
                        and aspirations
                    </div>
                </div>
                <div class="flex items-center gap-x-4 md:gap-x-6 rounded-[50px] border border-solid border-neutral-800 bg-neutral-900 py-3.5 pl-3.5 pr-6 md:pr-9 text-lg md:text-xl font-normal leading-normal">
                    <Link href="/register" class="rounded-[70px] md:rounded-[140px] bg-lime-400 py-2.5 md:py-3.5 px-4 md:px-6 text-left text-neutral-900">
                        For Individuals
                    </Link>
                    <Link href="/register" class="text-white hidden md:block">
                        For Businesses
                    </Link>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-start justify-center  gap-y-8 md:gap-x-12 self-stretch pt-12">
                <div class="flex w-full md:w-96  flex-col items-center justify-center gap-y-5 self-stretch">
                    <div class="flex items-center justify-center self-stretch pr-0">
                        <div class="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]">
                            <div class="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]">
                                <div class="h-9 w-9">
                                    <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5454 21.1814C14.5908 21.1814 14.0316 20.644 14.0316 19.6796V18.5637C10.0221 18.2881 6.02625 17.4615 1.88037 15.877V13.6038C6.98089 15.8633 12.0951 16.6624 17.6593 16.6624C23.2372 16.6624 28.3513 15.8633 33.4518 13.6038V15.877C29.3059 17.4615 25.31 18.2881 21.3006 18.5637V19.6796C21.3006 20.644 20.7414 21.1814 19.7867 21.1814H15.5454ZM6.09444 30.3432H29.2377C32.0608 30.3432 33.4518 28.9656 33.4518 26.1412V12.7359C33.4518 9.9115 32.0608 8.53378 29.2377 8.53378H6.09444C3.28506 8.53378 1.88037 9.9115 1.88037 12.7359V26.1412C1.88037 28.9656 3.28506 30.3432 6.09444 30.3432ZM10.7449 9.7324H12.8588V7.29382C12.8588 6.24673 13.4725 5.65431 14.5362 5.65431H20.7959C21.8597 5.65431 22.4598 6.24673 22.4598 7.29382V9.70485H24.5736V7.44537C24.5736 4.85523 23.2234 3.64282 20.7551 3.64282H14.5635C12.2314 3.64282 10.7449 4.85523 10.7449 7.44537V9.7324Z" fill="#CAFF33" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-end justify-center self-stretch pt-2.5 text-xl md:text-2xl font-normal leading-normal text-white">
                        Checking Accounts
                    </div>
                    <div class="flex justify-center ml-2 mr-2 self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                        Enjoy easy and convenient access to your funds with our range of
                        checking account options. Benefit from features such as online and
                        mobile banking, debit cards, and free ATM access.
                    </div>
                </div>
                <div class="h-1 w-0">
                    <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 1 319" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="2.18557e-08" x2="0.833482" y2="319" stroke="#262626" /></svg>
                </div>
                <div class="flex w-full md:w-96 flex-col items-center justify-center gap-y-5 self-stretch">
                    <div class="flex items-center justify-center self-stretch pr-0">
                        <div class="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]">
                            <div class="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]">
                                <div class="h-9 w-9">
                                    <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3335 10.625C15.5731 10.625 14.146 12.0521 14.146 13.8125C14.146 15.5729 15.5731 17 17.3335 17C19.0939 17 20.521 15.5729 20.521 13.8125C20.521 12.0521 19.0939 10.625 17.3335 10.625Z" fill="#CAFF33" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2.4585 6.90625C2.4585 5.43924 3.64774 4.25 5.11475 4.25H29.5522C31.0193 4.25 32.2085 5.43924 32.2085 6.90625V20.7188C32.2085 22.1858 31.0193 23.375 29.5522 23.375H5.11475C3.64774 23.375 2.4585 22.1858 2.4585 20.7188V6.90625ZM12.021 13.8125C12.021 10.8785 14.3995 8.5 17.3335 8.5C20.2675 8.5 22.646 10.8785 22.646 13.8125C22.646 16.7465 20.2675 19.125 17.3335 19.125C14.3995 19.125 12.021 16.7465 12.021 13.8125ZM26.896 12.75C26.3092 12.75 25.8335 13.2257 25.8335 13.8125V13.8231C25.8335 14.4099 26.3092 14.8856 26.896 14.8856H26.9066C27.4934 14.8856 27.9691 14.4099 27.9691 13.8231V13.8125C27.9691 13.2257 27.4934 12.75 26.9066 12.75H26.896ZM6.7085 13.8125C6.7085 13.2257 7.18419 12.75 7.771 12.75H7.78162C8.36842 12.75 8.84412 13.2257 8.84412 13.8125V13.8231C8.84412 14.4099 8.36842 14.8856 7.78162 14.8856H7.771C7.18419 14.8856 6.7085 14.4099 6.7085 13.8231V13.8125Z" fill="#CAFF33" /><path d="M3.521 25.5C2.93419 25.5 2.4585 25.9757 2.4585 26.5625C2.4585 27.1493 2.93419 27.625 3.521 27.625C11.1711 27.625 18.5805 28.6481 25.6207 30.5644C27.3073 31.0235 29.021 29.7738 29.021 27.9864V26.5625C29.021 25.9757 28.5453 25.5 27.9585 25.5H3.521Z" fill="#CAFF33" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-end justify-center self-stretch pt-2.5 text-xl md:text-2xl font-normal leading-normal text-white">
                        Savings Accounts
                    </div>
                    <div class="flex justify-center ml-2 mr-2 self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                        Build your savings with our competitive interest rates and
                        flexible savings account options. Whether you're saving for a
                        specific goal or want to grow your wealth over time, we have the
                        right account for you.
                    </div>
                </div>
                <div class="h-1 w-0">
                    <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 1 319" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="2.18557e-08" x2="0.833482" y2="319" stroke="#262626" /></svg>
                </div>
                <div class="flex w-full md:w-96 flex-col items-center justify-center gap-y-5 self-stretch">
                    <div class="flex items-center justify-center self-stretch pr-0">
                        <div class="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]">
                            <div class="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]">
                                <div class="h-9 w-9">
                                    <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3335 10.625C15.5731 10.625 14.146 12.0521 14.146 13.8125C14.146 15.5729 15.5731 17 17.3335 17C19.0939 17 20.521 15.5729 20.521 13.8125C20.521 12.0521 19.0939 10.625 17.3335 10.625Z" fill="#CAFF33" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2.4585 6.90625C2.4585 5.43924 3.64774 4.25 5.11475 4.25H29.5522C31.0193 4.25 32.2085 5.43924 32.2085 6.90625V20.7188C32.2085 22.1858 31.0193 23.375 29.5522 23.375H5.11475C3.64774 23.375 2.4585 22.1858 2.4585 20.7188V6.90625ZM12.021 13.8125C12.021 10.8785 14.3995 8.5 17.3335 8.5C20.2675 8.5 22.646 10.8785 22.646 13.8125C22.646 16.7465 20.2675 19.125 17.3335 19.125C14.3995 19.125 12.021 16.7465 12.021 13.8125ZM26.896 12.75C26.3092 12.75 25.8335 13.2257 25.8335 13.8125V13.8231C25.8335 14.4099 26.3092 14.8856 26.896 14.8856H26.9066C27.4934 14.8856 27.9691 14.4099 27.9691 13.8231V13.8125C27.9691 13.2257 27.4934 12.75 26.9066 12.75H26.896ZM6.7085 13.8125C6.7085 13.2257 7.18419 12.75 7.771 12.75H7.78162C8.36842 12.75 8.84412 13.2257 8.84412 13.8125V13.8231C8.84412 14.4099 8.36842 14.8856 7.78162 14.8856H7.771C7.18419 14.8856 6.7085 14.4099 6.7085 13.8231V13.8125Z" fill="#CAFF33" /><path d="M3.521 25.5C2.93419 25.5 2.4585 25.9757 2.4585 26.5625C2.4585 27.1493 2.93419 27.625 3.521 27.625C11.1711 27.625 18.5805 28.6481 25.6207 30.5644C27.3073 31.0235 29.021 29.7738 29.021 27.9864V26.5625C29.021 25.9757 28.5453 25.5 27.9585 25.5H3.521Z" fill="#CAFF33" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-end justify-center self-stretch pt-2.5 text-xl md:text-2xl font-normal leading-normal text-white" >
                        Loans and Mortgages
                    </div>
                    <div class="flex justify-center ml-2 mr-2 self-stretch text-base md:text-lg font-light leading-normal text-neutral-400" >
                        Realize your dreams with our flexible loan and mortgage options.
                        From personal loans to home mortgages, our experienced loan
                        officers are here to guide you through the application process and
                        help you secure the funds you need.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts