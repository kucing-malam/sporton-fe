"use client";

import TransactionTable from "../../component/layouts/transaction/transaction-table";
import TransactionModal from "../../component/layouts/transaction/transaction-modal";
import { useState } from "react";

const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    const handleViewDetail = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Transaction Management</h1>
                    <p className="opacity-50">Manage your Transaction</p>
                </div>
            </div>
            <TransactionTable onViewDetails={handleViewDetail}/>
            <TransactionModal isOpen={isOpen} onClose={handleClose}/>
        </div>
    )
}

export default TransactionManagement;