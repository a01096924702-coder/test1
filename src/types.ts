export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  subAnswer?: string;
  category?: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface EligibilityForm {
  residence: 'resident' | 'non_resident';
  familyCount: number;
  isVulnerable: boolean;
}

export interface ApplicationForm {
  name: string;
  ssnFront: string;
  phone: string;
  familyCount: number;
  paymentMethod: string;
  termsAccepted: boolean;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}
