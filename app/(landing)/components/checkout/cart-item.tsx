"use client"
import { cartList } from "../ui/card-popup";
import Image from "next/image";
import PriceFormatter from '../../../utils/price-formatter';
import Button from '../ui/button';
import { FiCreditCard, FiTrash } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from 'next/navigation';

const CartItems = () => {
    const { push } = useRouter()
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0)

    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-75">
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
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="font-semibold flex justify-between">
                    <div className="font-sm">Total</div>
                    <div className="text-primary total-xs">{PriceFormatter(totalPrice)}</div>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4" onClick={() => push("/payment")}>
                    Proceed to Payment <FiCreditCard />
                </Button>
            </div>
        </CardWithHeader>
    )
}

export default CartItems;