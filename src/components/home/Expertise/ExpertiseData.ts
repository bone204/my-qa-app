import { Layout, Server, Smartphone, Cpu, Code2, Database, Layers, Cloud } from "lucide-react";

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  details: {
    label: string;
    skills: string[];
  }[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting immersive digital experiences with cutting-edge UI/UX.",
    icon: Layout,
    color: "#2563eb",
    gradient: "from-blue-600/90 to-blue-400/90",
    details: [
      { label: "Core Tech", skills: ["React", "Next.js", "TypeScript"] },
      { label: "Styling", skills: ["Tailwind CSS", "Framer Motion", "Shadcn UI"] },
      { label: "Performance", skills: ["Vite", "Web Vitals", "SEO"] }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Architecting robust, scalable, and high-performance server logic.",
    icon: Server,
    color: "#dc2626",
    gradient: "from-rose-600/90 to-red-500/90",
    details: [
      { label: "Runtime", skills: ["Node.js", "Go", "Python"] },
      { label: "Database", skills: ["PostgreSQL", "Redis", "MongoDB"] },
      { label: "Security", skills: ["JWT", "OAuth", "Encryption"] }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Building seamless cross-platform mobile solutions for Android and iOS.",
    icon: Smartphone,
    color: "#059669",
    gradient: "from-emerald-600 to-green-500",
    details: [
      { label: "Framework", skills: ["Flutter", "React Native", "Swift"] },
      { label: "Delivery", skills: ["App Store", "Play Store", "CI/CD"] },
      { label: "Features", skills: ["Push Notifications", "Maps", "Biometrics"] }
    ]
  },
  {
    id: "ai",
    title: "AI Development",
    description: "Integrating intelligent machine learning models into modern products.",
    icon: Cpu,
    color: "#7e22ce",
    gradient: "from-purple-600/90 to-indigo-500/90",
    details: [
      { label: "Models", skills: ["LLMs", "NLP", "Computer Vision"] },
      { label: "Platforms", skills: ["OpenAI", "TensorFlow", "PyTorch"] },
      { label: "Applications", skills: ["Chatbots", "Personalization", "Automation"] }
    ]
  }
];
