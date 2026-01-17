import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal";
import ImageUploadPreview from "../../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
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
                            <label htmlFor="categoryName">Category Name</label>
                            <input type="text" name="categoryName" id="categoryName" placeholder="e. g. Running" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" className="min-h-11" rows={4} id="description" placeholder="Category Detail" ></textarea>
                        </div>
                    </div>
                </div>
                <Button className="px-4 mt-3 ml-auto rounded-lg" variant="primary" size="small">Create Category</Button>
            </div>
        </Modal>
    )
}

export default CategoryModal