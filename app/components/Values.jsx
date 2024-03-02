import React from "react";

export default function Values({ className = "" }) {
  return (
    <div
      className={`font-lexend inline-flex w-full flex-col items-start gap-y-3.5 text-left leading-normal tracking-[0px] ${className}`}
    >
      <div className="max-w-[1296px] mx-auto text-4xl lg:text-5xl font-medium leading-normal">
        <span className="text-white">{"Our "}</span>
        <span className="text-lime-400">Values</span>
      </div>
      <div className="lg:justify-center  mx-auto ml-7 mr-7 lg:text-center text-base lg:text-lg font-light leading-normal text-neutral-400" >
        At Nexa Trust Bank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
      </div>
      <div className="flex flex-grow flex-wrap items-center justify-center gap-y-20 gap-x-20 self-stretch pt-16 min-[1586px]:flex-nowrap" >
        <div className="flex w-96 flex-col items-center justify-center gap-y-20 self-stretch" >
          <div className="flex flex-col items-center justify-center gap-y-8 self-stretch border-l border-solid border-lime-300 pl-7" >
            <div className="self-stretch text-3xl lg:text-[58px] font-medium leading-normal text-neutral-600" >
              Integrity
            </div>
            <div className="self-stretch text-lg font-light leading-normal text-neutral-400" >
              We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 self-stretch border-l border-solid border-lime-300 pl-7" >
            <div className="self-stretch text-3xl lg:text-[58px] font-medium leading-normal text-neutral-600" >
              Collaboration
            </div>
            <div className="self-stretch text-lg font-light leading-normal text-neutral-400" >
              We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
            </div>
          </div>
        </div>
        <div className="flex w-96 flex-col items-center justify-center gap-y-20 self-stretch" >
          <div className="flex flex-col items-center justify-center gap-y-8 self-stretch border-l border-solid border-lime-300 pl-7" >
            <div className="self-stretch text-3xl lg:text-[58px] font-medium leading-normal text-neutral-600" >
              Customer Centricity
            </div>
            <div className="self-stretch text-lg font-light leading-normal text-neutral-400" >
              Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 self-stretch border-l border-solid border-lime-300 pl-7" >
            <div className="self-stretch text-3xl lg:text-[58px] font-medium leading-normal text-neutral-600" >
              Innovation
            </div>
            <div className="self-stretch text-lg font-light leading-normal text-neutral-400" >
              We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}