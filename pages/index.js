import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NoBull Portfolio — Mobile Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />
      <main>
        <section className="container">
          <Hero />
        </section>

        <section className="container projects-peek">
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </section>
      </main>
    </div>
  );
}
