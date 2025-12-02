import { LucideLoader2 } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({
  onDrop,
  className,
  isUploading,
  previewUrl,
  disabled,
}: {
  onDrop: (files: File[]) => void;
  className: string;
  isUploading?: boolean;
  previewUrl?: string;
  disabled?: boolean;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);

      console.log(acceptedFiles);
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0] as File;
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      }
    },
    [onDrop]
  );

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop: onDropCallback,
    multiple: true,
    disabled: disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={`${className} ${disabled && "pointer-events-none"} flex flex-col  relative justify-center border border-gray-300 border-dashed h-full rounded-lg p-2 text-center cursor-pointer transition-colors
        ${!disabled && isDragActive ? "border-primary-500 bg-primary-50" : "border-gray-300 bg-gray-50"}
        hover:border-primary-400 hover:bg-primary-50`}
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <>
          <LucideLoader2
            size={30}
            className="text-gray-600 absolute left-1/2 -translate-x-1/2 animate-spin"
          />
        </>
      ) : (
        <>
          {preview || previewUrl ? (
            <div className="relative w-full  h-full">
              <Image
                className="rounded-md  "
                src={preview || previewUrl!} // Use local preview if available, else fallback to prop
                alt="Selected image"
                fill
                priority
              />
            </div>
          ) : (
            <>
              {isDragActive ? (
                <p className="text-primary-500 font-medium">تصویر را اینجا رها کنید</p>
              ) : (
                <p className="text-gray-600">انتخاب تصویر</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Dropzone;
