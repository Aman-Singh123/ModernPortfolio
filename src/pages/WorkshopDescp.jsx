import React from 'react'
import backwardarrow from '../assets/Images/svg/backwardarrow.svg'
import projectimg from '../assets/Images/png/projectimg.png'
import { Link } from 'react-router-dom'

function WorkshopDescp() {
    return (
        <div className='workshopdesp_bgimg'>
            <div className="container pt-24 pb-8 md:pt-10 px-14 md:px-10 lg:px-14 mx-auto ">
                <Link to='/workshop'>
                    <img className='mt-5' src={backwardarrow} alt="BackWardArrow" />
                </Link> 
                <div className="bg-white w-47  md:w-[35.8%] lg:w-[27%] xl:w-[21.1%] 2xl:w-[17.3%] flex items-center rounded-full text-black font-bold ps-4 mt-10">
                    <p>in</p>
                    <button class="bg-orange-500 w-full text-white rounded-full ms-2 font-semibold px-6 py-2 hover:bg-orange-600 transition duration-300"    >
                        More about this Project
                    </button>
                </div>
                <div className="block md:flex justify-between  items-center ">
                    <div className="w-full md:w-6/12 gap-3">
                        <div className='my-7 pb-8'>
                            <div className='flex items-center '>
                                <h2 className='text-black font-bold  text-[16px]  md:text-[20px] xl:text-[28px]'>heading</h2>
                                <p className='text-gray-500 font-normal  text-[14px]  md:text-[16px] xl:text-[20px] ms-3 mt-1'>2022-2024</p>
                            </div>
                            <p className='text-black font-normal  text-[14px]  md:text-[16px] xl:text-[20px] mt-3'>Introduction</p>

                            <p className='text-gray-500 font-normal   xl:w-[700px]  text-[14px]  md:text-[16px] xl:text-[20px]  mt-1' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at maxime, necessitatibus optio quos totam facilis excepturi porro et eligendi voluptates fugiat earum sapiente nesciunt eos ullam odit accusantium cupiditate! </p>
                            <div class="flex items-center mt-3 md:mt-0">
                                <div class=" font-bold text-black text-[14px] md:text-[18px] lg:text-[24px]">
                                    Description
                                </div>
                                <div class="border-t border-black   md:w-[100px] lg:w-[280px] mt-2 ms-3   w-[100px] relative">
                                    <div class="absolute -top-1 right-0 bg-black rounded-full w-2 h-2"></div>
                                </div>

                            </div>

                            <p className='text-gray-500 font-normal   xl:w-[700px]  text-[14px]  md:text-[16px] xl:text-[20px]  mt-1' > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aperiam dolor ipsa architecto illo aliquam excepturi totam voluptate quod, nisi nemo qui nesciunt a distinctio sequi reiciendis consequuntur corporis explicabo delectus? Distinctio iste error est ex adipisci inventore animi officiis eos laudantium quos totam, tempora quibusdam quod iusto doloremque ea libero. Aspernatur explicabo inventore iste exercitationem nisi debitis! Nisi, doloribus deleniti cupiditate vero, facilis itaque ex ipsum ullam nihil ab ea labore temporibus vel aspernatur pariatur veritatis est quam repudiandae autem maxime minus eius repellendus sit quas? Eius ut esse fugit eaque ipsa dolorem aperiam eum neque, velit consectetur alias tenetur natus asperiores corrupti ex est magnam. Sapiente, explicabo hic, excepturi veritatis consequuntur et distinctio ipsam quae officiis labore soluta nobis fugit accusamus debitis neque possimus nulla autem expedita. Quidem culpa at dicta  </p>

                        </div>

                    </div>

                    <div className="w-full md:w-5/12 ">
                        <div className="w-2/3 md:w-full  overflow-hidden rounded-3xl ">
                            <img
                                src={projectimg}
                                alt="Main Image"
                                className="z-50 relative"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopDescp