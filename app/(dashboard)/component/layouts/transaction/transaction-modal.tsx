import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal"
import { useState } from "react";
import Image from "next/image";
import { FiCheck, FiX } from "react-icons/fi";
import PriceFormatter from "@/app/utils/price-formatter";

type TTransactionModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transaction">
            <div className="flex gap-6 ">
                <div>
                    <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                    <Image src="/images/payment-proof-dummy.png" alt="Image Preview" width={200} height={401} />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-sm mb-2">Order Detail</h4>
                        <div className="bg-gray-100 text-sm rounded-md flex gap-3 flex-col p-4 ">
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Date</div>
                                <div className="text-right">23/02/2026 19:32</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Customer</div>
                                <div className="text-right">John Doe</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Contact</div>
                                <div className="text-right">08526543787628</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                                <div className="text-right">Merdeka Street, Jakarta Selatan, Indonesia, 333827</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                        <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                            <div className="bg-gray-100 h-8 w-8 rounded aspect-square flex items-center">
                                <Image width={40} height={40} src="/images/products/product-3.png" alt="Product Image" />
                            </div>
                            <div className="font-medium text-sm">HyperSoccer Shoes</div>
                            <div className="font-medium text-sm ml-auto">3 Unit</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold text-sm mb-2">Total</h4>
                            <h4 className="font-semibold text-sm mb-2 text-primary">{PriceFormatter(28346278)}</h4>
                        </div>
                    </div>
                    <div className="flex gap-6 ml-auto">
                        <Button className="px-6 py-2! mt-3 ml-auto rounded-lg bg-primary-light! text-primary! flex items-center!" size="small"><FiX /> Reject</Button>
                        <Button className="px-6 py-2! mt-3 ml-auto rounded-lg bg-[#50C252]! text-white! flex items-center!" size="small"><FiCheck /> Approve</Button>
                    </div>
                </div>
            </div>
        </Modal >
    )
}

export default TransactionModal