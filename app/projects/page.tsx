"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default function ProjectsPage() {
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
					My <span className="text-orange-500">Projects</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					A collection of my work showcasing my skills in React, Next.js, and
					TypeScript development.
				</p>
			</motion.div>

			<Tabs defaultValue="all" className="mb-12">
				<TabsList className="mx-auto flex justify-center">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="frontend">Frontend</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>

				<TabsContent value="all">
					<ProjectGrid projects={projects} />
				</TabsContent>
				<TabsContent value="frontend">
					<ProjectGrid
						projects={projects.filter((p) => p.category === "frontend")}
					/>
				</TabsContent>
				<TabsContent value="backend">
					<ProjectGrid
						projects={projects.filter((p) => p.category === "backend")}
					/>
				</TabsContent>
				<TabsContent value="other">
					<ProjectGrid
						projects={projects.filter((p) => p.category === "other")}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
}

function ProjectGrid({ projects }: { projects: any }) {
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
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
		>
			{projects.map((project: any) => (
				<motion.div
					key={project.id}
					variants={item}
					className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-orange-100 dark:border-orange-900/20 shadow-md hover:shadow-lg transition-all"
				>
					<div className="aspect-video overflow-hidden">
						<Image
							src={project.image || "/placeholder.svg"}
							alt={project.title}
							width={800}
							height={400}
							className="object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div className="p-6">
						<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
						<p className="text-muted-foreground mb-4 line-clamp-2">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{project.tags.map((tag: any, index: any) => (
								<span
									key={index}
									className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded text-xs"
								>
									{tag}
								</span>
							))}
						</div>
						<div className="flex gap-3">
							<Button
								asChild
								size="sm"
								className="bg-orange-500 hover:bg-orange-600"
							>
								<Link href={project.demoUrl}>
									<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
								</Link>
							</Button>
							<Button asChild size="sm" variant="outline">
								<Link href={project.githubUrl}>
									<Github className="mr-2 h-4 w-4" /> Code
								</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
}
