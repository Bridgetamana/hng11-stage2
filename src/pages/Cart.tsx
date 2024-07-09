import { Link } from "react-router-dom";
import Oraimo from '../assets/img/oraimo-airpods.png'

const Cart = () => {
    return (
        <div className="px-4 py-6">
            <div className="lg:text-center">
                <h3 className="text-2xl hidden lg:flex justify-center lg:mb-4">Your cart items</h3>
                <Link to='/'>
                    <a className="text-[#001845] border-b-2 border-[#001845]">
                        Back to shopping
                    </a>
                </Link>
            </div>

            <div className="my-6">
                <h3 className="text-2xl">Your cart items</h3>
                <span className="flex justify-between items-center my-4 lg:hidden">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
               </span>

                <div>
                    {/* Mobile cart */}
                    <div className="flex lg:hidden justify-between items-center border-y border-[#E5E5E5] py-3">
                        <div className="flex justify-between items-center gap-4 lg:gap-8">
                            <div className="bg-[#F7F8FA]">
                                <img src={Oraimo} className="w-36" alt="" />
                            </div>
                            <span>
                                <h3 className="text-xl text-wrap">Oraimo Freepods</h3>
                                <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                            </span>
                        </div>
                        <span className="flex">
                            <span>
                                <p className="text-wrap">#1240000</p>
                            </span>
                            <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                                <p className="text-xl">+</p>
                                <p >1</p>
                                <p className="text-xl">-</p>
                            </button>
                        </span>
                        <span className="hidden lg:flex">#1,240,000</span>
                    </div>

                    


                    {/* <div className="text-center my-3">
                        <h2 className="text-xl">Sub-total  #124000</h2>
                        <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                    </div>
                    <div className="px-3 py-10 border border-[#9F9F9F] rounded-xl">
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
                            <button className="bg-blue-primary-60 text-white py-2.5 text-center w-full rounded-xl mt-6">Checkout</button>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cart