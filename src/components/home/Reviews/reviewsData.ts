export interface Review {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    initials: string;
    gradient: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Nguyen Minh Anh",
        role: "CEO",
        company: "TechFlow Solutions",
        content: "Phuc Thinh transformed our digital presence completely. Their attention to detail and innovative approach to user experience is unlike anything I've seen before. Absolutely elite work.",
        rating: 5,
        initials: "NA",
        gradient: "from-blue-500/30 to-cyan-400/30",
    },
    {
        id: 2,
        name: "Linh Tran",
        role: "Product Manager",
        company: "NovaStar Corp",
        content: "Working with the team was a total breeze. They delivered a incredibly complex dashboard on time and with a level of polish that we didn't even think was possible.",
        rating: 5,
        initials: "LT",
        gradient: "from-emerald-500/30 to-teal-400/30",
    },
    {
        id: 3,
        name: "David Nguyen",
        role: "Founder",
        company: "Orbyx Startup",
        content: "The best creative & tech team in the region, no contest. Their ability to blend deep-tech functionality with peak aesthetics is what truly sets them apart from everyone else.",
        rating: 5,
        initials: "DN",
        gradient: "from-purple-500/30 to-pink-400/30",
    },
    {
        id: 4,
        name: "Hoang Ha",
        role: "Marketing Director",
        company: "BrandUp Agency",
        content: "Stunning visuals and seamless user journeys. Our conversion rates increased by 40% after the redesign of our landing pages. The ROI has been exceptional.",
        rating: 4,
        initials: "HH",
        gradient: "from-orange-500/30 to-amber-400/30",
    },
    {
        id: 5,
        name: "Sophie Le",
        role: "Lead UX Designer",
        company: "Designlink Studio",
        content: "As an experienced designer myself, I'm incredibly picky about who I work with. But Phuc Thinh exceeded every one of my expectations with pixel-perfect execution and beautiful motion design.",
        rating: 5,
        initials: "SL",
        gradient: "from-rose-500/30 to-red-400/30",
    },
    {
        id: 6,
        name: "Trung Pham",
        role: "Technical Lead",
        company: "AeroCode Systems",
        content: "Reliable, beautifully scalable, and visually elite. Their code architecture is as clean and robust as their design is breathtakingly beautiful. Highly, highly recommended.",
        rating: 5,
        initials: "TP",
        gradient: "from-violet-500/30 to-indigo-400/30",
    },
];
