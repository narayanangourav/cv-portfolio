// app/layout.tsx
import React from 'react'
import { type Metadata, type Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { getPublicPath } from '@/lib/public-path'
import './globals.css'
import './portfolio.css'

export const metadata: Metadata = {
	title: `CV | ${RESUME_DATA.name}`,
	description: `${RESUME_DATA.about}`,
	manifest: getPublicPath('/site.webmanifest'),
	keywords: [
		'Software Developer',
		'Full Stack Developer',
		'Python',
		'Java',
		'NodeJS',
		'TypeScript',
		'React',
		'PostgreSQL',
		'AWS',
		'CI/CD',
		'Docker',
		'GitHub Actions',
		'Jenkins',
		'Kubernetes'
	],
	authors: [{ name: RESUME_DATA.name }],
	creator: RESUME_DATA.name,
	openGraph: {
		title: `CV | ${RESUME_DATA.name}`,
		description: RESUME_DATA.about,
		type: 'website',
		locale: 'en_US'
	},
	twitter: {
		card: 'summary_large_image',
		title: `CV | ${RESUME_DATA.name}`,
		description: RESUME_DATA.about
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	}
}

export const viewport: Viewport = {
	themeColor: '#89D7B7'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning className={GeistSans.variable}>
			<body className={cn('min-h-screen bg-background font-sans antialiased', GeistSans.variable)}>
				{children}
			</body>
		</html>
	)
}
