import Iwatch from "../assets/img/iwatch.png";
import Airpods from "../assets/img/airpods.png";
import Oraimo from "../assets/img/oraimo-airpods.png";
import SamsungFlip from "../assets/img/samsung-flip.png";
import Macbook2 from "../assets/img/Macbook-2.png";

const ProductFeature = () => {
    return (
        <div className="bg-white">
            <div className='lg:flex lg:flex-wrap lg:justify-center'>

                {/* Product 1 */}
                <div className='p-4 max-w-[360px] mx-auto lg:flex-1 lg:max-w-none'>
                    <div className='relative h-72 my-24'>
                        <img src={Airpods} alt="" className='absolute -right-2 rotate-12' />
                        <img src={Iwatch} alt="" className='absolute top-12 -right-2 rotate-4' />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[33px] leading-[45px]">Popular Products</h1>
                        <p className="mt-6 text-[#778092]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <div className="mt-8 flex justify-center md:justify-start mb-12">
                            <button className="rounded-sm border border-[#000C23] px-10 py-2 text-base text-[#000C23] font-semibold">Shop Now</button>
                        </div>
                        <div className='flex gap-2 justify-center lg:hidden'>
                            <span className='w-2 h-2 bg-blue-primary-60 flex rounded-full'></span>
                            <span className='w-2 h-2 bg-blue-primary-60/15 flex rounded-full'></span>
                            <span className='w-2 h-2 bg-blue-primary-60/15 flex rounded-full'></span>
                            <span className='w-2 h-2 bg-blue-primary-60/15 flex rounded-full'></span>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className='p-4 bg-[#F9F9F9] mx-auto lg:flex-1 lg:max-w-none'>
                    <div className='lg:w-[360px] my-14 mx-auto'>
                        <img src={Oraimo} alt="" />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[33px] leading-[45px]">Oraimo Freepods</h1>
                        <p className="mt-6 text-[#778092]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <div className="mt-8 flex justify-center md:justify-start mb-12">
                            <button className="rounded-sm border border-[#000C23] px-10 py-2 text-base text-[#000C23] font-semibold">Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className='p-4 bg-[#EAEAEA] mx-auto lg:flex-1 lg:max-w-none'>
                    <div className='lg:w-[360px] mx-auto'>
                        <img src={SamsungFlip} alt="" />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[33px] leading-[45px]">Samsung Z Flip</h1>
                        <p className="mt-6 text-[#778092]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <div className="mt-8 flex justify-center md:justify-start mb-12">
                            <button className="rounded-sm border border-[#000C23] px-10 py-2 text-base text-[#000C23] font-semibold">Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* Product 4 */}
                <div className='p-4 bg-[#2A3E64] mx-auto lg:flex-1 lg:max-w-none'>
                    <div className='lg:w-[360px] my-14 mx-auto'>
                        <img src={Macbook2} alt="" />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[33px] leading-[45px] text-white">Macbook Pro</h1>
                        <p className="mt-6 text-[#D6D9DE]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <div className="mt-8 flex justify-center md:justify-start mb-12">
                            <button className="rounded-sm border border-white px-10 py-2 text-base text-white font-semibold">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeature;
