import WhiteLogo from "../assets/img/logo-white.png";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className='bg-[#002855] text-[#CFCFCF] px-4 py-6 md:px-24'>
            <div className='md:flex justify-between'>
                <div className='space-y-6 md:w-1/2'>
                    <div className="w-32">
                        <img src={WhiteLogo} alt="Gadgetry Logo" className="w-full" />
                    </div>
                    <p className="pl-2">We are Nigeria’s finest gadget hub, where comfort, quality and affordability meets world.</p>
                </div>
                <div className='grid grid-cols-2 gap-12 my-8 pl-2 md:pl-0 md:w-1/2'>
                    <div>
                        <h4 className='text-white font-semibold'>Services</h4>
                        <ul className='space-y-3 mt-2'>
                            <li className='text-sm cursor-pointer hover:underline'>Gift cards</li>
                            <li className='text-sm cursor-pointer hover:underline'>Credit and payment</li>
                            <li className='text-sm cursor-pointer hover:underline'>Service contracts</li>
                            <li className='text-sm cursor-pointer hover:underline'>Non-cash account</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold'>Customer Care</h4>
                        <ul className='space-y-3 mt-2'>
                            <li className='text-sm cursor-pointer hover:underline'>Find an order</li>
                            <li className='text-sm cursor-pointer hover:underline'>Terms of delivery</li>
                            <li className='text-sm cursor-pointer hover:underline'>Return Policy</li>
                            <li className='text-sm cursor-pointer hover:underline'>Guarantee</li>
                            <li className='text-sm cursor-pointer hover:underline'>Frequently asked questions</li>
                            <li className='text-sm cursor-pointer hover:underline'>Terms and conditions</li>
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