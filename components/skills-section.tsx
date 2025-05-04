"use client"

import { useEffect } from "react"
import { Code2, Database, Layout, Server, Palette, GitBranch } from "lucide-react"
import AOS from "aos"

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const skills = [
    {
      category: "Bahasa Pemrograman",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      items: [
        { name: "PHP", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
      ],
    },
    {
      category: "Framework",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: [
        { name: "Laravel", level: 85 },
        { name: "ReactJS", level: 80 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      category: "Styling",
      icon: <Palette className="h-8 w-8 text-primary" />,
      items: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "SCSS", level: 75 },
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        { name: "RESTful API", level: 80 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      category: "Tools & Version Control",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      items: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Keterampilan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-3">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
