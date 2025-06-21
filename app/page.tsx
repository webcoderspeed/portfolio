import { Header } from "@/components/header"
import { RevolutionaryHero } from "@/components/revolutionary-hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { RevolutionarySkills } from "@/components/revolutionary-skills"
import { InteractiveProjectShowcase } from "@/components/interactive-project-showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { Terminal } from "@/components/terminal"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgress } from "@/components/scroll-progress"
import { Achievements } from "@/components/achievements"
import { Testimonials } from "@/components/testimonials"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <CustomCursor />
      <ScrollProgress />
      <Terminal />
      <ThemeToggle />
      <Header />
      <section id="home">
        <RevolutionaryHero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <RevolutionarySkills />
      </section>
      <section id="projects">
        <InteractiveProjectShowcase />
      </section>
      <Achievements />
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
