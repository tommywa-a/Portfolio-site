'use client'

import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import NextJsIcon from '@/assets/icons/nextjs.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import JavaIcon from '@/assets/icons/icons8-java.svg'
import { TechIcon } from '@/components/TechIcon'
import mapImage from '@/assets/images/map4.jpg'
import smileMemoji from '@/assets/images/Tomiwa-avatar_for_map.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const toolboxItems = [
	{
		title: 'JavaScript',
		iconType: JavascriptIcon,
	},
	{
		title: 'HTML5',
		iconType: HTMLIcon,
	},
	{
		title: 'CSS3',
		iconType: CssIcon,
	},
	{
		title: 'React',
		iconType: ReactIcon,
	},
	{
		title: 'Chrome',
		iconType: ChromeIcon,
	},
	{
		title: 'NextJs',
		iconType: NextJsIcon,
	},
	{
		title: 'Java',
		iconType: JavaIcon,
	},
	{
		title: 'Github',
		iconType: GithubIcon,
	},
]

const hobbies = [
	{
		title: 'Football',
		emoji: '⚽️',
		left: '5%',
		top: '5%',
	},
	{
		title: 'Drumming',
		emoji: '🥁',
		left: '50%',
		top: '5%',
	},
	{
		title: 'Playing Guitar',
		emoji: '🎸',
		left: '35%',
		top: '40%',
	},
	{
		title: 'Basketball',
		emoji: '🏀',
		left: '10%',
		top: '35%',
	},
	{
		title: 'Music',
		emoji: '🎵',
		left: '70%',
		top: '45%',
	},
	{
		title: 'Fitness',
		emoji: '🏋️‍♂️',
		left: '5%',
		top: '65%',
	},
	{
		title: 'Puzzles',
		emoji: '🔎',
		left: '45%',
		top: '70%',
	},
]

export const AboutSection = () => {
	const constraintRef = useRef(null)
	return (
		<section
			id='about'
			className='py-20 lg:py-28'
		>
			<div className='container'>
				<SectionHeader
					eyebrow='About Me'
					title='A Glimpse Into My World'
					description='Learn more about who I am, what I do, and what inspires me.'
				/>
				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
						<Card className='h-[320px] md:col-span-2 lg:col-span-1'>
							<CardHeader
								title='My Reads'
								description='Explore the books shaping my perspectives.'
							/>
							<div className='w-40 mx-auto mt-2 md:mt-0'>
								<Image
									src={bookImage}
									alt='Book Cover'
								/>
							</div>
						</Card>
						<Card className='h-[320px] md:col-span-5 lg:col-span-3'>
							<CardHeader
								title='My Toolbox'
								description='Explore the technologies and tools I use to craft digital
								experiences.'
								className='items-center text-center'
							/>
							<ToolboxItems
								items={toolboxItems}
								className=''
								itemWrapperClassName='animate-move-left [animation-duration:30s]'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
								itemWrapperClassName='animate-move-right [animation-duration:15s]'
							/>
						</Card>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<CardHeader
								title='Beyond the Code'
								description='My hobbies and interests.'
								subDescription='(This section is interactive).'
								className='px-6 py-6'
							/>
							<div
								className='relative flex-1'
								ref={constraintRef}
							>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className='inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
										style={{ left: hobby.left, top: hobby.top }}
										drag
										dragConstraints={constraintRef}
									>
										<span className='font text-xs text md:text-base font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
							<Image
								src={mapImage}
								alt='Map'
								className='h-full w-full object-cover bg-blue-950/70'
							/>
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
								<div className='relative rounded-full border border-sky-400 size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip'>
									<Image
										src={smileMemoji}
										alt='Smiling Memoji'
										className='size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-2'
									/>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
