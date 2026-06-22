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

const SKILL_GROUPS = [
	{ title: 'Top Skills', names: ['IntelliJ IDEA', 'CloudSim', 'Pandas'] },
	{ title: 'Languages', names: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'] },
	{ title: 'Frameworks & Data', names: ['React', 'Flask', 'OpenPyXL', 'Jinja2'] },
	{ title: 'Cloud & DevOps', names: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] }
] as const

export function getSkillGroups(data: ResumeData): SkillGroup[] {
	return SKILL_GROUPS.map((group) => ({
		title: group.title,
		items: group.names.filter((name) => data.skills.includes(name))
	}))
}

export function getAdditionalSkills(data: ResumeData): string[] {
	const groupedSkills = new Set<string>(SKILL_GROUPS.flatMap((group) => group.names))
	return data.skills.filter((skill) => !groupedSkills.has(skill))
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
