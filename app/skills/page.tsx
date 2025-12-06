"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, Database, Server, Globe, Lightbulb } from "lucide-react"
import { frontendSkills, designSkills, backendSkills, tools } from "./skills"

// Sample skills data


export default function SkillsPage() {
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
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          My <span className="text-orange-500">Skills</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise in frontend development.
        </p>
      </motion.div>

      <Tabs defaultValue="frontend" className="mb-12">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="backend" className="flex items-center gap-2">
            <Server className="h-4 w-4" /> Backend
          </TabsTrigger>
          <TabsTrigger value="frontend" className="flex items-center gap-2">
            <Code className="h-4 w-4" /> Frontend
          </TabsTrigger>
          <TabsTrigger value="design" className="flex items-center gap-2">
            <Palette className="h-4 w-4" /> Design
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Database className="h-4 w-4" /> Tools
          </TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <SkillList skills={frontendSkills} />
        </TabsContent>
        <TabsContent value="design">
          <SkillList skills={designSkills} />
        </TabsContent>
        <TabsContent value="backend">
          <SkillList skills={backendSkills} />
        </TabsContent>
        <TabsContent value="tools">
          <SkillList skills={tools} />
        </TabsContent>
      </Tabs>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
      >
        <motion.div
          variants={item}
          className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-orange-100 dark:border-orange-900/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
              <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold">Languages</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Arabic</span>
              <span className="text-muted-foreground ml-auto">Native</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">English</span>
              <span className="text-muted-foreground ml-auto">Fluent</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">French</span>
              <span className="text-muted-foreground ml-auto">Basic</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-orange-100 dark:border-orange-900/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
              <Lightbulb className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold">Soft Skills</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Problem Solving</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Team Collaboration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Communication</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Time Management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="font-medium">Adaptability</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

function SkillList({ skills }: { skills: { name: string; level: number }[] }) {
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={item} className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{skill.name}</h3>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2 bg-orange-100 dark:bg-orange-900/20">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: `${skill.level}%` }} />
          </Progress>
        </motion.div>
      ))}
    </motion.div>
  )
}
