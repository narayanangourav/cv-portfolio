import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { type PortfolioStat } from '@/lib/portfolio-view-model'
import { SectionHeading } from './section-heading'

interface AboutSectionProps {
	summary: string
	stats: PortfolioStat[]
}

export function AboutSection({ summary, stats }: AboutSectionProps): React.ReactElement {
	return (
		<section id='about' className='portfolio-section'>
			<SectionHeading
				eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.about}
				title={PORTFOLIO_CONTENT.sectionTitles.about}
				description={PORTFOLIO_CONTENT.sectionDescriptions.about}
			/>
			<div className='portfolio-about-panel'>
				<div className='portfolio-about-profile'>
					<p>{summary}</p>
				</div>
				<div className='portfolio-stats-grid'>
					{stats.map((stat) => (
						<article key={stat.id} className='portfolio-stat-card'>
							<strong>{stat.value}</strong>
							<span>{stat.label}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
