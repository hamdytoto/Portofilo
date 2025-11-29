"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	Code,
	Briefcase,
	Heart,
	Coffee,
	Users,
	Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="container py-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center mb-12"
			>
				<h1 className="text-4xl font-bold mb-4">
					About <span className="text-orange-500">Me</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Get to know more about me, my background, and what drives my passion
					for Mern stack development.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="relative">
						<div className="aspect-square overflow-hidden rounded-xl border-8 border-orange-100 dark:border-orange-900/30 shadow-xl">
							<Image
								src="/placeholder.svg?height=600&width=600"
								alt="Developer Portrait"
								width={600}
								height={600}
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg">
							<div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full p-3">
								<Code className="h-6 w-6" />
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="space-y-6"
				>
					<div>
						<h2 className="text-3xl font-bold mb-4">Mern Stack Developer</h2>
						<p className="text-muted-foreground mb-4">
							Hello! I'm a passionate MERN Stack Developer with over 2 years of
							experience building full-stack web applications using MongoDB,
							Express.js, React, and Node.js. I specialize in creating scalable,
							responsive, and user-centric applications that deliver seamless
							user experiences from frontend to backend.
						</p>
						<p className="text-muted-foreground mb-4">
							My journey in web development began during my university years,
							where I discovered my passion for creating interactive user
							interfaces. Since then, I've worked with various companies and
							clients, helping them bring their ideas to life through clean code
							and modern design.
						</p>
						<p className="text-muted-foreground">
							When I'm not coding, you can find me exploring new technologies,
							contributing to open-source projects, or sharing my knowledge
							through blog posts and community events.
						</p>
					</div>
					<div className="flex flex-wrap gap-4">
						<Button asChild className="bg-orange-500 hover:bg-orange-600">
							<Link href="/contact">
								Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline">
							<Link href="/projects">View My Work</Link>
						</Button>
					</div>
				</motion.div>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
			>
				<motion.div variants={item}>
					<Card className="h-full border-orange-100 dark:border-orange-900/20 hover:shadow-md transition-shadow">
						<CardContent className="p-6 flex flex-col items-center text-center">
							<div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mb-4">
								<Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
							</div>
							<h3 className="text-xl font-bold mb-2">Clean Code</h3>
							<p className="text-muted-foreground">
								I believe in writing clean, maintainable, and well-documented
								code that follows best practices and industry standards.
							</p>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div variants={item}>
					<Card className="h-full border-orange-100 dark:border-orange-900/20 hover:shadow-md transition-shadow">
						<CardContent className="p-6 flex flex-col items-center text-center">
							<div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mb-4">
								<Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
							</div>
							<h3 className="text-xl font-bold mb-2">User-Centered</h3>
							<p className="text-muted-foreground">
								I focus on creating intuitive and accessible interfaces that
								provide exceptional user experiences across all devices.
							</p>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div variants={item}>
					<Card className="h-full border-orange-100 dark:border-orange-900/20 hover:shadow-md transition-shadow">
						<CardContent className="p-6 flex flex-col items-center text-center">
							<div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mb-4">
								<Coffee className="h-6 w-6 text-orange-600 dark:text-orange-400" />
							</div>
							<h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
							<p className="text-muted-foreground">
								I'm constantly learning and staying up-to-date with the latest
								technologies and best practices in frontend development.
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="bg-white dark:bg-zinc-900 rounded-xl p-8 border border-orange-100 dark:border-orange-900/20 shadow-md mb-16"
			>
				<h2 className="text-2xl font-bold mb-6 text-center">My Journey</h2>
				<div className="relative">
					<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-900/30"></div>
					<div className="space-y-12">
						<TimelineItem
							year="2024"
							title="MERN Stack Projects"
							description="Enhanced my skills by building full MERN stack applications, integrating MongoDB, Express, React, and Node.js for end-to-end solutions."
							icon={<Briefcase className="h-5 w-5" />}
						/>
						<TimelineItem
							year="2023"
							title="Backend Development with Node.js"
							description="Started diving into backend technologies such as Node.js and Express.js, building full-stack application capabilities."
							icon={<Code className="h-5 w-5" />}
						/>
						<TimelineItem
							year="2022"
							title="Learning React & CSS Libraries"
							description="Focused on mastering React.js and explored popular CSS frameworks like Bootstrap and Tailwind CSS for building modern UIs."
							icon={<Globe className="h-5 w-5" />}
						/>
						<TimelineItem
							year="2021"
							title="Started Web Development Journey"
							description="Began learning HTML, CSS, and JavaScript fundamentals, laying the groundwork for frontend development."
							icon={<Heart className="h-5 w-5" />}
						/>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-center"
			>
				<h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto mb-8">
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision.
				</p>
				<Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
					<Link href="/contact">
						Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</motion.div>
		</div>
	);
}

function TimelineItem({
	year,
	title,
	description,
	icon,
}: {
	year: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}) {
	return (
		<div className="relative pl-10">
			<div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
				{icon}
			</div>
			<div className="flex flex-col sm:flex-row sm:items-center gap-2">
				<span className="text-orange-500 font-bold">{year}</span>
				<h3 className="text-lg font-semibold">{title}</h3>
			</div>
			<p className="text-muted-foreground mt-1">{description}</p>
		</div>
	);
}
