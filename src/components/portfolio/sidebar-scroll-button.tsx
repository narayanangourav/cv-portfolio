'use client'

import { useCallback } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { PORTFOLIO_CONTENT } from '@/data/portfolio-content'
import { useScrollDirectionControl } from '@/hooks/use-scroll-direction-control'

const SIDEBAR_ID = 'portfolio-profile-sidebar'
const SIDEBAR_SCROLL_DISTANCE_RATIO = 0.25

export function SidebarScrollButton(): React.ReactElement {
	const getSidebar = useCallback(() => document.getElementById(SIDEBAR_ID), [])
	const createTarget = useCallback(() => {
		const sidebar = document.getElementById(SIDEBAR_ID)

		if (sidebar === null) {
			return null
		}

		return {
			getPosition: () => sidebar.scrollTop,
			getMaximum: () => sidebar.scrollHeight - sidebar.clientHeight,
			scrollTo: (position: number) => {
				sidebar.scrollTo({ top: position, behavior: 'smooth' })
			}
		}
	}, [])
	const getDistance = useCallback(() => {
		const sidebar = getSidebar()
		return (sidebar?.clientHeight ?? 0) * SIDEBAR_SCROLL_DISTANCE_RATIO
	}, [getSidebar])
	const { isScrollingUp, scroll } = useScrollDirectionControl({
		createTarget,
		distance: getDistance,
		eventTarget: getSidebar
	})

	return (
		<button
			id='sidebar-scroll-button'
			className='portfolio-sidebar-scroll-button'
			type='button'
			aria-label={
				isScrollingUp
					? PORTFOLIO_CONTENT.sidebarScrollUpLabel
					: PORTFOLIO_CONTENT.sidebarScrollLabel
			}
			onClick={scroll}
		>
			{isScrollingUp ? <ChevronUp aria-hidden='true' /> : <ChevronDown aria-hidden='true' />}
		</button>
	)
}
