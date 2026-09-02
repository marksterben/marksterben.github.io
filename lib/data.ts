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

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  description: string;
  techStack: string[];
  freelance?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    organization: "PT Tiga Daya Digital Indonesia",
    period: "Nov 2022 — Present",
    description:
      "Build backend services for a used-car marketplace with Go (Echo) and PostgreSQL, power search with Elasticsearch, and use Redis/RabbitMQ for performance-sensitive and async workflows. Contribute to a vehicle Price Engine computing statistical market pricing, plus Laravel admin tools and React.js/Next.js frontend features.",
    techStack: [
      "Go",
      "Echo",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "RabbitMQ",
      "Laravel",
      "React.js",
      "Next.js",
    ],
  },
  {
    role: "Freelance Software Engineer",
    organization: "PT Trijaya Aksesoris Garmen — Inventory Management System",
    period: "Mar 2023 — Jun 2023",
    freelance: true,
    description:
      "Designed and built a web-based inventory management system end-to-end, covering stock movement, suppliers, customers, and operational reporting.",
    techStack: ["Laravel", "PHP", "MySQL"],
  },
  {
    role: "Software Engineer",
    organization: "Dentsu Creative — Singapore (Remote)",
    period: "Aug 2021 — Oct 2022",
    description:
      "Built the frontend of a Meta advertising analytics platform and an internal campaign app (Vue/Nuxt + Node/Express), plus HTML5 ad banners and a Toyota Gazoo Racing web experience, for clients including Meta, Toyota, Manulife, and American Express.",
    techStack: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Node.js", "Express.js"],
  },
  {
    role: "Freelance Software Engineer",
    organization: "Mozza Dental Clinic — Clinic & Patient App",
    period: "Apr 2022 — Jun 2022",
    freelance: true,
    description:
      "Built an end-to-end clinic ecosystem: an Android patient app, a Laravel clinic management system, REST APIs, and a real-time queue display with text-to-speech announcements.",
    techStack: ["Java", "Android", "Laravel", "MySQL", "Pusher"],
  },
  {
    role: "Junior Software Engineer",
    organization: "Smart Integrated System",
    period: "Dec 2018 — Jan 2020",
    description:
      "Developed client web applications with CodeIgniter 3 and Laravel, and contributed to Android app development in Java.",
    techStack: ["PHP", "CodeIgniter 3", "Laravel", "Java", "Android"],
  },
];

export const profile = {
  name: "Marcellino",
  role: "Software Engineer",
  location: "Jakarta, Indonesia",
  email: "chyel.mlino@gmail.com",
  bio: "Backend-focused Software Engineer with 6+ years of professional and freelance experience building web, backend, and mobile applications. I work mainly with Go, PostgreSQL, Elasticsearch, Redis, and RabbitMQ, and Laravel, with full-stack experience across React.js, Next.js, and Node.js — from automotive platforms and pricing systems to end-to-end business applications.",
  avatar: "/img/avatar.png",
  resumeUrl: "/Marcellino-CV.pdf",
  education: {
    degree: "B.Comp.Sci. (S.Kom.) — Informatics Engineering",
    school: "Universitas Multi Data Palembang",
    period: "2018 — 2022",
    gpa: "3.76 / 4.00",
  },
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
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
