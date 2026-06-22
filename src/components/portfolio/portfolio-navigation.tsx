'use client'

import { useState } from 'react'
import {
	Briefcase,
	GraduationCap,
	Home,
	LayoutGrid,
	Menu,
	UserRound,
	Wrench,
	X
} from 'lucide-react'
import { PORTFOLIO_NAVIGATION } from '@/data/portfolio-content'

const NAVIGATION_ICONS = [Home, UserRound, Wrench, GraduationCap, Briefcase, LayoutGrid] as const

export function PortfolioNavigation(): React.ReactElement {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = (): void => {
		setIsOpen(false)
	}

	return (
		<>
			<button
				id='portfolio-mobile-menu-button'
				className='portfolio-mobile-menu-button'
				type='button'
				aria-expanded={isOpen}
				aria-controls='portfolio-navigation'
				aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
				onClick={() => {
					setIsOpen((currentValue) => !currentValue)
				}}
			>
				{isOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
			</button>
			<nav
				id='portfolio-navigation'
				className={`portfolio-navigation${isOpen ? ' portfolio-navigation-open' : ''}`}
				aria-label='Primary navigation'
			>
				<ul>
					{PORTFOLIO_NAVIGATION.map((item, index) => {
						const Icon = NAVIGATION_ICONS[index]
						return (
							<li key={item.id}>
								<a
									id={`navigation-${item.id}`}
									href={`#${item.id}`}
									aria-label={item.label}
									onClick={closeMenu}
								>
									<Icon aria-hidden='true' />
									<span>{item.label}</span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}
