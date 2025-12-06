import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hamdy Abd Elmohsen - Portfolio",
	description: "Portfolio showcasing React, Next.js, and TypeScript skills",
	generator: "hamdytoto",
	applicationName: "hamdytoto Portfolio",
	keywords: [
		"Hamdy Abd Elmohsen",
		"hamdytoto",
		"Portfolio",
		"React",
		"Next.js",
		"TypeScript",
		"Web Developer",
	],
	authors: [
		{ name: "Hamdy Abd Elmohsen", url: "https://hamdytoto.netlify.app" },
	],
	creator: "Hamdy Abd Elmohsen",
	publisher: "Hamdy Abd Elmohsen",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/hamdy.jpg" sizes="32x32" type="image/jpeg" />
				<link rel="apple-touch-icon" href="/hamd.jpg" />
			</head>
			<body className={`${inter.className} bg-orange-50 dark:bg-zinc-950`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
