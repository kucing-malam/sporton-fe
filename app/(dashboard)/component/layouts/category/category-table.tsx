"use client";
import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";


const CategoryTable = () => {
    const datas = [
        {
            name: "Badminton",
            description: 'Badminton is category',
            imageUrl: "/images/categories/category-badminton.png"
        },
        {
            name: "Running",
            description: 'Running is category',
            imageUrl: "/images/categories/category-running.png"
        },
        {
            name: "Basketball",
            description: 'Basketball is category',
            imageUrl: "/images/categories/category-basketball.png"
        },
        {
            name: "Swimming",
            description: 'Swimming is category',
            imageUrl: "/images/categories/category-swimming.png"
        },
        {
            name: "Football",
            description: 'Football is category',
            imageUrl: "/images/categories/category-football.png"
        }
    ]
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
                        datas.map((category, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square bg-gray-100 rounded-md ">
                                            <Image
                                                src={category.imageUrl}
                                                alt={category.name}
                                                height="52"
                                                width="52"
                                                className="aspect-square object-contain"
                                            ></Image>
                                        </div>
                                        <span>{category.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{category.description} Units</td>
                                <td className="px-6 py-8 items-center flex h-full">
                                    <div className="flex gap-3">
                                        <button>
                                            <FiEdit2 className="cursor-pointer" size={20} />
                                        </button>
                                        <button>
                                            <FiTrash2 className="cursor-pointer" size={20} />
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