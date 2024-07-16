import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../components/CartContext';
import CartItem from "../components/CartItem";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.total, 0);
        setSubtotal(total);
    }, [cartItems]);

    return (
        <div className="px-4 py-6 md:px-24">
           

            {cartItems.length === 0 ? (
                <div className="text-center my-8">
                    <h2 className="text-xl">No items in cart</h2>
                    <Link to='/' className="text-blue-primary-60 underline">Back to shopping</Link>
                </div>
            ) : (
                <>
                        <div className="md:text-center flex flex-col md:flex-col-reverse gap-y-6 md:mt-20 ">
                            <Link to='/'>
                                <span className="text-[#001845] border-b-2 border-[#001845] ml-3">
                                    Back to shopping
                                </span>
                            </Link>
                            <h3 className="text-2xl lg:flex justify-center">Your cart items</h3>
                        </div>
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
                                onRemove={removeFromCart}
                                onQuantityChange={updateQuantity}
                            />
                        ))}
                        <div className="text-center my-8">
                            <h2 className="text-xl">Sub-total ₦{subtotal}</h2>
                            <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                        </div>
                        <div className="px-3 py-10 border border-[#EBEBEB] rounded-xl">
                            <form>
                                <div>
                                    <label htmlFor="code" className='text-[#545454]'>Discount code / Promo code</label>
                                    <input
                                        type="code"
                                        name="code"
                                        id="code"
                                        placeholder='code' className='text-[#556177] w-full rounded-md border border-[#9F9F9F] outline-none py-2 pl-2' />
                                </div>
                                <Link to='/step1'>
                                    <button className="bg-blue-primary-60 text-white py-2.5 text-center w-full rounded-xl mt-6">Checkout</button>
                                </Link>
                            </form>
                        </div>
                    </div>

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
                                onRemove={removeFromCart}
                                onQuantityChange={updateQuantity}
                            />
                        ))}
                        <div className="flex justify-between items-center my-12">
                            <form className="w-1/3">
                                <label htmlFor="code" className='text-[#545454] lg:text-xl'>Discount code / Promo code</label>
                                <input
                                    type="code"
                                    name="code"
                                    id="code"
                                    placeholder='code' className='text-[#556177] w-full rounded-md border border-[#9F9F9F] outline-none py-2 pl-2' />
                            </form>
                            <div className="w-1/3">
                                <h2 className="text-xl">Sub-total ₦{subtotal}</h2>
                                <p className="text-[#9E9E9E]">Tax and shipping cost will be calculated later</p>
                            </div>
                            <Link to='/step1'>
                                <button className="bg-blue-primary-60 text-white py-4 md:px-8 lg:px-14 text-center w-full rounded-xl mt-6">Checkout</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
