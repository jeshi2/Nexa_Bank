

export default function MissionVission({ className = "" }) {
    return (
        <div
            className={`font-lexend relative inline-flex w-full flex-col items-start  text-left leading-normal tracking-[0px] ${className}`}
        >
            <div className=" text-center mb-5" >
                <div className="max-w-[1296px] mx-auto text-4xl lg:text-5xl font-normal leading-normal text-lime-300" >
                    Mission & Vision
                </div>
                <div className="lg:justify-center  mx-auto ml-7 mr-7 lg:text-center text-base lg:text-lg font-light leading-normal text-neutral-400" >
                    We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
                </div>
            </div>

            <div className="relative mb-5 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between self-stretch" >
                <div className="flex lg:w-[40%] ml-8 mr-8 items-center self-stretch">
                    <img src="mission.png" className="insert-0 rounded-t-[50px] rounded-b-3xl" />
                </div>
                <div className="gap-y-3.5 self-stretch border-r border-solid border-lime-300 pl-12"/>
                <div className="flex flex-col items-center justify-center  p-10 lg:p-20 lg:w-[50%]" >
                    <div className="self-stretch text-2xl lg:text-[38px] font-medium leading-normal text-white" >
                        Mission
                    </div>
                    <div className="flex self-stretch pt-6 text-base lg:text-lg font-light leading-normal text-neutral-400" >
                        At Nexa Trust Bank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                    </div>
                </div>

            </div>

            <div className="relative flex mb-5 flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between self-stretch" >
                <div className="flex flex-col items-center justify-center  p-10 lg:p-20 lg:w-[50%]" >
                    <div className="self-stretch text-2xl lg:text-[38px] font-medium leading-normal text-white" >
                        Vision
                    </div>
                    <div className="flex self-stretch pt-6 text-base lg:text-lg font-light leading-normal text-neutral-400" >
                        Our vision at Nexa Trust Bank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                    </div>
                </div>
                <div className="gap-y-3.5 self-stretch border-l border-solid border-lime-300 pl-12"/>
                <div className="flex lg:w-[40%] ml-8 mr-8 items-center self-stretch">
                    <img src="vission.png" className="insert-0 rounded-t-[50px] rounded-b-3xl" />
                </div>


            </div>


        </div>
    );
}