import { type ResumeData } from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'

export interface SkillGroup {
	title: string
	items: string[]
}

export interface PortfolioStat {
	id: 'experience' | 'projects' | 'companies' | 'skills'
	value: string
	label: string
}

const PARAGRAPH_SEPARATOR_PATTERN = /\n{2,}/

const SKILL_GROUPS = [
	{
		title: 'Languages',
		names: [
			'Python',
			'Java',
			'NodeJS',
			'TypeScript',
			'JavaScript',
			'SQL',
			'HTML/CSS',
			'Jinja',
			'VBA',
			'Shell Scripting (Bash)'
		]
	},
	{
		title: 'Frameworks & Libraries',
		names: [
			'React',
			'Flask',
			'Android Studio',
			'Gradle',
			'Material UI',
			'Bulma',
			'Capacitor',
			'Sentry',
			'Jest'
		]
	},
	{
		title: 'DevOps &CI/CD',
		names: [
			'Jenkins',
			'Maven',
			'SonarQube',
			'Trivy',
			'Nexus',
			'Docker',
			'Kubernetes (K8s)',
			'GitHub Actions',
			'Git'
		]
	},
	{
		title: 'Cloud & Monitoring',
		names: ['AWS', 'Prometheus', 'Grafana', 'Linux', 'Apache Tomcat', 'Unix']
	},
	{
		title: 'Databases',
		names: ['Firebase', 'Supabase', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite']
	},
	{
		title: 'Development Concepts',
		names: [
			'Containerization',
			'REST APIs',
			'TDD',
			'SOLID Principles',
			'Clean Code',
			'Microservices'
		]
	},
	{
		title: 'AI-assisted development',
		names: [
			'OpenAI',
			'Codex',
			'prompt engineering',
			'debugging assistance',
			'code review support',
			'test-case generation',
			'documentation support',
			'log analysis',
			'refactoring support'
		]
	},
	{
		title: 'Professional Skills',
		names: [
			'Project Management',
			'Problem Solving',
			'Agile Methodologies',
			'Cross-functional Collaboration'
		]
	}
] as const

export function getSkillGroups(data: ResumeData): SkillGroup[] {
	return SKILL_GROUPS.map((group) => ({
		title: group.title,
		items: group.names.filter((name) => data.skills.includes(name))
	}))
}

export function getSummaryParagraphs(data: ResumeData): string[] {
	return data.summary
		.split(PARAGRAPH_SEPARATOR_PATTERN)
		.map((paragraph) => paragraph.trim())
		.filter((paragraph) => paragraph.length > 0)
}

export function getPortfolioStats(data: ResumeData): PortfolioStat[] {
	return [
		{
			id: 'experience',
			value: data.yearsExperience,
			label: PORTFOLIO_CONTENT.statLabels.experience
		},
		{
			id: 'projects',
			value: String(data.projects.length),
			label: PORTFOLIO_CONTENT.statLabels.projects
		},
		{
			id: 'companies',
			value: String(data.work.length),
			label: PORTFOLIO_CONTENT.statLabels.companies
		},
		{
			id: 'skills',
			value: String(data.skills.length),
			label: PORTFOLIO_CONTENT.statLabels.skills
		}
	]
}
