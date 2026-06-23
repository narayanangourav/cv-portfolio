import {
	type AwardEntry,
	type CertificationEntry,
	type EducationEntry,
	type PublicationEntry,
	type WorkEntry
} from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { CertificationCard } from './certification-card'
import { SectionHeading } from './section-heading'

interface ResumeSectionsProps {
	education: EducationEntry[]
	work: WorkEntry[]
	publications: PublicationEntry[]
	certifications: CertificationEntry[]
	awards: AwardEntry[]
}

export function ResumeSections({
	education,
	work,
	publications,
	certifications,
	awards
}: ResumeSectionsProps): React.ReactElement {
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
								<time dateTime={`${item.start}/${item.end}`}>
									{item.start} - {item.end}
								</time>
								{item.description.map((description) => (
									<p key={description} className='portfolio-resume-area'>
										{description}
									</p>
								))}
							</div>
							<div className='portfolio-resume-description'>
								<h4>{item.degree}</h4>
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
					{work.map((company) => (
						<article key={company.company} className='portfolio-resume-row'>
							<div className='portfolio-resume-meta'>
								<h3>{company.company}</h3>
								{company.badges.map((badge) => (
									<p key={badge} className='portfolio-resume-area'>
										{badge}
									</p>
								))}
							</div>
							<div className='portfolio-resume-description'>
								<div className='portfolio-career-timeline'>
									{company.jobs.map((job) => (
										<section key={job.title} className='portfolio-career-item'>
											<h4>{job.title}</h4>
											<time dateTime={`${job.start}/${job.end}`}>
												{job.start} - {job.end}
											</time>
											<ul>
												{job.description.map((description) => (
													<li key={description}>{description}</li>
												))}
											</ul>
										</section>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section id='publications' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.publications}
					title={PORTFOLIO_CONTENT.sectionTitles.publications}
					description={PORTFOLIO_CONTENT.sectionDescriptions.publications}
				/>
				<div className='portfolio-resume-panel'>
					{publications.map((publication) => (
						<article key={publication.title} className='portfolio-publication-card'>
							<h3>{publication.title}</h3>
							<p className='portfolio-publication-meta'>
								{publication.source} · {publication.date}
							</p>
							<a
								id={`publication-link-${publication.id}`}
								className='portfolio-publication-link'
								href={publication.link.href}
								target='_blank'
								rel='noreferrer'
							>
								{publication.link.label}
							</a>
							<div className='portfolio-publication-copy'>
								{publication.description.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</article>
					))}
				</div>
			</section>

			<section id='certifications' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.certifications}
					title={PORTFOLIO_CONTENT.sectionTitles.certifications}
					description={PORTFOLIO_CONTENT.sectionDescriptions.certifications}
				/>
				<div className='portfolio-resume-panel'>
					{certifications.map((certification) => (
						<CertificationCard key={certification.id} certification={certification} />
					))}
				</div>
			</section>

			<section id='awards' className='portfolio-section'>
				<SectionHeading
					eyebrow={PORTFOLIO_CONTENT.sectionEyebrows.awards}
					title={PORTFOLIO_CONTENT.sectionTitles.awards}
					description={PORTFOLIO_CONTENT.sectionDescriptions.awards}
				/>
				<div className='portfolio-resume-panel'>
					{awards.map((award) => (
						<article key={award.id} className='portfolio-award-card'>
							<h3>{award.title}</h3>
							<p className='portfolio-publication-meta'>
								Issued by {award.issuer} · {award.date}
							</p>
							<p className='portfolio-award-association'>Associated with {award.associatedWith}</p>
							<div className='portfolio-publication-copy'>
								<p>{award.description}</p>
								{award.details.map((detail) => (
									<p key={detail}>{detail}</p>
								))}
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	)
}
