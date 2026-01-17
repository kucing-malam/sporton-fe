"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import BankInfoList from "../../component/layouts/bank-info/bank-info-list";
import BankInfoModal from "../../component/layouts/bank-info/bank-info-modal";
import { useState } from "react";

const BankManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Bank Management</h1>
                    <p className="opacity-50">Manage your Bank Information</p>
                </div>
                <div>
                    <Button
                        className="rounded-lg"
                        onClick={handleClose}
                    >
                        <FiPlus size={24} />Add Bank
                    </Button>
                </div>
            </div>
            <BankInfoList />
            <BankInfoModal isOpen={isOpen} onClose={handleClose}/>
        </div>
    )
}

export default BankManagement;