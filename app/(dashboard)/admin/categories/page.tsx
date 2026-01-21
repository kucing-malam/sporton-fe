"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../component/layouts/category/category-table";
import CategoryModal from "../../component/layouts/category/category-modal";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { deleteCategory, getAllCategories } from "@/app/services/category.service";
import DeleteModal from "../../component/ui/delete-modal";
import { toast } from "react-toastify";

const CategoryManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [categoryToDeleteId, setCategoryToDeleteId] = useState("");

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories();
            setCategories(data);
        } catch (error) {
            console.error("failed to fetch categories")
        }
    };

    const handleEdit = (category: Category) => {
        setSelectedCategory(category);
        setIsModalOpen(!isModalOpen);
    };

    const handleDelete = (id: string) => {
        setCategoryToDeleteId(id);
        setIsDeleteModalOpen(!isDeleteModalOpen)
    };

    const handleDeleteConfirm = async () => {
        if (!isDeleteModalOpen) return;
        try {
            await deleteCategory(categoryToDeleteId);
            fetchCategories();
            toast.success("category deleted successfully");
        } catch (error) {
            console.error("failed to delete category ", error);
            toast.error("failed to delete category");
        }
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const handleClose = () => {
        setSelectedCategory(null);
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        fetchCategories();
    });
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
            <CategoryTable
                categories={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <CategoryModal
                category={selectedCategory}
                isOpen={isModalOpen}
                onClose={handleClose}
                onSuccess={fetchCategories}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    )
}

export default CategoryManagement;