export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  category: "Full Stack" | "Backend";
}
