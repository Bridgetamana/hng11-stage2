import WhiteLogo from "../assets/img/logo-white.png";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className='bg-[#002855] text-[#CFCFCF] px-4 py-6 md:px-24'>
            <div className='md:flex justify-between'>
                <div className='space-y-6 md:w-1/2'>
                    <div>
                        <img src={WhiteLogo} alt="" />
                    </div>
                    <p className="pl-4 text-center md:text-start">We are Nigeria’s finest gadget hub, where comfort, quality and affordability meets world.</p>
                </div>
                <div className='grid grid-cols-2 gap-12 my-8 pl-4 md:pl-0 md:w-1/2'>
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
            <div className='flex gap-4 text-white pl-4'>
                <LuTwitter />
                <LuFacebook />
                <IoLogoTiktok />
                <LuInstagram />
            </div>
        </footer>
    )
}

export default Footer