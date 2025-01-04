import React, { useState } from 'react'
import { projects } from '../assets/DummyData/Project'
import Slider from "react-slick";
import forwardarrow from '../assets/Images/svg/forwrdarrow.svg'
import { Link } from 'react-router-dom';

function WorkShop() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [selectedcategory, setCategory] = useState('UI Design')

    const categoryCounts = projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
    }, {});

    const categories = Object.entries(categoryCounts);




    const settings = {
        className: "center",
        centerMode: true,
        arrows: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        afterChange: (current) => {
            setActiveSlideIndex(current); // Update active slide index
        },
        responsive: [
            {
                breakpoint: 1268, // For screens between 768px and 1268px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time
                    centerPadding: "20px", // Slight padding for smaller screens
                },
            },
        ],
    };

    const filteredProjects = projects.filter(
        (project) => project.category === selectedcategory
    );

    // Get the current active project details
    const activeProject = filteredProjects[activeSlideIndex];


    return (
        <div className='resume_bgimg '>
            <div className="container pt-24 pb-8 md:pt-10 px-14 md:px-10 lg:px-14 mx-auto ">
                <div className="block md:flex justify-between  gap-4">
                    <div className="w-full md:w-1/12">
                        <div className="workshop_sidebar p-4 rounded-md">
                            {categories.map(([categoryName, count], index) => (
                                <div key={index}>
                                    <button
                                        className={`my-4 text-center py-2 px-1 rounded-lg shadow w-full ${selectedcategory === categoryName ? "bg-orange-500 text-white" : "bg-white text-black"
                                            }`}
                                        onClick={() => setCategory(categoryName)}
                                    >
                                        <span className="font-bold">{count}</span>
                                    </button>
                                    <p className="text-center text-sm mt-2">{categoryName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-10/12 text-white">
                        <div className="projects-slider-container">
                            <Slider {...settings}>
                                {filteredProjects.map((project, index) => (
                                    <div key={index} className="slide">
                                        <img
                                            src={project.coverimage}
                                            alt={project.title}
                                            className="slide-image"
                                        />
                                    </div>
                                ))}
                            </Slider>

                            <div className='my-7 pb-8'>
                                <div className='flex items-center '>
                                    <h2 className='text-black font-bold  text-[16px]  md:text-[20px] xl:text-[28px]'>{activeProject.name}</h2>
                                    <p className='text-gray-500 font-normal  text-[14px]  md:text-[16px] xl:text-[20px] ms-3 mt-1'>2022-2024</p>
                                </div>
                                <p className='text-black font-normal  text-[14px]  md:text-[16px] xl:text-[20px] mt-3'>Introduction</p>
                                <div className='flex items-center'>
                                    <p className='text-gray-500 font-normal   xl:w-[700px]  text-[14px]  md:text-[16px] xl:text-[20px] ms-3 mt-1' >{activeProject.description.split(' ').length > 50 ? activeProject.description.split(' ').slice(0, 30).join(' ') + '...' : activeProject.description}</p>
                                    <Link to='/workshopdesp'>
                                        <button className='ms-6 hover:-translate-y-3'>
                                            <img className='w-14 h-14   md:w-12  md:h-12 lg:w-10 lg:h-10 xl:w-8 xl:h-8 ' src={forwardarrow} alt="forwardarrow" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkShop