"use client";

import { useState } from "react";
import CartItems from "../components/checkout/cart-item";
import OrderInformation from "../components/checkout/order-information";
import { CustomerInfo, useCartStore } from "@/app/hook/use-cart-store";
import { useRouter } from 'next/navigation';

const Checkout = () => {
    const { push } = useRouter();
    const { setCustomerInfo } = useCartStore();
    const [formData, setFormData] = useState<CustomerInfo>({
        customerName: "",
        customerContact: null,
        customerAddress: ""
    });

    const handlePayment = () => {
        alert("Processing your checkout...");
        
        if(
            !formData.customerName ||
            !formData.customerContact ||
            !formData.customerAddress
        ) {
            alert("Please fill all the fields");
            return;
        };
        setCustomerInfo(formData);
        push("/payment");
    }
    
    return (
        <main className="bg-gray-100 min-h-[80vh] pt-10">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="font-bold text-5xl text-center mb-11" onClick={handlePayment}>Checkout Now</h1>
                <div className="grid grid-cols-2 gap-14" >
                    <OrderInformation formData={formData} setFormData={setFormData} />
                    <CartItems handlePayment={handlePayment}/>
                </div>
            </div>
        </main>
    )
}

export default Checkout;