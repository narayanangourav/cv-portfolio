'use client'

import { useCallback } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { useScrollDirectionControl } from '@/hooks/use-scroll-direction-control'

const PAGE_SCROLL_DISTANCE_RATIO = 0.7

export function PageScrollButton(): React.ReactElement {
	const createTarget = useCallback(
		() => ({
			getPosition: () => document.scrollingElement?.scrollTop ?? window.scrollY,
			getMaximum: () =>
				(document.scrollingElement?.scrollHeight ?? document.documentElement.scrollHeight) -
				window.innerHeight,
			scrollTo: (position: number) => {
				window.scrollTo({ top: position, behavior: 'smooth' })
			}
		}),
		[]
	)
	const getDistance = useCallback(() => window.innerHeight * PAGE_SCROLL_DISTANCE_RATIO, [])
	const getEventTarget = useCallback(() => window, [])
	const { isScrollingUp, scroll } = useScrollDirectionControl({
		createTarget,
		distance: getDistance,
		eventTarget: getEventTarget
	})

	return (
		<button
			id='page-scroll-button'
			className='portfolio-page-scroll-button'
			type='button'
			aria-label={
				isScrollingUp ? PORTFOLIO_CONTENT.pageScrollUpLabel : PORTFOLIO_CONTENT.pageScrollLabel
			}
			onClick={scroll}
		>
			{isScrollingUp ? <ChevronUp aria-hidden='true' /> : <ChevronDown aria-hidden='true' />}
		</button>
	)
}
