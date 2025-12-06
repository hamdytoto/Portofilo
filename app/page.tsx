"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Briefcase, Award, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects/projects";

export default function Home() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="flex flex-col gap-20 pb-20">
			{/* Hero Section */}
			<section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
					>
						<div className="space-y-6">
							<div className="space-y-2">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2, duration: 0.5 }}
								>
									<span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
										Mern Stack Developer
									</span>
								</motion.div>
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
								>
									Crafting <span className="text-orange-500">Digital</span>{" "}
									Experiences
								</motion.h1>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4, duration: 0.5 }}
									className="text-xl text-muted-foreground"
								>
									Specialized in NodeJs, Express, NestJs, React, and TypeScript
									development. Building beautiful, responsive, and accessible
									web applications.
								</motion.p>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="flex flex-wrap gap-4"
							>
								<Button
									asChild
									size="lg"
									className="bg-orange-500 hover:bg-orange-600"
								>
									<Link href="/projects">
										View Projects <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<Link href="/contact">Contact Me</Link>
								</Button>
							</motion.div>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="relative"
						>
							<div className="relative aspect-square overflow-hidden rounded-full border-8 border-orange-100 dark:border-orange-900/30 shadow-xl mx-auto max-w-md">
								<Image
									src="/hamdy.jpg?height=600&width=600"
									alt="Developer Portrait"
									width={600}
									height={600}
									className="object-cover"
									priority
								/>
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg">
								<div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full p-3">
									<Code className="h-3 w-3" />
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Background decorations */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/20 dark:bg-orange-700/10 rounded-full blur-3xl" />
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-200/30 dark:bg-orange-800/10 rounded-full blur-3xl" />
				</div>
			</section>

			{/* Featured Skills */}
			<section className="container py-12">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-12"
				>
					<motion.h2 variants={item} className="text-3xl font-bold mb-4">
						Technical <span className="text-orange-500">Expertise</span>
					</motion.h2>
					<motion.p
						variants={item}
						className="text-muted-foreground max-w-2xl mx-auto"
					>
						Specialized in modern frontend technologies to build fast,
						responsive, and user-friendly web applications.
					</motion.p>
				</motion.div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<motion.div
						variants={item}
						className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100 dark:border-orange-900/20"
					>
						<div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
							<Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
						<p className="text-muted-foreground mb-4">
							Expert in React, Next.js, and TypeScript for building modern web
							applications.
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								React
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Next.js
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								TypeScript
							</span>
						</div>
					</motion.div>

					<motion.div
						variants={item}
						className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100 dark:border-orange-900/20"
					>
						<div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
							<Briefcase className="h-6 w-6 text-orange-600 dark:text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
						<p className="text-muted-foreground mb-4">
							Creating beautiful, intuitive interfaces with attention to detail
							and user experience.
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Tailwind CSS
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Figma
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Framer Motion
							</span>
						</div>
					</motion.div>

					<motion.div
						variants={item}
						className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100 dark:border-orange-900/20"
					>
						<div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
							<Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">
							Performance Optimization
						</h3>
						<p className="text-muted-foreground mb-4">
							Optimizing web applications for speed, accessibility, and SEO best
							practices.
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Lighthouse
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								Web Vitals
							</span>
							<span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs">
								SEO
							</span>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* Featured Projects */}
			<section className="container py-12">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-12"
				>
					<motion.h2 variants={item} className="text-3xl font-bold mb-4">
						Featured <span className="text-orange-500">Projects</span>
					</motion.h2>
					<motion.p
						variants={item}
						className="text-muted-foreground max-w-2xl mx-auto"
					>
						A selection of my recent work showcasing my skills and expertise.
					</motion.p>
				</motion.div>

				{/* Filter only featured projects */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{projects
						.filter((p: any) => p.featured)
						.map((project: any) => (
							<motion.div
								key={project.id}
								variants={item}
								className="group relative overflow-hidden rounded-xl border border-orange-100 dark:border-orange-900/20 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-shadow"
							>
								{/* Project Type Badge */}
								<div className="absolute top-3 left-3 z-10">
									<span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/90 text-white">
										{project.type}
									</span>
								</div>

								<div className="aspect-video overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										width={800}
										height={400}
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{project.title}
									</h3>
									<p className="text-muted-foreground mb-4 line-clamp-2">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag: string, i: number) => (
											<span
												key={i}
												className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs"
											>
												{tag}
											</span>
										))}
									</div>

									<Button asChild variant="outline" size="sm">
										<Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
											View Project <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</motion.div>
						))}
				</motion.div>

				{/* Show button only if there are featured projects */}
				{projects.some((p: any) => p.featured) && (
					<motion.div
						variants={item}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						className="text-center mt-12"
					>
						<Button
							asChild
							size="lg"
							className="bg-orange-500 hover:bg-orange-600"
						>
							<Link href="/projects">
								View All Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				)}
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
				<div className="container">
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
					>
						<motion.div variants={item} className="space-y-4">
							<h2 className="text-3xl font-bold">
								Ready to bring your ideas to life?
							</h2>
							<p className="text-orange-50 text-lg">
								Let's collaborate to create something amazing together. Download
								my CV or get in touch to discuss your project.
							</p>
						</motion.div>
						<motion.div
							variants={item}
							className="flex flex-wrap gap-4 justify-center md:justify-end"
						>
							<Button asChild size="lg" variant="secondary">
								<Link href="/cv">
									<Download className="mr-2 h-4 w-4" /> Download CV
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="bg-transparent text-white border-white hover:bg-white/10"
							>
								<Link href="/contact">Contact Me</Link>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
