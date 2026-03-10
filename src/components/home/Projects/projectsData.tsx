import { CheckCircle, Users, Briefcase } from "lucide-react";

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Smart Home IoT Dashboard",
        category: "Web Application",
        description: "A comprehensive control center for modern living, blending deep-tech automation with an intuitive, minimalist interface.",
        image: "/projects/project1.png",
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 2,
        title: "FinTech Mobile Portfolio",
        category: "Mobile App",
        description: "Redefining personal finance through peak performance and elegant security, designed for the next generation of investors.",
        image: "/projects/project2.png",
        color: "from-emerald-500 to-teal-400",
    },
    {
        id: 3,
        title: "AI Creative Agency Portal",
        category: "Landing Page",
        description: "Where artificial intelligence meets human creativity, featuring dynamic visuals and seamless user journeys for global brands.",
        image: "/projects/project3.png",
        color: "from-purple-500 to-pink-400",
    },
];

export const stats = [
    {
        label: "Projects Completed",
        value: 150,
        icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
        suffix: "+",
    },
    {
        label: "Happy Clients",
        value: 98,
        icon: <Users className="w-5 h-5 text-blue-400" />,
        suffix: "%",
    },
    {
        label: "Years Experience",
        value: 8,
        icon: <Briefcase className="w-5 h-5 text-purple-400" />,
        suffix: "+",
    },
];
