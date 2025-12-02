import { Upload } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Image from 'next/image';
import { getServices } from '../../../../lib/services';
import { FillingSpinner } from './spinner';
import { CreateAssetPayloadItem } from '@sana/types/assets/assets';
import { image } from 'framer-motion/client';


export const UploadDropzone = (props: {
    type: string;
    uploadType: "PUBLIC" | "PRIVATE",
    assetOptions: Partial<CreateAssetPayloadItem>
    assetUploadHelper?: string | undefined
    onUploadComplete?: (imageUrl: string) => void
    initialImageUrl?: string
}) => {
    const services = getServices();
    const createAssetMutation = props.uploadType === "PRIVATE" ? services.asset.useCreatePrivateAssets : services.asset.useCreatePublicAssets
    const { mutateAsync: createAsset, isPending } = createAssetMutation({})
    const [uploadProgress, setUploadProgress] = useState<number | null>(null); // State for progress tracking
    const [isUploaded, setIsUploaded] = useState(false)
    const [imagePublicUrl, setImagePublicUrl] = useState<string>("")

    const onDrop = useCallback((acceptedFiles: File[]) => {
        handleUpload(acceptedFiles);
    }, []);

    useEffect(() => {
        console.log(imagePublicUrl)
        if (imagePublicUrl && props.onUploadComplete) {
            props.onUploadComplete(imagePublicUrl)
        }
    }, [imagePublicUrl]);

    useEffect(() => {
        if (props.initialImageUrl) {
            setImagePublicUrl(props.initialImageUrl)
            console.log(props.initialImageUrl)
        }
    }, [])

    const handleUpload = async (files: File[]) => {
        try {
            const file = files[0];
            if (!file) return;

            setUploadProgress(0);

            const createAssetsResp = await createAsset({
                assets: [
                    {
                        fileName: file.name,
                        type: props.type,
                        ...props.assetOptions
                    }
                ]
            })

            const createAssetsItem = createAssetsResp.assets[0]!
            await axios.put(createAssetsItem?.uploadUrl, file, {
                headers: {
                    'Content-Type': file.type,
                },
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(percentCompleted);
                        console.log(`Upload progress: ${percentCompleted}%`);
                    }
                },
            });

            setIsUploaded(true)
            setUploadProgress(null);
            setImagePublicUrl(createAssetsItem?.uploadUrl?.split("?")[0] || "")
            // props.onUploadComplete(createAssetsItem?.uploadUrl?.split("?")[0])

        } catch (error) {
            console.error('Upload failed:', error);
            setUploadProgress(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg'],
        },
        maxSize: 5242880, // 5MB
        multiple: false,
        noDrag: true,
    });

    return (
        <div
            {...getRootProps()}
            className={`w-full h-[250px] flex items-center justify-center py-2 border-2 border-dashed rounded-xl text-center transition-colors duration-300
        ${isDragActive ? 'border-primary-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
        >
            <input {...getInputProps()} />
            {isPending ? (
                <p className="text-gray-600 text-md">در حال دریافت کلید ...</p>
            ) : uploadProgress !== null ? (
                <div className="flex flex-col items-center">
                    <FillingSpinner progress={uploadProgress} />
                </div>
            ) : isDragActive ? (
                <p className="text-primary-500 text-md">فایل را اینجا رها کنید ...</p>
            ) : isUploaded || props.initialImageUrl ? <div className='relative h-full w-full rounded-2xl'>
                <Image className='rounded-2xl' src={imagePublicUrl} objectFit='contain' fill={true} alt={'visa image'} />
                <div className='absolute left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2'>
                    {props.initialImageUrl ? <div className='w-full bg-primary-400/50 border-[1px] flex flex-col items-center gap-y-1 hover:border-primary-400 hover:bg-primary-500 text-gray-400 p-1.5 rounded-lg'>
                        <Upload className='w-[15px] h-[15px]' />
                        <p className='text-[10px] -tracking-tighter'>برای آپلود تصویر جدید کلیک کنید</p>
                    </div> : ""}
                </div>
            </div> : (
                <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 rounded-full border-[6px] border-gray-100">
                        <Upload size={12} />
                    </div>
                    <p className="text-primary-500 font-base mt-3">برای آپلود کلیک کنید</p>
                    <p className="text-gray-600 text-[12px] mt-1">
                        {props.assetUploadHelper ? props.assetUploadHelper : "فرمت‌های مجاز : jpg, png, jpeg"} <br />
                    </p>
                </div>
            )}
        </div>
    );
};
