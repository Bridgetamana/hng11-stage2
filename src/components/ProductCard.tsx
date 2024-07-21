/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { fetchProducts } from "../Api/Api";

interface Product {
    id: string;
    name: string;
    current_price: any;
    photos: { url: string }[];
}

const ProductCard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(page);
                setProducts(data.items);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [page]);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <button className="text-2xl text-blue-primary-60 flex items-center gap-4 cursor-not-allowed">
                    <div className='w-10 h-10 border-4 border-gray border-t-4 border-t-blue-primary-60 rounded-full animate-spin'></div>
                </button>
            </div>
        );
    }

    if (error) {
        return (
            <div className='text-red-700 flex items-center justify-center'>
                <p>Error fetching products: Please refresh</p>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3 max-w-md mx-auto md:max-w-3xl lg:max-w-7xl'>
                {products.map((product) => (
                    <Link to={`/productdetail/${product.id}`} key={product.id} className='bg-[#F6F6F6] rounded-md pb-4 pt-7 px-2 md:py-4 flex flex-col cursor-pointer h-full max-w-[240px] transition duration-500 hover:scale-105'>
                        <div className='w-28 h-28 mx-auto flex-shrink-0'>
                            <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} className='w-full h-full' />
                        </div>
                        <div className='text-center mt-4'>
                            <p className="h-16 flex-grow">{product.name}</p>
                            <p className='text-xl font-semibold my-2'>
                                ₦{typeof product.current_price === 'string' ? product.current_price : product?.current_price[0]?.NGN[0]}
                            </p>
                        </div>
                        <div className='flex justify-center gap-6 items-center mt-auto'>
                            <button className='bg-blue-primary-60 rounded-lg py-2.5 px-4 md:px-10 text-white text-sm hover:scale-105'>
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    className="text-blue-primary-60 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                >
                    <LuChevronLeft />
                </button>
                {[1, 2, 3].map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`py-2 px-4 rounded-lg ${page === pageNumber
                            ? 'bg-blue-primary-60 text-white'
                            : 'bg-[#F6F6F6] text-blue-primary-60'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                        onClick={() => setPage(pageNumber)}
                        disabled={products.length < 10 && pageNumber > 1}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    className="text-blue-primary-60 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setPage(page + 1)}
                    disabled={products.length < 10 || page === 3}
                >
                    <LuChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
