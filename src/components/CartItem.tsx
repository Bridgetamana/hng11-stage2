import { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

const CartItem = ({ imgSrc, name, price, total: initialTotal }: { imgSrc: string, name: string, price: number, total?: number}) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(initialTotal || price);

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setTotal(newQuantity * price);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                setTotal(newQuantity * price);
                return newQuantity;
            });
        } else {
            handleRemove();
        }
    };

    const handleRemove = () => {
        if (window.confirm('Do you want to remove this item?')) {
            console.log('poof!, it is gone')
        }
    };

    return (
        <div>
            {/* mobile cart */}
            <div className="flex md:hidden items-center justify-between border-y border-[#E5E5E5] py-4">
                <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                    <div className="bg-[#F7F8FA] w-36 flex-shrink-0">
                        <img src={imgSrc} className="w-full" alt={name} />
                    </div>
                    <span className="flex-grow">
                        <h3 className="text-xl text-wrap">{name}</h3>
                        <button className="text-[#001845] border-b-2 border-[#001845]" onClick={handleRemove}>Remove</button>
                    </span>
                </div>
                <span className="">
                    <span>
                        <p>#{price}</p>
                    </span>
                    <div className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 p-1">
                        <button className="text-lg" onClick={handleIncrement}><MdAdd /></button>
                        <p>{quantity}</p>
                        <button className="text-lg" onClick={handleDecrement}><LuMinus /></button>
                    </div>
                </span>
            </div>

            {/* desktop cart */}
            <div className="hidden justify-between items-center border-y border-[#E5E5E5] py-3 md:grid grid-cols-2">
                <div className="flex items-center gap-4 lg:gap-8">
                    <div className="bg-[#F7F8FA]">
                        <img src={imgSrc} className="w-36" alt={name} />
                    </div>
                    <span>
                        <h3 className="text-xl text-wrap">{name}</h3>
                        <button className="text-[#001845] border-b-2 border-[#001845]" onClick={handleRemove}>Remove</button>
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <p>#{price}</p>
                    </span>
                    <div className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 p-2">
                        <button className="text-xl" onClick={handleIncrement}><MdAdd /></button>
                        <p>{quantity}</p>
                        <button className="text-xl" onClick={handleDecrement}><LuMinus /></button>
                    </div>
                    <span>#{total}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
