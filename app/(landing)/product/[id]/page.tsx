import Image from "next/image";
import ProductAction from '../../components/product-detail/product-action';
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
    params: Promise<{id:string}>;
}

const ProductDetails = async ({params}: TPageProps) => {
    const {id} = await params;

    const product = await getProductDetail(id);

    return (
        <main className="container mx-auto flex py-40 gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image
                    src={getImageUrl(product.imageUrl)}
                    alt={product.name}
                    width={550}
                    height={550}
                    className="aspect-square object-contain w-full" 
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-5xl font-bold mb-6">{product.name}</h1>
                <div className="py-2 px-6 bg-primary-light w-fit mb-5">Football</div>
                <p className="leading-loose mb-8">{product.description}
                </p>
                <div className="text-primary text-[32px] font-semibold mb-12">
                    {Intl.NumberFormat("id-ID", {style: 'currency', currency: 'IDR', maximumFractionDigits:3}).format(product.price)}
                </div>
                <ProductAction product={product} stock={product.stock}/>
            </div>
        </main>
    )
}

export default ProductDetails;