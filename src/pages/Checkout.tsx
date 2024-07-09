import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";

const Checkout = () => {
  return (
    <div className="px-4 py-6">
      {/* <div className="">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[#002855]">
            <LuMapPin />
            <span>
              <p>Step 1</p>
              <p className="text-lg">Address</p>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#99A0AD]">
            <LuTruck />
            <span>
              <p>Step 2</p>
              <p className="text-lg">Shipping</p>
            </span>
          </div>
          <div className="md:flex items-center gap-2 text-[#99A0AD] hidden">
            <LuCreditCard />
            <span>
              <p>Step 3</p>
              <p className="text-lg">Payment</p>
            </span>
          </div>
        </div>
        <div className="my-10 max-w-sm md:max-w-5xl mx-auto">
          <h3 className="text-xl text-[#17183B] mb-4">Select Address</h3>
          <div className="bg-[#F6F6F6] p-5 flex gap-6  rounded-lg">
            <div>
              <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                <span className="p-2 flex justify-center bg-blue-primary-60 rounded-full"></span>
              </span>
            </div>

            <div className="md:flex flex-row-reverse items-start grid">
              <span className="flex justify-between mb-4">
                <span className="text-white bg-[#556177] rounded py-1 px-1.5">
                  Home
                </span>
                <span className="flex gap-6 text-xl text-blue-primary-60">
                  <MdEdit />
                  <MdClose />
                </span>
              </span>

              <span className="text-[#17183B]">
                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                <br />
                <p>(209) 555-0104</p>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] w-40 bg-gradient-to-l from-[#969595] to-[#E6E6E6]"></div>
            <span className=" bg-blue-primary-60 rounded-full text-white p-1.5">
              <LuPlus className=""/>
            </span>
            <div className="h-[1px] w-40 bg-gradient-to-r from-[#969595] to-[#E6E6E6]"></div>
          </div>
          <p className="text-blue-primary-60 text-center">Add New Address</p>
        </div>

        <div className="flex justify-between max-w-sm mx-auto">
          <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-14 text-center rounded-md">Back</button>
          <button className="bg-blue-primary-60 text-white py-2.5 px-14 text-center rounded-md">Next</button>
        </div>
      </div> */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-[#002855]">
          <LuMapPin />
          <span>
            <p>Step 1</p>
            <p className="text-lg">Address</p>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#99A0AD]">
          <LuTruck />
          <span>
            <p>Step 2</p>
            <p className="text-lg">Shipping</p>
          </span>
        </div>
        <div className="md:flex items-center hidden gap-2 text-[#99A0AD]">
          <LuCreditCard />
          <span>
            <p>Step 3</p>
            <p className="text-lg">Payment</p>
          </span>
        </div>
      </div>

      <div className="my-10 max-w-sm md:max-w-lg mx-auto text-center">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2 className="text-[#272727] text-2xl">Payment Confirmed</h2>
          <p className="uppercase text-[#33415C] my-8">order #2039</p>
        </div>
        <p className="text-sm text-blue-primary-60"> Thank you for buying from Gadgetry.  Now that your order is confirmed it will be ready to ship in 7 working days. Please check your inbox in the future for your order updates.</p>
        <div className="mt-6 space-y-6 max-w-sm mx-auto">
          <button className="bg-blue-primary-60 text-white py-2.5 px-6 text-center rounded-md max-w-52">Back to Shopping</button>
          <div>
          <a href="#" className="border-b border-[#33415C] text-[#33415C] md:hidden ">Save payment receipt</a>
          <a href="#" className="border-b border-[#33415C] text-[#33415C] hidden md:inline-block">Print receipt</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout