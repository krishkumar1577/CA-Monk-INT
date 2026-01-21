// Type definition for Blog entity
// This ensures type safety across the application
export interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}