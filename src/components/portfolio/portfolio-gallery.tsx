'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'

export function PortfolioGallery(): React.ReactElement {
	const [activeFilter, setActiveFilter] =
		useState<(typeof PORTFOLIO_CONTENT.portfolioFilters)[number]>('All')
	const visibleArtwork = PORTFOLIO_CONTENT.portfolioArtwork.filter(
		(item) => activeFilter === 'All' || item.category === activeFilter
	)

	return (
		<>
			<div className='portfolio-filter-list' role='group' aria-label='Filter portfolio projects'>
				{PORTFOLIO_CONTENT.portfolioFilters.map((filter) => (
					<button
						id={`portfolio-filter-${filter.toLowerCase()}`}
						key={filter}
						type='button'
						className={filter === activeFilter ? 'portfolio-filter-active' : ''}
						aria-pressed={filter === activeFilter}
						onClick={() => {
							setActiveFilter(filter)
						}}
					>
						{filter}
					</button>
				))}
			</div>
			<div className='portfolio-gallery-grid'>
				{visibleArtwork.map((artwork) => (
					<button
						id={`portfolio-project-${artwork.id}`}
						key={artwork.id}
						type='button'
						className={`portfolio-artwork portfolio-artwork-${artwork.variant}`}
						aria-label={`${artwork.title} project preview`}
					>
						<span className='portfolio-artwork-grid' aria-hidden='true' />
						<span className='portfolio-artwork-label'>
							<small>{artwork.category}</small>
							<strong>{artwork.title}</strong>
						</span>
						<ExternalLink aria-hidden='true' />
					</button>
				))}
			</div>
		</>
	)
}
