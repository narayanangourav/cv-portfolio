import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { type ResumeData } from '@/types'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { type SkillGroup } from '@/lib/portfolio-view-model'
import { getPublicPath } from '@/lib/public-path'

interface ProfileSidebarProps {
	data: ResumeData
	skillGroups: SkillGroup[]
}

export function ProfileSidebar({ data, skillGroups }: ProfileSidebarProps): React.ReactElement {
	return (
		<aside
			id='portfolio-profile-sidebar'
			className='portfolio-profile-sidebar'
			aria-label='Profile summary'
		>
			<div className='portfolio-profile-header'>
				<div className='portfolio-avatar-wrap'>
					<Image
						className='portfolio-avatar'
						src={getPublicPath(data.avatar)}
						alt={`${data.name} portrait`}
						width={140}
						height={170}
						priority
					/>
				</div>
				<h1 className='portfolio-profile-name'>{data.name}</h1>
				<p className='portfolio-profile-role'>{PORTFOLIO_CONTENT.sidebarIntro}</p>
				<div className='portfolio-social-list'>
					{data.contact.social.map((social) => {
						const SocialIcon = social.icon
						return (
							<a
								id={`profile-social-${social.name.toLowerCase()}`}
								key={social.name}
								className='portfolio-social-link'
								href={social.url}
								target='_blank'
								rel='noreferrer'
								aria-label={social.name}
								data-tooltip={social.name}
							>
								<SocialIcon className='portfolio-social-icon' />
							</a>
						)
					})}
					<a
						id='profile-social-email'
						className='portfolio-social-link'
						href={`mailto:${data.contact.email.at}`}
						aria-label={data.contact.email.name}
						data-tooltip={data.contact.email.name}
					>
						<Mail className='portfolio-social-icon' aria-hidden='true' />
					</a>
				</div>
			</div>

			<div className='portfolio-profile-meta'>
				<span>City</span>
				<a id='profile-location-link' href={data.locationLink} target='_blank' rel='noreferrer'>
					<MapPin aria-hidden='true' />
					{data.location}
				</a>
			</div>

			<div className='portfolio-sidebar-card-track' aria-label='Profile skill groups'>
				{skillGroups.map((group) => (
					<section key={group.title} className='portfolio-skill-group'>
						<h2>{group.title}</h2>
						{group.items.map((skill) => (
							<div key={skill} className='portfolio-skill-row'>
								<span>{skill}</span>
							</div>
						))}
					</section>
				))}
			</div>
		</aside>
	)
}
