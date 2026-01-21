"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import BankInfoList from "../../component/layouts/bank-info/bank-info-list";
import BankInfoModal from "../../component/layouts/bank-info/bank-info-modal";
import { useEffect, useState } from "react";
import { Bank } from "@/app/types";
import { deleteBankOption, getAllBank } from "@/app/services/bank.service";
import DeleteModal from "../../component/ui/delete-modal";
import { toast } from "react-toastify";

const BankManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [banks, setBanks] = useState<Bank[]>([]);
    const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
    const [categoryToDeleteId, setBanksToDeleteId] = useState("");

    const fetchBanks = async () => {
        try {
            const data = await getAllBank()
            setBanks(data)
        } catch (error) {
            console.error("failed to fetch Banks")
        }
    };

    const handleEdit = (Bank: Bank) => {
        setSelectedBank(Bank);
        setIsModalOpen(!isModalOpen);
    };

    const handleDelete = (id: string) => {
        setBanksToDeleteId(id);
        setIsDeleteModalOpen(!isDeleteModalOpen)
    };

    const handleDeleteConfirm = async () => {
        if (!isDeleteModalOpen) return;
        try {
            await deleteBankOption(categoryToDeleteId);
            fetchBanks();
            toast.success("Bank deleted successfully")
        } catch (error) {
            console.error("failed to delete Bank ", error);
            toast.error("failed to delete Bank")
        }
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const handleClose = () => {
        setIsModalOpen(!isModalOpen);
        setSelectedBank(null);
    };

    useEffect(() => {
        fetchBanks();
    })

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
            <BankInfoList
                banks={banks}
                onEdit={handleEdit}
                onDelete={handleDelete} 
            />
            <BankInfoModal
                isOpen={isModalOpen}
                onClose={handleClose}
                bank={selectedBank}
                onSuccess={fetchBanks}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    )
}

export default BankManagement;