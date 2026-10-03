interface Alumnus {
  id: number;
  name: string;
  graduationYear: number;
  degree: string;
  branch: string;
  currentRole: string;
  company: string;
  location: string;
  image: string;
  bio: string;
  links: {
    linkedin: string;
    github: string;
  };
}