import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t bg-orange-50/50 dark:bg-zinc-950/50 backdrop-blur-sm">
			<div className="container py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Hamdy<span className="text-orange-500">Toto</span>
						</h3>
						<p className="text-muted-foreground">
							MERN Stack Developer with good skills in both frontend and
							backend development. Experienced in building full-stack web
							applications using MongoDB, Express.js, React, and Node.js.
							Passionate about creating responsive, accessible, and
							high-performance solutions from UI to database.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/projects"
									className="text-muted-foreground hover:text-orange-500 transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/skills"
									className="text-muted-foreground hover:text-orange-500 transition-colors"
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									href="/cv"
									className="text-muted-foreground hover:text-orange-500 transition-colors"
								>
									CV
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-orange-500 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Connect</h3>
						<div className="flex space-x-4">
							<Link
								href="https://github.com/hamdytoto"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-orange-500 transition-colors"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="https://www.linkedin.com/in/hamdy-abd-elmohsen%F0%9F%87%B5%F0%9F%87%B8-a21363222/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-orange-500 transition-colors"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
							<Link
								href="https://x.com/ElmohsenHamdy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-orange-500 transition-colors"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="mailto:hamdytoto552@gmail.com"
								className="text-muted-foreground hover:text-orange-500 transition-colors"
							>
								<Mail className="h-5 w-5" />
								<span className="sr-only">Email</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
