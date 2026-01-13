"use client";

import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {

    return (
        <div className="bg-white w-160 p-15.5 flex flex-col justify-center items-center py-20">
            <FiAlertCircle size={52}/>
            <h2 className="text-xl font-semibold mb-2">Order Rejected!!</h2>
            <p className="text-center mb-8">Sorry, your order rejected because you payment proof is not valid!
            </p>
        </div>
    )
}

export default OrderRejected;