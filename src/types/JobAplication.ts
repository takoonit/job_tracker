export interface JobApplication {
    id: string;
    jobTitle: string;
    company: string;
    contactPerson: string;
    expectedSalary: number;
    dateApplied: Date;
    status: string;
    statusDetails?: string;
  }
  