// app/page.tsx
import Sidebar from '@/components/layouts/Sidebar';
import MobileMenu from '@/components/layouts/MobileMenu';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layouts/Footer';
import Projects from '@/components/sections/Projects';
export default function Home() {
  return (
    <>
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* Main Content */}
      <main className="lg:ml-80">
        <Hero />
        <Services />
        <Projects />
        <Process/>
        <About/>
        <Contact/>
        <Footer/>
        <div className="h-10"></div>
      </main>
    </>
  );
}