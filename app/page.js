import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      {/* nav */}
      <Nav />

      {/* hero */}
      <Hero />

      {/* about */}
      <AboutMe />

      {/* skills */}
      <Skills />

      {/* projects */}
      {/* <Projects /> */}

      {/* contact me */}
      <ContactMe />

      {/* footer */}
      <Footer />
    </main>
  )
}
