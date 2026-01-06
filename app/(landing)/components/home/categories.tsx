import Link from "next/link"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi";
import products from "./products";

const categoryList = [
    {
        name: 'Running',
        imgUrl: 'category-running.png'
    },
    {
        name: 'Tennis',
        imgUrl: 'category-tennis.png'
    },
    {
        name: 'Basketball',
        imgUrl: 'category-basketball.png'
    },
    {
        name: 'Football',
        imgUrl: 'category-football.png'
    },
    {
        name: 'Badminton',
        imgUrl: 'category-badminton.png'
    },
    {
        name: 'Swimming',
        imgUrl: 'category-swimming.png'
    },
]

const Categories = () => {
    return (
        <section id="categories-section" className="container mx-auto pb-20">
            <div className="flex justify-between">
                <h2 className="font-bold text-2x1">Browse By Categories</h2>
                <Link href="#" className="flex gap-2 text-primary font-medium">
                    See All Categories
                    <FiArrowRight className="self-center" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-12">
                {categoryList.map((category, index) =>
                (
                    <div key={index} className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center">
                        <div className="self-center">
                            <Image
                                src={`/images/categories/${category.imgUrl}`}
                                width={86}
                                height={86}
                                alt={""} 
                                className="mb-[10px]"
                            />
                            <div className="text-primary font-medium text-xl text-center">{category.name}</div>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default Categories;