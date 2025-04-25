import { TumorClassification } from '../types';

// This is a mock function that simulates the classification of a brain scan image
// In a real app, this would be replaced with an actual API call to a backend ML service
export const classifyImage = (image: File): Promise<TumorClassification> => {
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      // Generate a random tumor type
      const types = ['Meningioma', 'Glioma', 'Pituitary', 'No Tumor'] as const;
      const randomIndex = Math.floor(Math.random() * types.length);
      const type = types[randomIndex];
      
      // Generate random confidence score (70-100% for positive, 90-100% for negative)
      const confidence = type === 'No Tumor' 
        ? 90 + Math.random() * 10 
        : 70 + Math.random() * 30;
      
      // Determine severity based on type and confidence
      let severity: 'Low' | 'Medium' | 'High' | 'None';
      if (type === 'No Tumor') {
        severity = 'None';
      } else if (confidence > 90) {
        severity = 'High';
      } else if (confidence > 80) {
        severity = 'Medium';
      } else {
        severity = 'Low';
      }
      
      // Generate a size if there's a tumor
      const size = type === 'No Tumor' ? 0 : 5 + Math.random() * 45;
      
      // Generate random region of brain
      const regions = ['Frontal lobe', 'Temporal lobe', 'Parietal lobe', 'Occipital lobe', 'Cerebellum', 'Brainstem'];
      const region = type === 'No Tumor' ? 'N/A' : regions[Math.floor(Math.random() * regions.length)];
      
      resolve({
        id: Math.random().toString(36).substring(2, 15),
        type,
        confidence,
        severity,
        region,
        size,
        timestamp: new Date()
      });
    }, 2000); // 2 second delay to simulate processing
  });
};

export const exportResultAsReport = (classification: TumorClassification): void => {
  // In a real application, this would generate a PDF or other document format
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
  
  // Create a blob and download it
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