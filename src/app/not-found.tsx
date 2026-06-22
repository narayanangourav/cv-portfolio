'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { SYSTEM_UI_CONTENT } from '@/data/portfolio-content'

export default function NotFound(): React.ReactElement {
	return (
		<main className='portfolio-state-page'>
			<section className='portfolio-state-card'>
				<strong>{SYSTEM_UI_CONTENT.notFound.code}</strong>
				<h1>{SYSTEM_UI_CONTENT.notFound.title}</h1>
				<p>{SYSTEM_UI_CONTENT.notFound.description}</p>
				<div className='portfolio-state-actions'>
					<button id='not-found-back-button' type='button' onClick={() => window.history.back()}>
						<ArrowLeft aria-hidden='true' />
						{SYSTEM_UI_CONTENT.notFound.back}
					</button>
					<Link id='not-found-home-link' href='/'>
						<Home aria-hidden='true' />
						{SYSTEM_UI_CONTENT.notFound.home}
					</Link>
				</div>
			</section>
		</main>
	)
}
