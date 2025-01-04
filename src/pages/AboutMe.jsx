import React from 'react'
import aboutmeImg from '../assets/Images/png/aboutme.png'
import projecticon from '../assets/Images/svg/projectdesign.svg'
import uidesign from '../assets/Images/svg/uidesign.svg'
import uxdesign from '../assets/Images/svg/uxdesign.svg'
import website from '../assets/Images/svg/websitedesign.svg'
import posterdesign from '../assets/Images/svg/posterdesign.svg'
import graphicdesign from '../assets/Images/svg/graphicdesign.svg'
import prototypedesign from '../assets/Images/svg/prototypedesign.svg'
import illustration from '../assets/Images/svg/illustration.svg'
import corel from '../assets/Images/svg/corel.svg'
import adobe from '../assets/Images/svg/adobe.svg'
import adobeillustration from '../assets/Images/svg/adobeillustrator.svg'
import figma from '../assets/Images/svg/figma.svg'
import sketching from '../assets/Images/svg/sketching.svg'
import origami from '../assets/Images/svg/origami.svg'
import basketball from '../assets/Images/svg/basketball.svg'
import sculpting from '../assets/Images/svg/sculpting.svg'


function AboutMe() {
    return (
        <div className='about_bgimg'>
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
                            <p className='font-normal text-black  text-[24px] ' >Experience</p>

                            <p className='mt-2 font-normal text-[14px] '>july 2022 - Aug 2024</p>
                            <div class="flex items-center md:mt-0">
                                <div class="border-t border-black  w-[240px] md:w-[180px] lg:w-[200px]   relative">
                                    <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                                </div>
                            </div>
                            <div class="flex items-start mt-3">

                                <div class="border-l-4 h-[50px] border-orange-500 opacity-50 mr-4"></div>

                                <div>
                                    <h2 class="font-bold text-lg text-black">UI & UX Designing</h2>
                                    <p class="text-gray-500">Gained Extensive Training</p>
                                </div>
                            </div>
                            <div class="flex items-start mt-3">
                                <div class="border-l-4 h-[50px] border-orange-500 opacity-50 mr-4"></div>
                                <div>
                                    <h2 class="font-bold text-lg text-black">Graphic Designing </h2>
                                    <p class="text-gray-500">+ 1 year of working Exp</p>
                                </div>
                            </div>


                            <p className='mt-2 font-normal text-[14px] '>Present</p>
                            <div class="flex items-center md:mt-0">
                                <div class="border-t border-black  w-[240px] md:w-[180px] lg:w-[200px]   relative">
                                    <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                                </div>
                            </div>
                            <div class="flex items-start mt-3">

                                <div class="border-l-4 h-[50px] border-orange-500 opacity-50 mr-4"></div>

                                <div>
                                    <h2 class="font-bold text-lg text-black">UI & UX  Designer</h2>
                                    <p class="text-gray-500">Hexabird pvt ltd. Hisar </p>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="w-full md:w-8/12 text-white">
                        <h2 className="text-[16px] md:text-[20px]  xl:text-[24px]  text-black font-bold">About me </h2>
                        <h1 className=" font-bold text-black mt-3 text-[24px] lg:text-[72px] md:text[36px] ">
                            Dipanshu Chauhan
                        </h1>
                        <div class="flex items-center mt-3 md:mt-0">
                            <div class="border-t border-black   md:w-[100px] lg:w-[280px]   w-[100px] relative">
                                <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                            </div>
                            <div class="ml-4 font-bold text-black text-[14px] md:text-[18px] lg:text-[24px]">
                                UI / UX Designer
                            </div>
                        </div>
                        <p className='text-black font-normal mt-3 md:mt-8   text-[13px]    md:text-[14px] lg:text-[16px] '>
                            I’m a skilled UI/UX Designer specializing in creating intuitive and visually appealing interfaces for mobile apps, admin panels, and websites. Focused on user-centric design, I craft responsive, functional, and engaging solutions. My work combines innovation and usability, delivering high-quality designs that enhance user experience and align with business goals.
                        </p>

                        <div className='block md:flex justify-between  gap-14'>
                            <div className="w-full md:w-3/12 mt-7">
                                <p className='font-normal text-black  text-[24px]' >Education</p>
                                <p className='mt-2 font-normal text-black text-[14px] '>2021 - 2022</p>
                                <div class="flex items-center md:mt-0">
                                    <div class="border-t border-black  w-[240px] md:w-[180px] lg:w-[180px]   relative">
                                        <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                                    </div>
                                </div>

                                <div>
                                    <h2 class="font-normal  sm:text-[16px] lg:text-lg text-black mt-3">12th Graduated</h2>
                                    <p class="text-gray-500 text-[14px] mt-1">OP Jindal Modern School
                                        Hisar , Haryana </p>
                                </div>

                                <p className='mt-2 font-normal text-black text-[14px] '>Jan 2025 - present</p>
                                <div class="flex items-center md:mt-0">
                                    <div class="border-t border-black  w-[240px] md:w-[180px] lg:w-[180px]   relative">
                                        <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="font-normal text-lg text-black mt-3 sm:text-[16px] lg:text-lg ">B . des Product Designing</h2>
                                    <p class="text-gray-500  text-[14px]  mt-1">Pearl Academy
                                        Jaipur </p>
                                </div>

                            </div>
                            <div className="w-full md:w-9/12 mt-7 gap-6">
                                <p className='font-normal  text-[24px] text-black '>Work Skills</p>
                                <div class="mt-1">
                                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        <div class="flex">
                                            <img src={website} alt="WebsiteDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Website Design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex  ">
                                            <img src={uidesign} alt="UIDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">UI Design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex ">
                                            <img src={uxdesign} alt="UXDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">UX Design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex">
                                            <img src={projecticon} alt="ProductDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold   text-[12px]  xl:text-[14px] text-gray-800">Product Design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex">
                                            <img src={illustration} alt="WebsiteDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Illustration</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <img src={posterdesign} alt="WebsiteDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Poster design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <img src={graphicdesign} alt="WebsiteDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Graphic Design</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <img src={prototypedesign} alt="WebsiteDesign" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Prototyping</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-whiterounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* softwares  */}
                                <p className='font-normal  text-[24px] text-black mt-4 '>Software</p>
                                <div class="mt-3">
                                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        <div class="flex">
                                            <img src={figma} alt="figma" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Figma</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex  ">
                                            <img src={adobe} alt="adobe" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">Adobe <span className='text-[10px] font-light'>(photoshop)</span></h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex ">
                                            <img src={adobeillustration} alt="adobeillustrator" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">Adobe <span className='text-[10px] font-light'>(illustator)</span></h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex">
                                            <img src={corel} alt="corel" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold   text-[12px] xl:text-[14px]   text-gray-800">Coral draw</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* intersets  */}
                                <p className='font-normal  text-[24px] text-black mt-4 '>Interest</p>
                                <div class="mt-3">
                                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        <div class="flex">
                                            <img src={sketching} alt="sketching" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800 ">Sketching</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex  ">
                                            <img src={sculpting} alt="sculpting" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">Sculpting</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="flex ">
                                            <img src={basketball} alt="basketball" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold text-[12px] xl:text-[14px] text-gray-800">Basketball</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex">
                                            <img src={origami} alt="origami" class="w-9 h-9" />
                                            <div className='ms-2'>
                                                <h3 class="font-bold   text-[12px] xl:text-[14px]   text-gray-800">Origami</h3>
                                                <div class="flex space-x-2 mt-1">
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <div class="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>






                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe