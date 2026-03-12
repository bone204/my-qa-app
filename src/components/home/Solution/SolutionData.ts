import {
  ShieldCheck, Layers, TrendingUp,
  GraduationCap, HeartPulse, Banknote, Building2,
  Rocket, Building, ShoppingBag, Tv,
  BarChart3, Megaphone, Link, Store,
  type LucideIcon
} from "lucide-react";

export interface SubItem {
  icon: LucideIcon;
  label: string;
  color: string;
}

export interface SolutionNode {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  subItems: SubItem[];
  x: number;
  y: number;
  delay: number;
}

export const solutionNodes: SolutionNode[] = [
  {
    id: "security",
    title: "Multi-Layer Security",
    icon: ShieldCheck,
    color: "#00ffff", // Neon Cyan for glow
    subItems: [
      { icon: GraduationCap, label: "Education", color: "#00ffff" },
      { icon: HeartPulse, label: "Healthcare", color: "#ff2d55" },
      { icon: Banknote, label: "Finance", color: "#ffcc00" },
      { icon: Building2, label: "Government", color: "#007aff" },
    ],
    x: 25,
    y: 22,
    delay: 0.1,
  },
  {
    id: "architecture",
    title: "Agile Architecture",
    icon: Layers,
    color: "#ff00ff", // Neon Magenta for glow
    subItems: [
      { icon: Rocket, label: "Startup", color: "#a855f7" },
      { icon: Building, label: "Enterprise", color: "#ffffff" },
      { icon: ShoppingBag, label: "Retail", color: "#ff2d55" },
      { icon: Tv, label: "Media", color: "#ff9500" },
    ],
    x: 75,
    y: 50,
    delay: 0.35,
  },
  {
    id: "growth",
    title: "Breakthrough Growth",
    icon: TrendingUp,
    color: "#ffff00", // Neon Yellow for glow
    subItems: [
      { icon: BarChart3, label: "Analytics", color: "#34c759" },
      { icon: Megaphone, label: "Marketing", color: "#ff3b30" },
      { icon: Link, label: "Supply Chain", color: "#ffffff" },
      { icon: Store, label: "E-commerce", color: "#ffcc00" },
    ],
    x: 25,
    y: 78,
    delay: 0.6,
  },
];
