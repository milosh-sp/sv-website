import type { MetadataRoute } from "next";
import { siteConfig, sitemapConfig } from "@/lib/seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return sitemapConfig.pages.map((page) => ({
		...page,
		url: page.url ? `${siteConfig.baseUrl}${page.url}` : siteConfig.baseUrl,
		...("images" in page && {
			images: (page as { images?: string[] }).images?.map(
				(image: string) => `${siteConfig.baseUrl}${image}`,
			),
		}),
	}));
}
