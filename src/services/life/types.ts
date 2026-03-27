export interface LifeImage {
  id: string; // Document ID
  url: string; // Firebase Storage or external URL
  description: {
    en: string;
    vi: string;
  };
  type: 'team' | 'office' | 'events' | 'growth';
  date: string | Date; // ISO string or Firestore Timestamp
}
