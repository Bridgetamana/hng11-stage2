import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { fetchSingleProduct } from '../Api/Api'

interface ProductDetail {
    id: string;
    name: string;
    current_price: number;
    photos: { url: string }[];
    description: string;
    is_available: boolean;
    discounted_price: number;
    available_quantity: number;
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                imgSrc: product.photos[0]?.url,
                name: product.name,
                price: product.current_price,
                total: product.current_price,
            });
            alert(`${product.name} has been added to your cart.`);
        }
    };

    useEffect(() => {
        const loadProductDetail = async () => {
            try {
                const data = await fetchSingleProduct(id as string);
                setProduct(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        loadProductDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <button className="text-2xl text-blue-primary-60 flex items-center gap-4 cursor-not-allowed">
                    <div className='w-10 h-10 border-2 border-gray border-t-2 border-t-blue-primary-60 rounded-full animate-spin'></div>
                    <p>Loading...</p>
                </button>
            </div>
        );
    }

    if (error) {
        return <div>Error fetching product details: {error}</div>;
    }

    if (!product) {
        return <div>No product details available.</div>;
    }

    return (
        <div className='bg-white px-4 py-10 md:px-24'>
            <div className="md:flex items-center gap-8 lg:gap-24">
                <div className="md:w-1/2">
                    <div className="flex justify-center h-40">
                        <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt={product.name} />
                    </div>
                    <div>
                        <h4 className="text-[40px] font-semibold leading-[40px] my-4">{product.name}</h4>
                        <span className="flex gap-4 items-center">
                            <p className="text-[20px]">₦{product.current_price}</p>
                            <p className="line-through text-sm">₦{product.discounted_price}</p>
                            <span className={`${product.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                } text-xs font-medium me-2 px-2.5 py-0.5 rounded`}>
                                {product.is_available ? "Available" : "Not Available"}
                            </span>
                        </span>
                        <p className="text-sm text-gray-600">Available Quantity: {product.available_quantity}</p>
                    </div>
                    <div className="mt-8 mb-4 space-y-4 md:flex gap-4 md:space-y-0">
                        <button className="w-full py-4 border border-blue-primary-60 rounded hover:bg-blue-100 transition">Add to Wishlist</button>
                        <button className="w-full py-4 border border-blue-primary-60 rounded text-white bg-blue-primary-60 hover:bg-blue-primary-70 transition" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
                <div className="mt-8 md:w-1/2">
                    <div className="border border-[#D6D9DE] p-4 rounded-md shadow-sm">
                        <div className="my-4">
                            <h2 className="text-2xl mb-4">Details:</h2>
                            <p className="text-[#9D9D9D]">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
