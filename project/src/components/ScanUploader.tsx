import React, { useState, useRef } from 'react';
import { Upload, X, Image } from 'lucide-react';

interface ScanUploaderProps {
  onImageUpload: (file: File) => void;
}

const ScanUploader = ({ onImageUpload }: ScanUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      handleFile(uploadedFile);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      handleFile(uploadedFile);
    }
  };

  const handleFile = (uploadedFile: File) => {
    if (!uploadedFile.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    
    setFile(uploadedFile);
    setPreview(URL.createObjectURL(uploadedFile));
    onImageUpload(uploadedFile);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <div 
        className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
          dragActive 
            ? 'border-blue-400 bg-blue-900/10' 
            : 'border-gray-600 hover:border-gray-500'
        } ${file ? 'bg-gray-800/50' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
        
        {!file ? (
          <div className="flex flex-col items-center justify-center py-10">
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="mb-2 text-xl font-medium text-gray-300">
              Drag and drop your brain scan here
            </p>
            <p className="mb-4 text-sm text-gray-400">
              or click to browse files (PNG, JPG, DICOM)
            </p>
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Files
            </button>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={clearFile}
              className="absolute top-0 right-0 bg-gray-800 rounded-full p-1 shadow-md hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>
            <div className="flex flex-col items-center">
              {preview && (
                <div className="relative group mb-4 max-w-md mx-auto">
                  <img
                    src={preview}
                    alt="Brain scan preview"
                    className="max-h-96 rounded-md object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <div className="p-2 bg-gray-800 rounded-full">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              )}
              <p className="text-sm text-gray-300 truncate max-w-xs">
                {file.name}
              </p>
              <p className="text-xs text-gray-400">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanUploader;