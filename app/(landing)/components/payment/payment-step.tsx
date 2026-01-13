"use client";

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from '../ui/button';
import { FiCheckCircle } from "react-icons/fi";
import PriceFormatter from '../../../utils/price-formatter';
import { useRouter } from 'next/navigation';
import { useCartStore } from "@/app/hook/use-cart-store";
import { useState } from "react";
import { transactionCheckout } from "@/app/services/transaction.service";

const PaymentStep = () => {
    const { push } = useRouter();
    const [file, setFile] = useState<File | null>();
    const { customerInfo, items, reset } = useCartStore();

    const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

    const handleCofirmPayment = async () => {
        alert("Processing your payment confirmation...")
        if (!file) {
            alert("Please upload your payment receipt");
            return;
        }
        if (!customerInfo) {
            alert("Customer information is missing, please return to checkout");
            push('/checkout');
            return;
        }
        try {
            const formData = new FormData();
            formData.append("customerName", customerInfo.customerName);
            formData.append("customerContact", customerInfo.customerContact!.toString());
            formData.append("customerAddress", customerInfo.customerAddress);
            formData.append("image", file);
            formData.append("purchasedItems", 
                JSON.stringify(items.map((item) => ({productId: item._id, qty: item.qty})))
            );
            formData.append("totalPayment", totalPrice!.toString());
            const res = await transactionCheckout(formData);
            alert("Transaction created succesfully!");
            reset();
            push(`/order-status/${res._id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CardWithHeader title='Payment Steps'>
            <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
                    <li>
                        Transfer the total amount of <b>{PriceFormatter(totalPrice)}</b> to your preferred bank account listed
                        under 'Payment Options' (BCA, Mandiri, or BTPN).
                    </li>
                    <li>
                        After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the
                        transfer confirmation. This will be needed for the next step.
                    </li>
                    <li>
                        Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button
                        below to validate your transaction.
                    </li>
                </ol>
                <FileUpload onFileSelect={setFile} />
                <div className="border-t border-gray-200 p-4">
                    <div className="font-semibold flex justify-between">
                        <div className="font-sm">Total</div>
                        <div className="text-primary total-xs">{PriceFormatter(totalPrice)}</div>
                    </div>
                    <Button variant="dark" size="small" className="w-full mt-4" onClick={handleCofirmPayment}>
                        <FiCheckCircle /> Upload Receipt & Confirm
                    </Button>
                </div>
            </div>
        </CardWithHeader>
    )
}

export default PaymentStep;