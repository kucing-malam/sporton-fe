import Button from "@/app/(landing)/components/ui/button";
import Modal from "../../ui/modal";
import { useEffect, useState } from "react";
import { Bank } from "@/app/types";
import { createBankOption, updateBankOption } from "@/app/services/bank.service";
import { toast } from "react-toastify";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    bank?: Bank | null;
    onSuccess: () => void;
};

type bankFormData = {
    bankName: string;
    accountName: string;
    accountNumber: string;
};

const BankInfoModal = ({ isOpen, onClose, onSuccess, bank }: TBankInfoModalProps) => {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [formData, setFormData] = useState<bankFormData>({
        bankName: "",
        accountName: "",
        accountNumber: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const isEditMode = !!bank;
    useEffect(() => {
        if (isEditMode && isOpen) {
            setFormData({
                bankName: bank?.bankName,
                accountName: bank?.accountName,
                accountNumber: bank?.accountNumber
            });
        }
        else if (isOpen) {
            setFormData({
                bankName: "",
                accountName: "",
                accountNumber: ""
            });
        }
    }, [isOpen, bank]);

    const handleSubmit = async () => {
        setIsSubmiting(true);
        try {
            if (isEditMode && isOpen) {
                await updateBankOption(bank._id, formData);
            }
            else if (isOpen) {
                await createBankOption(formData);
            }

            // Reset FormData
            setFormData({
                bankName: "",
                accountName: "",
                accountNumber: ""
            });

            toast.success(isEditMode ? "Bank updated successfully" : "Bank create successfully");

            onSuccess?.();
            onClose?.();
        } catch (error) {
            console.error(isEditMode ? "failed to updated bank" : "failed to create bank");
            toast.error(isEditMode ? "failed to updated bank" : "failed to create bank");
        } finally {
            setIsSubmiting(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <div className="flex flex-col gap-6">
                <div className="flex-col flex gap-4 w-full input-group-admin">
                    <div>
                        <label htmlFor="bankName">Bank Name</label>
                        <input
                            type="text"
                            name="bankName"
                            id="bankName"
                            placeholder="e. g. Bank Name"
                            value={formData.bankName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="accountName">Account Name</label>
                        <input
                            type="text"
                            name="accountName"
                            id="accountName"
                            placeholder="e. g. Account Name"
                            value={formData.accountName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="accountNumber">Account Number</label>
                        <input
                            type="text"
                            name="accountNumber"
                            id="accountNumber"
                            placeholder="e. g. Account Holder"
                            value={formData.accountNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Button
                    className="px-4 mt-3 ml-auto rounded-lg"
                    variant="primary"
                    size="small"
                    onClick={handleSubmit}
                    disabled={isSubmiting}
                >
                    {
                        isEditMode ? "Update Bank Account" : "Add Bank Account"
                    }
                </Button>
            </div>
        </Modal>
    )
};

export default BankInfoModal;