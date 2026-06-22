interface SectionHeadingProps {
	eyebrow: string
	title: string
	description: string
}

export function SectionHeading({
	eyebrow,
	title,
	description
}: SectionHeadingProps): React.ReactElement {
	return (
		<header className='portfolio-section-heading'>
			<p className='portfolio-section-eyebrow'>{eyebrow}</p>
			<h2 className='portfolio-section-title'>{title}</h2>
			<p className='portfolio-section-description'>{description}</p>
		</header>
	)
}
