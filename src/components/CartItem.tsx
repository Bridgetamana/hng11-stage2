import { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

const Modal = ({ isVisible, onConfirm, onCancel }: { isVisible: boolean, onConfirm: () => void, onCancel: () => void }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg">
                <div className='flex justify-end mb-2'>
                    <button className=' hover:bg-[#F6F6F6] hover:text-black text-[#99A0AD] rounded-lg text-xl py-1 px-2.5 items-center ' onClick={onCancel}>x</button>
                </div>
                <p>Are you sure you want to delete this item?
                </p>
                <div className="flex justify-end mt-4">
                    <button className="mr-2 py-1.5 px-3 text-sm font-medium text-center bg-[#F6F6F6] rounded" onClick={onCancel}>No</button>
                    <button className="py-1.3 px-4 text-sm font-medium text-center text-white bg-red-600 hover:bg-red-700 rounded" onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </div>
    );
};

const CartItem = ({ id, imgSrc, name, price, onRemove, onQuantityChange }: { id: string, imgSrc: string, name: string, price: number, onRemove: (id: string) => void, onQuantityChange: (id: string, quantity: number, total: number) => void }) => {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            const newTotal = newQuantity * price;
            setTotal(newTotal);
            onQuantityChange(id, newQuantity, newTotal);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                const newTotal = newQuantity * price;
                setTotal(newTotal);
                onQuantityChange(id, newQuantity, newTotal);
                return newQuantity;
            });
        } else {
            setIsModalVisible(true);
        }
    };

    const handleRemove = () => {
        setIsModalVisible(true);
    };

    const handleConfirmRemove = () => {
        setIsModalVisible(false);
        onRemove(id);
    };

    const handleCancelRemove = () => {
        setIsModalVisible(false);
    };


    return (
        
        <div>
            <Modal isVisible={isModalVisible} onConfirm={handleConfirmRemove} onCancel={handleCancelRemove} />

            {/* mobile cart */}
            <div className="flex md:hidden items-center justify-between border-y border-[#E5E5E5] py-4">
                <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                    <div className="bg-[#F7F8FA] w-24 md:w-48 flex-shrink-0">
                        <img src={imgSrc} className="w-full" alt={name} />
                    </div>
                    <span className="flex-grow">
                        <h3 className="text-lg text-wrap">{name}</h3>
                        <button className="text-[#001845] border-b-2 border-[#001845]" onClick={handleRemove}>Remove</button>
                    </span>
                </div>
                <span className="">
                    <span>
                        <p>₦{total}</p>
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
                        <p>₦{price}</p>
                    </span>
                    <div className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 p-2">
                        <button className="text-xl" onClick={handleIncrement}><MdAdd /></button>
                        <p>{quantity}</p>
                        <button className="text-xl" onClick={handleDecrement}><LuMinus /></button>
                    </div>
                    <span>₦{total}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
