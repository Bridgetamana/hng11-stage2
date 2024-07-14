import ProductCard from "./ProductCard";
import { LuSearch } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";


const ProductListing = () => {
    return (
        <div className="bg-white px-4 py-10 md:px-24">
            <div className=" lg:flex items-start gap-8 ">
                <div className="flex gap-4 lg:hidden">
                    <button className="border border-[#D4D4D4] font-medium rounded-lg text-sm p-4 text-center inline-flex items-center text-blue-primary-60 " type="button">
                        <p>Filter</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ms-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </button>
                    <button className="border border-[#D4D4D4] font-medium rounded-lg text-sm p-4 text-center inline-flex items-center text-blue-primary-60" type="button">
                        <p>By Rating </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ms-4 text-[#9F9F9F]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </button>
                </div>

                <div className="lg:w-[25%] hidden lg:block space-y-8">
                    {/* Brand filter */}
                    <div>
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg">Brand</h2>
                                <FaChevronUp />
                            </div>
                            <hr className="bg-[#B5B5B5]" />
                        </div>
                        <form >
                            <label htmlFor="search" className=' sr-only'>Search</label>
                            <div className='rounded-[8px] bg-[#F5F5F5] flex items-center pl-4 py-2 w-52 mt-3'>
                                <span className=' text-[#556177]'>
                                    <LuSearch />
                                </span>
                                <input
                                    type="search" name="search"
                                    id="search"
                                    placeholder='search' className='text-[#556177] bg-[#F5F5F5] w-full rounded-md border-0 outline-none py-2 pl-2 placeholder:[#556177]' />
                            </div>
                        </form>

                        {/* Checkbox */}
                        <div className="space-y-6 mt-4">
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Apple <p className="text-[#6C6C6C] text-sm">110</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Samsung <p className="text-[#6C6C6C] text-sm">12</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Xiaomi <p className="text-[#6C6C6C] text-sm">68</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Poco <p className="text-[#6C6C6C] text-sm">44</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">OPPO <p className="text-[#6C6C6C] text-sm">36</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Honor <p className="text-[#6C6C6C] text-sm">10</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Motorola <p className="text-[#6C6C6C] text-sm">34</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Nokia <p className="text-[#6C6C6C] text-sm">22</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Realme <p className="text-[#6C6C6C] text-sm">35</p></label>
                            </div>
                        </div>
                    </div>
                    {/* Battery Capacity */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Battery Capacity</h2>
                            <FaChevronDown/>
                        </div>
                        <hr className="bg-[#B5B5B5]" />
                    </div>

                    {/* Screen type */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Screen type</h2>
                            <FaChevronDown />
                        </div>
                        <hr className="bg-[#B5B5B5]" />
                    </div>

                    {/* Screen diagonal */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Screen diagonal</h2>
                            <FaChevronDown />
                        </div>
                        <hr className="bg-[#B5B5B5]" />
                    </div>

                    {/* Protection class */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Protection class</h2>
                            <FaChevronDown />
                        </div>
                        <hr className="bg-[#B5B5B5]" />
                    </div>

                    {/* Built-in memory */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg"> Built-in memory</h2>
                            <FaChevronDown />
                        </div>
                        <hr className="bg-[#B5B5B5]" />
                    </div>
                </div>

                <div className="lg:w-[65%]">
                    <span className="flex items-center gap-1 my-6 lg:my-0 lg:mb-6">
                        <h3 className="text-[#6C6C6C]">Selected Products:</h3>
                        <p className="text-xl">30</p>
                    </span>
                    <div>
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing