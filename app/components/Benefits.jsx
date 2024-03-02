import Line1 from "./assets/Line1";
import Icon5 from "./assets/Icon5";
import Icon6 from "./assets/Icon6";
import Line2 from "./assets/Line2";
import Icon7 from "./assets/Icon7";
import Icon8 from "./assets/Icon8";
export default function Container({ className = "" }) {
  return (
    <div
      className={`font-lexend inline-flex w-full flex-col items-start gap-y-3.5 text-left leading-normal tracking-[0px] ${className}`}
    >
      <div className="max-w-screen-lg mx-auto mt-4 text-4xl lg:text-5xl font-medium leading-normal">
        <span className="text-white">{"Our "}</span>
        <span className="text-lime-400">Benefits</span>
      </div>
      <div className="text-center  mx-auto  lg:text-lg font-light leading-normal text-neutral-400">
        At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 self-stretch pt-16">
        <div className="relative flex w-full lg:w-96 flex-col items-center gap-y-8 self-stretch rounded-br-[50px] rounded-tl-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl border border-solid border-lime-300/10 p-12">
          <div className="bg-background-0 absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-repeat opacity-50 mix-blend-screen" />
          <div className="absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
          <div className="absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]" />
          <div className="relative flex items-center justify-center gap-x-5 self-stretch text-lg lg:text-2xl font-normal leading-normal text-white">
            <div className="flex h-16 lg:h-24 w-16 lg:w-24 items-center justify-center rounded-full p-2 lg:p-3 bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]">
              <div className="flex h-12 lg:h-20 w-12 lg:w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-3 lg:p-5 bg-gradient-to-r from-[#CAFF331A] to-[#CAFF3300_47%]">
                <Icon5 className="h-7 lg:h-9 w-7 lg:w-9" />
              </div>
            </div>
            <div className="w-full lg:w-96">Competitive Compensation</div>
          </div>
          <div className="relative self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
            We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
          </div>
        </div>
        <Line1 className="hidden lg:block h-80 w-0" />
        <div className="relative flex w-full lg:w-96 flex-col items-center gap-y-8 self-stretch rounded-bl-[50px] rounded-tr-[50px] lg:rounded-br-3xl lg:rounded-tl-3xl border border-solid border-lime-300/10 p-12">
          <div className="bg-background-0 absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-repeat opacity-50 mix-blend-screen" />
          <div className="absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
          <div className="absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]" />
          <div className="relative flex items-center justify-center gap-x-5 self-stretch text-lg lg:text-2xl font-normal leading-normal text-white">
            <div className="flex h-16 lg:h-24 w-16 lg:w-24 items-center justify-center rounded-full p-2 lg:p-3 bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]">
              <div className="flex h-12 lg:h-20 w-12 lg:w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-3 lg:p-5 bg-gradient-to-r from-[#CAFF331A] to-[#CAFF3300_47%]">
                <Icon6 className="h-7 lg:h-9 w-7 lg:w-9" />
              </div>
            </div>
            <div className="w-full lg:w-96">Health and Wellness</div>
          </div>
          <div className="relative self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
            We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
          </div>
        </div>
      </div>
      
      <div className="flex items-end justify-center self-stretch pt-9">
        <Line2 className="h-px lg:h-0 lg:w-[1596px]" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 self-stretch pt-9">
        <div className="relative flex w-full lg:w-96 flex-col items-center gap-y-8 self-stretch rounded-bl-[50px] rounded-tr-[50px] lg:rounded-br-3xl lg:rounded-tl-3xl border border-solid border-lime-300/10 p-12">
          <div className="bg-background-0 absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-repeat opacity-50 mix-blend-screen" />
          <div className="absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
          <div className="absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] lg:rounded-tl-3xl lg:rounded-br-3xl bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]" />
          <div className="relative flex items-center justify-center gap-x-5 self-stretch text-lg lg:text-2xl font-normal leading-normal text-white">
            <div className="flex h-16 lg:h-24 w-16 lg:w-24 items-center justify-center rounded-full p-2 lg:p-3 bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]">
              <div className="flex h-12 lg:h-20 w-12 lg:w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-3 lg:p-5 bg-gradient-to-r from-[#CAFF331A] to-[#CAFF3300_47%]">
                <Icon7 className="h-7 lg:h-9 w-7 lg:w-9" />
              </div>
            </div>
            <div className="w-full lg:w-96">Retirement Planning</div>
          </div>
          <div className="relative self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
            YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
          </div>
        </div>
        <Line1 className="hidden lg:block h-80 w-0" />
        <div className="relative flex w-full lg:w-96 flex-col items-center gap-y-8 self-stretch rounded-br-[50px] rounded-tl-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl border border-solid border-lime-300/10 p-12">
          <div className="bg-background-0 absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-repeat opacity-50 mix-blend-screen" />
          <div className="absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-gradient-to-l from-[#1C1C1C] to-[#1C1C1C]" />
          <div className="absolute inset-0 rounded-tl-[50px] rounded-br-[50px] lg:rounded-bl-3xl lg:rounded-tr-3xl bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]" />
          <div className="relative flex items-center justify-center gap-x-5 self-stretch text-lg lg:text-2xl font-normal leading-normal text-white">
            <div className="flex h-16 lg:h-24 w-16 lg:w-24 items-center justify-center rounded-full p-2 lg:p-3 bg-gradient-to-r from-[#CAFF330D] to-[#CAFF3300]">
              <div className="flex h-12 lg:h-20 w-12 lg:w-20 items-center justify-center rounded-full border border-solid border-lime-300 p-3 lg:p-5 bg-gradient-to-r from-[#CAFF331A] to-[#CAFF3300_47%]">
                <Icon8 className="h-7 lg:h-9 w-7 lg:w-9" />
              </div>
            </div>
            <div className="w-full lg:w-96">Work-Life Balance</div>
          </div>
          <div className="relative self-stretch text-base lg:text-lg font-light leading-normal text-neutral-400">
            We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
          </div>
        </div>
      </div>

    </div>
  );
}