import { Hero } from "@/components/Hero";
import { Parcours } from "@/components/Parcours";
import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { Vision } from "@/components/Vision";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Parcours />
      <Timeline />
      <Stats />
      <Vision />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
