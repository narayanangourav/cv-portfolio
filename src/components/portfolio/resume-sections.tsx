import { type EducationEntry, type WorkEntry } from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { SectionHeading } from './section-heading'

interface ResumeSectionsProps {
	education: EducationEntry[]
	work: WorkEntry[]
}

export function ResumeSections({ education, work }: ResumeSectionsProps): React.ReactElement {
	return (
		<>
			<section id='education' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.education}
					title={PORTFOLIO_CONTENT.sectionTitles.education}
					description={PORTFOLIO_CONTENT.sectionDescriptions.education}
				/>
				<div className='portfolio-resume-panel'>
					{education.map((item) => (
						<article key={item.school} className='portfolio-resume-row'>
							<div className='portfolio-resume-meta'>
								<h3>{item.school}</h3>
								<p>{item.degree}</p>
								<time dateTime={`${item.start}/${item.end}`}>
									{item.start} - {item.end}
								</time>
							</div>
							<div className='portfolio-resume-description'>
								<h4>{item.degree}</h4>
								<ul>
									{item.description.map((description) => (
										<li key={description}>{description}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>

			<section id='work' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.work}
					title={PORTFOLIO_CONTENT.sectionTitles.work}
					description={PORTFOLIO_CONTENT.sectionDescriptions.work}
				/>
				<div className='portfolio-resume-panel'>
					{work.flatMap((company) =>
						company.jobs.map((job) => (
							<article key={`${company.company}-${job.title}`} className='portfolio-resume-row'>
								<div className='portfolio-resume-meta'>
									<h3>{company.company}</h3>
									<p>{job.title}</p>
									<time dateTime={`${job.start}/${job.end}`}>
										{job.start} - {job.end}
									</time>
								</div>
								<div className='portfolio-resume-description'>
									<h4>{job.title}</h4>
									<ul>
										{job.description.map((description) => (
											<li key={description}>{description}</li>
										))}
									</ul>
								</div>
							</article>
						))
					)}
				</div>
			</section>
		</>
	)
}
