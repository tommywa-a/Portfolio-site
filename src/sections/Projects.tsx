import logoipsumScreen from '@/assets/images/logoipsum_screen.png'
import airbnbScreen from '@/assets/images/Airbnb_screen.png'
import ecommerceAdminScreen from '@/assets/images/Ecommerce_admin_screen.png'
import ecommerceStoreScreen from '@/assets/images/Ecommerce_store_screen.png'
import Image from 'next/image'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

const portfolioProjects = [
	{
		company: 'Logoipsum',
		year: '2024',
		title: 'Learning Management System Site',
		results: [
			{ title: 'Free tier and course-purchase functionality' },
			{ title: 'Teacher view and student view' },
			{ title: 'Analytics tab for course creators' },
		],
		link: 'https://lms-webapp-tommywaas-projects.vercel.app/',
		image: logoipsumScreen,
	},
	{
		company: 'Airbnb clone',
		year: '2023',
		title: 'Home Rental Service Site',
		results: [
			{ title: 'Credential authentication' },
			{ title: 'Creation and deletion of properties' },
			{ title: 'Advanced search algorithm' },
		],
		link: 'https://home-rent-app-tommywaas-projects.vercel.app/',
		image: airbnbScreen,
	},
	{
		company: 'STOrE',
		year: '2024',
		title: 'E-Commerce Site',
		results: [
			{ title: 'Add-to-cart' },
			{ title: 'Checkout functionality' },
			{ title: 'Filter functionality' },
		],
		link: 'https://youtu.be/Z7I5uSRHMHg',
		image: ecommerceStoreScreen,
	},
	{
		company: 'STOrE (Admin)',
		year: '2024',
		title: 'E-Commerce Admin (SAAS) Site',
		results: [
			{ title: 'Analytics page' },
			{ title: 'Multiple Store functionality' },
			{ title: 'Api Route generation to allow for easy connection to frontend stores' },
		],
		link: 'https://youtu.be/Z7I5uSRHMHg',
		image: ecommerceAdminScreen,
	},
]

export const ProjectsSection = () => {
	return (
		<section id='projects' className='pb-16 lg:py-24'>
			<div className='container'>
				<SectionHeader
					eyebrow='Real-world Results'
					title='Featured Projects'
					description='See how I transformed concepts into engaging digital experiences.'
				/>
				<div className='mt-10 md:mt-20 flex flex-col gap-20'>
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
							style={{top: `calc(64px + ${projectIndex * 40}px`,}}
						>
							<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
								<div className='lg:pb-16'>
									<div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest text-sm text-transparent bg-clip-text'>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>

									<h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
										{project.title}
									</h3>
									<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
									<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
										{project.results.map((result) => (
											<li
												key={result.title}
												className='flex gap-2 text-sm md:text-base text-white/50'
											>
												<div className='self-center'>
													<CheckCircleIcon className='size-5 md:size-6' />
												</div>
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className='bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
											<span>Visit Live Site</span>
											<ArrowUpRightIcon className='size-4' />
										</button>
									</a>
								</div>
								<div className='relative'>
									<Image
										src={project.image}
										alt={project.title}
										className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
