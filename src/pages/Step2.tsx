import { useState } from "react";
import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";


const Step2 = () => {

    const [selectedDate, setSelectedDate] = useState<string>("");


    return (
        <div className="px-4 py-6 md:px-24">
            <div className="px-4">
                <div className="flex justify-between">
                    <div className="hidden md:flex">
                        <CheckoutSteps icon={LuMapPin} stepNumber={1} stepName="Address" />
                    </div>
                    <CheckoutSteps icon={LuTruck} stepNumber={2} stepName="Shipping" isActive />
                    <CheckoutSteps icon={LuCreditCard} stepNumber={3} stepName="Payment" />
                </div>
                <div className="my-10 mx-auto">
                    <h3 className="text-xl text-[#17183B] mb-4">Shipping payment Address</h3>

                    {/* Shipping address */}
                    <div className="space-y-6 mb-12 ">

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 rounded-lg">
                            <div className="flex justify-center">
                                <div>
                                    <span className="flex justify-center p-1.5 rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-blue-primary-60 rounded-full"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="text-[#17183B] flex flex-col justify-between w-full md:flex-row">
                                <div className="flex justify-between items-center mb-4 w-full md:flex-row-reverse md:justify-end md:gap-4">
                                    <p className="text-wrap">Regular Shipment</p>
                                    <p>Free</p>
                                </div>

                                <p className="w-28">17, Oct 2024</p>
                            </div>
                        </div>

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 rounded-lg items-center">
                            <div className="flex justify-center">
                                <div>
                                    <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                    </span>
                                    
                                </div>
                            </div>

                            <div className="text-[#99A0AD] flex flex-col justify-between w-full md:flex-row">
                                <div className="flex justify-between items-center mb-4 w-full md:flex-row-reverse md:justify-end md:gap-4">
                                    <p className="text-wrap">
                                        Regular Shipment
                                    </p>
                                    <p className="">
                                        Free
                                    </p>
                                </div>

                                <span className="w-28">
                                    <p>17, Oct 2024</p>
                                </span>
                            </div>

                        </div>

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 rounded-lg ">
                            <div className="flex justify-center">
                                <div>
                                    <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="text-[#99A0AD] flex flex-col justify-between w-full md:flex-row">
                                <div className="flex justify-between mb-4 w-full md:flex-row-reverse md:justify-end md:gap-4">
                                    <p className="text-wrap">
                                        Scheduled Shipment
                                    </p>
                                    <p className="">
                                        Null
                                    </p>
                                </div>

                                <span className="border border-[#99A0AD] py-2 px-3 flex justify-between rounded-md w-36 md:border-0 ">
                                    <select
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className=" rounded-md outline-none"
                                    >
                                        <option value="" disabled>Select Date</option>
                                        <option value="2024-10-17">17, Oct 2024</option>
                                        <option value="2024-10-18">18, Oct 2024</option>
                                        <option value="2024-10-19">19, Oct 2024</option>
                                        <option value="2024-10-20">20, Oct 2024</option>
                                        <option value="2024-10-21">19, Oct 2024</option>
                                    </select>
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="flex justify-between max-w-sm mx-auto md:justify-end gap-4 md:mr-0">
                        <Link to='/step1'>
                            <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-14 text-center rounded-md">Back</button>
                        </Link>
                        <Link to='/step3'>
                            <button className="border border-blue-primary-60  bg-blue-primary-60 text-white py-2.5 px-10 text-center rounded-md">Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step2