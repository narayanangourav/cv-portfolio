'use client'

import { useCallback, useEffect, useState } from 'react'

interface ScrollTarget {
	getPosition: () => number
	getMaximum: () => number
	scrollTo: (position: number) => void
}

interface ScrollDirectionControlOptions {
	createTarget: () => ScrollTarget | null
	distance: () => number
	eventTarget: () => EventTarget | null
}

interface ScrollDirectionControl {
	isScrollingUp: boolean
	scroll: () => void
}

const EDGE_THRESHOLD = 24

export function useScrollDirectionControl({
	createTarget,
	distance,
	eventTarget
}: ScrollDirectionControlOptions): ScrollDirectionControl {
	const [isScrollingUp, setIsScrollingUp] = useState(false)

	const updateDirection = useCallback((): void => {
		const target = createTarget()

		if (target === null) {
			return
		}

		const position = target.getPosition()
		const maximum = Math.max(target.getMaximum(), 0)

		if (position >= maximum - EDGE_THRESHOLD) {
			setIsScrollingUp(true)
		} else if (position <= EDGE_THRESHOLD) {
			setIsScrollingUp(false)
		}
	}, [createTarget])

	useEffect(() => {
		const target = eventTarget()

		if (target === null) {
			return
		}

		updateDirection()
		target.addEventListener('scroll', updateDirection, { passive: true })
		target.addEventListener('wheel', updateDirection, { passive: true })
		target.addEventListener('touchend', updateDirection, { passive: true })
		window.addEventListener('resize', updateDirection, { passive: true })

		let resizeObserver: ResizeObserver | null = null
		if (target instanceof HTMLElement) {
			resizeObserver = new ResizeObserver(updateDirection)
			resizeObserver.observe(target)
		}

		return () => {
			target.removeEventListener('scroll', updateDirection)
			target.removeEventListener('wheel', updateDirection)
			target.removeEventListener('touchend', updateDirection)
			window.removeEventListener('resize', updateDirection)
			resizeObserver?.disconnect()
		}
	}, [eventTarget, updateDirection])

	const scroll = (): void => {
		const target = createTarget()

		if (target === null) {
			return
		}

		const currentPosition = target.getPosition()
		const maximum = Math.max(target.getMaximum(), 0)
		const isAtBottom = currentPosition >= maximum - EDGE_THRESHOLD
		const isAtTop = currentPosition <= EDGE_THRESHOLD
		const shouldScrollUp = isAtBottom || (isScrollingUp && !isAtTop)
		const requestedPosition = currentPosition + distance() * (shouldScrollUp ? -1 : 1)
		const nextPosition = Math.min(Math.max(requestedPosition, 0), maximum)

		setIsScrollingUp(shouldScrollUp)
		target.scrollTo(nextPosition)
	}

	return { isScrollingUp, scroll }
}
