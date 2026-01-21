"use client";
import { getImageUrl } from "@/app/lib/api";
import { Product } from "@/app/types";
import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TProductTableProps = {
    products: Product[];
    onDelete?: (id: string) => void;
    onEdit?: (product: Product) => void;
}

const ProductTable = ({ products, onDelete, onEdit }: TProductTableProps) => {

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square bg-gray-100 rounded-md ">
                                            <Image
                                                src={getImageUrl(product.imageUrl)}
                                                alt={product.name}
                                                height="52"
                                                width="52"
                                                className="aspect-square object-contain"
                                                unoptimized={true}
                                            ></Image>
                                        </div>
                                        <span>{product.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <div className="py-1 w-fit bg-gray-200 rounded-md px-2">
                                        {product.category.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{PriceFormatter(product.price)}</td>
                                <td className="px-6 py-4 font-medium">{product.stock} Units</td>
                                <td className="px-6 py-8 items-center flex h-full">
                                    <div className="flex gap-3">
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => onEdit?.(product)}>
                                            <FiEdit2 size={20} />
                                        </button>
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => onDelete?.(product._id)}>
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

export default ProductTable;