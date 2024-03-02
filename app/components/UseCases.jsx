import AbstractDesign from "./assets/AbstractDesign";
import Icon0 from "./assets/Icon0";
import Icon1 from "./assets/Icon1";
import Icon2 from "./assets/Icon2";
import Icon3 from "./assets/Icon3";
import Line from "./assets/Line";
import Icon4 from "./assets/Icon4";

export default function Container({ className = "" }) {
  return (
    <div
      className={`font-lexend inline-flex w-full flex-col items-start gap-y-3.5 leading-normal tracking-[0px] ${className}`}
    >
      <div className="w-[1296px] max-w-6xl mt-4 mx-auto px-4 text-left text-3xl font-medium leading-normal" >
        <span className="text-white">Use</span> <span className="text-lime-400">Cases</span>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4  text-left text-lg font-light leading-normal text-neutral-400" >
        At Nexa Trust Bank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
      </div>
      <div className="mr-0 flex flex-wrap items-center justify-center gap-y-24 gap-x-24 self-stretch pt-16" >
        <div className="flex flex-col items-center gap-y-5 self-stretch rounded-3xl bg-neutral-900 pb-12 pr-12 text-center text-xl font-normal leading-normal text-white" >
          <div className="relative flex items-end justify-end self-stretch pl-12 pt-12" >
            <AbstractDesign className="absolute left-0 top-0 h-56 w-52" />
            <div className="relative flex flex-grow flex-wrap items-center justify-center gap-y-5 gap-x-5 self-stretch" >
              <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon0 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Managing Personal Finances
                </div>
              </div>
              <div className="flex w-80 flex-col items-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon1 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Saving for the Future
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-y-5 gap-x-5 self-stretch" >
            <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
              <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                  <Icon2 className="h-8 w-8" />
                </div>
              </div>
              <div className="flex justify-center self-stretch">
                Homeownership
              </div>
            </div>
            <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
              <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                  <Icon3 className="h-8 w-8" />
                </div>
              </div>
              <div className="flex justify-center self-stretch">
                Education Funding
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-96  flex-col  items-center justify-center gap-y-3.5 text-left" >
          <div className="self-stretch text-3xl ml-2 font-medium leading-normal text-white" >
            For Individuals
          </div>
          <div className="self-stretch text-lg ml-2 mr-2 font-light leading-normal text-neutral-400" >
            For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center gap-y-8 md:gap-x-12 self-stretch pt-12">
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5 self-stretch">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                78%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Secure Retirement Planning
              </div>
            </div>
            <Line className="h-1 md:w-0" />
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                63%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Manageable Debt Consolidation
              </div>
            </div>
            <Line className="h-1 md:w-0" />
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                91%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Reducing financial burdens
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="mr-2 flex flex-wrap items-center justify-center gap-y-24 gap-x-24 self-stretch pt-12" >
        <div className="flex w-96 flex-col  items-center justify-center gap-y-3.5 text-left" >
          <div className="self-stretch text-3xl ml-2 font-medium leading-normal text-white" >
            For Business
          </div>
          <div className="self-stretch text-lg ml-2 mr-2 font-light leading-normal text-neutral-400" >

            For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, Nexa Trust Bank is committed to providing the right tools and support to achieve them

          </div>
          <div className="flex flex-col md:flex-row items-start justify-center gap-y-8 md:gap-x-12 self-stretch pt-12">
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5 self-stretch">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                65%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Cash Flow Management
              </div>
            </div>
            <Line className="h-1 md:w-0" />
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                70%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Drive Business Expansion
              </div>
            </div>
            <Line className="h-1 md:w-0" />
            <div className="flex w-full md:w-44 ml-2 flex-col items-center justify-center gap-y-1.5">
              <div className="self-stretch text-4xl md:text-[58px] font-medium leading-normal text-lime-400">
                45%
              </div>
              <div className="self-stretch text-base md:text-lg font-light leading-normal text-neutral-400">
                Streamline payroll processing
              </div>
            </div>
          </div>

        </div>
        <div className="relative flex items-center justify-center self-stretch rounded-3xl bg-neutral-900 p-12 text-center text-xl font-normal leading-normal text-white" >
          <div className="absolute right-0 top-0 flex h-56 w-52 items-center justify-center" >
            <AbstractDesign className="h-56 w-52" />
          </div>
          <div className="relative flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch" >
            <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-5 self-stretch" >
              <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon4 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Startups and Entrepreneurs
                </div>
              </div>
              <div className="flex w-80 flex-col items-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon3 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Cash Flow Management
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-5 self-stretch" >
              <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon3 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Business Expansion
                </div>
              </div>
              <div className="flex w-80 flex-col items-center justify-center gap-y-6 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-7" >
                <div className="flex h-20 w-20 items-center justify-center rounded-full p-2.5 [background-image:linear-gradient(180deg,_#CAFF330D,_#CAFF3300)]" >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-lime-300 p-3.5 [background-image:linear-gradient(180deg,_#CAFF331A,_#CAFF3300_47%)]" >
                    <Icon3 className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  Payment Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}