import React from 'react';
import Samsung from "../assets/img/Galaxy-S24-Ultra.png";
import Headphone from "../assets/img/Beats-Headphone-1.png";
import Shopper from '../assets/img/shopper.png';
import Logo from '../assets/img/Logo.png';
import Visionpro from '../assets/img/image 36.png';
import Macbook from '../assets/img/Apple-MacBook.png'

const HeroSection = () => {
    return (
        <section className='lg:grid grid-cols-5 grid-flow-row'>
            {/* Main Hero Section */}
            <div className="bg-gradient-to-r from-[#2A3E64] to-[#001845] px-4 lg:px-0 md:px-8 lg:pl-24 pt-20 lg:pt-32 text-blue-primary-10 lg:col-span-5">
                <div className='lg:flex mx-auto max-w-7xl'>
                    <div>
                        <div className="">
                            <p className="px-2 py-1 leading-5 text-[18px] md:text-2xl">
                                Ultra.Beyond.
                            </p>
                        </div>
                        <div className="">
                            <h1 className="text-[48px] leading-[45px] sm:text-8xl font-light text-white">Samsung Galaxy
                                <br /> <b>S24 Ultra</b></h1>
                            <p className="mt-6 text-lg leading-8 text-blue-primary-10 md:text-start">Created to change everything for the better. For everyone</p>
                            <div className="mt-8 flex justify-center md:justify-start mb-12">
                                <button className="rounded-sm border border-[#BBC0C9] px-10 py-2 text-base text-[#BBC0C9] font-semibold">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='place-content-end'>
                        <img src={Samsung} alt="" className='lg:w-[800px]' />
                    </div>
                </div>
            </div>

            {/* Headphone */}
            <div className='bg-[#D6D9DE] px-4 py-12 lg:pl-0 lg:pb-0 lg:col-span-1 lg:row-span-1'>
                <div className='flex items-center'>
                    <div className=' lg:w-72'>
                        <img src={Headphone} alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl'>Beats <b>Headset</b></h3>
                        <p className='text-[#909090]'>Computational audio. Listen, it's powerful</p>
                    </div>
                </div>
            </div>

            {/* Gadget Hub */}
            <div className='bg-gradient-to-b from-[#AA3FE3EB] to-black pt-12 text-white lg:col-span-1 lg:row-span-1  lg:col-start-1 lg:row-end-4'>
                <div className='flex items-center'>
                    <div className='relative'>
                        <div className='w-24  lg:w-36'>
                            <img src={Shopper} alt="" className='w-full' />
                        </div>
                        <div className='w-16  absolute bottom-2 left-14'>
                            <img src={Logo} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-light'>Your Gadgets <b>Hub</b></h3>
                        <p className='mb-12 text-[#F6F6F6]'>Take advantage of our Promos this month</p>
                    </div>
                </div>
            </div>

            {/* Macbook */}
            <div className="bg-[#EDEDED] px-4 lg:px-0 md:px-8 lg:pl-24 pt-20 lg:pt-32 lg:col-span-3 lg:row-span-2 lg:col-start-2 lg:row-end-4">
                <div className='lg:flex'>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[48px] leading-[45px] sm:text-8xl font-light text-center">Macbook
                            <br /> <b>Air</b></h1>
                        <p className="mt-6 text-lg leading-8 text-[#778092] md:text-start">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <button className="rounded-sm border border-[#2A364D] px-10 py-2 text-base text-[#2A364D] font-semibold">Shop Now</button>
                        </div>
                    </div>
                    <div className='flex justify-center lg:w-[800px]'>
                        <img src={Macbook} alt="" className='' />
                    </div>
                </div>
            </div>

            {/* Vision Pro */}
            <div className='bg-[#192180] text-white pl-4 py-12 lg:col-span-1 lg:row-span-2 lg:col-start-5 lg:col-end-5'>
                <div className='flex flex-row-reverse items-center relative'>
                    <div className='w-32 absolute lg:w-64 top-20 lg:top-32'>
                        <img src={Visionpro} alt="" className='w-full' />
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-light'>Apple Vision <b>Pro</b></h3>
                        <p className='mb-12 text-[#F6F6F6]'>An immersive way to experience entertainment</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
