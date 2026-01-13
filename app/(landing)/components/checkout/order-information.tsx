"use client";

import { CustomerInfo } from "@/app/hook/use-cart-store";
import CardWithHeader from "../ui/card-with-header";

type TOrderInfoProps = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>
};
const OrderInformation = ({ formData, setFormData }: TOrderInfoProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group ">
                    <label htmlFor="customerName">Full Name</label>
                    <input
                        value={formData.customerName}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Type your full name"
                        id="customerName"
                        name="customerName"
                    />
                </div>
                <div className="input-group ">
                    <label htmlFor="customerContact">Whatsapp Number</label>
                    <input
                        value={formData.customerContact ?? ""}
                        onChange={handleInputChange}
                        type="number"
                        placeholder="Type your whatsapp number"
                        id="customerContact"
                        name="customerContact"
                    />
                </div>
                <div className="input-group ">
                    <label htmlFor="customerAddress">Shipping Address</label>
                    <textarea
                        value={formData.customerAddress}
                        onChange={handleInputChange}
                        rows={7}
                        placeholder="Type your shipping address"
                        id="customerAddress"
                        name="customerAddress"
                    />
                </div>
            </div>
        </CardWithHeader>
    )
}

export default OrderInformation;