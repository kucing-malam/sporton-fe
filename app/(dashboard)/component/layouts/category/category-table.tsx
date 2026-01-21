"use client";

import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategoryTableProps = {
    categories: Category[];
    onEdit? : (category: Category) => void; 
    onDelete? : (id: string) => void; 
};

const CategoryTable = ({categories, onEdit, onDelete}: TCategoryTableProps) => {

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category Name</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category) => (
                            <tr key={category._id} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square bg-gray-100 rounded-md ">
                                            <Image
                                                src={getImageUrl(category.imageUrl)}
                                                alt={category.name}
                                                height="52"
                                                width="52"
                                                className="aspect-square object-contain"
                                                unoptimized={true}
                                             ></ Image>
                                        </div>
                                        <span>{category.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{category.description}</td>
                                <td className="px-6 py-8 items-center flex h-full">
                                    <div className="flex gap-3">
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => onEdit?.(category)}>
                                            <FiEdit2 size={20} />
                                        </button>
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => onDelete?.(category._id)}>
                                            <FiTrash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTable;