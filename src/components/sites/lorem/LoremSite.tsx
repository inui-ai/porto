import { About } from "./About";
import { Blog } from "./Blog";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Shell } from "./Shell";
import { WhyUs } from "./WhyUs";
import "./lorem.css";

export function LoremSite() {
  return (
    <Shell>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Blog />
        <Footer />
      </main>
    </Shell>
  );
}
