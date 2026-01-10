import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button"
import { FiPlus } from "react-icons/fi";
import PriceFormatter from '../../../utils/price-formatter';

const ProductsSection = () => {

    const productList = [
        {
            name: 'SportOn Hyperfast Shoes',
            category: 'Running',
            price: 329000,
            imgUrl: 'product-3.png'
        },
        {
            name: 'SportOn Rocket Tenis',
            category: 'Tennis',
            price: 999000,
            imgUrl: 'product-2.png'
        },
        {
            name: 'SportOn Slowlivin',
            category: 'Running',
            price: 119000,
            imgUrl: 'product-1.png'
        },
        {
            name: 'SportOn HyperSoccer',
            category: 'Football',
            price: 458000,
            imgUrl: 'product-4.png'
        },
        {
            name: 'SportOn HyperSoccer v2',
            category: 'Football',
            price: 458000,
            imgUrl: 'product-4.png'
        },
        {
            name: 'SportOn Slowlivin',
            category: 'Running',
            price: 119000,
            imgUrl: 'product-1.png'
        },
        {
            name: 'SportOn HyperFast Shoes',
            category: 'Running',
            price: 329000,
            imgUrl: 'product-3.png'
        },
        {
            name: 'SportOn Rocket Tenis',
            category: 'Tennis',
            price: 999000,
            imgUrl: 'product-2.png'
        },
    ];

    return (
        <section id="product-section" className="mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">Our</span>{" "}<span>Product</span>
            </h2>
            <div className="grid grid-cols-4 container mx-auto">
                {productList.map((product, index) => (
                    <Link href={`/product/${product.name} `} className="p-1.5 mb-8 bg-white hover:drop-shadow-xl duration-200" key={index}>
                        <div className="relative bg-primary-light aspect-square w-full flex justify-center items-center">
                            <Image
                                src={`/images/products/${product.imgUrl}`}
                                width={300}
                                height={300}
                                alt={product.name} 
                                className="aspect-square object-contain"
                            />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                        </div>
                            <h3 className="font-medium  text-lg mb-1.5 mt-4">{product.name}</h3>
                            <div className="flex justify-between mb-8">
                                <div className="text-gray">
                                    {product.category}
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