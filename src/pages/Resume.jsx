import React from 'react'
import aboutmeImg from '../assets/Images/png/aboutme.png'
import skillicon from '../assets/Images/svg/skillsicon.svg'
import downloadicon from '../assets/Images/svg/downloadicon.svg'
import phone from '../assets/Images/svg/phone.svg'
import email from '../assets/Images/svg/gmail.svg'
import insta from '../assets/Images/svg/instagram-fill.svg'


export default function Resume() {
    return (
        <div className='resume_bgimg'>
            <div className="container pt-24 pb-8 md:pt-10 px-14 md:px-10 lg:px-14 mx-auto ">
                <div className="block md:flex justify-between  gap-4">
                    <div className="w-full md:w-4/12">
                        <div className="w-2/3 md:w-full  overflow-hidden rounded-3xl ">
                            <img
                                src={aboutmeImg}
                                alt="Main Image"
                                className="z-50 relative"
                            />
                        </div>

                        <div className='mt-4'>
                            <p className='font-normal text-black  text-[24px] ' >Skills</p>
                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black">Web  Designing <span class="text-gray-500 text-[14px]"> ( Prototyping , Solidification
                                        & Wire Framing )</span></p>
                                </div>
                            </div>

                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black"> UI & UX Designing  <span class="text-gray-500 text-[14px]"> (  Harquie , Prototyping , & High Fidelity Design )</span></p>
                                </div>
                            </div>


                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black">Product Designing<span class="text-gray-500 text-[14px]"> (  3d model , Mock ups ,
                                        Social Media designs )</span></p>
                                </div>
                            </div>


                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black">Poster Designing <span class="text-gray-500 text-[14px]">  ( Creative & High Fidelity
                                        Design )</span></p>
                                </div>
                            </div>

                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black">Graphic Designing </p>
                                </div>
                            </div>

                            <div class="flex items-start mt-2">
                                <img src={skillicon} alt="skillicon" />
                                <div className='ms-3'>
                                    <p class="font-normal text-lg text-black">Prototyping</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-8/12 text-white">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-[16px] md:text-[20px]  text-black font-bold">Namaste</h2>
                            <button>
                                <img className='w-10 h-10 ' src={downloadicon} alt="downloadicon" />
                            </button>

                        </div>
                        <h1 className=" font-bold text-black mt-3 text-[24px] lg:text-[72px] md:text[36px] ">
                            Dipanshu Chauhan
                        </h1>
                        <div class="flex items-center mt-3 md:mt-0">
                            <div class="border-t border-black   md:w-[100px] lg:w-[280px]   w-[100px] relative">
                                <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                            </div>
                            <div class="ml-4 font-bold text-black text-[14px] md:text-[18px] lg:text-[24px]">
                                <span className=' text-gray-500 '>19 years</span>  UI / UX Designer
                            </div>
                        </div>
                        <p className='text-black font-normal mt-3 md:mt-8   text-[13px]    md:text-[14px] lg:text-[16px] '>

                            I am a dedicated UI/UX Designer with expertise in creating seamless, user-focused interfaces for mobile apps, admin panels, and websites. I specialize in delivering responsive, functional, and visually compelling designs that enhance user experience while achieving business objectives.
                        </p>

                        <div className='block md:flex justify-between mt-6 sm:gap-0  gap-14'>
                            <div>
                                <h2 className="text-[16px] md:text-[24px]  text-black font-bold">Work Experience</h2>
                                <div className='mt-3'>
                                    <p className='text-[16px] md:text-[20px]  text-gray-500 font-normal'>UI & UX Designer</p>
                                    <p className='text-[16px]  text-black font-normal mt-2'>Hexabird pvt ltd. Hisar Present</p>
                                </div>

                                <div className='mt-3'>
                                    <p className='text-[16px] md:text-[20px]  text-gray-500 font-normal'>Graphic Designer</p>
                                    <p className='text-[16px]  text-black font-normal mt-2'>+ 1 year of working Experince</p>
                                </div>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <div className="flex items-center">
                                    <img src={email} className='w-6 h-6' alt="emailicon" />
                                    <p className='text-[16px]  text-gray-500 font-normal ms-3'>cdeepanshu88@gmail.com</p>
                                </div>
                                <div className="flex items-center  ms-0  md:ms-6 mt-3">
                                    <img src={insta} className='w-6 h-6' alt="emailicon" />
                                    <p className='text-[16px]  text-gray-500 font-normal ms-3'>Dipanshu_235_</p>
                                </div>
                                <div className="flex items-center ms-0 md:ms-6 mt-3">
                                    <img src={phone} className='w-5 h-5' alt="emailicon" />
                                    <p className='text-[16px]  text-gray-500 font-normal ms-3'>+91 8295891742</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[16px] md:text-[24px]  text-black font-bold mt-6">Education</h2>
                        <div className='block md:flex  mt-2  gap-14'>
                            <div>
                                <div className='mt-3'>
                                    <p className='text-[16px] md:text-[20px]  text-gray-500 font-normal'>12th Graduated</p>
                                    <p className='text-[16px]  text-black font-normal mt-2'>OP Jindal Modern School  Hisar , Haryana</p>
                                    <p className='text-[16px]  text-black font-normal mt-2'>Jan 2022 / March 2023</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-[16px] md:text-[20px]  text-gray-500 font-normal'>B . des Product Designing </p>
                                <p className='text-[16px]  text-black font-normal mt-2'>Pearl Academy  Jaipur</p>
                                <p className='text-[16px]  text-black font-normal mt-2'> ( Present )</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
