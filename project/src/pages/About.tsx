import React from 'react';
import { Brain, Upload, Search, FileText } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <Brain className="w-12 h-12 text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">About NeuroScan AI</h1>
        <p className="text-gray-400">
          NeuroScan AI is an advanced brain tumor classification system that helps medical professionals
          streamline their diagnostic process using artificial intelligence.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
          <div className="grid gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <Upload className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">1. Upload Scan</h3>
                <p className="text-gray-400">
                  Upload your brain MRI scan in common image formats (PNG, JPG) or DICOM format.
                  Ensure the scan is clear and properly oriented.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">2. Analyze</h3>
                <p className="text-gray-400">
                  Click the "Analyze Scan" button and wait for our AI to process the image.
                  The analysis typically takes a few seconds to complete.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">3. Review Results</h3>
                <p className="text-gray-400">
                  Review the classification results and medical insights. You can export the results
                  as a report for your records.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Important Notes</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              This tool is designed to assist medical professionals and should not be used as the sole basis for diagnosis.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              All analyses should be verified by qualified healthcare providers.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              The system can detect and classify common types of brain tumors: Meningioma, Glioma, and Pituitary tumors.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              For optimal results, use high-quality MRI scans in standard formats.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;