"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../component/layouts/products/product-table";
import ProductModal from "../../component/layouts/products/product-modal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import DeleteModal from "../../component/ui/delete-modal";
import { toast } from "react-toastify";

const ProductManagement = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [productToDeleteId, setProductToDeleteId] = useState("");

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts()
            setProducts(data)
        } catch (error) {
            console.error("failed to fetch products")
        }
    };

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(!isModalOpen);
    };

    const handleDelete = (id: string) => {
        setProductToDeleteId(id);
        setIsDeleteModalOpen(!isDeleteModalOpen)
    };

    const handleDeleteConfirm = async () => {
        if (!isDeleteModalOpen) return;
        try {
            await deleteProduct(productToDeleteId);
            fetchProducts();
            toast.success("product deleted successfully")
        } catch (error) {
            console.error("failed to delete product ", error);
            toast.error("failed to delete product")
        }
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const handleClose = () => {
        setSelectedProduct(null);
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        fetchProducts();
    });
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
            <ProductTable
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleClose}
                onSuccess={fetchProducts}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    )
}

export default ProductManagement;