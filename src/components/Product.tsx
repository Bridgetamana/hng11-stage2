import React from 'react';
import { LuHeart } from "react-icons/lu";
import Iphone from "../assets/img/Iphone.png"

const Product = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto lg:max-w-7xl">
                <span className='flex gap-2 mb-4'>
                    <h4 className="text-blue-primary-60 border-b-2 border-blue-primary-60  pb-1 text-sm">New Arrival</h4>
                    <h4 className="text-[#778092] text-sm">BestSeller</h4>
                    <h4 className="text-[#778092] text-sm">Featured Products</h4>
                </span>

                {/* Product grid */}
                <div className='grid grid-cols-2 gap-y-6 gap-x-2 md:grid-cols-3 max-w-md mx-auto md:max-w-2xl lg:max-w-7xl lg:grid-cols-4 lg:gap-8'> 
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64'>
                        <span className='text-[#33415C] flex justify-end lg:hidden'>
                            <LuHeart />
                        </span>
                        <div className='w-24 mx-auto'>
                            <img src={Iphone} alt="Iphone 14 pro" className='w-full'/>
                        </div>
                        <div className='py-4 text-center'>
                            <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <p className='text-2xl font-semibold'>$900</p>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                                <LuHeart />
                            </span>
                            <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product