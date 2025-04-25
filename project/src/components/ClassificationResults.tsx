import React from 'react';
import { TumorClassification } from '../types';
import { AlertCircle, Check, Download, AlertTriangle } from 'lucide-react';
import { exportResultAsReport } from '../utils/mockClassifier';

interface ClassificationResultsProps {
  classification: TumorClassification | null;
  isLoading: boolean;
}

const ClassificationResults = ({ classification, isLoading }: ClassificationResultsProps) => {
  if (isLoading) {
    return (
      <div className="w-full bg-gray-800 rounded-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-3/5 mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-2/5"></div>
      </div>
    );
  }

  if (!classification) {
    return (
      <div className="w-full bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-center h-32 text-gray-400">
          <p className="text-center">Upload a brain scan to see classification results</p>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    if (classification.type === 'No Tumor') return 'text-green-400';
    switch (classification.severity) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = () => {
    if (classification.type === 'No Tumor') {
      return <Check className="w-6 h-6 text-green-400" />;
    }
    
    switch (classification.severity) {
      case 'High': 
        return <AlertCircle className="w-6 h-6 text-red-400" />;
      case 'Medium':
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case 'Low':
        return <AlertTriangle className="w-6 h-6 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          {getStatusIcon()}
          <span className="ml-2">Classification Results</span>
        </h2>
        <button
          onClick={() => exportResultAsReport(classification)}
          className="flex items-center text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
        >
          <Download className="w-4 h-4 mr-1" />
          Export
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-750 rounded-md p-4">
          <h3 className="text-sm text-gray-400 mb-1">Classification</h3>
          <p className={`text-lg font-medium ${getStatusColor()}`}>
            {classification.type}
          </p>
        </div>
        
        <div className="bg-gray-750 rounded-md p-4">
          <h3 className="text-sm text-gray-400 mb-1">Confidence</h3>
          <div className="flex items-center">
            <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
              <div 
                className={`h-2.5 rounded-full ${
                  classification.confidence > 90 ? 'bg-green-500' : 
                  classification.confidence > 80 ? 'bg-blue-500' : 
                  classification.confidence > 70 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`} 
                style={{ width: `${classification.confidence}%` }}
              ></div>
            </div>
            <span className="text-white font-medium">{classification.confidence.toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="bg-gray-750 rounded-md p-4">
          <h3 className="text-sm text-gray-400 mb-1">Region</h3>
          <p className="text-white">{classification.region}</p>
        </div>
        
        <div className="bg-gray-750 rounded-md p-4">
          <h3 className="text-sm text-gray-400 mb-1">Severity</h3>
          <p className={`
            ${classification.severity === 'High' ? 'text-red-400' : 
              classification.severity === 'Medium' ? 'text-yellow-400' : 
              classification.severity === 'Low' ? 'text-blue-400' : 
              'text-green-400'}
          `}>
            {classification.severity}
          </p>
        </div>
      </div>
      
      {classification.type !== 'No Tumor' && (
        <div className="bg-gray-750 rounded-md p-4 mb-4">
          <h3 className="text-sm text-gray-400 mb-1">Approximate Size</h3>
          <p className="text-white">{classification.size.toFixed(1)} mm</p>
        </div>
      )}
      
      <div className="text-xs text-gray-400 mt-2">
        <p>Analysis completed on {classification.timestamp.toLocaleString()}</p>
        <p className="mt-1 italic">
          Note: This is an automated analysis and should be reviewed by a qualified medical professional.
        </p>
      </div>
    </div>
  );
};

export default ClassificationResults;