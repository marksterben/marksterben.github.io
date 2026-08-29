import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
