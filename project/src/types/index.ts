export interface TumorClassification {
  id: string;
  type: 'Meningioma' | 'Glioma' | 'Pituitary' | 'No Tumor';
  confidence: number;
  severity: 'Low' | 'Medium' | 'High' | 'None';
  region: string;
  size: number; // in mm
  timestamp: Date;
}

export interface TumorTypeInfo {
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  prognosis: string;
  riskFactors: string[];
}

export const tumorTypeInfoMap: Record<string, TumorTypeInfo> = {
  'Meningioma': {
    name: 'Meningioma',
    description: 'Meningiomas are tumors that arise from the meninges — the membranes that surround the brain and spinal cord. Most meningiomas are benign (not cancerous) and slow-growing.',
    symptoms: [
      'Headaches',
      'Seizures',
      'Blurred vision',
      'Weakness in arms or legs',
      'Numbness',
      'Language difficulty'
    ],
    treatments: [
      'Observation with regular imaging',
      'Surgical removal',
      'Radiation therapy',
      'Stereotactic radiosurgery'
    ],
    prognosis: 'Generally favorable. Most meningiomas are grade I and have a 5-year survival rate of over 80%.',
    riskFactors: [
      'Previous radiation to the head',
      'Neurofibromatosis type 2',
      'Female gender (more common in women)',
      'Increasing age'
    ]
  },
  'Glioma': {
    name: 'Glioma',
    description: 'Gliomas are tumors that occur in the brain and spinal cord. They begin in the glial cells that surround and support nerve cells. They range from low grade (slow growing) to high grade (rapid growth).',
    symptoms: [
      'Headaches',
      'Nausea and vomiting',
      'Seizures',
      'Memory loss',
      'Personality changes',
      'Progressive neurological deficits'
    ],
    treatments: [
      'Surgery',
      'Radiation therapy',
      'Chemotherapy',
      'Targeted therapy',
      'Tumor Treating Fields (TTF) therapy'
    ],
    prognosis: 'Varies widely depending on the grade and type. Low-grade gliomas may have a 5-year survival rate around 70%, while high-grade gliomas like glioblastoma have a much lower prognosis.',
    riskFactors: [
      'Ionizing radiation exposure',
      'Family history of glioma',
      'Genetic syndromes (rare)',
      'Age (more common in adults 45-65)'
    ]
  },
  'Pituitary': {
    name: 'Pituitary Tumor',
    description: 'Pituitary tumors are abnormal growths that develop in the pituitary gland, located at the base of the brain. Most are benign and classified as adenomas. They can affect hormone production.',
    symptoms: [
      'Headaches',
      'Vision problems',
      'Hormone imbalances',
      'Fatigue',
      'Sexual dysfunction',
      'Unexplained weight changes'
    ],
    treatments: [
      'Medication to control hormone production',
      'Transsphenoidal surgery',
      'Radiation therapy',
      'Stereotactic radiosurgery'
    ],
    prognosis: 'Generally good. Most pituitary adenomas are benign and treatable. The 5-year survival rate is over 80%.',
    riskFactors: [
      'Multiple Endocrine Neoplasia type 1 (MEN1)',
      'Carney Complex',
      'Familial Isolated Pituitary Adenoma',
      'McCune-Albright syndrome'
    ]
  },
  'No Tumor': {
    name: 'No Tumor Detected',
    description: 'No evidence of tumor presence in the brain scan image.',
    symptoms: [
      'Not applicable'
    ],
    treatments: [
      'Not applicable'
    ],
    prognosis: 'Favorable - no tumor detected.',
    riskFactors: [
      'Not applicable'
    ]
  }
};