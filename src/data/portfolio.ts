import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  Database,
  Brain,
  Users,
  Cpu,
  CodeXml,
  ChartColumn,
  Puzzle,
  Wrench,
  Radio,
  RefreshCw,
  GraduationCap,
  School,
  Lightbulb,
  Target,
  Rocket,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { LinkedInIcon } from "../components/ui/icons";

/* -------------------------------------------------------
   Personal information
------------------------------------------------------- */
export const profile = {
  name: "Harisudhan A G",
  shortName: "Harisudhan",
  role: "First-Year Electronics & Communication Engineering Student",
  college: "KPR Institute of Engineering and Technology",
  collegeCity: "Coimbatore",
  degree: "Bachelor of Engineering – Electronics and Communication Engineering",
  year: "First Year",
  location: "Coimbatore, Tamil Nadu, India – 641407",
  locationShort: "Coimbatore, Tamil Nadu",
  email: "26ec094@kpriet.ac.in",
  phone: "+91 98439 65687",
  phoneHref: "tel:+919843965687",
  linkedin: "linkedin.com/in/harisudhan-a-g",
  linkedinUrl: "https://linkedin.com/in/harisudhan-a-g",
  summary:
    "First-year ECE student with a foundation in Python programming and database management. Completed hands-on projects applying analytical and technical skills. Seeking internship opportunities to deliver results through data-driven development.",
  resumeFileName: "Harisudhan-AG-Resume.pdf",
};

/* -------------------------------------------------------
   Navigation
------------------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = navLinks.map((l) => l.href.slice(1));

/* -------------------------------------------------------
   Quick stats (factual only)
------------------------------------------------------- */
export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "1st Year", label: "ECE Student", icon: GraduationCap },
  { value: "1", label: "Technical Project", icon: Wrench },
  { value: "5+", label: "Core Technical Skills", icon: CodeXml },
  { value: "2026", label: "Current Academic Year", icon: Target },
];

/* -------------------------------------------------------
   About
------------------------------------------------------- */
export const aboutInfo: { label: string; value: string; icon: LucideIcon }[] = [
  {
    label: "Education",
    value: "B.E. – Electronics and Communication Engineering",
    icon: GraduationCap,
  },
  { label: "Year", value: "First Year", icon: School },
  { label: "Location", value: "Coimbatore, Tamil Nadu", icon: MapPin },
  {
    label: "Career Focus",
    value: "Internships and technical project opportunities",
    icon: Rocket,
  },
];

/* -------------------------------------------------------
   Skills
------------------------------------------------------- */
export type SkillLevel = "Learning" | "Developing" | "Practicing";

export type Skill = {
  name: string;
  level: SkillLevel;
  description: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: Terminal,
    skills: [
      {
        name: "Python Programming",
        level: "Developing",
        description: "Writing scripts and solving problems using Python fundamentals.",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      {
        name: "MySQL Database Management",
        level: "Developing",
        description: "Creating tables, writing queries and managing structured data.",
      },
    ],
  },
  {
    id: "analytical",
    title: "Analytical",
    icon: Brain,
    skills: [
      {
        name: "Data Analysis",
        level: "Learning",
        description: "Examining datasets to identify patterns and draw conclusions.",
      },
      {
        name: "Problem Solving",
        level: "Developing",
        description: "Breaking problems into steps and testing practical solutions.",
      },
      {
        name: "Analytical Thinking",
        level: "Developing",
        description: "Approaching technical questions with logic and structure.",
      },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    icon: Users,
    skills: [
      {
        name: "Technical Documentation",
        level: "Learning",
        description: "Recording work clearly so that others can follow and review it.",
      },
      {
        name: "Team Collaboration",
        level: "Developing",
        description: "Contributing and coordinating within academic team tasks.",
      },
      {
        name: "Effective Communication",
        level: "Practicing",
        description: "Explaining ideas clearly in discussions and presentations.",
      },
      {
        name: "Adaptability",
        level: "Practicing",
        description: "Adjusting quickly to new tools, topics and environments.",
      },
    ],
  },
];

/* -------------------------------------------------------
   Technology stack
------------------------------------------------------- */
export type Tech = {
  name: string;
  status: "Core Skill" | "Currently Exploring";
  icon: "python" | "mysql" | "html5" | "css3" | "javascript";
  tint: string;
};

export const techStack: Tech[] = [
  { name: "Python", status: "Core Skill", icon: "python", tint: "text-[#3776AB]" },
  { name: "MySQL", status: "Core Skill", icon: "mysql", tint: "text-[#00758F]" },
  { name: "HTML", status: "Currently Exploring", icon: "html5", tint: "text-[#E34F26]" },
  { name: "CSS", status: "Currently Exploring", icon: "css3", tint: "text-[#1572B6]" },
  {
    name: "JavaScript",
    status: "Currently Exploring",
    icon: "javascript",
    tint: "text-[#F7DF1E]",
  },
];

/* -------------------------------------------------------
   Featured project
------------------------------------------------------- */
export const project = {
  title: "Bluetooth Speaker Conversion",
  tagline: "Electronics • Hands-on Project",
  description:
    "Converted a conventional wired speaker into a wireless Bluetooth speaker using a Bluetooth audio amplifier module, including circuit wiring, power integration, and speaker interfacing.",
  technologies: ["Bluetooth Audio Amplifier", "Basic Electronics", "Soldering"],
  overview:
    "Converted a conventional wired speaker into a wireless Bluetooth speaker using a Bluetooth audio amplifier module.",
  problem:
    "A conventional wired speaker needs a physical audio cable connected to a source device, which restricts where the speaker can be placed and how freely it can be used.",
  approach:
    "The plan was to introduce wireless audio without replacing the speaker itself — by adding a Bluetooth audio amplifier module that receives a wireless audio signal and amplifies it to drive the existing speaker.",
  implementation: [
    "Circuit wiring between the Bluetooth amplifier module and the speaker",
    "Power integration to supply the amplifier module",
    "Speaker interfacing so the existing driver is driven by the amplified output",
  ],
  components: [
    "Bluetooth audio amplifier module",
    "Conventional wired speaker",
    "Power supply for the amplifier module",
    "Wiring and soldered connections",
  ],
  outcome:
    "The speaker now plays audio wirelessly from a Bluetooth-enabled device, demonstrating a practical application of basic electronics, circuit wiring and soldering skills.",
};

/* -------------------------------------------------------
   Education timeline
------------------------------------------------------- */
export type EducationItem = {
  id: string;
  institution: string;
  city: string;
  qualification: string;
  stream: string;
  status: string;
  score?: string;
  description: string;
  icon: LucideIcon;
  current?: boolean;
};

export const education: EducationItem[] = [
  {
    id: "kpriet",
    institution: "KPR Institute of Engineering and Technology",
    city: "Coimbatore",
    qualification: "Bachelor of Engineering",
    stream: "Electronics and Communication Engineering",
    status: "First Year",
    description:
      "Currently pursuing first-year engineering studies, building a foundation in electronics, programming, and database systems.",
    icon: GraduationCap,
    current: true,
  },
  {
    id: "grade-xii",
    institution: "Jaivins Academy, Senior Secondary School",
    city: "Attur",
    qualification: "Grade XII",
    stream: "CBSE",
    status: "Score: 407 / 500",
    score: "81.4%",
    description: "Senior secondary education under the CBSE curriculum.",
    icon: School,
  },
  {
    id: "grade-x",
    institution: "Jaivins Academy, Senior Secondary School",
    city: "Attur",
    qualification: "Grade X",
    stream: "CBSE",
    status: "Score: 423 / 500",
    score: "84.6%",
    description: "Secondary education under the CBSE curriculum.",
    icon: School,
  },
];

/* -------------------------------------------------------
   Learning journey
------------------------------------------------------- */
export const learningJourney: {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}[] = [
  {
    id: "year-2026",
    period: "2026",
    title: "First Year ECE",
    description:
      "Building fundamentals in electronics, programming, databases, and analytical thinking.",
    icon: GraduationCap,
    badge: "Current",
  },
  {
    id: "current-focus",
    period: "Current Focus",
    title: "What I'm Learning Now",
    description:
      "Python programming, MySQL database management, electronics, and practical projects.",
    icon: Lightbulb,
  },
  {
    id: "future-goals",
    period: "Future Goals",
    title: "Where I'm Heading",
    description:
      "Develop stronger technical skills, build more projects, and gain internship experience.",
    icon: Rocket,
  },
];

/* -------------------------------------------------------
   Interests
------------------------------------------------------- */
export const interests: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Electronics",
    description: "Exploring circuits, components and how hardware systems work.",
    icon: Cpu,
  },
  {
    title: "Programming",
    description: "Learning to write code that solves practical problems.",
    icon: CodeXml,
  },
  {
    title: "Python",
    description: "Building a strong foundation in Python programming.",
    icon: Terminal,
  },
  {
    title: "Database Systems",
    description: "Understanding how data is stored, queried and managed.",
    icon: Database,
  },
  {
    title: "Data Analysis",
    description: "Working with data to find patterns and useful insights.",
    icon: ChartColumn,
  },
  {
    title: "Problem Solving",
    description: "Breaking down challenges into logical, testable steps.",
    icon: Puzzle,
  },
  {
    title: "Practical Projects",
    description: "Applying classroom concepts to hands-on hardware builds.",
    icon: Wrench,
  },
  {
    title: "Technology",
    description: "Following new tools and ideas across engineering fields.",
    icon: Radio,
  },
];

/* -------------------------------------------------------
   What I bring
------------------------------------------------------- */
export const strengths: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Problem Solving",
    description: "Approaching technical challenges with structured thinking.",
    icon: Puzzle,
  },
  {
    title: "Analytical Thinking",
    description: "Developing the ability to understand problems and work with data.",
    icon: Brain,
  },
  {
    title: "Technical Learning",
    description: "Continuously building knowledge through hands-on practice.",
    icon: Lightbulb,
  },
  {
    title: "Team Collaboration",
    description: "Working effectively with others on technical and academic tasks.",
    icon: Users,
  },
  {
    title: "Adaptability",
    description: "Learning new concepts and adapting to new technical environments.",
    icon: RefreshCw,
  },
];

/* -------------------------------------------------------
   Contact
------------------------------------------------------- */
export const contactChannels: {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
  action?: "copy";
}[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, action: "copy" },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  {
    label: "Location",
    value: profile.location,
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: LinkedInIcon,
  },
];

export const contactActions: { label: string; href: string; icon: LucideIcon; external?: boolean }[] = [
  { label: "Send Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Call", href: profile.phoneHref, icon: Phone },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: LinkedInIcon, external: true },
];
