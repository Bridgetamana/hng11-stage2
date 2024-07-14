import { useState } from 'react';

interface AddressModalProps {
    onClose: () => void;
    onSave: (newAddress: { type: string; address: string; phone: string }) => void;
}

const AddressModal = ({ onClose, onSave }: AddressModalProps) => {
    const [type, setType] = useState('Home');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ address: '', phone: '' });

    const validateForm = () => {
        const newErrors = { address: '', phone: '' };
        let isValid = true;

        if (!address) {
            newErrors.address = 'Address is required';
            isValid = false;
        }
        if (!phone) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (isNaN(Number(phone))) {
            newErrors.phone = 'Phone number must be numeric';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSave = () => {
        if (validateForm()) {
            onSave({ type, address, phone });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl mb-4">Add New Address</h2>
                <div className="mb-4">
                    <label className="block text-[#556177]">Type</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full mt-1 p-2 border rounded outline-none focus:border-blue-primary-60"
                    >
                        <option value="Home">Home</option>
                        <option value="Office">Office</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-[#556177]">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full mt-1 p-2 border rounded outline-none focus:border-blue-primary-60"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-[#556177]">Phone</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full mt-1 p-2 border rounded outline-none  focus:border-blue-primary-60"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="bg-[#556177] text-white py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-primary-60 text-white py-2 px-4 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;
