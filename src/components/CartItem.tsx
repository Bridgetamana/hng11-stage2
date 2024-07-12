
const CartItem = ({ imgSrc, name, price, total }: { imgSrc: string, name: string, price: string, total?: string }) => (
    <div>
        {/* mobile cart */}
        <div className="flex  md:hidden items-center justify-between border-y border-[#E5E5E5] py-4">
            <div className="flex justify-between items-center gap-4 lg:gap-8 ">
                <div className="bg-[#F7F8FA] w-36 flex-shrink-0">
                    <img src={imgSrc} className="w-full" alt={name} />
                </div>
                <span className="flex-grow">
                    <h3 className="text-xl text-wrap">{name}</h3>
                    <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                </span>
            </div>
            <span className="">
                <span>
                    <p>{price}</p>
                </span>
                <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2">
                    <p className="text-xl">+</p>
                    <p >1</p>
                    <p className="text-xl">-</p>
                </button>
            </span>
        </div>

        {/* desktop cart */}
        <div className="hidden justify-between items-center border-y border-[#E5E5E5] py-3 md:grid grid-cols-2">
            <div className="flex  items-center gap-4 lg:gap-8">
                <div className="bg-[#F7F8FA]">
                    <img src={imgSrc} className="w-36" alt={name} />
                </div>
                <span>
                    <h3 className="text-xl text-wrap">{name}</h3>
                    <button className="text-[#001845] border-b-2 border-[#001845]">Remove</button>
                </span>
            </div>
            <div className="flex justify-between items-center">
                <span>
                    <p>{price}</p>
                </span>
                <div>
                    <button className="text-[#001845] flex gap-1 items-center border border-blue-primary-60 px-2 ml-">
                        <p className="text-xl">+</p>
                        <p >1</p>
                        <p className="text-xl">-</p>
                    </button>
                </div>
                <span className="">{total}</span>
            </div>
        </div>
    </div>
);

export default CartItem;
