import { type CertificationEntry } from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'

interface CertificationCardProps {
	certification: CertificationEntry
}

export function CertificationCard({ certification }: CertificationCardProps): React.ReactElement {
	const labels = PORTFOLIO_CONTENT.certificationLabels
	const skills = certification.skills ?? []

	return (
		<article className='portfolio-certification-card'>
			<h3>{certification.title}</h3>
			{certification.issuer ? (
				<p className='portfolio-certification-issuer'>{certification.issuer}</p>
			) : null}
			{certification.link ? (
				<a
					id={`certification-link-${certification.id}`}
					className='portfolio-publication-link'
					href={certification.link.href}
					target='_blank'
					rel='noreferrer'
				>
					{certification.link.label}
				</a>
			) : null}
			{skills.length > 0 ? (
				<p className='portfolio-certification-skills'>
					<span>{labels.skills}</span>{' '}
					{skills.map((skill, index) => (
						<span key={skill.name}>
							{skill.url ? (
								<a href={skill.url} target='_blank' rel='noreferrer'>
									{skill.name}
								</a>
							) : (
								skill.name
							)}
							{index < skills.length - 1 ? ', ' : ''}
						</span>
					))}
				</p>
			) : null}
		</article>
	)
}
