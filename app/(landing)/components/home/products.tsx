"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button"
import { FiPlus } from "react-icons/fi";
import PriceFormatter from '../../../utils/price-formatter';
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hook/use-cart-store";

type TProductProps = {
    products: Product[]
};


const ProductsSection = ({products}: TProductProps) => {
    const {addItem} = useCartStore();

    const handleAddCart = (e: React.MouseEvent, product: Product)  => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    };

    return (
        <section id="product-section" className="mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">Our</span>{" "}<span>Product</span>
            </h2>
            <div className="grid grid-cols-4 container mx-auto">
                {products.map((product) => (
                    <Link href={`/product/${product._id} `} className="p-1.5 mb-8 bg-white hover:drop-shadow-xl duration-200" key={product._id}>
                        <div className="relative bg-primary-light aspect-square w-full flex justify-center items-center">
                            <Image
                                src={getImageUrl(product.imageUrl)}
                                width={300}
                                height={300}
                                alt={product.name} 
                                className="aspect-square object-contain"
                            />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3" onClick={(e) => handleAddCart(e, product)}>
                                <FiPlus size={24} />
                            </Button>
                        </div>
                            <h3 className="font-medium  text-lg mb-1.5 mt-4">{product.name}</h3>
                            <div className="flex justify-between mb-8">
                                <div className="text-gray">
                                    {product.category.name}
                                </div>
                                <div className="text-primary font-medium">
                                    {PriceFormatter(product.price)}
                                </div>
                            </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default ProductsSection;