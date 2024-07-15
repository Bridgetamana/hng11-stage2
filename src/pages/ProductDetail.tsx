import Headphone from "../assets/img/product_havit_wireless_headphone.jpg";


const ProductDetail = () => {
    return (
        <div className='bg-white px-4 py-10 md:px-24'>
            <div className="md:flex items-center gap-8 lg:gap-24">
                <div className="md:w-1/2">
                    <div className="flex justify-center h-40">
                        <img src={Headphone} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[40px] font-semibold leading-[40px] my-4">Havit Wireless Headphone</h4>
                        <span className="flex gap-4 items-center">
                            <p className="text-[20px]"> ₦22500</p>
                            <p className=" text-[#A0A0A0] line-through"> ₦30000</p>
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
                        <div className="mt-8 mb-4 space-y-4 md:flex gap-4 md:space-y-0">
                            <button className="w-full py-4 border md:py-1 border-blue-primary-60 rounded">Add to Wishlist</button>
                            <button className="w-full py-4 border md:py-1  border-blue-primary-60 rounded text-white bg-blue-primary-60">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:w-1/2">
                    <div className="border border-[#D6D9DE] p-4 rounded-md">
                        <div className="my-4">
                            <h2 className="text-2xl mb-4">Details</h2>
                            <p className="text-[#9D9D9D]">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;