import React from 'react'
import contactimg from '../assets/Images/png/contactimg.png'

function ContactMe() {
    return (
        <div className='contact_bgimg'>
            <div className="container pt-8 md:pt-10  px-14 md:px-10 lg:px-14 mx-auto  ">
                <div className="block md:flex justify-between  gap-4">
                    <div className="w-full md:w-4/12">
                        <div className="w-2/3 md:w-full  overflow-hidden rounded-3xl ">
                            <img
                                src={contactimg}
                                alt="Main Image"
                                className="z-50 relative"
                            />
                        </div>
                        <h2 className=" font-bold text-black mt-3 text-[24px] lg:text-[52px] xl:text-[72px] md:text[36px] ">
                            Contact Me !
                        </h2>
                        <p className='font-bold text-black mt-2 text-[14px] md:text-[20px] lg:text-[24px]'>@2024</p>
                        <p className='font-bold text-black my-2 text-[14px] md:text-[20px] lg:text-[24px]'>Got a question or proposal, or just want to say hello? Go ahead.</p>
                    </div>

                    <div className='w-full md:w-6/12  lg:ps-[70px] pb-8  md:pb-20'>
                        <div className='form_effect border rounded-[20px] p-[10px] md:p-[50px] backdrop-blur-md   xl:w-3/4'>

                            <form action="" method="post">
                                <label htmlFor="name">Your Name</label>
                                <br />
                                <input className='mt-4 form_input ' type="text" name="name" id="name" placeholder="Your Name" />
                                <br />
                                <br />
                                <label htmlFor="email" className='pt-3'>Your Email</label>
                                <br />
                                <input className='mt-4 form_input ' type="email" name="email" id="email" placeholder="Your Email" />
                                <br />
                                <br />
                                <label htmlFor="description">Description</label>
                                <br />
                                <textarea className='mt-4 ' type="text" name="description" id="description" placeholder="Hi, i think you have some work me !" />
                                <br />
                                <button type='submit' className="button_bg w-full text-white px-6 py-4 rounded-md text-sm hover:bg-orange-600 mt-11 z-50">
                                    Send Message
                                </button>

                            </form>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe