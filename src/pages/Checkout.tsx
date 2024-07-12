import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";
import { LuCheckCircle2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const Checkout = () => {
  return (
    <div className="px-4 py-6 md:px-24">
      <div className="flex justify-between">
        <div className="hidden md:flex">
          <CheckoutSteps icon={LuMapPin} stepNumber={1} stepName="Address" />
        </div>
        <CheckoutSteps icon={LuTruck} stepNumber={2} stepName="Shipping" />
        <CheckoutSteps icon={LuCreditCard} stepNumber={3} stepName="Payment" isActive />
      </div>

      <div className="my-10 max-w-sm md:max-w-lg mx-auto text-center">
        <div className="flex justify-center text-8xl my-4 text-[#192180B2]">
          <LuCheckCircle2 />
        </div>
        <div>
          <h2 className="text-[#272727] text-2xl">Payment Confirmed</h2>
          <p className="uppercase text-[#33415C] my-8">order #2039</p>
        </div>
        <p className="text-sm text-blue-primary-60">
          Thank you for buying from Gadgetry. Now that your order is confirmed it will be ready to ship in 7 working days. Please check your inbox in the future for your order updates.
        </p>
        <div className="mt-6 space-y-6 max-w-sm mx-auto">
          <Link to='/'>
            <button className="bg-blue-primary-60 text-white py-2.5 px-6 text-center rounded-md max-w-52">Back to Shopping</button>
          </Link>
          <div>
            <a href="#" className="border-b border-[#33415C] text-[#33415C] md:hidden">Save payment receipt</a>
            <a href="#" className="border-b border-[#33415C] text-[#33415C] hidden md:inline-block">Print receipt</a>
          </div>
        </div>
      </div>
    </div>  )
}

export default Checkout