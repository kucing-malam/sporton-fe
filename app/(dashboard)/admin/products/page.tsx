"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../component/layouts/products/product-table";
import ProductModal from "../../component/layouts/products/product-modal";
import { useState } from "react";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Manage your product</p>
                </div>
                <div>
                    <Button
                        className="rounded-lg"
                        onClick={handleClose}
                    >
                        <FiPlus size={24} />Add Product
                    </Button>
                </div>
            </div>
            <ProductTable />
            <ProductModal isOpen={isOpen} onClose={handleClose}/>
        </div>
    )
}

export default ProductManagement;