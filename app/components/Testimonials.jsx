import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className="TestimonialsSection   mt-20 w-full max-w-6xl mx-auto px-4 lg:px-0">
            <div className="Container w-full flex flex-col lg:flex-row items-center justify-between gap-24">
                <div className="TextContainer w-full lg:w-auto flex flex-col justify-start items-start gap-3.5">
                    <div className="Heading px-4"><span className="text-white text-4xl font-medium leading-10">Our</span><span className="text-lime-400 text-4xl font-medium leading-10"> Testimonials</span></div>
                    <div className="Paragraph px-4 text-zinc-400 text-lg font-light leading-relaxed">Discover how Nexa Trust Bank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</div>
                </div>
                <div className="Tabs p-3.5 bg-zinc-900 rounded-3xl border border-neutral-800 justify-start items-start flex">
                    <div className="Button px-6 py-3.5 bg-lime-400 rounded-full justify-center items-center gap-2.5 flex">
                        <div className="Text text-center text-zinc-900 text-lg font-normal font-['Lexend'] leading-relaxed">For Individuals</div>
                    </div>
                    <div className="Button px-6 py-3.5 rounded-full justify-center items-center gap-2.5 flex">
                        <div className="Text text-center text-white text-lg font-normal font-['Lexend'] leading-relaxed">For Businesses</div>
                    </div>
                </div>
            </div>

            {/**grid section */}
            <div className="ItemsContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                <div className="Card  rounded-lg shadow-md p-6">
                    <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <FaQuoteLeft className="text-3xl text-lime-400" />
                    </div>
                    <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                        <div className="Icon w-14 h-14 px-1.5 py-2.5 justify-center items-center flex" />
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                    </div>
                    <div className="Paragraph self-stretch text-center text-white text-lg font-normal font-['Lexend'] leading-relaxed">Nexa Trust Bank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</div>
                    <div className="Name self-stretch text-center text-lime-400 text-lg font-medium font-['Lexend'] leading-relaxed">Sara T</div>
                </div>
                <div className="Card  rounded-lg shadow-md p-6">
                <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <FaQuoteLeft className="text-3xl text-lime-400" />
                    </div>
                    <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                        <div className="Icon w-14 h-14 px-1.5 py-2.5 justify-center items-center flex" />
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                    </div>
                    <div className="Paragraph self-stretch text-center text-white text-lg font-normal font-['Lexend'] leading-relaxed">I recently started my own business, and Nexa Trust Bank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</div>
                    <div className="Name self-stretch text-center text-lime-400 text-lg font-medium font-['Lexend'] leading-relaxed">John D</div>
                </div>
                <div className="Card  rounded-lg shadow-md p-6">
                <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <FaQuoteLeft className="text-3xl text-lime-400" />
                    </div>
                    <div className="Container self-stretch justify-start items-center gap-5 inline-flex">
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                        <div className="Icon w-14 h-14 px-1.5 py-2.5 justify-center items-center flex" />
                        <div className="Line grow shrink basis-0 h-px border border-neutral-800"></div>
                    </div>
                    <div className="Paragraph self-stretch text-center text-white text-lg font-normal font-['Lexend'] leading-relaxed">I love the convenience of Nexa Trust Bank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.</div>
                    <div className="Name self-stretch text-center text-lime-400 text-lg font-medium font-['Lexend'] leading-relaxed">Emily G</div>
                </div>
            </div>


        </div>
    );
};

export default Testimonials;
