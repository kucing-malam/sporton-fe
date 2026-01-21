"use client";

import TransactionTable from "../../component/layouts/transaction/transaction-table";
import TransactionModal from "../../component/layouts/transaction/transaction-modal";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types";
import { getAllTransaction, updateTransaction } from "@/app/services/transaction.service";

const TransactionManagement = () => {
    const [IsDetailOpen, setIsDetailOpen] = useState(false);
    const [transactions, setSelectedTransactions] = useState<Transaction[]>([]);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

    const handleViewDetail = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setIsDetailOpen(true);
    };

    const fetchTransactions = async () => {
        const data = await getAllTransaction();
        setSelectedTransactions(data);
    };

    const handleStatusChange = async (id: string, status: "paid" | "rejected") => {
        try {
            const data = new FormData();
            data.append("status", status);
            await updateTransaction(id, data);
            await fetchTransactions()
        } catch (error) {
            console.error("failed to update transaction ", error);
            alert("Failed to update transaction, please try again later.")
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Transaction Management</h1>
                    <p className="opacity-50">Manage your Transaction</p>
                </div>
            </div>
            <TransactionTable
                transactions={transactions}
                onViewDetails={handleViewDetail}
            />
            <TransactionModal
                transaction={selectedTransaction}
                isOpen={IsDetailOpen}
                onClose={() => setIsDetailOpen(false)}
                onStatusChange={handleStatusChange}
            />
        </div>
    )
}

export default TransactionManagement;