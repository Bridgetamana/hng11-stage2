import { useState } from "react";
import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Creditcard from '../assets/img/CreditCard.png';
import CheckoutSteps from "../components/CheckoutSteps";

const Step3 = () => {
    const { cartItems } = useCart();
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState<{ cardHolder?: string; cardNumber?: string; expDate?: string; cvv?: string }>({});
    const navigate = useNavigate();

    const validateForm = (): boolean => {
        const newErrors: { cardHolder?: string; cardNumber?: string; expDate?: string; cvv?: string } = {};
        let isValid = true;

        if (!cardHolder) {
            newErrors.cardHolder = 'Cardholder Name is required';
            isValid = false;
        }
        if (!cardNumber) {
            newErrors.cardNumber = 'Card Number is required';
            isValid = false;
        }
        if (!expDate) {
            newErrors.expDate = 'Expiration Date is required';
            isValid = false;
        }
        if (!cvv) {
            newErrors.cvv = 'CVV is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handlePay = () => {
        if (validateForm()) {
            navigate('/checkout');
            console.log('Payment successful');
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.total, 0);
    };

    return (
        <div className='px-4 py-6 md:px-24'>
            <div>
                <div className="px-4 flex justify-between">
                    <div className="hidden md:flex">
                        <CheckoutSteps icon={LuMapPin} stepNumber={1} stepName="Address" />
                    </div>
                    <CheckoutSteps icon={LuTruck} stepNumber={2} stepName="Shipping" />
                    <CheckoutSteps icon={LuCreditCard} stepNumber={3} stepName="Payment" isActive />
                </div>

                <div className="md:flex gap-12 items-start md:max-w-4xl mx-auto md:mt-16 mt-10">
                    <div>
                        <div className="md:border border-[#EBEBEB] rounded-md p-4">
                            <h2 className="text-xl mb-6">Summary</h2>

                            <div className="space-y-4">
                                {cartItems.map(item => {
                                    const imageUrl = `https://api.timbu.cloud/images/${item.imgSrc}`;

                                    return (
                                        <div key={item.id} className="flex items-center justify-between bg-[#F6F6F6] rounded-xl py-3 px-5">
                                            <div className="flex justify-between items-center gap-4 lg:gap-8">
                                                <div className="w-16 flex-shrink-0">
                                                    <img src={imageUrl} className="w-full" alt={item.name} />
                                                </div>
                                                <span className="flex-grow">
                                                    <h3 className="text-lg text-wrap">{item.name}</h3>
                                                </span>
                                            </div>
                                            <p>₦{item.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="my-6 p-4">
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
                                <p>₦{calculateTotal()}</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#545454]">Estimated Tax</p>
                                <p>₦4999</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#545454]">Estimated shipping & Handling</p>
                                <p>₦10,000</p>
                            </div>
                            <div className="flex justify-between my-4 border-y py-2 border-[#E5E5E5]">
                                <p>Total</p>
                                <p>₦{calculateTotal() + 4999 + 10000}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="my-6 md:my-0">
                            <h3 className="mb-2 text-2xl">Payment</h3>
                            <div className="flex justify-between">
                                <p className="underline">Credit Card</p>
                                <p>PayPal</p>
                                <p>PayPal Credit</p>
                            </div>
                        </div>

                        <div className="my-10 flex justify-center">
                            <img src={Creditcard} alt="" />
                        </div>

                        <div className="">
                            <form className="space-y-4">
                                <input type="text" value={cardHolder}
                                    name="text" placeholder="Cardholder Name"
                                    onChange={(e) => setCardHolder(e.target.value)}
                                    className={`border border-[#CECECE] rounded-md py-3 pl-4 w-full outline-none ${errors.cardHolder ? 'border-red-500' : ''}`} />
                                {errors.cardHolder && <p className="text-red-500 text-sm">{errors.cardHolder}</p>}
                                <input type="text" name="text" placeholder="Card Number" value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className={`border border-[#CECECE] rounded-md py-3 pl-4 w-full outline-none ${errors.cardNumber ? 'border-red-500' : ''}`} />
                                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                                <div className="flex gap-3">
                                    <div>
                                        <input type="text" name="text" placeholder="Exp Date" value={expDate}
                                            onChange={(e) => setExpDate(e.target.value)}
                                            className={`border border-[#CECECE] rounded-md py-3 pl-4 w-full outline-none ${errors.expDate ? 'border-red-500' : ''}`} />
                                        {errors.expDate && <p className="text-red-500 text-sm">{errors.expDate}</p>}
                                    </div>
                                    <div>
                                        <input type="text" name="text" placeholder="CVV" value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className={`border border-[#CECECE] rounded-md py-3 pl-4 w-full outline-none ${errors.cvv ? 'border-red-500' : ''}`} />
                                        {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                                    </div>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" name="address" />
                                    <label htmlFor="filter-brand" className="ml-3 min-w-0 flex-1 flex items-center font-semibold gap-1">Same as billing address</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-end justify-center gap-8 mt-8">
                    <Link to='/step2'>
                        <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-10 text-center rounded-md">Back</button>
                    </Link>
                    <button className="border border-blue-primary-60 bg-blue-primary-60 text-white py-2.5 px-10 text-center rounded-md" onClick={handlePay}>Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Step3;
