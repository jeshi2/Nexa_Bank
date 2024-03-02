import React from 'react'

const Faq = () => {
    return (
        <div className="relative inline-flex w-full flex-row items-start pb-96 pt-48 text-left tracking-[0px]" >
            <div className="font-lexend absolute mx-5 md:mx-20 left-0 top-0 flex h-auto md:h-28 w-full md:w-[1295px] flex-col items-center justify-center gap-y-3.5 leading-normal">
                <div className="flex items-center mt-4 self-stretch text-2xl md:text-4xl font-medium leading-normal">
                    <span><span className="text-lime-400">Frequently</span><span className="whitespace-pre text-white mx-2">Asked Questions</span></span>
                </div>
                <div className="flex items-center self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                    Still have questions? Contact our Team via support@nexatrustbank.com
                </div>
            </div>

            <div className="font-lexend relative flex flex-grow flex-wrap items-center justify-center gap-y-8 gap-x-8">
                <div className="flex w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col items-center gap-y-7 self-stretch rounded-2xl border border-solid border-neutral-800 px-12 pb-24 pt-12">
                    <div className="self-stretch text-xl font-medium leading-[normal] text-white">
                        How do I open an account with Nexa Trust Bank?
                    </div>
                    <div className="h-px self-stretch">
                        <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 682.5 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="683" y2="0.5" stroke="#262626" /></svg>
                    </div>
                    <div className="self-stretch text-lg font-light leading-normal text-neutral-400">
                        Opening an account with Nexa Trust Bank is easy. Simply visit our website
                        and click on the "Open an Account" button. Follow the prompts,
                        provide the required information, and complete the application
                        process. If you have any questions or need assistance, our
                        customer support team is available to help.
                    </div>
                </div>
                <div className="flex w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col items-center justify-center gap-y-7 self-stretch rounded-2xl border border-solid border-neutral-800 p-12">
                    <div className="self-stretch text-xl font-medium leading-[normal] text-white">
                        What documents do I need to provide to apply for a loan?
                    </div>
                    <div className="h-px self-stretch">
                        <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 682.5 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="683" y2="0.5" stroke="#262626" /></svg>
                    </div>
                    <div className="self-stretch text-lg font-light leading-normal text-neutral-400">
                        The documents required for a loan application may vary depending
                        on the type of loan you are applying for. Generally, you will need
                        to provide identification documents (such as a passport or
                        driver's license), proof of income (such as pay stubs or tax
                        returns), and information about the collateral (if applicable).
                        Our loan officers will guide you through the specific requirements
                        during the application process.
                    </div>
                </div>
                <div className="flex w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col items-center justify-center gap-y-7 self-stretch rounded-2xl border border-solid border-neutral-800 p-12">
                    <div className="self-stretch text-xl font-medium leading-[normal] text-white">
                        How can I access my accounts online?
                    </div>
                    <div className="h-px self-stretch">
                        <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 682.5 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="683" y2="0.5" stroke="#262626" /></svg>
                    </div>
                    <div className="self-stretch text-lg font-light leading-normal text-neutral-400">
                        Accessing your accounts online is simple and secure. Visit our
                        website and click on the "Login" button. Enter your email and
                        password to access your accounts. If you haven't registered for
                        online banking, click on the "SingUp" button and follow the
                        registration process. If you need assistance, our customer support
                        team is available to guide you.
                    </div>
                </div>
                <div className="flex w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col items-center justify-center gap-y-7 self-stretch rounded-2xl border border-solid border-neutral-800 p-12">
                    <div className="self-stretch text-xl font-medium leading-[normal] text-white">
                        Are my transactions and personal information secure?
                    </div>
                    <div className="h-px self-stretch">
                        <svg width="100%" height="100%" className="overflow:visible;" preserveAspectRatio="none" viewBox="0 0 682.5 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="683" y2="0.5" stroke="#262626" /></svg>
                    </div>
                    <div className="self-stretch text-lg font-light leading-normal text-neutral-400">
                        At Nexa Trust Bank, we prioritize the security of your transactions and
                        personal information. We employ industry-leading encryption and
                        multi-factor authentication to ensure that your data is protected.
                        Additionally, we regularly update our security measures to stay
                        ahead of emerging threats. You can bank with confidence knowing
                        that we have robust security systems in place.
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Faq