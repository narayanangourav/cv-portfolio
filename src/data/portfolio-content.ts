import {
	Briefcase,
	Code2,
	CloudCog,
	Database,
	GitBranch,
	Laptop,
	type LucideIcon
} from 'lucide-react'

export interface NavigationItem {
	id: string
	label: string
}

export interface ServiceItem {
	title: string
	description: string
	icon: LucideIcon
}

export interface RecommendationItem {
	title: string
	description: string
	source: string
}

export interface PortfolioArtwork {
	id: string
	title: string
	projectTitle: string
	category: 'Applications' | 'Automation' | 'DevOps'
	variant: 'amber' | 'coral' | 'dark' | 'paper' | 'blue'
}

export const PORTFOLIO_CONTENT = {
	skipLabel: 'Skip to content',
	role: 'Software Developer',
	introPrefix: "I'm",
	heroSummary:
		'I turn complex full-stack and cloud-native systems into reliable products that perform under real production pressure.',
	primaryAction: 'Hire me',
	downloadAction: 'Download CV',
	sidebarIntro: 'Software Developer at Chimple',
	sidebarScrollLabel: 'Scroll sidebar down',
	sidebarScrollUpLabel: 'Scroll sidebar up',
	pageScrollLabel: 'Scroll page down',
	pageScrollUpLabel: 'Scroll page up',
	highlightMark: '★★★★★',
	highlightAriaLabel: 'Highlighted professional outcome',
	sectionEyebrows: {
		about: 'Profile',
		services: 'What I do',
		recommendations: 'Measured outcomes',
		education: 'Academic background',
		work: 'Career history',
		portfolio: 'Selected work'
	},
	sectionTitles: {
		about: 'About Me',
		services: 'My Services',
		recommendations: 'Impact Highlights',
		education: 'Education',
		work: 'Work History',
		portfolio: 'Portfolio'
	},
	sectionDescriptions: {
		about:
			'Production-focused engineering across full-stack systems, cloud-native architecture, data pipelines, and automation.',
		services:
			'Engineering capabilities demonstrated across production products and internal platforms.',
		recommendations:
			'Recent results delivered across product reliability, user onboarding, and engineering automation.',
		education: 'Formal education supporting a practical background in software engineering.',
		work: 'Recent experience building production systems and engineering automation.',
		portfolio: 'A selection of application, automation, and DevOps work.'
	},
	statLabels: {
		experience: 'Years of experience',
		projects: 'Projects',
		companies: 'Companies',
		skills: 'Skills'
	},
	services: [
		{
			title: 'Product Engineering',
			description: 'Full-stack product features for applications serving more than 100K downloads.',
			icon: Code2
		},
		{
			title: 'Serverless & APIs',
			description: 'Production services and operations tooling built with RPC and REST APIs.',
			icon: CloudCog
		},
		{
			title: 'Release Automation',
			description: 'Repeatable database and reporting pipelines automated through GitHub Actions.',
			icon: GitBranch
		},
		{
			title: 'Data Engineering',
			description:
				'PostgreSQL optimization, migrations, persistence, dependency analysis, and exports.',
			icon: Database
		},
		{
			title: 'Reliability Engineering',
			description:
				'Offline data flows, synchronization edge cases, load-time improvements, and uptime.',
			icon: Laptop
		},
		{
			title: 'Engineering Automation',
			description: 'Python tools that replace manual release, reporting, and analysis workflows.',
			icon: Briefcase
		}
	] satisfies ServiceItem[],
	recommendations: [
		{
			title: '100K+ downloads',
			description:
				'Enhanced architecture, performance, and reliability for a production educational application.',
			source: 'Product engineering'
		},
		{
			title: '5,000+ users onboarded',
			description: 'Built serverless authentication pipelines and improved user activation flows.',
			source: 'Production onboarding'
		},
		{
			title: '80% faster analysis',
			description:
				'Automated release-impact analysis and Polyspace reporting through production-grade tools.',
			source: 'Engineering automation'
		}
	] satisfies RecommendationItem[],
	portfolioFilters: ['All', 'Applications', 'Automation', 'DevOps'],
	portfolioArtwork: [
		{
			id: 'operations-console',
			title: 'Serverless Operations Console',
			projectTitle: 'Chimple Serverless Operations Console',
			category: 'Applications',
			variant: 'amber'
		},
		{
			id: 'database-migration',
			title: 'Database Migration Pipeline',
			projectTitle: 'Zero-Failure Database Migration Pipeline',
			category: 'DevOps',
			variant: 'coral'
		},
		{
			id: 'authentication-pipeline',
			title: 'Authentication Pipeline',
			projectTitle: 'Production Authentication Pipeline',
			category: 'Applications',
			variant: 'paper'
		},
		{
			id: 'polyspace-automation',
			title: 'Polyspace Release Automation',
			projectTitle: 'Polyspace Release Automation',
			category: 'Automation',
			variant: 'dark'
		},
		{
			id: 'github-analytics',
			title: 'GitHub Enterprise Analytics',
			projectTitle: 'GitHub Enterprise Analytics Platform',
			category: 'Automation',
			variant: 'blue'
		}
	] satisfies PortfolioArtwork[],
	footerText: 'Designed and built with Next.js and TypeScript.'
} as const

export const PORTFOLIO_NAVIGATION: NavigationItem[] = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'services', label: 'Services' },
	{ id: 'education', label: 'Education' },
	{ id: 'work', label: 'Work' },
	{ id: 'portfolio', label: 'Portfolio' }
]

export const SYSTEM_UI_CONTENT = {
	error: {
		title: 'Something went wrong',
		description: 'An unexpected error occurred while loading the portfolio.',
		retry: 'Try again',
		home: 'Go home'
	},
	notFound: {
		code: '404',
		title: 'Page not found',
		description: 'The requested page may have moved, been removed, or never existed.',
		back: 'Go back',
		home: 'Go home'
	}
} as const
