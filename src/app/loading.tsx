export default function Loading(): React.ReactElement {
	return (
		<main className='portfolio-state-page' aria-label='Loading portfolio'>
			<div className='portfolio-loading-layout' aria-hidden='true'>
				<div className='portfolio-loading-sidebar' />
				<div className='portfolio-loading-content'>
					<div className='portfolio-loading-hero' />
					<div className='portfolio-loading-heading' />
					<div className='portfolio-loading-cards'>
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
		</main>
	)
}
