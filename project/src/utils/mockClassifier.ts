import { TumorClassification } from '../types';

// This function now makes an actual API call to the Flask backend
export const classifyImage = async (image: File): Promise<TumorClassification> => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await fetch('http://127.0.0.1:5000/classify', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to classify the image');
    }

    const result = await response.json();

    // Ensure that the timestamp is in Date format
    result.timestamp = new Date(result.timestamp);

    return result as TumorClassification;
  } catch (error) {
    console.error('Error classifying image:', error);
    throw error;
  }
};

// This function generates the report and triggers the download
export const exportResultAsReport = (classification: TumorClassification): void => {
  const reportContent = `
NeuroScan AI - Brain Tumor Classification Report
------------------------------------------------
Date: ${classification.timestamp.toLocaleDateString()}
Time: ${classification.timestamp.toLocaleTimeString()}

RESULTS:
Classification: ${classification.type}
Confidence: ${classification.confidence.toFixed(2)}%
Severity: ${classification.severity}
Region: ${classification.region}
${classification.type !== 'No Tumor' ? `Approximate Size: ${classification.size.toFixed(1)} mm` : ''}

DISCLAIMER:
This is an automated analysis and should be reviewed by a qualified medical professional.
This report is not a medical diagnosis.
  `;
  
  // Create a blob and trigger download
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `brain-scan-report-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
