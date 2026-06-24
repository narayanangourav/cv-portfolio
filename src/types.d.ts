export interface SocialLink {
	name: string
	url: string
	icon: React.ComponentType<{ className: string }>
}

export interface ContactLink {
	name: string
	url: string
}

export interface ContactEmail {
	name: string
	at: string
}

export interface ContactInfo {
	link: ContactLink
	email: ContactEmail
	social: SocialLink[]
}

export interface EducationEntry {
	school: string
	degree: string
	start: string
	end: string
	description: string[]
}

export interface JobsEntry {
	title: string
	start: string
	end: string
	description: string[]
}

export interface WorkEntry {
	company: string
	link?: string
	badges: string[]
	jobs: JobsEntry[]
}

export interface ProjectLink {
	label: string
	href: string
}

export interface PersonalWebsiteUrl {
	name: string
	url: string
}

export interface PublicationEntry {
	id: string
	title: string
	source: string
	date: string
	link: ProjectLink
	description: string[]
}

export interface AwardEntry {
	id: string
	title: string
	issuer: string
	date: string
	associatedWith: string
	description: string
	details: string[]
}

export interface CertificationSkill {
	name: string
	url?: string
}

export interface CertificationEntry {
	id: string
	title: string
	issuer?: string
	link?: ProjectLink
	skills?: CertificationSkill[]
}

export interface Project {
	title: string
	techStack: string[]
	description: string
	link: ProjectLink
}

export interface ResumeData {
	name: string
	initials: string
	resumeFileName: string
	yearsExperience: string
	location: string
	locationLink: string
	about: string
	summary: string
	avatar: string
	personalWebsiteUrl: PersonalWebsiteUrl
	contact: ContactInfo
	education: EducationEntry[]
	work: WorkEntry[]
	publications: PublicationEntry[]
	awards: AwardEntry[]
	certifications: CertificationEntry[]
	languages: string[]
	skills: string[]
	projects: Project[]
}
