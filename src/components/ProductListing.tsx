import ProductCard from "./ProductCard";
import { LuSearch } from "react-icons/lu";

const ProductListing = () => {
    return (
        <div className="bg-white">
            <div className="px-4 py-6 lg:flex items-start gap-8 w-full max-w-7xl mx-auto">
                <div className="flex gap-6 lg:hidden">
                    <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="border border-[#D4D4D4] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center text-blue-primary-60 " type="button">Filter <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ms-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </button>
                    <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="border border-[#D4D4D4] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center text-blue-primary-60" type="button">By Rating <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ms-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </button>


                </div>

                <div className="lg:w-[20%] hidden lg:block space-y-8">
                {/* Brand filter */}
                    <div>
                        <h2 className="text-lg">Brand</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
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
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Apple <p className="text-[#6C6C6C] text-sm">110</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Samsung <p className="text-[#6C6C6C] text-sm">12</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Xiaomi <p className="text-[#6C6C6C] text-sm">68</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Poco <p className="text-[#6C6C6C] text-sm">44</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">OPPO <p className="text-[#6C6C6C] text-sm">36</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Honor <p className="text-[#6C6C6C] text-sm">10</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Motorola <p className="text-[#6C6C6C] text-sm">34</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Nokia <p className="text-[#6C6C6C] text-sm">22</p></label>
                            </div>
                            <div className="flex items-center">
                                <input id="filter-brand" name="color[]" value="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-black" />
                                <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Realme <p className="text-[#6C6C6C] text-sm">35</p></label>
                            </div>
                        </div>
                    </div>
                    {/* Battery Capacity */}
                    <div>
                        <h2 className="text-lg">Battery Capacity</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
                    </div>

                    {/* Screen type */}
                    <div>
                        <h2 className="text-lg">Screen type</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
                    </div>

                    {/* Screen diagonal */}
                    <div>
                        <h2 className="text-lg">Screen diagonal</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
                    </div>

                    {/* Protection class */}
                    <div>
                        <h2 className="text-lg">Protection class</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
                    </div>

                    {/* Built-in memory */}
                    <div>
                        <h2 className="text-lg">Built-in memory</h2>
                        <hr className="w-36 bg-[#B5B5B5]" />
                    </div>
                </div>

                <div className="lg:w-[75%]">
                    <span className="flex items-center gap-1 my-6 lg:my-0 lg:mb-6">
                        <h3 className="text-[#6C6C6C]">Selected Products:</h3>
                        <p className="text-xl">146</p>
                    </span>
                    <div>
                        <ProductCard />
                    </div>
                    <nav className="my-6 flex justify-center">
                        <ul className="flex items-center space-x-2 h-8 text-sm">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 text-blue-primary-60">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-8 bg-blue-primary-60 text-white rounded-md">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-primary-60 bg-[#F6F6F6] rounded-md">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 text-blue-primary-60 bg-[#F6F6F6] rounded-md">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-8 text-blue-primary-60 text-2xl">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-primary-60 bg-[#F6F6F6] rounded-md">12</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-primary-60">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ProductListing