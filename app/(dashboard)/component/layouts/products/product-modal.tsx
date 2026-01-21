import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal"
import ImageUploadPreview from "../../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category, Product } from "@/app/types";
import { getAllCategories } from "@/app/services/category.service";
import { createProduct, updateProduct } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";
import { toast } from "react-toastify";

type TProductModalProps = {
    isOpen: boolean;
    product?: Product | null;
    onClose: () => void;
    onSuccess?: () => void;
};

type ProductFormData = {
    name: string;
    description: string;
    categoryId: string;
    stock: number;
    price: number;
}

const ProductModal = ({ isOpen, onClose, product, onSuccess }: TProductModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isSubmiting, setIsSubmiting] = useState(false);

    const [formData, setFormData] = useState<ProductFormData>({
        name: "",
        description: "",
        categoryId: "",
        stock: 0,
        price: 0
    })

    const isEditMode = !!product;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmiting(true);
        try {
            const data = new FormData;
            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("categoryId", formData.categoryId);
            data.append("stock", formData.stock.toString());
            data.append("price", formData.price.toString());
            if (imageFile) {
                data.append("image", imageFile);
            }
            if (product) {
                await updateProduct(product._id, data);
            } else {
                await createProduct(data);
            }

            // Reset FormData
            setFormData({
                name: "",
                description: "",
                categoryId: "",
                stock: 0,
                price: 0
            });
            setImageFile(null);
            setImagePreview(null);

            toast.success(isEditMode ? "Product updated successfully" : "Product created successfully");

            onSuccess?.();
            onClose?.();
        } catch (error) {
            console.error(isEditMode ? "failed to update product" : "failed to create product");
            toast.error(isEditMode ? "failed to update product" : "failed to create product");
        } finally {
            setIsSubmiting(false);
        }
    }

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories();
            if (data) {
                setCategories(data);
            }
        } catch (error) {
            console.error("failed to fetch categories ", error);
        }
    }

    useEffect(() => {
        if (isOpen && isEditMode) {
            setFormData({
                name: product.name,
                description: product.description,
                categoryId: product.category._id,
                stock: product.stock,
                price: product.price,
            })
            setImagePreview(product.imageUrl ? getImageUrl(product.imageUrl) : null)
        } else if (isOpen) {
            setFormData({
                name: "",
                description: "",
                categoryId: "",
                stock: 0,
                price: 0
            });
            setImageFile(null);
            setImagePreview(null);
        }

    }, [isOpen, product]);


    useEffect(() => {
        fetchCategories();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? "Edit Product" : "Add Product"}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex gap-7">
                    <div className="min-w-50 aspect-square">
                        <ImageUploadPreview
                            label="Product image"
                            onChange={(file) => {
                                setImageFile(file)
                                setImagePreview(URL.createObjectURL(file))
                            }}
                            value={imagePreview} />
                    </div>
                    <div className="flex-col flex gap-4 w-full input-group-admin">
                        <div>
                            <label htmlFor="name">Product Name</label>
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="e. g. Product Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="price">Price (IDR)</label>
                                <input
                                    value={formData.price}
                                    onChange={handleChange}
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="1000"
                                />
                            </div>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <input
                                    value={formData.stock}
                                    onChange={handleChange}
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    placeholder="1000"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="categoryId">Category</label>
                            <select name="categoryId" id="categoryId" onChange={handleChange}>
                                <option value="" disabled>Select Catagory</option>
                                {
                                    categories.map((category) => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex-col flex input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        className="min-h-11"
                        rows={5} 
                        id="description"
                        placeholder="Product detail"
                        value={formData.description}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <Button
                    className="px-4 mt-3 ml-auto rounded-lg"
                    variant="primary"
                    type="submit"
                    disabled={isSubmiting}
                    size="small"
                >
                    {
                        isEditMode ? "Update Product" : "Create Product"
                    }
                </Button>
            </form>
        </Modal>
    )
}

export default ProductModal