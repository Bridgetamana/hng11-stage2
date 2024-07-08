import React from 'react';
import WhiteLogo from "../assets/img/logo-white.png";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className='bg-[#002855] text-[#CFCFCF] px-4 py-6'>
            <div className='md:flex justify-between max-w-7xl mx-auto'>
                <div className='space-y-6 w-[50%]'>
                    <div>
                        <img src={WhiteLogo} alt="" />
                    </div>
                    <p>We are Nigeria’s finest gadget hub, where comfort, quality and affordability meets world.</p>
                </div>
                <div className='flex items-start gap-4 md:gap-24 my-8'>
                    <div>
                        <h4 className='text-white font-semibold'>Services</h4>
                        <ul className='space-y-3'>
                            <li className='text-sm'>Gift cards</li>
                            <li className='text-sm'>Credit and payment</li>
                            <li className='text-sm'>Service contracts</li>
                            <li className='text-sm'>Non-cash account</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold'>Customer Care</h4>
                        <ul className='space-y-3'>
                            <li className='text-sm'>Find an order</li>
                            <li className='text-sm'>Terms of delivery</li>
                            <li className='text-sm'>Return Policy</li>
                            <li className='text-sm'>Guarantee</li>
                            <li className='text-sm'>Frequently asked questions</li>
                            <li className='text-sm'>Terms and conditions</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex gap-4 max-w-7xl mx-auto'>
                <LuTwitter />
                <LuFacebook />
                <IoLogoTiktok />
                <LuInstagram />
            </div>
        </footer>
    )
}

export default Footer