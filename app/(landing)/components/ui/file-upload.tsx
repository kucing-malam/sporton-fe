"use client";

import { useState, useRef } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
    onFileSelect?: (file: File | null) => void;
}
const FileUpload = ({ onFileSelect }: TFileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const handleFileChange = (selectedFile?: File) => {
        if (!selectedFile) return;

        setFile(selectedFile);
        onFileSelect?.(selectedFile);
    }

    const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
        onFileSelect?.(null);
    }

    return (
        <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault()
                handleFileChange(e.dataTransfer.files?.[0])
            }}
            className="flex flex-col justify-center items-center border border-dashed w-full py-6 border-primary bg-primary-light">
            <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files?.[0])} />
            {
                !file ?
                    <div className="text-center my-5">
                        <FiUploadCloud className="text-primary mx-auto" />
                        <p>Upload Your Payment Receipt</p>
                    </div> :
                    <div className="text-center">
                        <FiImage className="text-primary mx-auto mb-4" size={28}/>
                        <p className="text-primary text-sm">{file.name}</p>
                        <p className="text-gray-400 text-sm">{(file.size / 1024).toFixed(1)}KB</p>
                        <button
                            onClick={removeFile}
                            className="flex cursor-pointer items-center px-2 gap-2 bg-primary/90 text-white mx-auto rounded mt-4">
                            <FiTrash2 size={14} />Remove
                        </button>
                    </div>
            }
        </div>
    )
}

export default FileUpload