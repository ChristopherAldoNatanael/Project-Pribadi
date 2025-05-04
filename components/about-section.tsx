"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import AOS from "aos"

export default function AboutSection() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Tentang Saya
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 hero-gradient">Christopher Aldo Natanael</h3>
            <p className="text-foreground/80 mb-6">
              Saya adalah seorang Web Developer dengan keahlian dalam pengembangan aplikasi web menggunakan PHP,
              JavaScript, Laravel, dan ReactJS. Saya memiliki passion dalam menciptakan solusi digital yang inovatif dan
              user-friendly.
            </p>
            <p className="text-foreground/80 mb-6">
              Saat ini saya sedang menempuh pendidikan di SMKN 2 Buduran, Sidoarjo dengan fokus pada pengembangan web.
              Saya selalu berusaha untuk terus belajar dan mengembangkan keterampilan saya dalam dunia teknologi yang
              terus berkembang.
            </p>

            <Button className="bg-primary hover:bg-primary/90">
              <FileDown className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/aldo.jpeg"
                  alt="Christopher Aldo Natanael"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-8 text-center">Perjalanan Pendidikan</h3>

          <div className="max-w-3xl mx-auto">
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xl font-medium">SMKN 2 Buduran, Sidoarjo</h4>
              <p className="text-sm text-foreground/60 mb-2">2024 - Sekarang</p>
              <p className="text-foreground/80">
                Jurusan Rekayasa Perangkat Lunak dengan fokus pada pengembangan aplikasi web dan mobile. Mempelajari
                berbagai teknologi seperti PHP, JavaScript, Laravel, dan ReactJS.
              </p>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-medium">Kursus Online & Sertifikasi</h4>
              <p className="text-sm text-foreground/60 mb-2">2024 - Sekarang</p>
              <p className="text-foreground/80">
                Aktif mengikuti berbagai kursus online dan sertifikasi untuk meningkatkan keterampilan dalam
                pengembangan web modern, termasuk ReactJS, Laravel, dan Tailwind CSS.
              </p>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-xl font-medium">Proyek Mandiri</h4>
              <p className="text-sm text-foreground/60 mb-2">2024 - Sekarang</p>
              <p className="text-foreground/80">
                Mengerjakan berbagai proyek mandiri untuk mengasah keterampilan dan mengimplementasikan pengetahuan yang
                telah dipelajari dalam situasi nyata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
