import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilityCloud from '@/components/CapabilityCloud';
import Intro from '@/components/Intro';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Studio from '@/components/Studio';
import Technology from '@/components/Technology';
import WhyPinnacle from '@/components/WhyPinnacle';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] dark:bg-[#090a0d] text-[#0e0f11] dark:text-[#f5f5f7] overflow-x-hidden selection:bg-[#c8ff00] selection:text-black">
      <Navbar />
      <Hero />
      <CapabilityCloud />
      <Intro />
      <Process />
      <Projects />
      <Services />
      <Studio />
      <Technology />
      <WhyPinnacle />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
