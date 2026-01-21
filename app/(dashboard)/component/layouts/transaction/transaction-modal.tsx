import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal"
import { useState } from "react";
import Image from "next/image";
import { FiCheck, FiX } from "react-icons/fi";
import PriceFormatter from "@/app/utils/price-formatter";
import { Transaction } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { toast } from "react-toastify";

type TTransactionModalProps = {
    isOpen: boolean;
    transaction?: Transaction | null;
    onClose: () => void;
    onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
};

const TransactionModal = ({ isOpen, onClose, transaction, onStatusChange }: TTransactionModalProps) => {
    const [isUpdateting, setIsUpdateting] = useState(false);
    if (!transaction) return null;
    
    const handleUpdateTransaction = async (status: "paid" | "rejected") => {
        try {
            setIsUpdateting(true);
            await onStatusChange(transaction._id, status);
            toast.success("Transaction status updated successfully");
            onClose?.();
        } catch (error) {
            console.error("failed to update transaction ", error);
        } finally {
            setIsUpdateting(false);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transaction">
            <div className="flex gap-6 ">
                <div>
                    <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                    {
                        transaction.paymentProof ?
                            (<Image
                                src={getImageUrl(transaction.paymentProof)}
                                alt="Image Preview"
                                width={200}
                                height={401} />
                            )
                            : 
                            (
                                <div className="text-center p-4">
                                    <p className="text-sm">No Payment Proof Uploaded</p>
                                </div>
                            )
                    }
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-sm mb-2">Order Detail</h4>
                        <div className="bg-gray-100 text-sm rounded-md flex gap-3 flex-col p-4 ">
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Date</div>
                                <div className="text-right">{new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Customer</div>
                                <div className="text-right">{transaction.customerName}</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Contact</div>
                                <div className="text-right">{transaction.customerContact}</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                                <div className="text-right">{transaction.customerAddress}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                        <div className="border border-gray-200 rounded-lg p-2 gap-3 flex flex-col">
                            {
                                transaction?.purchasedItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        {
                                            item.productId?.imageUrl &&
                                            <div className="bg-gray-100 h-8 w-8 rounded aspect-square flex items-center">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={getImageUrl(item.productId.imageUrl)}
                                                    alt="Product Image"
                                                />
                                            </div>
                                        }
                                        <div className="font-medium text-sm">{item?.productId?.name}</div>
                                        <div className="font-medium text-sm ml-auto">{item.qty ?? 0} Unit</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h4
                                className="font-semibold text-sm mb-2">Total</h4>
                            <h4
                                className="font-semibold text-sm mb-2 text-primary"
                            >
                                {PriceFormatter(parseInt(transaction.totalPayment))}
                            </h4>
                        </div>
                    </div>
                    <div className="flex gap-6 ml-auto">
                        <Button
                            disabled={isUpdateting}
                            onClick={() => handleUpdateTransaction("rejected")}
                            className="px-6 py-2! mt-3 ml-auto rounded-lg bg-primary-light! text-primary! flex items-center!"
                            size="small"
                        >
                            <FiX /> Reject</Button>
                        <Button
                            disabled={isUpdateting}
                            onClick={() => handleUpdateTransaction("paid")}
                            className="px-6 py-2! mt-3 ml-auto rounded-lg bg-[#50C252]! text-white! flex items-center!"
                            size="small"
                        >
                            <FiCheck /> Approve</Button>
                    </div>
                </div>
            </div>
        </Modal >
    )
}

export default TransactionModal