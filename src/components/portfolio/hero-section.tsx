import { ArrowRight, Download } from 'lucide-react'
import { type ResumeData } from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { getPublicPath } from '@/lib/public-path'

interface HeroSectionProps {
	data: ResumeData
}

export function HeroSection({ data }: HeroSectionProps): React.ReactElement {
	return (
		<section id='home' className='portfolio-hero'>
			<div className='portfolio-hero-copy'>
				<h2>
					{PORTFOLIO_CONTENT.introPrefix} <span>{data.name}</span>
					<br />
					{PORTFOLIO_CONTENT.role}
				</h2>
				<p className='portfolio-hero-summary'>{PORTFOLIO_CONTENT.heroSummary}</p>
				<div className='portfolio-hero-actions'>
					<a
						id='hero-contact-link'
						className='portfolio-primary-button'
						href={`mailto:${data.contact.email.at}`}
					>
						{PORTFOLIO_CONTENT.primaryAction}
						<ArrowRight aria-hidden='true' />
					</a>
					<a
						id='hero-download-link'
						className='portfolio-secondary-button'
						href={getPublicPath(`/assets/${data.resumeFileName}`)}
						download={data.resumeFileName}
					>
						{PORTFOLIO_CONTENT.downloadAction}
						<Download aria-hidden='true' />
					</a>
				</div>
			</div>
		</section>
	)
}
