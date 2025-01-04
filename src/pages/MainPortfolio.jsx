import React from "react";
import NavPage from "../components/NavPage";
import mainImage from '../assets/Images/png/main_image.png';
import TypewriterComponent from 'typewriter-effect';
import flowerimg from '../assets/Images/png/flower.png';


function MainPortfolio() {
  return (
    <div className="relative  xl:h-screen  ">
      <div className="container px-14 md:px-10 lg:px-14 mx-auto">
        <section className="mt-4">
          <div className="flex flex-col-reverse md:flex-row justify-between  gap-4">
            <div className="w-full md:w-7/12 text-white">
              <h2 className="text-[20px] md:text-[28px]  xl:text-[35px]  text-black font-bold">Hello <span className="text-[18px]" >( this is me  )</span> </h2>
              <h1 className=" font-bold mt-2 md:font-medium ">
                <span className="text-black font-bold  text-[26px] md:text-[36px] xl:text-[72px]">
                  <TypewriterComponent
                    options={{
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      cursor: '_',
                      strings: ['UI & UX Designer'],
                    }}
                  />
                </span>
              </h1>
              <p className='text-black font-light mt-3 md:mt-8   text-[13px]    md:text-[16px] xl:text-[20px] max-w-[500px]'>
                I’m a UI/UX Designer specializing in mobile apps, admin panels, websites, and portfolio designs, creating intuitive, responsive interfaces that enhance user experience and deliver high-quality solutions.
              </p>
              <button className="button_bg absolute text-white px-6 py-2 rounded-md text-sm hover:bg-orange-600 mt-5 z-50">
                Hire Me
              </button>

            </div>
            <div className="w-full md:w-4/12">
              <div className="w-3/4 md:w-full  overflow-hidden rounded-3xl ">
                <img
                  src={mainImage}
                  alt="Main Image"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <img src={flowerimg} alt="flower" className="absolute md:h-3/5  xl:h-3/4 md:top-[260px]  lg:top-[300px] xl:top-[370px]  2xl:top-[480px] hidden md:block" />
    </div>

  );
}

export default MainPortfolio;
