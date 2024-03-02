import Icon10 from "./assets/Icon10";
import Icon11 from "./assets/Icon11";
import Icon12 from "./assets/Icon12";
import Icon13 from "./assets/Icon13";

export default function Container({ className = "" }) {
    return (
        <div
            className={`font-lexend inline-flex w-full flex-col items-start gap-y-3.5 pb-36 pr-1.5 leading-normal tracking-[0px] ${className}`}
        >
            <div className="max-w-[1306px] ml-8 text-left text-2xl lg:text-5xl font-medium leading-normal" >
                <span className="text-white">{"How We "}</span>
                <span className="text-lime-300">Protect You</span>
            </div>
            <div className="w-full flex-col ml-8 text-left text-lg font-light leading-normal text-neutral-400" >
                At Nexa Trust Bank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times
            </div>



            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 gap-y-12  self-stretch pt-16" >
                <div className="relative flex w-full lg:w-96 flex-col items-center justify-center gap-y-6 self-stretch rounded-3xl border border-solid border-neutral-800 p-12" >
                    <div className="bg-background-0 absolute inset-0 rounded-3xl bg-repeat opacity-50 mix-blend-screen" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
                    <div className="absolute inset-0 rounded-3xl [background-image:linear-gradient(106deg,_#CAFF330D,_#CAFF3300_81%)]" />
                    <div className="relative flex items-center justify-center gap-x-5 self-stretch text-center text-2xl font-normal leading-normal text-white" >
                        <div className="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                                <Icon10 className="h-9 w-9" />
                            </div>
                        </div>
                        <div className="w-full lg:w-96 ">
                            Secure Online Banking Platform
                        </div>
                    </div>
                    <div className="relative self-stretch text-left text-lg font-light leading-normal text-neutral-400" >
                        Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.
                    </div>
                </div>
                <div className="relative flex w-full lg:w-96 flex-col items-center justify-center gap-y-6 self-stretch rounded-3xl border border-solid border-neutral-800 p-12 text-left" >
                    <div className="bg-background-0 absolute inset-0 rounded-3xl bg-repeat opacity-50 mix-blend-screen" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
                    <div className="absolute inset-0 rounded-3xl [background-image:linear-gradient(106deg,_#CAFF330D,_#CAFF3300_81%)]" />
                    <div className="relative flex items-center justify-center gap-x-5 self-stretch text-2xl font-normal leading-normal text-white" >
                        <div className="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                                <Icon11 className="h-9 w-9" />
                            </div>
                        </div>
                        <div className="w-full lg:w-96">Fraud Monitoring</div>
                    </div>
                    <div className="relative self-stretch text-lg font-light leading-normal text-neutral-400" >
                        We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 gap-y-12  self-stretch pt-16" >
                <div className="relative flex w-full lg:w-96  flex-col items-center justify-center gap-y-6 self-stretch rounded-3xl border border-solid border-neutral-800 p-12" >
                    <div className="bg-background-0 absolute inset-0 rounded-3xl bg-repeat opacity-50 mix-blend-screen" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
                    <div className="absolute inset-0 rounded-3xl [background-image:linear-gradient(106deg,_#CAFF330D,_#CAFF3300_81%)]" />
                    <div className="relative flex items-center justify-center gap-x-5 self-stretch text-center text-2xl font-normal leading-normal text-white" >
                        <div className="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                                <Icon12 className="h-9 w-9" />
                            </div>
                        </div>
                        <div className="w-full lg:w-96">
                            Multi-Factor Authentication
                        </div>
                    </div>
                    <div className="relative self-stretch text-left text-lg font-light leading-normal text-neutral-400" >
                        To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.
                    </div>
                </div>

                <div className="relative flex w-full lg:w-96 flex-col items-center justify-center gap-y-6 self-stretch rounded-3xl border border-solid border-neutral-800 p-12 text-left" >
                    <div className="bg-background-0 absolute inset-0 rounded-3xl bg-repeat opacity-50 mix-blend-screen" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
                    <div className="absolute inset-0 rounded-3xl [background-image:linear-gradient(106deg,_#CAFF330D,_#CAFF3300_81%)]" />
                    <div className="relative flex items-center justify-center gap-x-5 self-stretch text-2xl font-normal leading-normal text-white" >
                        <div className="flex h-24 w-24 items-center justify-center rounded-full p-3 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                                <Icon13 className="h-9 w-9" />
                            </div>
                        </div>
                        <div className="w-full lg:w-96">Secure Mobile Banking</div>
                    </div>
                    <div className="relative self-stretch text-lg font-light leading-normal text-neutral-400" >
                        Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.
                    </div>
                </div>



            </div>


        </div>
    );
}