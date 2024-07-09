import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";
import { Link } from "react-router-dom";
import Oraimo from '../assets/img/oraimo-airpods.png';
import Samsung from '../assets/img/samsung-flip.png';
import Wristband from '../assets/img/apple-wristband.png';
import Creditcard from '../assets/img/CreditCard.png'

const Step3 = () => {
    return (
        <div className='px-4 py-6 md:px-24'>
            <div>
                <div className="my-8 flex justify-between text-[#99A0AD]">
                    <div className="md:flex items-center gap-2 hidden ">
                        <LuMapPin />
                        <span>
                            <p>Step 1</p>
                            <p className="text-lg">Address</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuTruck />
                        <span>
                            <p>Step 2</p>
                            <p className="text-lg">Shipping</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#002855]">
                        <LuCreditCard />
                        <span>
                            <p>Step 3</p>
                            <p className="text-lg">Payment</p>
                        </span>
                    </div>
                </div>

                <div className="md:flex gap-12 items-start md:max-w-4xl mx-auto">
                    <div>
                        <div className="md:border border-[#EBEBEB] rounded-md p-4">
                            <h2 className="text-xl mb-6">Summary</h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-[#F6F6F6] rounded-xl py-3 px-5">
                                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                                        <div className="w-16 flex-shrink-0">
                                            <img src={Samsung} className="w-full" alt="" />
                                        </div>
                                        <span className="flex-grow">
                                            <h3 className="text-lg text-wrap">Samsung Galaxy Z Flip </h3>
                                        </span>
                                    </div>
                                    <p>#1,368,000</p>
                                </div>
                                <div className="flex items-center justify-between bg-[#F6F6F6] rounded-xl py-3 px-5">
                                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                                        <div className="w-20 flex-shrink-0">
                                            <img src={Wristband} className="w-full" alt="" />
                                        </div>
                                        <span className="flex-grow">
                                            <h3 className="text-lg text-wrap">Apple Arm Band</h3>
                                        </span>
                                    </div>
                                    <p>#240,000</p>
                                </div>
                                <div className="flex items-center justify-between bg-[#F6F6F6] rounded-xl py-3 px-5">
                                    <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                                        <div className="w-20 flex-shrink-0">
                                            <img src={Oraimo} className="w-full" alt="" />
                                        </div>
                                        <span className="flex-grow">
                                            <h3 className="text-lg text-wrap">Oraimo Freepods</h3>
                                        </span>
                                    </div>
                                    <p>#30000</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-6">
                            <div className="space-y-4">
                                <h2 className="text-[#545454] text-sm">Address</h2>
                                <h3>1131 Random Street, Somewhereville, LG 40522</h3>
                            </div>
                            <div className="my-4">
                                <p className="text-[#545454] text-sm">Shipment method</p>
                                <h3>Free</h3>
                            </div>
                            <div className="flex justify-between items-center my-4">
                                <p>Subtotal</p>
                                <p>#1,163,000</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#545454">Estimated Tax</p>
                                <p>#40000</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#545454]">Estimated shipping & Handling</p>
                                <p>#10000</p>
                            </div>
                            <div className="flex justify-between my-4 border-y py-2 border-[#E5E5E5]">
                                <p>Total</p>
                                <p>#1,652,000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="my-6 md:my-0">
                            <h3 className="mb-2 text-2xl">Payment</h3>
                            <div className="flex justify-between">
                                <p className="underline">Credit Cart</p>
                                <p>PayPal</p>
                                <p>PayPal Credit</p>
                            </div>
                        </div>

                        <div className="my-10 flex justify-center">
                            <img src={Creditcard} alt="" />
                        </div>

                        <div className="">
                            <form className="space-y-4">
                                <input type="text" name="text" placeholder="Cardholder Name" className="border border-[#CECECE] text-[#CECECE] rounded-md py-3 pl-4 w-full outline-none" />
                                <input type="text" name="text" placeholder="Card Number" className="border border-[#CECECE] text-[#CECECE] rounded-md py-3 pl-4 w-full outline-none" />
                                <div className="flex gap-3">
                                    <input type="text" name="text" placeholder="Exp Date" className="border border-[#CECECE] text-[#CECECE] rounded-md py-3 pl-4 w-full outline-none" />
                                    <input type="text" name="text" placeholder="CVV" className="border border-[#CECECE] text-[#CECECE] rounded-md py-3 pl-4 w-full outline-none" />
                                </div>
                                <div className="flex">

                                    <input type="checkbox" name="address" />
                                    <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Same as billing address
                                    </label>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                    <div className="flex md:justify-end justify-center gap-8 mt-8">
                        <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-14 text-center rounded-md">Back</button>
                        <Link to='/checkout'>
                            <button className="bg-blue-primary-60 text-white py-2.5 px-14 text-center rounded-md">Pay</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Step3