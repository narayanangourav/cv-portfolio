import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { type Project } from '@/types'
import { PortfolioGallery } from './portfolio-gallery'
import { SectionHeading } from './section-heading'

interface PortfolioAndBlogProps {
	projects: Project[]
}

export function PortfolioAndBlog({ projects }: PortfolioAndBlogProps): React.ReactElement {
	return (
		<section id='portfolio' className='portfolio-section'>
			<SectionHeading
				eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.portfolio}
				title={PORTFOLIO_CONTENT.sectionTitles.portfolio}
				description={PORTFOLIO_CONTENT.sectionDescriptions.portfolio}
			/>
			<PortfolioGallery projects={projects} />
		</section>
	)
}
