import { collection, getDocs, getDoc, doc, query, where, orderBy, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BlogPost, BlogCategory } from "./types";

const BLOG_COLLECTION = "blog_posts";

export async function getBlogPosts(category?: BlogCategory | "All") {
    try {
        const postsRef = collection(db, BLOG_COLLECTION);
        const q = query(postsRef, orderBy("date", "desc"));

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            // Ensure date is serializable for client components
            date: doc.data().date?.toDate?.() ? doc.data().date.toDate().toISOString() : doc.data().date
        })) as BlogPost[];
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}

export async function getBlogPostById(id: string) {
    try {
        const postRef = doc(db, BLOG_COLLECTION, id);
        const docSnap = await getDoc(postRef);
        
        if (!docSnap.exists()) return null;
        
        return {
            id: docSnap.id,
            ...docSnap.data(),
            date: docSnap.data().date?.toDate?.() ? docSnap.data().date.toDate().toISOString() : docSnap.data().date
        } as BlogPost;
    } catch (error) {
        console.error("Error fetching blog post by id:", error);
        return null;
    }
}

export async function addBlogPost(post: Omit<BlogPost, 'id'>) {
    try {
        const postsRef = collection(db, BLOG_COLLECTION);
        const docRef = await addDoc(postsRef, {
            ...post,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding blog post:", error);
        throw error;
    }
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>) {
    try {
        const postRef = doc(db, BLOG_COLLECTION, id);
        await updateDoc(postRef, {
            ...post,
            updatedAt: serverTimestamp()
        });
        return id;
    } catch (error) {
        console.error("Error updating blog post:", error);
        throw error;
    }
}
