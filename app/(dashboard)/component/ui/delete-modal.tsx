import Button from "@/app/(landing)/components/ui/button";
import Modal from "./modal";


type TDeleteModal = {
    isOpen : boolean; 
    onClose : () => void; 
    onConfirm : () => void;
}
const DeleteModal = ({onClose, isOpen, onConfirm}: TDeleteModal) => {

    return (
        <Modal onClose={onClose} isOpen={isOpen} title="Delete Item">
            <p>Are you sure want to delete this item? If you click delete, it will permanetly removed.</p>
            <div className="flex gap-5 mt-5">
                <Button variant="ghost" onClick={onClose} className="w-full rounded-md">Cancel</Button>
                <Button className="w-full rounded-md" onClick={onConfirm} >Yes, Delete it</Button>
            </div>
        </Modal>
    )
} 

export default DeleteModal;