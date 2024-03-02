import AbstractDesign from "./assets/AbstractDesign";

export default function Overview({ className = "" }) {
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
                        <span className="text-white">{"Welcome to "}</span>
                        <span className="text-lime-400">Nexa Trust Bank</span>
                        <span className="whitespace-pre text-white">{" Careers!"}</span>
                    </div>
                    <div className="self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
                        Join our team and embark on a rewarding journey in the banking industry. At Nexa Trust Bank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
                    </div>
                </div>
                <div className="flex items-center self-stretch lg:w-[50%]">
                    <div className="relative h-60 lg:h-96 w-full lg:w-auto">
                        <div className="bg-background-0 absolute inset-0 rounded-2xl bg-cover bg-center" />
                        <div className="bg-background-1 absolute inset-0 rounded-2xl bg-cover bg-center" />
                        <div className="bg-background-2 absolute inset-0 rounded-2xl bg-cover bg-center mix-blend-overlay" />
                    </div>
                    <img className=" inset-0 rounded-2xl object-cover" src="career.png" />
                </div>
            </div>
        </div>
    );
}