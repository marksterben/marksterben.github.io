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
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Go (Golang)", "PHP", "JavaScript", "Java"] },
  {
    category: "Backend",
    skills: ["Echo", "Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  { category: "Frontend", skills: ["React.js", "Next.js", "HTML5", "CSS"] },
  {
    category: "Databases & Search",
    skills: ["PostgreSQL", "MySQL", "Elasticsearch"],
  },
  { category: "Caching & Messaging", skills: ["Redis", "RabbitMQ"] },
  { category: "Other", skills: ["Android Development", "Google Web Designer"] },
];

export const profile = {
  name: "Marcellino",
  role: "Software Engineer",
  location: "Jakarta, Indonesia",
  email: "chyel.mlino@gmail.com",
  bio: "Backend-focused Software Engineer with 6+ years of professional and freelance experience building web, backend, and mobile applications. I work mainly with Go, PostgreSQL, Elasticsearch, Redis, and RabbitMQ, and Laravel, with full-stack experience across React.js, Next.js, and Node.js — from automotive platforms and pricing systems to end-to-end business applications.",
  avatar: "/img/avatar.png",
  resumeUrl: "/Marcellino-CV.pdf",
};

export const socialLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "email",
  },
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
