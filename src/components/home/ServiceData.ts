import { 
  Code, 
  Smartphone, 
  PenTool, 
  Cloud, 
  BrainCircuit, 
  LineChart 
} from "lucide-react";
import type { ElementType } from "react";

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ElementType;
  gradient: string;
  features: string[];
}

export const services: ServiceData[] = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Modern, responsive applications",
    description: "We build scalable web applications using the latest technologies. Our focus is on delivering high-performance, accessible, and SEO-friendly solutions that drive growth and engage users effectively.",
    icon: Code,
    gradient: "from-primary to-rose-400",
    features: ["Custom React/Next.js Apps", "E-commerce Platforms", "Progressive Web Apps", "API Development"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Native and cross-platform native feel",
    description: "Create engaging mobile experiences for iOS and Android. We utilize modern frameworks to ship high-quality apps quickly, ensuring a native-like feel and robust performance across all devices.",
    icon: Smartphone,
    gradient: "from-zinc-800 to-zinc-600",
    features: ["iOS & Android Development", "Cross-platform Solutions", "Mobile UI/UX Design", "App Store Optimization"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Intuitive and beautiful design",
    description: "Transform your ideas into stunning visual interfaces. Our design process prioritizes user experience, ensuring that every interaction is intuitive, accessible, and visually captivating.",
    icon: PenTool,
    gradient: "from-rose-500 to-primary",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    subtitle: "Secure and scalable infrastructure",
    description: "Leverage the power of the cloud to streamline your operations. We offer cloud migration, architecture design, and DevOps services on AWS, Google Cloud, and Azure to optimize your infrastructure.",
    icon: Cloud,
    gradient: "from-zinc-700 to-zinc-500",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Infrastructure as Code"],
  },
  {
    id: "ai",
    title: "AI Integration",
    subtitle: "Intelligent solutions for tomorrow",
    description: "Integrate artificial intelligence into your business processes. From predictive analytics to custom LLM integrations, we help you harness the power of AI to gain a competitive edge.",
    icon: BrainCircuit,
    gradient: "from-primary to-primary/80",
    features: ["Custom LLM Integration", "Predictive Analytics", "Process Automation", "Computer Vision"],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Actionable insights from data",
    description: "Turn raw data into strategic assets. Our data analytics services help you visualize trends, track KPIs, and make informed decisions that drive your business forward and keep you informed.",
    icon: LineChart,
    gradient: "from-rose-600 to-pink-500",
    features: ["Data Visualization", "Business Intelligence", "Custom Dashboards", "Data Pipeline Engineering"],
  },
];
