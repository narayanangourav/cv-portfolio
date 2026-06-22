import { MetadataRoute } from 'next'

const FALLBACK_SITE_URL = 'https://narayanangourav.github.io/cv-portfolio'

const getBaseUrl = (): string => {
	const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
	if (!configuredUrl) {
		return FALLBACK_SITE_URL
	}

	return configuredUrl.endsWith('/') ? configuredUrl.slice(0, -1) : configuredUrl
}

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getBaseUrl()

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		}
	]
}
