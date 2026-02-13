type Locale = 'en' | 'de';

type Localizable<T> = T | Record<Locale, T>;

type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'facebook'
  | 'threads'
  | 'xing'
  | 'youtube'
  | 'mastodon'
  | 'bluesky'
  | 'dribbble'
  | 'behance'
  | 'codepen'
  | 'stackoverflow';

interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

interface HeroStat {
  value: string;
  label: Localizable<string>;
}

interface ExperienceEntry {
  period: string;
  title: Localizable<string>;
  organization: Localizable<string>;
  description?: Localizable<string>;
  highlights?: Localizable<string>[];
}

interface EducationEntry {
  period: string;
  degree: Localizable<string>;
  institution: Localizable<string>;
  description?: Localizable<string>;
}

interface SkillCategory {
  category: Localizable<string>;
  skills: string[];
}

interface LanguageEntry {
  language: string;
  level: Localizable<string>;
}

interface ProjectEntry {
  name: string;
  description: Localizable<string>;
  url?: string;
  techStack?: string[];
}

interface SiteConfigSingle {
  language: Locale;
  languages?: never;
}

interface SiteConfigBilingual {
  language?: never;
  languages: [Locale, ...Locale[]];
}

type SiteLanguageConfig = SiteConfigSingle | SiteConfigBilingual;

interface CVData {
  site: {
    title: Localizable<string>;
    description: Localizable<string>;
    url: string;
    accentColor: string;
    darkModeDefault: boolean;
  } & SiteLanguageConfig;
  personal: {
    name: string;
    title: Localizable<string>;
    subtitle?: Localizable<string>;
    email: string;
    phone?: string;
    location?: string;
    website?: string;
    photo?: string;
    socials: SocialLink[];
  };
  hero: {
    greeting: Localizable<string>;
    tagline: Localizable<string>;
    stats?: HeroStat[];
  };
  about: {
    heading: Localizable<string>;
    text: Localizable<string>;
  };
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  languages: LanguageEntry[];
  projects: ProjectEntry[];
  contact: {
    heading: Localizable<string>;
    text: Localizable<string>;
  };
}

export const cvData: CVData = {
  site: {
    language: 'en',
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Full-stack developer based in Munich. Modern web applications with TypeScript, React, and Node.js.',
    url: 'https://example.com',
    accentColor: '#1d4ed8',
    darkModeDefault: false,
  },

  personal: {
    name: 'Alex Johnson',
    title: 'Full-Stack Developer',
    subtitle: 'Acme Corp, Munich',
    email: 'alex@example.com',
    phone: '+1 555 0100',
    location: 'Munich, Germany',
    website: 'example.com',
    socials: [
      { platform: 'github', url: 'https://github.com/alexjohnson' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/alexjohnson' },
      { platform: 'x', url: 'https://x.com/alexjohnson' },
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: 'Modern web applications with passion and precision.',
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '3', label: 'Client References' },
      { value: '2', label: 'Web Projects' },
    ],
  },

  about: {
    heading: 'About Me',
    text: `My name is Alex Johnson -- a full-stack developer based in Munich. What started as a passion for technology in 2015 has become my career: planning, developing, and deploying modern web applications. I hold a degree in <strong>Computer Science</strong> and have been working at the intersection of frontend, backend, and DevOps ever since.

Currently, I serve as a <strong>Senior Developer</strong> at Acme Corp in Munich. I build full-stack applications with TypeScript, React, and Node.js, leveraging modern architecture patterns, automated testing, and CI/CD pipelines.

Previously, I spent over 5 years as a <strong>Frontend Developer</strong> at TechStart GmbH, building web applications for clients across various industries.

In parallel, I develop open-source projects and experiment with new technologies. I deploy my projects on self-managed cloud servers using Docker and GitHub Actions.

Languages: English (native), German (fluent).`,
  },

  experience: [
    {
      period: '2020 -- present',
      title: 'Senior Developer',
      organization: 'Acme Corp',
      description: 'Full-stack development with TypeScript, React, and Node.js. Responsible for architecture, code reviews, and CI/CD pipelines.',
      highlights: ['Architecture decisions', 'Code reviews', 'CI/CD pipelines'],
    },
    {
      period: '2015 -- 2020',
      title: 'Frontend Developer',
      organization: 'TechStart GmbH',
      description: 'Development of web applications with React and Vue.js for clients across various industries.',
    },
  ],

  education: [
    {
      period: '2011 -- 2015',
      degree: 'B.Sc. Computer Science',
      institution: 'Technical University Munich',
    },
  ],

  skills: [
    {
      category: 'Operating Systems',
      skills: ['Windows 10/11', 'Linux (Ubuntu/Debian)', 'macOS'],
    },
    {
      category: 'Virtualization & Containers',
      skills: ['Docker', 'Docker Compose'],
    },
    {
      category: 'Web Development',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'Astro', 'Tailwind CSS', 'React', 'Vue.js', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'SQL', 'Redis'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'GitHub Actions', 'VS Code', 'SSH', 'Linux CLI'],
    },
    {
      category: 'Cloud & Hosting',
      skills: ['Hetzner Cloud', 'Cloudflare', 'Nginx', 'Traefik'],
    },
  ],

  languages: [
    { language: 'English', level: 'Native' },
    { language: 'German', level: 'Fluent' },
  ],

  projects: [
    {
      name: 'Project Alpha',
      description: 'SaaS Dashboard built with React and Node.js',
      url: 'https://example.com',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Client Portal',
      description: 'Client portal for TechCorp',
      url: 'https://example.com',
      techStack: ['Vue.js', 'Express', 'MongoDB'],
    },
  ],

  contact: {
    heading: 'Get in Touch',
    text: 'Send me an email or give me a call.',
  },
};

export type CV = typeof cvData;
export type { Localizable, Locale };
