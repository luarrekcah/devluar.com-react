import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.devluar.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.devluar.com/loja',
      lastModified: new Date(),
    },
  ];
}