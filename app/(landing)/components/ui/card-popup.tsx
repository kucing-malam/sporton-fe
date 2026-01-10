"use client";

import Image from "next/image";
import PriceFormatter from '../../../utils/price-formatter';
import Button from './button';
import { FiArrowRight, FiTrash } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export const cartList = [
    {
        name: 'SportOn Hyperfast Shoes',
        category: 'Running',
        price: 329000,
        qty: 3,
        imgUrl: 'product-3.png'
    },
    {
        name: 'SportOn Rocket Tenis',
        category: 'Tennis',
        price: 999000,
        qty: 3,
        imgUrl: 'product-2.png'
    },
    {
        name: 'SportOn Slowlivin',
        category: 'Running',
        price: 119000,
        qty: 3,
        imgUrl: 'product-1.png'
    }
];

const CardPopup = () => {
    const { push } = useRouter()
    const handleCheckout = () => {
        push('/checkout');
    }
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0)

    return (
        <div className="z-2 absolute bg-white right-0 top-12 border border-gray-200 w-90 shadow-xl shadow-black/10 ">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            {
                cartList.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
                        <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image
                                src={`/images/products/${item.imgUrl}`}
                                alt={item.name}
                                className="aspect-square object-contain"
                                width={63}
                                height={63}
                            />
                        </div>
                        <div className="self-center">
                            <div className="font-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium font-xs">
                                <div >{item.qty}x</div>
                                <div className="text-primary">{PriceFormatter(item.price)}</div>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="small"
                            className="w-7 h-7 p-6! self-center ml-auto"
                        >
                            <FiTrash />
                        </Button>
                    </div>
                ))
            }
            <div className="border-t border-gray-200 p-4">
                <div className="font-semibold flex justify-between">
                    <div className="font-sm">Total</div>
                    <div className="text-primary total-xs">{PriceFormatter(totalPrice)}</div>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4" onClick={handleCheckout}>
                    Checkout Now <FiArrowRight />
                </Button>
            </div>
        </div >
    )
};

export default CardPopup;