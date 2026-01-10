import Image from "next/image";
import ProductAction from '../../components/product-detail/product-action';

const ProductDetails = () => {
    return (
        <main className="container mx-auto flex py-40 gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image
                    src='/images/products/product-4.png'
                    alt="Product Image"
                    width={550}
                    height={550}
                    className="aspect-square object-contain w-full" 
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-5xl font-bold mb-6">SportOn HyperSoccer v2</h1>
                <div className="py-2 px-6 bg-primary-light w-fit mb-5">Football</div>
                <p className="leading-loose mb-8">The SportsOn HyperSoccer v2 is engineered for the player who demands 
                    precision, power, and unrivaled speed on the pitch. Featuring a striking, 
                    two-toned black and white design with deep crimson accents, these cleats 
                    don't just perform—they make a statement. Experience the future of football 
                    footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary text-[32px] font-semibold mb-12">
                    {Intl.NumberFormat("id-ID", {style: 'currency', currency: 'IDR', maximumFractionDigits:3}).format(458000)}
                </div>
                <ProductAction />
            </div>
        </main>
    )
}

export default ProductDetails;