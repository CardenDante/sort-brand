// types/contact.ts
export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
  read_status: boolean;
}