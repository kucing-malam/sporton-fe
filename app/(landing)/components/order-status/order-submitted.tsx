"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
    const reloadOrderStatus  = () => {
        window.location.reload()
    }
    return (
        <div className="bg-white w-160 p-15.5 flex flex-col justify-center items-center py-20">
            <Image src="/images/icon-order-submitted.svg" alt="icon order submitted"
                width={117}
                height={117}
                className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Order Submitted!!</h2>
            <p className="text-center mb-8">Your Order is recorded in our system, we are still confirming the payment status,
                please wait and your order status will be updated in less than 12 hours.
            </p>
            <Button onClick={reloadOrderStatus} variant="dark" className="w-full"><FiRefreshCw /> Refresh Order Status</Button>
        </div>
    )
}

export default OrderSubmitted;