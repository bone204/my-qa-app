import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HireCategoryClient from '@/app/hire/[slug]/HireCategoryClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations('HireCategoryPages');
  
  // Try to get title from HireCategoryPages JSON, fallback to a general title
  try {
    const title = t(`${slug}.metaTitle`);
    // If metaTitle doesn't exist in JSON, it might throw or return key
    if (title && title !== `${slug}.metaTitle`) {
      return { title };
    }
  } catch (e) {
    // Fallback
  }

  // Second fallback: use the subtitle or title from the section
  const sectionTitle = t(`${slug}.title`);
  return {
    title: `${sectionTitle.replace(/<highlight>|<\/highlight>/g, '')} | QKIT Software`,
  };
}

export default async function Page({ params }: Props) {
  return <HireCategoryClient params={params} />;
}
