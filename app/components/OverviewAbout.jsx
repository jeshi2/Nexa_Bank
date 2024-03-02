import AbstractDesign from "./assets/AbstractDesign";

export default function OverviewAbout({ className = "" }) {
  return (
    <div
      className={`font-lexend relative inline-flex w-full flex-row items-start rounded-3xl bg-neutral-900 p-12 text-left tracking-[0px] ${className}`}
    >
      <div className="absolute right-0 top-0 flex h-96 w-96 items-center justify-center" >
        <AbstractDesign className="h-96 w-96" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between self-stretch" >
        <div className="flex  flex-col items-center justify-center rounded-l-3xl rounded-br-[80px] bg-neutral-900 lg:bg-transparent p-10 lg:p-20 lg:w-[50%]" >
          <div className="self-stretch text-xl font-normal leading-normal text-white" >
            Welcome to Nexa Trust Bank
          </div>
          <div className="self-stretch text-2xl lg:text-[58px] font-medium leading-tight">
            <span className="text-white">{"Where Banking Meets "}</span>
            <span className="text-lime-300">Excellence!</span>
          </div>
          <div className="flex self-stretch pt-6 text-base lg:text-lg font-light leading-normal text-neutral-400" >
            At Nexa Trust Bank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
          </div>
        </div>

        <div className="flex lg:w-[50%] items-center self-stretch">
          <img
            className="inset-0 rounded-2xl object-cover"
            src="about.png"
           />
        </div>
        
      </div>

    </div>
  );
}