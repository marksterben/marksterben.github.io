export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "mrs-serafi",
    title: "MRS Serafi",
    description:
      "Company profile & catalog website built on a classic CodeIgniter MVC stack.",
    techStack: ["CodeIgniter 3", "PHP", "MySQL"],
    image: "/img/portfolio/mrsserafi.png",
    url: "https://mrsserafi.com/",
  },
  {
    slug: "item-list",
    title: "Item List",
    description:
      "A full MERN-stack CRUD app for tracking inventory items in real time.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/img/portfolio/item_list.png",
    url: "https://marksterben-item-list.netlify.app/",
  },
  {
    slug: "emoji-searcher",
    title: "Emoji Searcher",
    description:
      "A snappy React app for searching and copying emojis by keyword.",
    techStack: ["React.js"],
    image: "/img/portfolio/emoji_searcher.png",
    url: "https://marksterben-emoji-searcher.netlify.app/",
  },
  {
    slug: "toko-gantengin",
    title: "Toko Gantengin",
    description:
      "An e-commerce storefront built with Laravel and reactive Livewire components.",
    techStack: ["Laravel", "Livewire"],
    image: "/img/portfolio/gantengin.png",
    url: "http://marksterben-gantengin.herokuapp.com/",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

// ponytail: placeholder skills, replace with the real list once supplied
export const skillGroups: SkillGroup[] = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Backend", skills: ["Node.js", "PHP", "Laravel", "Express"] },
  { category: "Database", skills: ["MySQL", "MongoDB"] },
  { category: "Tools", skills: ["Git", "Docker"] },
];

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

// ponytail: placeholder timeline, replace with the real work history once supplied
export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    organization: "Freelance",
    period: "2021 — Present",
    description:
      "Building web and Android applications for clients across various industries.",
  },
  {
    role: "Web Developer",
    organization: "Placeholder Company",
    period: "2020 — 2021",
    description: "Developed and maintained internal web tools and websites.",
  },
];

export const profile = {
  name: "Marcellino",
  role: "Software Engineer",
  location: "Palembang, South Sumatra",
  bio: "Hi, I'm Marcel — a software engineer based in Palembang with a strong foundation in web and Android development. I enjoy solving problems and picking up new things in tech.",
  avatar: "/img/avatar.png",
};

export const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/6282233855882", icon: "whatsapp" },
  { label: "GitHub", href: "https://github.com/marksterben", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcellino-marcellino-b7367a142/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/marcellino2103",
    icon: "instagram",
  },
] as const;
