import React, { useState } from 'react';
import ScanUploader from '../components/ScanUploader';
import ClassificationResults from '../components/ClassificationResults';
import InsightsPanel from '../components/InsightsPanel';
import AnalyzeButton from '../components/AnalyzeButton';
import { TumorClassification } from '../types';
import { classifyImage } from '../utils/mockClassifier';
import { Brain } from 'lucide-react';

const BrainScanAnalyzer = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [classification, setClassification] = useState<TumorClassification | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    setIsAnalyzed(false);
  };

  const handleAnalyze = async () => {
    if (!uploadedImage) return;
    
    setIsLoading(true);
    try {
      const result = await classifyImage(uploadedImage);
      setClassification(result);
      setIsAnalyzed(true);
    } catch (error) {
      console.error('Classification error:', error);
      // Here you would handle errors appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <Brain className="w-12 h-12 text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Brain Tumor Classification</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Upload a brain MRI scan to automatically detect and classify potential tumors. 
          Our AI algorithm provides rapid analysis with detailed medical insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Upload Brain Scan</h2>
            <ScanUploader onImageUpload={handleImageUpload} />
            <AnalyzeButton 
              onClick={handleAnalyze} 
              disabled={!uploadedImage || isAnalyzed} 
              isLoading={isLoading} 
            />
          </div>
          
          <ClassificationResults 
            classification={classification}
            isLoading={isLoading} 
          />
        </div>
        
        <div>
          <InsightsPanel classification={classification} />
        </div>
      </div>
    </div>
  );
};

export default BrainScanAnalyzer;