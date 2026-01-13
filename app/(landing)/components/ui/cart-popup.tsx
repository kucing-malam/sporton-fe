"use client";

import Image from "next/image";
import PriceFormatter from '../../../utils/price-formatter';
import Button from './button';
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { useCartStore } from "@/app/hook/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = () => {
    const {items, removeItem} = useCartStore();
    const { push } = useRouter();

    const handleCheckout = () => {
        push('/checkout');
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className="z-2 absolute bg-white right-0 top-12 border border-gray-200 w-90 shadow-xl shadow-black/10 ">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            {
                items.length ? items.map((item) => (
                    <div key={item._id} className="border-b border-gray-200 p-4 flex gap-3">
                        <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image
                                src={getImageUrl(item.imageUrl)}
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
                            onClick={() => removeItem(item._id)}
                            className="w-7 h-7 p-0! self-center ml-auto"
                        >
                            <FiTrash2 size={24} />
                        </Button>
                    </div>
                )) : (
                    <div className="text-center py-5">
                        Your shopping cart is empty
                    </div>
                )
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

export default CartPopup;