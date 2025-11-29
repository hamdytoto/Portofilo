"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react"

export default function CVPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container py-16">
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
          <p className="text-muted-foreground max-w-2xl">My professional background, experience, and education.</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </motion.div>

      <Tabs defaultValue="experience" className="mb-12">
        <TabsList className="mx-auto flex justify-center mb-8">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center gap-2">
            <Award className="h-4 w-4" /> Certifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <ExperienceItem
              title="Senior Frontend Developer"
              company="TechCorp Inc."
              period="2021 - Present"
              description="Led the frontend development team in building a complex SaaS platform using React, Next.js, and TypeScript. Implemented responsive designs, optimized performance, and mentored junior developers."
              responsibilities={[
                "Architected and developed frontend applications using React and Next.js",
                "Implemented state management solutions with Redux and Context API",
                "Optimized application performance and loading times",
                "Collaborated with UX/UI designers to implement responsive designs",
                "Mentored junior developers and conducted code reviews",
              ]}
            />
            <ExperienceItem
              title="Frontend Developer"
              company="StartupX"
              period="2019 - 2021"
              description="Worked on developing and maintaining multiple web applications for clients in various industries. Focused on creating responsive, accessible, and performant user interfaces."
              responsibilities={[
                "Developed responsive web applications using React and JavaScript",
                "Implemented UI components following design specifications",
                "Integrated RESTful APIs and managed application state",
                "Collaborated with cross-functional teams to deliver projects on time",
                "Participated in agile development processes and sprint planning",
              ]}
            />
            <ExperienceItem
              title="Junior Web Developer"
              company="Digital Agency"
              period="2017 - 2019"
              description="Started as a junior developer working on various client websites and web applications. Gained experience in frontend technologies and responsive design principles."
              responsibilities={[
                "Built and maintained client websites using HTML, CSS, and JavaScript",
                "Implemented responsive designs and ensured cross-browser compatibility",
                "Assisted senior developers with larger projects and tasks",
                "Participated in client meetings and requirement gathering",
                "Learned and applied best practices for web development",
              ]}
            />
          </motion.div>
        </TabsContent>
        <TabsContent value="education">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <EducationItem
              degree="Master of Science in Computer Science"
              institution="Tech University"
              period="2015 - 2017"
              description="Specialized in Web Technologies and Human-Computer Interaction. Thesis on 'Optimizing User Experience in Progressive Web Applications'."
              courses={[
                "Advanced Web Development",
                "User Experience Design",
                "Human-Computer Interaction",
                "Data Visualization",
                "Software Engineering Practices",
              ]}
            />
            <EducationItem
              degree="Bachelor of Science in Information Technology"
              institution="State University"
              period="2011 - 2015"
              description="Graduated with honors. Focused on software development and web technologies."
              courses={[
                "Introduction to Programming",
                "Web Development Fundamentals",
                "Database Systems",
                "Object-Oriented Programming",
                "Software Project Management",
              ]}
            />
          </motion.div>
        </TabsContent>
        <TabsContent value="certifications">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <CertificationItem
              title="Advanced React and Redux"
              issuer="Frontend Masters"
              date="2022"
              description="Comprehensive course on advanced React patterns, Redux state management, and performance optimization techniques."
            />
            <CertificationItem
              title="Next.js Developer Certification"
              issuer="Vercel"
              date="2021"
              description="Official certification for Next.js development, covering SSR, SSG, ISR, and deployment strategies."
            />
            <CertificationItem
              title="TypeScript Professional"
              issuer="TypeScript Academy"
              date="2020"
              description="In-depth certification on TypeScript, covering advanced types, generics, and integration with frontend frameworks."
            />
            <CertificationItem
              title="Web Accessibility Specialist"
              issuer="International Association of Accessibility Professionals"
              date="2019"
              description="Certification focused on implementing accessible web applications following WCAG guidelines."
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
