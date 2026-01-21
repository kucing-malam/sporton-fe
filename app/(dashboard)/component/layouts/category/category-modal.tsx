import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal";
import ImageUploadPreview from "../../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { createCategory, updateCategory } from "@/app/services/category.service";
import { getImageUrl } from "@/app/lib/api";
import { toast } from "react-toastify";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
    category: Category | null;
    onSuccess: () => void;
};

type categoryFormData = {
    name: string;
    description: string;
};

const CategoryModal = ({ isOpen, onClose, category, onSuccess }: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<categoryFormData>({
        name: "",
        description: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const isEditMode = !!category;
    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const data = new FormData;
            data.append("name", formData.name);
            data.append("description", formData.description);
            if (imageFile) {
                data.append("image", imageFile);
            }
            if (category) {
                await updateCategory(category._id, data);
            } else {
                await createCategory(data);
            }
            toast.success(isEditMode ? "Category updated successfully" : "Category create successfully");

            // Reset FormData
            setFormData({
                name: "",
                description: ""
            });
            setImageFile(null);
            setImagePreview(null);

            onSuccess?.();
            onClose?.();
        } catch (error) {
            console.error(isEditMode ? "failed to update category" : "failed to create category");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (isOpen && isEditMode) {
            setFormData({
                name: category.name,
                description: category.description
            });
            setImagePreview(category.imageUrl ? getImageUrl(category.imageUrl) : null);
        } else if (isOpen) {
            setFormData({
                name: "",
                description: ""
            });
            setImageFile(null);
            setImagePreview(null);
        }
    }, [isOpen, category]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? "Edit category" : "Add Category"}>
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
                            <label htmlFor="name">Category Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e. g. Running"
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                className="min-h-11"
                                rows={4}
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Category Detail"
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="px-4 mt-3 ml-auto rounded-lg"
                    variant="primary"
                    size="small"
                >
                    {
                        isEditMode ? "Update category" : "Create Category"
                    }
                </Button>
            </form>
        </Modal>
    )
}

export default CategoryModal