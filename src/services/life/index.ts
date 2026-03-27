import { collection, getDocs, query, where, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { LifeImage } from "./types";

const LIFE_COLLECTION = "life_images";

export async function getLifeImages(category?: string) {
  try {
    const imagesRef = collection(db, LIFE_COLLECTION);
    let q;

    if (category && category !== "all") {
      q = query(imagesRef, where("type", "==", category), orderBy("date", "desc"));
    } else {
      q = query(imagesRef, orderBy("date", "desc"));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      // Ensure date is serializable for client components
      date: doc.data().date?.toDate?.() ? doc.data().date.toDate().toISOString() : doc.data().date
    })) as LifeImage[];
  } catch (error) {
    console.error("Error fetching life images:", error);
    return [];
  }
}

export async function addLifeImage(image: Omit<LifeImage, 'id'>) {
  try {
    const imagesRef = collection(db, LIFE_COLLECTION);
    const docRef = await addDoc(imagesRef, {
      ...image,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding life image:", error);
    throw error;
  }
}
