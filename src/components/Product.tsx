import ProductCard from "./ProductCard"

const Product = () => {
    
    return (
        <div>
            <div className="px-4 py-16 mx-auto lg:max-w-7xl">
                <span className='flex gap-2 mb-4'>
                    <h4 className="text-blue-primary-60 border-b-2 border-blue-primary-60  pb-1 text-sm">New Arrival</h4>
                    <h4 className="text-[#778092] text-sm">BestSeller</h4>
                    <h4 className="text-[#778092] text-sm">Featured Products</h4>
                </span>

                {/* Product grid */}
                <div > 
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Product