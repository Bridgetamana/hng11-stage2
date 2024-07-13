import Iphone from "../assets/img/Iphone.png";
import Headphone from "../assets/img/Beats-Headphone-1.png";
import Galaxy from "../assets/img/Galaxy-S24-Ultra.png";
import Samsung from "../assets/img/samsung-flip.png";
import Macbook from '../assets/img/Apple-MacBook.png';
import Oraimo from "../assets/img/oraimo-airpods.png";
import Camera from "../assets/img/sony-camera.png";
import Smartwatch from "../assets/img/Smartwatch.png";
import Desktop from '../assets/img/Desktop.png'
import { Link } from "react-router-dom";

const ProductCard = () => {

    const products = [
        { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: '#900000', image: Iphone },
        { id: 2, name: 'Beats by Dre headphones bass', price: '#500000', image: Headphone },
        { id: 3, name: 'Samsung Galaxy S24 plus ultra, Granite', price: '#1200000', image: Galaxy },
        { id: 4, name: 'Samsung Galaxy Z Flip Ultra Max', price: '#1368000', image: Samsung },
        { id: 5, name: 'Oraimo Freepods Bass Boosted ', price: '#30000', image: Oraimo },
        { id: 6, name: 'Apple Macbook Pro 360 Model ', price: '#765000', image: Macbook },
        { id: 7, name: 'Tecno Camon Cam Recorder Vintage  ', price: '#56900', image: Camera },
        { id: 8, name: 'Apple Smart Watch Pro 2024 Model', price: '#386000', image: Smartwatch },
        { id: 9, name: 'Linux Wireless Monitor, PC Set ', price: '#875000', image: Desktop },
    ];

    return (
        <div className='grid grid-cols-2 gap-y-6 gap-x-2 md:grid-cols-3 max-w-md mx-auto md:max-w-3xl lg:max-w-7xl'>
            {products.map((product) => (
                <Link to="/productdetail" className='bg-[#F6F6F6] rounded-md pb-4 pt-7 px-2 md:py-4 flex flex-col cursor-pointer h-full max-w-[240px] hover:shadow-md' key={product.id}>
                    <div className='w-28 h-28 mx-auto flex-shrink-0'>
                        <img src={product.image} alt={product.name} className='w-full h-full' />
                    </div>
                    <div className=' text-center mt-4'>
                        <p className="h-16 flex-grow ">{product.name}</p>
                        <p className='text-2xl font-semibold my-2'>{product.price}</p>
                    </div>
                    <div className='flex justify-center gap-6 items-center mt-auto'>
                        <button className='bg-blue-primary-60 rounded-lg py-2.5 px-4 md:px-10 text-white text-sm'>
                            Add to Cart
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductCard;
