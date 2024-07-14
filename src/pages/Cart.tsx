import { useState } from 'react';
import { Link } from "react-router-dom";
import Oraimo from '../assets/img/oraimo-airpods.png';
import Samsung from '../assets/img/samsung-flip.png';
import Wristband from '../assets/img/apple-wristband.png';
import CartItem from "../components/CartItem";

const Cart = () => {
    const initialCartItems = [
        { id: 1, imgSrc: Oraimo, name: "Oraimo Freepods", price: 30000, total: 30000 },
        { id: 2, imgSrc: Samsung, name: "Samsung Galaxy Z Flip Ultra Max", price: 1368000, total: 1368000 },
        { id: 3, imgSrc: Wristband, name: "Apple Arm Band", price: 240000, total: 240000 }
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (itemId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        alert('Item has been removed');
    };

    return (
        <div className="px-4 py-6 md:px-24">
            <div className="md:text-center flex flex-col md:flex-col-reverse gap-y-6 md:mt-20 ">
                <Link to='/'>
                    <a className="text-[#001845] border-b-2 border-[#001845] ml-3">
                        Back to shopping
                    </a>
                </Link>
                <h3 className="text-2xl lg:flex justify-center">Your cart items</h3>
            </div>

            {/* Mobile cart view */}
            <div className="my-6 md:hidden">
                <span className="flex justify-between items-center my-4 lg:hidden">
                    <p>Product</p>
                    <p>Price</p>
                </span>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        price={item.price}
                        onRemove={handleRemoveItem}
                    />
                ))}
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
                                    type="code"
                                    name="code"
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
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        price={item.price}
                        onRemove={handleRemoveItem}
                    />
                ))}
                {/* Checkout form */}
                <div className="flex justify-between items-center my-12">
                    <form className="w-1/3">
                        <label htmlFor="code" className='text-[#545454] lg:text-xl'>Discount code / Promo code</label>
                        <input
                            type="code"
                            name="code"
                            id="code"
                            placeholder='code' className='text-[#556177] w-full rounded-md border border-[#9F9F9F] outline-none py-2 pl-2' />
                    </form>
                    <div className=" w-1/3">
                        <h2 className="text-xl">Sub-total  #1,638,000</h2>
                        <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                    </div>
                    <Link to='/step1'>
                        <button className="bg-blue-primary-60 text-white py-4 md:px-8 lg:px-14 text-center w-full rounded-xl mt-6">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
