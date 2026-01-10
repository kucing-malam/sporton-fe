'use client'

import { useState } from "react"
import OrderSubmitted from "../../components/order-status/order-submitted"
import OrderConfirmed from "../../components/order-status/order-confirmed";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(true);
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="font-bold text-5xl text-center mb-11">Order Status</h1>
                <div className="flex justify-center">
                    {isConfirmed ? (<OrderSubmitted />) : (<OrderConfirmed />)}
                </div>
            </div>
        </main>
    )
}

export default OrderStatus