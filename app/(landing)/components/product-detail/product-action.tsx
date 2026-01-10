"use client";

import { FiArrowRight, FiShoppingBag, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/button';
import { useState } from 'react';

const ProductAction = () => {
    const [qty, setQty] = useState(1);
    
    return (
        <div className="flex gap-5">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-300 flex justify-center items-center">
                    <span>{qty}</span>
                </div>
                <div className='flex flex-col'>
                    <button 
                        onClick={() => setQty(qty+1)}
                        className='border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center'>
                        <FiChevronUp />
                    </button>
                    <button 
                        onClick={() => qty == 1 ? '' : setQty(qty-1)}
                        className='cursor-pointer h-1/2 aspect-square flex items-center justify-center'>
                        <FiChevronDown />
                    </button>
                </div>
            </div>
            <Button className='px-20 w-full'>
                <FiShoppingBag size={24} />
                Add To Cart
            </Button>
            <Button variant='dark' className='px-20 w-full'>
                <FiArrowRight size={24} />
                Check Out Now
            </Button>
        </div>
    )
};

export default ProductAction;