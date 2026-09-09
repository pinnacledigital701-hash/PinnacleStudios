import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Studio from '@/components/Studio';
import Process from '@/components/Process';
import CapabilityCloud from '@/components/CapabilityCloud';
import Intro from '@/components/Intro';
import Technology from '@/components/Technology';
import WhyPinnacle from '@/components/WhyPinnacle';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dde2ea] dark:bg-[#0a0c10] text-neutral-950 dark:text-neutral-100 overflow-x-hidden selection:bg-[#ff4d26] selection:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Studio />
      <Process />
      <CapabilityCloud />
      <Intro />
      <Technology />
      <WhyPinnacle />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
