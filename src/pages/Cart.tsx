import { Link } from "react-router-dom";
import Oraimo from '../assets/img/oraimo-airpods.png';
import Samsung from '../assets/img/samsung-flip.png';
import Wristband from '../assets/img/apple-wristband.png';

const Cart = () => {
    return (
        <div className="px-4 py-6 md:px-24">
            <div className="md:text-center flex flex-col md:flex-col-reverse gap-y-6 md:mt-20 ">
                <Link to='/'>
                    <a className="text-[#001845] border-b-2 border-[#001845] ml-3">
                        Back to shopping
                    </a>
                </Link>
                <h3 className="text-2xl  lg:flex justify-center">Your cart items</h3>
            </div>

            {/* Mobile cart view */}

            <div className="my-6 md:hidden">
                <span className="flex justify-between items-center my-4 lg:hidden">
                    <p>Product</p>
                    <p>Price</p>
                </span>

                <div className="flex items-center justify-between border-y border-[#E5E5E5] py-4">
                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                        <div className="bg-[#F7F8FA] w-36 flex-shrink-0">
                            <img src={Oraimo} className="w-full" alt="" />
                        </div>
                        <span className="flex-grow">
                            <h3 className="text-xl text-wrap">Oraimo Freepods</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <span className="">
                        <span>
                            <p>#30000</p>
                        </span>
                        <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                            <p className="text-xl">+</p>
                            <p >1</p>
                            <p className="text-xl">-</p>
                        </button>
                    </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#E5E5E5] py-4">
                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                        <div className="bg-[#F7F8FA] w-36 flex-shrink-0">
                            <img src={Samsung} className="w-full" alt="" />
                        </div>
                        <span className="flex-grow">
                            <h3 className="text-xl text-wrap">Samsung Galaxy Z Flip Ultra Max</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <span className="">
                        <span>
                            <p className="text-wrap">#1,368,000</p>
                        </span>
                        <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                            <p className="text-xl">+</p>
                            <p >1</p>
                            <p className="text-xl">-</p>
                        </button>
                    </span>


                </div>


                <div className="flex items-center justify-between border-b border-[#E5E5E5] py-4">
                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                        <div className="bg-[#F7F8FA]">
                            <img src={Wristband} className="w-36" alt="" />
                        </div>
                        <span>
                            <h3 className="text-xl text-wrap">Apple Arm Band</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <span className="">
                        <span>
                            <p className="text-wrap">#240,000</p>
                        </span>
                        <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                            <p className="text-xl">+</p>
                            <p >1</p>
                            <p className="text-xl">-</p>
                        </button>
                    </span>
                </div>

                {/* checkout form */}
                <div className="text-center my-8">
                    <h2 className="text-xl">Sub-total  #1,638,000</h2>
                    <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                </div>
                <div className="px-3 py-10 border border-[#EBEBEB] rounded-xl">
                    <form>
                        <div className="">
                            <label htmlFor="code" className='text-[#545454]'>Discount code / Promo code</label>
                            <div className='rounded-[8px] flex items-center py-2'>
                                <input
                                    type="code" name="code"
                                    id="code"
                                    placeholder='code' className='text-[#556177] w-full rounded-md border border-[#9F9F9F] outline-none py-2 pl-2' />
                            </div>
                        </div>
                        <Link to='/step1'>
                        
                        <button className="bg-blue-primary-60 text-white py-2.5 text-center w-full rounded-xl mt-6">Checkout</button>
                        </Link>
                    </form>
                </div>
            </div>

            {/* Desktop cart view */}
            <div className="hidden md:block my-12">
                <div className="grid grid-cols-2">
                    <p>Product</p>
                    <div className="flex justify-between">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>

                    </div>
                </div>

                <div className=" justify-between items-center border-y border-[#E5E5E5] py-3 grid grid-cols-2">
                    <div className="flex  items-center gap-4 lg:gap-8">
                        <div className="bg-[#F7F8FA]">
                            <img src={Oraimo} className="w-36" alt="" />
                        </div>
                        <span>
                            <h3 className="text-xl text-wrap">Oraimo Freepods</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <p>#30000</p>
                        </span>
                        <div>
                            <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                                <p className="text-xl">+</p>
                                <p >1</p>
                                <p className="text-xl">-</p>
                            </button>
                        </div>
                        <span className="">#1,240,000</span>
                    </div>
                </div>

                <div className=" justify-between items-center border-y border-[#E5E5E5] py-3 grid grid-cols-2">
                    <div className="flex  items-center gap-4 lg:gap-8">
                        <div className="bg-[#F7F8FA]">
                            <img src={Samsung} className="w-36" alt="" />
                        </div>
                        <span>
                            <h3 className="text-xl text-wrap">Samsung Galaxy Z Flip Ultra Max</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <p>#1,368,000</p>
                        </span>
                        <div>
                            <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                                <p className="text-xl">+</p>
                                <p >1</p>
                                <p className="text-xl">-</p>
                            </button>
                        </div>
                        <span className="">#1,368,000</span>
                    </div>
                </div>

                <div className=" justify-between items-center border-y border-[#E5E5E5] py-3 grid grid-cols-2">
                    <div className="flex  items-center gap-4 lg:gap-8">
                        <div className="bg-[#F7F8FA]">
                            <img src={Wristband} className="w-36" alt="" />
                        </div>
                        <span>
                            <h3 className="text-xl text-wrap">Apple Arm Band</h3>
                            <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <p>#240,000</p>
                        </span>
                        <div>
                            <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                                <p className="text-xl">+</p>
                                <p >1</p>
                                <p className="text-xl">-</p>
                            </button>
                        </div>
                        <span className="">#240,000</span>
                    </div>
                </div>
                
                {/* Checkout from */}

                <div className="flex justify-between items-center my-12">
                    <form className="w-1/3">
                        <label htmlFor="code" className='text-[#545454] lg:text-xl'>Discount code / Promo code</label>
                        <input
                            type="code" name="code"
                            id="code"
                            placeholder='code' className='text-[#556177] w-full rounded-md border border-[#9F9F9F] outline-none py-2 pl-2' />
                    </form>
                    <div className=" w-1/3">
                        <h2 className="text-xl">Sub-total  #1,638,000</h2>
                        <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                    </div>
                    <Link to='/step1'>
                        <button className="bg-blue-primary-60 text-white py-4 md:px-8  lg:px-14 text-center w-full rounded-xl mt-6">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart