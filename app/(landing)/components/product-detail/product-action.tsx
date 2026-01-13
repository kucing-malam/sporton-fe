"use client";

import { FiArrowRight, FiShoppingBag, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/button';
import { useState } from 'react';
import { Product } from '@/app/types';
import { useCartStore } from '@/app/hook/use-cart-store';
import { useRouter } from 'next/navigation';
type TProductActionProps = {
    product: Product;
    stock: number;
}

const ProductAction = ({product, stock}: TProductActionProps) => {
    const [qty, setQty] = useState(1);
    const {addItem} = useCartStore();
    const handleAddToCart = () => {
        addItem(product, qty);
    };
    const {push} = useRouter();
    
    return (
        <div className="flex gap-5">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-300 flex justify-center items-center">
                    <span>{qty}</span>
                </div>
                <div className='flex flex-col'>
                    <button 
                        onClick={() => setQty(qty < stock ? qty + 1 : qty)}
                        className='border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center'>
                        <FiChevronUp />
                    </button>
                    <button 
                        onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                        className='cursor-pointer h-1/2 aspect-square flex items-center justify-center'>
                        <FiChevronDown />
                    </button>
                </div>
            </div>
            <Button className='px-20 w-full' onClick={handleAddToCart}>
                <FiShoppingBag size={24} />
                Add To Cart
            </Button>
            <Button variant='dark' className='px-20 w-full' onClick={() => push('/checkout')}>
                <FiArrowRight size={24} />
                Check Out Now
            </Button>
        </div>
    )
};

export default ProductAction;