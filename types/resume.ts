export interface ContactInfo {
  name: string;
  phone: string;
  location: string;
  email: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Award {
  title: string;
  date: string;
}

export interface Impact {
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  responsibilities: string[];
  impact?: Impact[];
  awards?: Award[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
}

export interface AdditionalInfo {
  highlights: string[];
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education;
  additionalInfo: AdditionalInfo;
}
