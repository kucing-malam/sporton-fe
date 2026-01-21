"use client";

import { Transaction } from "@/app/types";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiEye } from "react-icons/fi";

type TTransactionTable = {
    onViewDetails: (transaction: Transaction) => void;
    transactions: Transaction[];
};

const TransactionTable = ({ onViewDetails, transactions }: TTransactionTable) => {

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-100 text-yellow-600 border-yellow-300"
            case "paid":
                return "bg-green-100 text-green-600 border-green-300"
            case "rejected":
                return "bg-red-100 text-red-600 border-red-300"
        }
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    {new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "numeric",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </td>
                                <td className="px-6 py-4 font-medium">{transaction.customerName}</td>
                                <td className="px-6 py-4 font-medium">{transaction.customerContact}</td>
                                <td className="px-6 py-4 font-medium">{PriceFormatter(parseInt(transaction.totalPayment))}</td>
                                <td className="px-6 py-4 font-medium">
                                    <div className={`${getStatusColor(transaction.status)} border-2 rounded-md py-1 px-2 text-center w-fit text-sm uppercase`}>
                                        {transaction.status}
                                    </div>
                                </td>
                                <td className="px-6 py-8 items-center flex h-full">
                                    <button onClick={() => onViewDetails(transaction)} className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 w-fit-py-1 px-2 rounded-md">
                                        <FiEye className="cursor-pointer" size={18} /> View Details
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable;