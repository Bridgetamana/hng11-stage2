import { LuHeart } from "react-icons/lu";
import Iphone from "../assets/img/Iphone.png";

const ProductCard = () => {

    const products = [
        { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 2, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 3, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 4, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 5, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 6, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 7, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 8, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
        { id: 9, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '$900', image: Iphone },
    ];

    return (
        <div className='grid grid-cols-2 gap-y-6 gap-x-2 md:grid-cols-3 max-w-md mx-auto md:max-w-2xl lg:max-w-7xl lg:grid-cols-4 lg:gap-8'>
            {products.map((product) => (

            <div className='bg-[#F6F6F6] rounded-md py-4 px-2 max-w-52 lg:max-w-64' key={product.id}>
                <span className='text-[#33415C] flex justify-end lg:hidden'>
                    <LuHeart />
                </span>
                <div className='w-24 mx-auto'>
                    <img src={product.image} alt={product.name} className='w-full'/>
                </div>
                <div className='py-4 text-center'>
                    <p>{product.name}</p>
                    <p className='text-2xl font-semibold'>{product.price}</p>
                </div>
                <div className='flex justify-center gap-6 items-center'>
                    <span className='text-[#33415C] justify-end text-2xl hidden lg:flex'>
                        <LuHeart />
                    </span>
                    <button className='bg-blue-primary-60 rounded-lg py-3 px-6 text-white text-sm'>
                        Add to Cart
                    </button>
                </div>
            </div>
            )) }
        </div>
    );
};
 export default ProductCard;