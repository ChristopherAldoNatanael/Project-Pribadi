"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import AOS from "aos"

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "WhatsApp",
      value: "085731279959",
      link: "https://wa.me/6285731279959",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "ChristopherAldoNatanael",
      link: "https://github.com/ChristopherAldoNatanael",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "@christopher.aldoo",
      link: "https://www.instagram.com/christopher.aldoo/",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Christopher Aldo",
      link: "https://www.linkedin.com/in/christopher-aldo-2497b735a/",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lokasi",
      value: "Sidoarjo, Jawa Timur",
      link: "https://maps.google.com/?q=Sidoarjo,Jawa+Timur,Indonesia",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4" 
          data-aos="fade-up"
        >
          Hubungi Saya
        </h2>
        
        <p 
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui kontak yang tersedia di bawah ini.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 rounded-xl hover:bg-card/50 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-border/50"
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
              >
                <div className="contact-icon mr-4 p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium text-lg">{item.label}</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div 
            className="rounded-xl overflow-hidden h-80 border border-border/50 shadow-lg mt-12" 
            data-aos="zoom-in"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.21238866085!2d112.6681559!3d-7.4731309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1a6b2e4b89f%3A0x3027a76e352bdf0!2sSidoarjo%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1714866000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
