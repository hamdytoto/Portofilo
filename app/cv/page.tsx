"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react"

export default function CVPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Curriculum <span className="text-orange-500">Vitae</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Back-End Developer | Node.js | Express.js | NestJS | MongoDB
          </p>
          <p className="text-muted-foreground mt-2">
            Alexandria, Egypt | 011241168608 | 01004549758 | Military Status: Exempt
          </p>
        </div>
        <Button
          className="bg-orange-500 hover:bg-orange-600"
          asChild
        >
          <a href="https://drive.google.com/file/d/1o2H88wA7hjqI6h4roev8kF9YqMpJjjII/view?usp=drive_link" target="_blank">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="experience" className="mb-12">
        <TabsList className="mx-auto flex justify-center mb-8">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center gap-2">
            <Award className="h-4 w-4" /> Courses & Internships
          </TabsTrigger>
        </TabsList>

        {/* Experience */}
        <TabsContent value="experience">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <ExperienceItem
              title="Backend Developer – E-Commerce Platform (Africa Store clone)"
              company="Remote"
              period="Feb 2025 – May 2025"
              description="Built a full-featured e-commerce platform with complete order lifecycle management and admin capabilities."
              responsibilities={[
                "Developed scalable REST & GraphQL APIs using NestJS, improving response times by 25%",
                "Implemented role-based access control, full order workflows, and real-time updates",
                "Integrated Cloudinary for media uploads",
                "Designed backend architecture supporting scalable order, product, and admin features",
                "Tech: NestJS, MongoDB, Mongoose, JWT, GraphQL, REST, Socket.IO, Docker, Cloudinary",
                "Repo: https://github.com/hamdytoto/Africa_Store_Backend",
              ]}
            />
            <ExperienceItem
              title="Backend Developer – Job Nest (LinkedIn Similar)"
              company="Remote"
              period="Oct 2024 – Jun 2025"
              description="Professional platform for job posting, applications, and recruiter communication."
              responsibilities={[
                "Implemented secure authentication using JWT",
                "Integrated real-time messaging with Socket.IO",
                "Containerized application with Docker and reusable middleware for access control",
                "Tech: Node.js, Express.js, Socket.IO, MongoDB, Mongoose, Cloudinary, Docker",
                "Repo: https://github.com/hamdytoto/JobNest",
              ]}
            />
            <ExperienceItem
              title="Backend Developer – Messaging Platform (Saraha App)"
              company="Remote"
              period="Aug 2024 – Sep 2024"
              description="Anonymous messaging app with real-time feedback and media sharing."
              responsibilities={[
                "Created RESTful APIs using Node.js, Express.js, MongoDB with Mongoose",
                "Configured secure authentication with JWT",
                "Integrated Cloudinary for media uploads and added message moderation",
                "Conducted code reviews resulting in 15% reduction in bugs",
                "Tech: Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary",
                "Repo: https://github.com/hamdytoto/SarahaApp",
              ]}
            />
            <ExperienceItem
              title="Backend Developer – Social App"
              company="Remote"
              period="Jan 2024 – Feb 2024"
              description="Real-time social platform combining chat, posts, comments, and notifications."
              responsibilities={[
                "Developed scalable backend using Node.js, Express.js, Socket.IO",
                "Implemented APIs for user interactions and content management",
                "Enhanced feature alignment by 20% using JIRA for tracking",
                "Tech: Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary, Socket.IO",
                "Repo: https://github.com/hamdytoto/socialApplication",
              ]}
            />
          </motion.div>
        </TabsContent>

        {/* Education */}
        <TabsContent value="education">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <EducationItem
              degree="Bachelor Degree of Computer Science"
              institution="Faculty of Computer Science and Information Technology, Damanhur, Egypt"
              period="Sep 2021 - Jun 2025"
              description='Cumulative Grade: Very Good (3.3/4). Graduation Project: Online Ticketing System "Excellent".'
              courses={[
                "Software Development",
                "Web Technologies",
                "Database Systems",
                "Object-Oriented Programming",
                "Software Project Management",
              ]}
            />
          </motion.div>
        </TabsContent>

        {/* Courses & Internships */}
        <TabsContent value="certifications">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <CertificationItem
              title="Fullstack Development"
              issuer="Azm Squad"
              date="7th Aug – 20th Oct 2025"
              description="Practical fullstack development internship focusing on MERN stack projects."
            />
            <CertificationItem
              title="MERN Stack Development"
              issuer="ITI, Damanhur, Egypt"
              date="7th Nov – 20th Feb 2025"
              description="Hands-on projects covering Node.js, Express, React, and MongoDB."
            />
            <CertificationItem
              title="Web Development Fundamentals"
              issuer="ITI, Damanhur, Egypt"
              date="1st Sep – 14th Sep 2024"
              description="Introduction to web development, HTML, CSS, JavaScript."
            />
            <CertificationItem
              title="Code Alpha Internship"
              issuer="India"
              date="7th Nov – 15th Feb 2023"
              description="Internship focused on practical coding skills and project implementation."
            />
            <CertificationItem
              title="The Web Developer Bootcamp"
              issuer="Colt Steele (Udemy)"
              date="1st - 28th Oct 2023"
              description="Comprehensive web development course covering fullstack development."
            />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  responsibilities,
}: {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-orange-100 dark:border-orange-900/20 shadow-sm"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-orange-500 font-medium">{company}</p>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{period}</span>
        </div>
      </div>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div>
        <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function EducationItem({
  degree,
  institution,
  period,
  description,
  courses,
}: {
  degree: string
  institution: string
  period: string
  description: string
  courses: string[]
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-orange-100 dark:border-orange-900/20 shadow-sm"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold">{degree}</h3>
          <p className="text-orange-500 font-medium">{institution}</p>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{period}</span>
        </div>
      </div>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div>
        <h4 className="font-semibold mb-2">Key Courses:</h4>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function CertificationItem({
  title,
  issuer,
  date,
  description,
}: {
  title: string
  issuer: string
  date: string
  description: string
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-orange-100 dark:border-orange-900/20 shadow-sm"
    >
      <div className="flex flex-col gap-1 mb-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex justify-between">
          <p className="text-orange-500">{issuer}</p>
          <p className="text-muted-foreground text-sm">{date}</p>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
