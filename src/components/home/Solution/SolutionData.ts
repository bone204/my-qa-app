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
    color: "#3b82f6", // Blue 500
    subItems: [
      { icon: GraduationCap, label: "Education", color: "#60a5fa" }, // Blue 400
      { icon: HeartPulse, label: "Healthcare", color: "#f43f5e" }, // Rose 500
      { icon: Banknote, label: "Finance", color: "#f59e0b" }, // Amber 500
      { icon: Building2, label: "Government", color: "#64748b" }, // Slate 500
    ],
    x: 28,
    y: 16,
    delay: 0.1,
  },
  {
    id: "architecture",
    title: "Agile Architecture",
    icon: Layers,
    color: "#8b5cf6", // Violet 500
    subItems: [
      { icon: Rocket, label: "Startup", color: "#a78bfa" }, // Violet 400
      { icon: Building, label: "Enterprise", color: "#334155" }, // Slate 700
      { icon: ShoppingBag, label: "Retail", color: "#ec4899" }, // Pink 500
      { icon: Tv, label: "Media", color: "#f97316" }, // Orange 500
    ],
    x: 80,
    y: 48,
    delay: 0.35,
  },
  {
    id: "growth",
    title: "Breakthrough Growth",
    icon: TrendingUp,
    color: "#10b981", // Emerald 500
    subItems: [
      { icon: BarChart3, label: "Analytics", color: "#34d399" }, // Emerald 400
      { icon: Megaphone, label: "Marketing", color: "#fca5a5" }, // Red 300
      { icon: Link, label: "Supply Chain", color: "#94a3b8" }, // Slate 400
      { icon: Store, label: "E-commerce", color: "#fbbf24" }, // Amber 400
    ],
    x: 28,
    y: 80,
    delay: 0.6,
  },
];
