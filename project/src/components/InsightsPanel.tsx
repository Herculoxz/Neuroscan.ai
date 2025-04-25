import React from 'react';
import { TumorClassification, tumorTypeInfoMap } from '../types';
import { Info } from 'lucide-react';

interface InsightsPanelProps {
  classification: TumorClassification | null;
}

const InsightsPanel = ({ classification }: InsightsPanelProps) => {
  if (!classification) {
    return (
      <div className="w-full bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-center h-32 text-gray-400">
          <p className="text-center">Upload a brain scan to see insights</p>
        </div>
      </div>
    );
  }

  const tumorInfo = tumorTypeInfoMap[classification.type];

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center mb-4">
        <Info className="w-5 h-5 text-blue-400 mr-2" />
        <h2 className="text-xl font-semibold text-white">Medical Insights</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-white border-b border-gray-700 pb-2 mb-3">
            {tumorInfo.name}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {tumorInfo.description}
          </p>
        </div>
        
        {classification.type !== 'No Tumor' && (
          <>
            <div>
              <h3 className="text-md font-medium text-white mb-2">Common Symptoms</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {tumorInfo.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-white mb-2">Treatment Options</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {tumorInfo.treatments.map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-white mb-2">Prognosis</h3>
              <p className="text-gray-300">
                {tumorInfo.prognosis}
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-white mb-2">Risk Factors</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {tumorInfo.riskFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-md">
          <p className="text-sm text-blue-300">
            <strong>Important:</strong> This information is provided for educational purposes only and should not be used for diagnosis or treatment decisions. Always consult with a qualified healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;