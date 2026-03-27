export type BlogCategory = "Design" | "Development" | "Technology" | "Business";

export interface BlogPost {
    id: string; // Document ID
    title: {
        en: string;
        vi: string;
    };
    excerpt: {
        en: string;
        vi: string;
    };
    content: {
        en: string;
        vi: string;
    };
    category: BlogCategory;
    date: string | Date; // ISO string or Firestore Timestamp
    readTime: {
        en: string;
        vi: string;
    };
    tag: {
        en: string;
        vi: string;
    };
    image: string; // Cloudinary URL
    authorId?: string;
    authorName?: string;
    authorAvatar?: string;
    createdAt?: any;
    updatedAt?: any;
}
