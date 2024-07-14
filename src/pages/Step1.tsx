import { useState } from 'react';
import { LuMapPin, LuTruck, LuCreditCard, LuPlus } from "react-icons/lu";
import { MdEdit, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import AddressModal from '../components/AddAddressModal';

const Step1 = () => {
  const [addresses, setAddresses] = useState([
    { type: 'Home', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', phone: '(209) 555-0104', selected: true }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAddress = (newAddress: { type: string, address: string, phone: string }) => {
    setAddresses([...addresses, { ...newAddress, selected: false }]);
    setIsModalOpen(false);
  };

  const handleSelectAddress = (index: number) => {
    setAddresses(addresses.map((addr, i) => ({
      ...addr,
      selected: i === index
    })));
  };

  const handleDeleteAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (
    <div className="px-4 py-6 md:px-24">
      <div>
        <div className="flex justify-between">
          <div className="hidden md:flex">
            <CheckoutSteps icon={LuMapPin} stepNumber={1} stepName="Address" isActive />
          </div>
          <CheckoutSteps icon={LuTruck} stepNumber={2} stepName="Shipping" />
          <CheckoutSteps icon={LuCreditCard} stepNumber={3} stepName="Payment" />
        </div>
        <div className="my-10 mx-auto">
          <h3 className="text-xl text-[#17183B] mb-4">Select Address</h3>
          {addresses.map((addr, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] p-5 flex gap-6 md:w-full rounded-lg mb-4 cursor-pointer"
              onClick={() => handleSelectAddress(index)}
            >
              <div className="flex justify-center mb-4 md:mb-0">
                <div>
                  <span className={`flex justify-center p-1.5 rounded-full border ${addr.selected ? 'border-blue-primary-60' : 'border-gray-300'}`}>
                    <span className={`p-2 flex justify-center rounded-full ${addr.selected ? 'bg-blue-primary-60' : 'bg-gray'}`}></span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full md:flex-row-reverse items-start gap-4">
                <span className="flex justify-between md:gap-6 items-center mb-4 w-full md:w-36">
                  <span className="text-white bg-[#556177] rounded py-1 px-1.5">
                    {addr.type}
                  </span>
                  <span className="flex gap-6 text-xl text-blue-primary-60" onClick={(e) => e.stopPropagation()}>
                    <MdEdit />
                    <MdClose onClick={() => handleDeleteAddress(index)} />
                  </span>
                </span>
                <span className="text-[#17183B] text-left">
                  <p>{addr.address}</p>
                  <br />
                  <p>{addr.phone}</p>
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] w-40 md:w-96 bg-gradient-to-l from-[#969595] to-[#E6E6E6]"></div>
            <span className="bg-blue-primary-60 rounded-full text-white p-1.5" onClick={() => setIsModalOpen(true)}>
              <LuPlus />
            </span>
            <div className="h-[1px] w-40 md:w-96 bg-gradient-to-r from-[#969595] to-[#E6E6E6]"></div>
          </div>
          <p className="text-blue-primary-60 text-center">Add New Address</p>
        </div>
        <div className="flex justify-between max-w-sm mx-auto">
          <Link to='/cart'>
            <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-14 text-center rounded-md">Back</button>
          </Link>
          <Link to='/step2'>
            <button className="bg-blue-primary-60 text-white py-2.5 px-14 text-center rounded-md">Next</button>
          </Link>
        </div>
      </div>
      {isModalOpen && <AddressModal onClose={() => setIsModalOpen(false)} onSave={handleAddAddress} />}
    </div>
  );
};

export default Step1;
