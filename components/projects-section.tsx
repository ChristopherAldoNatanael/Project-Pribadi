"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import AOS from "aos"

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Platform e-commerce lengkap dengan sistem pembayaran, keranjang belanja, dan panel admin. Dibangun dengan Laravel, MySQL, dan Bootstrap.",
      image: "/project1.png",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      demoUrl: "https://github.com/ChristopherAldoNatanael/Belajar-Laravel",
      githubUrl: "https://github.com/ChristopherAldoNatanael/Belajar-Laravel",
    },
    {
      id: 2,
      title: "Game 2D",
      description:
        "Rasakan adrenalin melompat dan berlari di Godot Adventure, game 2D parkour yang menantang! Jelajahi dunia urban yang dinamis dengan grafis penuh warna, kuasai gerakan akrobatik, dan taklukkan rintangan yang menguji refleks serta ketepatanmu. Dengan level yang semakin sulit, soundtrack yang memacu semangat, dan kontrol yang responsif, game ini menawarkan pengalaman parkour seru untuk semua kalangan. Apakah kamu siap menjadi legenda parkour?",
      image: "/godot.png",
      technologies: ["Godot Engine" ,"C++" , "Python"],
      demoUrl: "https://drive.google.com/drive/folders/1vShju4OOZRIldH13fP6NEUQLOSEC7w1L?usp=sharing",
      githubUrl: "https://github.com/ChristopherAldoNatanael/ProjectGame2D",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Website portofolio personal dengan animasi dan desain responsif. Dibangun dengan Next.js dan Tailwind CSS.",
      image: "/porto.png",
      technologies: ["Next.js", "Tailwind CSS", "ReactJS", "TypeScript"],
      demoUrl: "christopher-aldo.vercel.app",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "E Commerce Website",
      description:
        "Platform blog dengan sistem manajemen konten, komentar, dan pencarian. Dibangun dengan Laravel dan MySQL.",
      image: "/projectJam.png",
      technologies: ["Laravel", "MySQL", "Tailwind CSS"],
      demoUrl: "https://github.com/ChristopherAldoNatanael/Laravel-TokoOnline",
      githubUrl: "https://github.com/ChristopherAldoNatanael/Laravel-TokoOnline",
    },
  ]

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Proyek Terbaru
        </h2>

        <div className="relative max-w-5xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <Image
                src={projects[activeIndex].image || "/placeholder.svg"}
                alt={projects[activeIndex].title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">{projects[activeIndex].title}</h3>
              <p className="text-foreground/80 mb-4">{projects[activeIndex].description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeIndex].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(projects[activeIndex].githubUrl, "_blank")}
                >
                  <Github size={18} /> GitHub
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                  onClick={() => window.open(projects[activeIndex].demoUrl, "_blank")}
                >
                  <ExternalLink size={18} /> Live Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevProject}>
              <ChevronLeft size={20} />
            </Button>
            {projects.map((_, index) => (
              <Button
                key={index}
                variant={index === activeIndex ? "default" : "outline"}
                size="icon"
                className={`w-3 h-3 rounded-full p-0 ${index === activeIndex ? "bg-primary" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Go to project {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextProject}>
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-0.5 bg-muted text-foreground/60 rounded-full text-xs">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="project-card-overlay">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <div className="flex gap-3 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
