import Iphone from "../assets/img/Iphone.png";
import { MdKeyboardArrowDown } from "react-icons/md";


const ProductDetail = () => {
    return (
        <div className='bg-white px-4 py-10 md:px-24'>
            <div className="md:flex items-center gap-8 lg:gap-24">
                <div>
                    <div className="flex justify-center h-40">
                        <img src={Iphone} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[40px] font-semibold leading-[40px] my-4">Apple iphone 14 Pro Max</h4>
                        <span className="flex gap-4 items-center">
                            <p className="text-[20px]">#900000</p>
                            <p className=" text-[#A0A0A0] line-through">#1000000</p>
                        </span>
                        <div className="my-4 flex gap-2 items-center">
                            <p className="text-sm">Select color:</p>
                            <div className=" flex gap-2">
                                <span className="w-8 h-8 rounded-full bg-black"></span>
                                <span className="w-8 h-8 rounded-full bg-[#781DBC]"></span>
                                <span className="w-8 h-8 rounded-full bg-[#E10000]"></span>
                                <span className="w-8 h-8 rounded-full bg-[#E1B000]"></span>
                                <span className="w-8 h-8 rounded-full bg-[#E8E8E8]"></span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="rounded-lg p-2 border border-[#AAB7C6] text-[#AAB7C6]">
                                128GB
                            </span>
                            <span className="rounded-lg p-2 border border-[#AAB7C6] text-[#AAB7C6]">
                                256GB
                            </span>
                            <span className="rounded-lg p-2 border border-[#AAB7C6] text-[#AAB7C6]">
                                512GB
                            </span>
                            <span className="rounded-lg p-2 w-16 text-center border border-blue-primary-60 text-blue-primary-60">
                                1TB
                            </span>
                        </div>
                        <div className="mt-8 mb-4 space-y-4">
                            <button className="w-full py-4 border border-blue-primary-60 rounded">Add to Wishlist</button>
                            <button className="w-full py-4 border border-blue-primary-60 rounded text-white bg-blue-primary-60">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="border border-[#D6D9DE] p-4 rounded-md">
                        <div className="my-4">
                            <h2 className="text-2xl mb-4">Details</h2>
                            <p className="text-[#9D9D9D]">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
                        </div>
                        <div>
                            <h3 className="text-2xl">Screen</h3>
                            <div className="mt-2 space-y-6">
                                <span className="flex justify-between border-b border-[#CDCDCD] pb-2">
                                    <p>Screen diagonal</p>
                                    <p>6.7"</p>
                                </span>
                                <span className="flex justify-between border-b border-[#CDCDCD] pb-2">
                                    <p>The Screen resolution</p>
                                    <p>2796x1290</p>
                                </span>
                                <span className="flex justify-between border-b border-[#CDCDCD] pb-2">
                                    <p>The Screen refresh rate</p>
                                    <p>120 Hz</p>
                                </span>
                                <span className="flex justify-between border-b border-[#CDCDCD] pb-2">
                                    <p>The Pixel density</p>
                                    <p>460 ppi</p>
                                </span>
                                <span className="flex justify-between border-b border-[#CDCDCD] pb-2">
                                    <p> Screen type</p>
                                    <p>OLED</p>
                                </span>
                            </div>
                            <div className="flex justify-center">
                                <button className="rounded-md border py-3 px-10 border-[#33415C] text-[#33415C] mt-6 flex items-center gap-3">View more
                                    <MdKeyboardArrowDown className="text-xl"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;