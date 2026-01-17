"use client";

import Image from "next/image";
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const menuItems = [
        {
            name: "Products",
            icon: FiBox,
            link: "/admin/products"
        },
        {
            name: "Categories",
            icon: FiLayers,
            link: "/admin/categories"
        },
        {
            name: "Transactions",
            icon: FiShoppingCart,
            link: "/admin/transactions"
        },
        {
            name: "Bank Informations",
            icon: FiCreditCard,
            link: "/admin/bank-info"
        },
    ]
    return (
        <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
            <div className="py-8 px-14 border-b border-gray-200">
                <Image src="/images/logo-admin.svg" alt="Sporton Logo" width={215} height={36} />
            </div>
            <div className="flex flex-col gap-2 mt-12 p-5 ">
                {
                    menuItems.map((item, index) => {
                        const isActive = item.link === pathname;
                        return (
                            <Link
                                href={item.link}
                                key={index}
                                className={`flex gap-3 items-center px-4.5  py-3 duration-300 rounded-lg text-medium ${isActive ? "bg-primary-light text-primary" : "hover:bg-gray-200"}`}>
                                <item.icon size={24} />
                                <span>{item.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <Link href="/admin/login" className="flex gap-3 mt-auto font-medium py-3 px-4.5 mx-5 rounded-lg duration-300 hover:bg-gray-200 mb-10">
                <FiLogOut />
                Log Out
            </Link>
        </aside>
    )
}

export default Sidebar;