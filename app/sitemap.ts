import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://noctisai.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://noctisai.com/guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  ];
}
