'use client'

import { AlertTriangle, RefreshCw } from 'lucide-react'
import { SYSTEM_UI_CONTENT } from '@/data/portfolio-content'

interface ErrorPageProps {
	reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps): React.ReactElement {
	return (
		<main className='portfolio-state-page'>
			<section className='portfolio-state-card'>
				<AlertTriangle aria-hidden='true' />
				<h1>{SYSTEM_UI_CONTENT.error.title}</h1>
				<p>{SYSTEM_UI_CONTENT.error.description}</p>
				<div className='portfolio-state-actions'>
					<button id='error-retry-button' type='button' onClick={reset}>
						<RefreshCw aria-hidden='true' />
						{SYSTEM_UI_CONTENT.error.retry}
					</button>
					<a id='error-home-link' href='/'>
						{SYSTEM_UI_CONTENT.error.home}
					</a>
				</div>
			</section>
		</main>
	)
}
