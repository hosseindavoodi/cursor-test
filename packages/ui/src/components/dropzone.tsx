import React, { useEffect } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { Button } from "./button";
interface DropzoneProps {
  onFilesDrop?: (acceptedFiles: File[]) => void;
  accept?: Accept;
  multiple?: boolean;
  maxSize?: number; // in bytes
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFilesDrop,
  accept = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
  },
  maxSize = 5 * 1024 * 1024,
  multiple = false,
}) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    accept,
    maxSize,
    multiple: multiple, // Allow multiple files; set to false if single file only
  });

  useEffect(() => {
    if (onFilesDrop) {
      
      onFilesDrop(acceptedFiles as File[]);
    }
  }, [acceptedFiles]);

  return (
    <div className="border  border-dashed border-gray-300 rounded-[25px] h-[300px] p-5 text-center my-5">
      <div
        {...getRootProps()}
        className={`dropzone cursor-pointer h-full flex flex-col justify-center items-center transition-colors ${isDragActive ? "bg-gray-100" : ""}`}
      >
        <input {...getInputProps()} />
        {acceptedFiles.length <= 0 && (
          <>
            <Button className="px-5 rounded-full w-[96px] h-[40px] text-[14px] font-medium">انتخاب تصویر</Button>
            <p className="text-[14px] font-medium text-gray-500 mt-3">حجم مجاز : {maxSize / (1024 * 1024)} MB</p>
          </>
        )}
        {/* <p>Supported formats : {Object.keys(accept).join(", ")}</p> */}
        {acceptedFiles.length > 0 && (
          <div className="flex flex-wrap   h-full  gap-5 w-full">
            {acceptedFiles
              .map((file) => URL.createObjectURL(file))
              .map((preview) => (
                <div className="relative w-full h-full group">
                  <img
                    src={preview}
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                    <span className="text-white text-center font-semibold">ویرایش تصویر</span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Preview accepted files */}

      {/* Show rejections if any */}
      {/* {fileRejections.length > 0 && (
        <div className="mt-2 p-2.5 bg-red-50 rounded text-red-800">
          <h4>Rejected Files:</h4>
          <ul>
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name} - {errors[0].message}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Dropzone;
