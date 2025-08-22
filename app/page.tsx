"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Globe } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Java, C, Python", level: 90, icon: Code },
    { name: "HTML, CSS, JavaScript, React, Node.js", level: 85, icon: Globe },
    { name: "Oracle, MySQL, MongoDB", level: 80, icon: Database },
  ]

  const projects = [
    {
      title: "Academia-Check (Mini Project)",
      description:
        "Developed a student attendance management system with secure authentication and efficient record-keeping.",
      technologies: ["Java", "Servlets", "HTML", "CSS", "SQL"],
      github: "https://github.com/tej1234naru/academia-check",
    },
    {
      title: "Online Bookstore",
      description:
        "Online bookstore allowing browsing, searching, and purchasing of books with secure database management.",
      technologies: ["SQL", "Java", "JSP", "HTML", "Servlets", "CSS"],
      github: "https://github.com/tej1234naru/bookstore",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center px-4">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">Tejaswini Naru</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Motivated Full-Stack Developer | Building Interactive Web Applications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="mailto:tejaswininaru138@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="tel:+918639496744" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Me
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/tejaswini-naru-00210926a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
              <a href="https://github.com/tej1234naru" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white">
                  TN
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I am a motivated Full-Stack Developer with a CGPA of 8.6 and a passion for building web
                    applications. My technical skills include Java, DSA, SQL, HTML, CSS, MongoDB, React, Node.js, and
                    Python. I enjoy tackling new challenges, learning new technologies, and improving my problem-solving
                    skills. A strong team player, I'm excited to contribute to projects that make a difference while
                    continuing to grow as a developer. I strive to write clean, efficient code and always look for ways
                    to improve.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="skill-bar">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full animate-skill-bar"
                        style={{ "--skill-width": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2025 Tejaswini Naru</p>
          <div className="flex justify-center gap-6">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/tej1234naru" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/tejaswini-naru-00210926a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
