import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://noerpaanakker.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: "https://noerpaanakker.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://noerpaanakker.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];
}
