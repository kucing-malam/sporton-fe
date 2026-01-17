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
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <div className="flex flex-col gap-6">
                <div className="flex-col flex gap-4 w-full input-group-admin">
                    <div>
                        <label htmlFor="bankName">Bank Name</label>
                        <input type="text" name="bankName" id="bankName" placeholder="e. g. Bank Name" />
                    </div>
                    <div>
                        <label htmlFor="accountName">Account Name</label>
                        <input type="text" name="accountName" id="accountName" placeholder="e. g. Account Name" />
                    </div>
                    <div>
                        <label htmlFor="accountHolder">Account Holder</label>
                        <input type="text" name="accountHolder" id="accountHolder" placeholder="e. g. Account Holder" />
                    </div>
                </div>
                <Button className="px-4 mt-3 ml-auto rounded-lg" variant="primary" size="small">Add Bank Account</Button>
            </div>
        </Modal>
    )
}

export default ProductModal