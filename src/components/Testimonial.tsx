import React from 'react';
import Avatar from "../assets/img/avatar.png";
import { IoStar } from "react-icons/io5";

const Testimonial = () => {
    return (
        <div className='bg-[#192180]/15'>
            <div className='py-6 px-4 max-w-7xl mx-auto'>
                <h2 className='text-blue-primary-60 text-[40px] text-center'>Testimonials</h2>
                <p className='text-[#556177] text-center text-lg'>Some quotes from our happy customers</p>

                {/* Testimonial card */}
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center'>
                    <div className="w-full max-w-sm  border bg-white border-gray-200 rounded-md shadow-sm shadow-[#8BA7B229] mt-8">
                        <div className="flex flex-col items-center pb-10">
                            <div className='w-28'>
                                <img className="w-full" src={Avatar} alt="Bonnie image" />
                            </div>
                            <span className='flex '>
                                <IoStar className='text-[#7680FF] text-lg'/>
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                            </span>
                            <p className="text-xl text-[#1D293F] text-center my-4">“I love it! No more air fresheners”</p>
                            <p className="text-sm font-medium text-center text-[#7C8087] ">Luisa</p>   
                        </div>
                    </div>
                    <div className="w-full max-w-sm  border bg-white border-gray-200 rounded-md shadow-sm shadow-[#8BA7B229] mt-8">
                        <div className="flex flex-col items-center pb-10">
                            <div className='w-28'>
                                <img className="w-full" src={Avatar} alt="Bonnie image" />
                            </div>
                            <span className='flex '>
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                            </span>
                            <p className="text-xl text-[#1D293F] text-center my-4">“I love it! No more air fresheners”</p>
                            <p className="text-sm font-medium text-center text-[#7C8087] ">Luisa</p>
                        </div>
                    </div>

                    <div className="w-full max-w-sm  border bg-white border-gray-200 rounded-md shadow-sm shadow-[#8BA7B229] mt-8">
                        <div className="flex flex-col items-center pb-10">
                            <div className='w-28'>
                                <img className="w-full" src={Avatar} alt="Bonnie image" />
                            </div>
                            <span className='flex '>
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                                <IoStar className='text-[#7680FF] text-lg' />
                            </span>
                            <p className="text-xl text-[#1D293F] text-center my-4">“I love it! No more air fresheners”</p>
                            <p className="text-sm font-medium text-center text-[#7C8087] ">Luisa</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonial