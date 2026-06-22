import { AboutSection } from '@/components/portfolio/about-section'
import { HeroSection } from '@/components/portfolio/hero-section'
import { PageScrollButton } from '@/components/portfolio/page-scroll-button'
import { PortfolioAndBlog } from '@/components/portfolio/portfolio-and-blog'
import { PortfolioNavigation } from '@/components/portfolio/portfolio-navigation'
import { ProfileSidebar } from '@/components/portfolio/profile-sidebar'
import { ResumeSections } from '@/components/portfolio/resume-sections'
import { ServicesSection } from '@/components/portfolio/services-section'
import { SidebarScrollButton } from '@/components/portfolio/sidebar-scroll-button'
import { data } from '@/constants'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { getAdditionalSkills, getPortfolioStats, getSkillGroups } from '@/lib/portfolio-view-model'

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: data.name,
	jobTitle: PORTFOLIO_CONTENT.role,
	url: data.personalWebsiteUrl.url,
	email: data.contact.email.at,
	address: {
		'@type': 'PostalAddress',
		addressLocality: data.location
	},
	sameAs: data.contact.social.map((social) => social.url),
	knowsAbout: data.skills
}

export default function Page(): React.ReactElement {
	const skillGroups = getSkillGroups(data)
	const additionalSkills = getAdditionalSkills(data)
	const portfolioStats = getPortfolioStats(data)

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<a id='skip-to-content' className='portfolio-skip-link' href='#main-content'>
				{PORTFOLIO_CONTENT.skipLabel}
			</a>
			<div className='portfolio-page-shell'>
				<div className='portfolio-sidebar-shell'>
					<ProfileSidebar
						data={data}
						skillGroups={skillGroups}
						additionalSkills={additionalSkills}
					/>
					<SidebarScrollButton />
				</div>
				<PortfolioNavigation />
				<main id='main-content' className='portfolio-main-content'>
					<PageScrollButton />
					<HeroSection data={data} />
					<AboutSection summary={data.summary} stats={portfolioStats} />
					<ServicesSection />
					<ResumeSections education={data.education} work={data.work} />
					<PortfolioAndBlog projects={data.projects} />
					<footer className='portfolio-footer'>
						<p>
							© {new Date().getFullYear()} {data.name}. {PORTFOLIO_CONTENT.footerText}
						</p>
					</footer>
				</main>
			</div>
		</>
	)
}
