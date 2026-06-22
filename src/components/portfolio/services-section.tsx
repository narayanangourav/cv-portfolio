import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { SectionHeading } from './section-heading'

export function ServicesSection(): React.ReactElement {
	return (
		<>
			<section id='services' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.services}
					title={PORTFOLIO_CONTENT.sectionTitles.services}
					description={PORTFOLIO_CONTENT.sectionDescriptions.services}
				/>
				<div className='portfolio-services-grid'>
					{PORTFOLIO_CONTENT.services.map((service) => {
						const Icon = service.icon
						return (
							<article key={service.title} className='portfolio-service-card'>
								<Icon aria-hidden='true' />
								<h3>{service.title}</h3>
								<p>{service.description}</p>
							</article>
						)
					})}
				</div>
			</section>

			<section className='portfolio-section portfolio-recommendations-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.recommendations}
					title={PORTFOLIO_CONTENT.sectionTitles.recommendations}
					description={PORTFOLIO_CONTENT.sectionDescriptions.recommendations}
				/>
				<div className='portfolio-recommendations-grid'>
					{PORTFOLIO_CONTENT.recommendations.map((item) => (
						<article key={item.title} className='portfolio-recommendation-card'>
							<div className='portfolio-stars' aria-label={PORTFOLIO_CONTENT.highlightAriaLabel}>
								{PORTFOLIO_CONTENT.highlightMark}
							</div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<strong>{item.source}</strong>
						</article>
					))}
				</div>
			</section>
		</>
	)
}
