import Icon9 from "./assets/Icon9";
import Link from 'next/link';

export default function Container({ className = "" }) {
  return (
    <div
      className={`font-lexend inline-flex w-full flex-col items-start gap-y-3.5 leading-normal tracking-[0px] ${className}`}
    >
      <div className="w-full ml-4 lg:w-[1296px] mt-4 text-left text-3xl lg:text-5xl font-medium leading-normal text-lime-400" >
        Job Openings
      </div>
      <div className="w-full lg:w-[1296px] ml-4  text-left text-lg  font-light leading-normal text-neutral-400" >
        Explore exciting job openings at Nexa Trust Bank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry
      </div>

      <div className="flex mx-2 flex-grow flex-wrap items-start justify-center lg:justify-start gap-y-8 gap-x-8 self-stretch pt-16 min-[1586px]:flex-nowrap" >
        
        <div className="flex w-full lg:w-[783px] flex-col items-center justify-center gap-y-8 self-stretch" >
          
          <div className="flex flex-col items-center justify-center gap-y-3.5 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-12" >
            <div className="self-stretch text-left text-3xl font-semibold leading-normal text-white" >
              Relationship Manager
            </div>
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-2.5 self-stretch text-center text-lg font-light leading-normal text-neutral-400 min-[1586px]:flex-nowrap" >
              <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
                <div className="flex flex-grow justify-center">
                  Location: Kenya
                </div>
              </div>
              <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
                <div className="flex flex-grow justify-center">
                  <span className="whitespace-pre">
                    {" Department: Retail Banking"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end self-stretch pt-9 text-left text-2xl font-semibold leading-normal text-white" >
              About This Job
            </div>
            <div className="flex items-end self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              As a Relationship Manager at Nexa Trust Bank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.
            </div>
            <div className="flex items-end self-stretch pt-7 text-left text-2xl font-semibold leading-normal text-white" >
              Requirements & Qualifications
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Bachelor's degree in Business, Finance, or a related field
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Minimum of 3 years of experience in sales or relationship management in the banking industry
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Proven track record of meeting and exceeding sales targets
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Excellent interpersonal and negotiation skills
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Strong knowledge of banking products and services
              </div>
            </div>
            <Link href="/careers_apply" className="flex items-end self-stretch pt-9 text-center text-lg font-medium leading-normal text-neutral-900" >
              <div className="flex justify-center rounded-[82px] bg-lime-400 py-4 px-8" >
                Apply Now
              </div>
            </Link>
          </div>

          <div className="flex w-full lg:w-[783px] flex-col items-center justify-center gap-y-3.5 self-stretch rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-12" >
            <div className="self-stretch text-left text-3xl font-semibold leading-normal text-white" >
              IT Security Specialist
            </div>
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-2.5 self-stretch text-center text-lg font-light leading-normal text-neutral-400 min-[1586px]:flex-nowrap" >
              <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
                <div className="flex flex-grow justify-center">
                  Location: Kenya
                </div>
              </div>
              <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
                <div className="flex flex-grow justify-center">
                  <span className="whitespace-pre">
                    {" Department: IT"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end self-stretch pt-9 text-left text-2xl font-semibold leading-normal text-white" >
              About This Job
            </div>
            <div className="flex items-end self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              As an IT Security Specialist at Nexa Trust Bank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.
            </div>
            <div className="flex items-end self-stretch pt-7 text-left text-2xl font-semibold leading-normal text-white" >
              Requirements & Qualifications
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Bachelor's degree in Computer Science, Information Security, or a related field
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Minimum of 5 years of experience in IT security or a similar role
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                In-depth knowledge of network security protocols and technologies
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Familiarity with regulatory frameworks such as PCI DSS and GDPR
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
              <Icon9 className="h-6 w-6" />
              <div className="w-96 self-stretch">
                Professional certifications such as CISSP or CISM are preferred
              </div>
            </div>
            <Link href="/careers_apply" className="flex items-end self-stretch pt-9 text-center text-lg font-medium leading-normal text-neutral-900" >
              <div className="flex justify-center rounded-[82px] bg-lime-400 py-4 px-8" >
                Apply Now
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full lg:w-[783px] flex-col items-center justify-center gap-y-3.5 rounded-2xl border border-solid border-neutral-800 bg-neutral-900 p-12" >
          <div className="self-stretch text-left text-3xl font-semibold leading-normal text-white" >
            Risk Analyst
          </div>
          <div className="flex flex-wrap items-center gap-y-2.5 gap-x-2.5 self-stretch text-center text-lg font-light leading-normal text-neutral-400 min-[1586px]:flex-nowrap" >
            <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
              <div className="flex flex-grow justify-center">
                Location: Kenya
              </div>
            </div>
            <div className="flex items-center justify-center self-stretch rounded-[68px] border border-solid border-neutral-800 bg-neutral-900 py-2 px-4" >
              <div className="flex flex-grow justify-center">
                <span className="whitespace-pre">
                  {" Department: Risk Management"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-end self-stretch pt-9 text-left text-2xl font-semibold leading-normal text-white" >
            About This Job
          </div>
          <div className="flex items-end self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
            As a Risk Analyst at Nexa Trust Bank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.
          </div>
          <div className="flex items-end self-stretch pt-7 text-left text-2xl font-semibold leading-normal text-white" >
            Requirements & Qualifications
          </div>
          <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
            <Icon9 className="h-6 w-6" />
            <div className="w-96 self-stretch">
              Bachelor's degree in Finance, Economics, or a related field
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-center text-lg font-light leading-normal text-neutral-400" >
            <Icon9 className="h-6 w-6" />
            <div className="flex w-96 justify-center self-stretch">
              Minimum of 2 years of experience in risk management or a similar role
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
            <Icon9 className="h-6 w-6" />
            <div className="w-96 self-stretch">
              Proficiency in risk analysis tools and techniques
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
            <Icon9 className="h-6 w-6" />
            <div className="w-96 self-stretch">
              Strong analytical and problem-solving skills
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2.5 self-stretch pt-1.5 text-left text-lg font-light leading-normal text-neutral-400" >
            <Icon9 className="h-6 w-6" />
            <div className="w-96 self-stretch">
              Knowledge of regulatory requirements and industry best practices
            </div>
          </div>
          <Link href="/careers_apply" className="flex items-end self-stretch pt-16 text-center text-lg font-medium leading-normal text-neutral-900" >
            <div className="flex justify-center rounded-[82px] bg-lime-400 py-4 px-8" >
              Apply Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}