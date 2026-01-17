import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal"
import ImageUploadPreview from "../../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Title">
            <div className="flex flex-col gap-6">
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
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" name="productName" id="productName" placeholder="e. g. Product Name" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="price">Price (IDR)</label>
                                <input type="number" name="price" id="price" placeholder="0" />
                            </div>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <input type="number" name="stock" id="stock" placeholder="0" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" >
                                <option value="Running">Running</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex-col flex input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="min-h-11" rows={5} id="description" placeholder="Product detail" ></textarea>
                </div>
                <Button className="px-4 mt-3 ml-auto rounded-lg" variant="primary" size="small">Create Product</Button>
            </div>
        </Modal>
    )
}

export default ProductModal