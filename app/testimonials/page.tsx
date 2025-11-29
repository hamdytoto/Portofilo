"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "./testimonials";

export default function TestimonialsPage() {
	const [activeIndex, setActiveIndex] = useState(0);

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
					Client <span className="text-orange-500">Testimonials</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					What clients and colleagues have to say about working with me.
				</p>
			</motion.div>

			{/* Featured Testimonial */}
			<div className="mb-16">
				<motion.div
					key={testimonials[activeIndex].id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className="bg-white dark:bg-zinc-900 rounded-xl p-8 md:p-12 shadow-lg border border-orange-100 dark:border-orange-900/20 relative"
				>
					<div className="absolute -top-6 left-8 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
						<Quote className="h-6 w-6 text-orange-600 dark:text-orange-400" />
					</div>
					<div className="flex flex-col md:flex-row gap-8 items-center">
						<div className="flex-shrink-0">
							<Avatar className="h-24 w-24 border-4 border-orange-100 dark:border-orange-900/30">
								<AvatarImage
									src={testimonials[activeIndex].avatar || "/placeholder.svg"}
									alt={testimonials[activeIndex].name}
								/>
								<AvatarFallback className="bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-200 text-xl">
									{testimonials[activeIndex].initials}
								</AvatarFallback>
							</Avatar>
						</div>
						<div className="flex-1">
							<p className="text-xl italic mb-6">
								"{testimonials[activeIndex].content}"
							</p>
							<div>
								<h3 className="font-bold text-lg">
									{testimonials[activeIndex].name}
								</h3>
								<p className="text-muted-foreground">
									{testimonials[activeIndex].role}
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-8 gap-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === activeIndex
										? "bg-orange-500"
										: "bg-orange-200 dark:bg-orange-900/30"
								}`}
								aria-label={`View testimonial ${index + 1}`}
							/>
						))}
					</div>
				</motion.div>
			</div>

			{/* All Testimonials */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				{testimonials.map((testimonial) => (
					<motion.div key={testimonial.id} variants={item}>
						<Card className="h-full border-orange-100 dark:border-orange-900/20 hover:shadow-md transition-shadow">
							<CardContent className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Avatar>
										<AvatarImage
											src={testimonial.avatar || "/placeholder.svg"}
											alt={testimonial.name}
										/>
										<AvatarFallback className="bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-200">
											{testimonial.initials}
										</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="font-medium">{testimonial.name}</h3>
										<p className="text-sm text-muted-foreground">
											{testimonial.role}
										</p>
									</div>
								</div>
								<p className="italic text-muted-foreground">
									"{testimonial.content}"
								</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
