import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qkit.vn';
  const locales = ['vi', 'en'];

  const pages = [
    '',
    '/services',
    '/success',
    '/projects',
    '/career',
    '/contact',
    '/faq',
    '/life',
    '/blog',
    '/hire',
    '/hire/hire-mobile-app-development',
    '/hire/hire-frontend-development',
    '/hire/hire-ui-ux-design',
    '/hire/hire-devops-engineering',
    '/hire/hire-fullstack-development',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${page}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
