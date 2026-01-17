import { useRef, useState } from "react";
import Image from "next/image";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadPreview = {
    label?: string;
    value?: string | null;
    onChange: (file: File) => void;
    className?: string;
};

const ImageUploadPreview = ({ label, value, onChange, className }: TImageUploadPreview) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            onChange(file);
        }
    }
    const handleImageClick = () => {
        fileInputRef?.current?.click();
    }

    const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
    }

    return (
        <div className={className}>
            <div onClick={handleImageClick} className="border-2 border-dashed border-primary bg-primary/5 rounded-lg w-50 h-50 flex flex-col items-center justify-center">
                {
                    value ?
                        (
                            <div>
                                <Image
                                    src={value}
                                    alt="image preview"
                                    className="w-full h-full max-w-[199px] max-h-[199px] pt-[1px] object-cover rounded-lg" 
                                    width={190}
                                    height={190}
                                />
                            </div>
                        ) :
                        (
                            <>
                                <FiUploadCloud size={24} />
                                <span className="text-sm font-medium">Click to Upload</span>
                            </>
                        )
                }
                <input ref={fileInputRef} accept="image/*" type="file" className="hidden" onChange={handleFileChange} />
            </div>
        </div>
    )
}


export default ImageUploadPreview;