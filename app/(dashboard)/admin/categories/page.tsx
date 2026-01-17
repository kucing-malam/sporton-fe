"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../component/layouts/category/category-table";
import CategoryModal from "../../component/layouts/category/category-modal";
import { useState } from "react";

const CategoryManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Category Management</h1>
                    <p className="opacity-50">Manage your category</p>
                </div>
                <div>
                    <Button
                        className="rounded-lg"
                        onClick={handleClose}
                    >
                        <FiPlus size={24} />Add Category
                    </Button>
                </div>
            </div>
            <CategoryTable />
            <CategoryModal isOpen={isOpen} onClose={handleClose}/>
        </div>
    )
}

export default CategoryManagement;