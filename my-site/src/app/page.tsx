// app/page.tsx
import Sidebar from '@/components/layouts/Sidebar';
import MobileMenu from '@/components/layouts/MobileMenu';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
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
        <div className="h-10"></div>
      </main>
    </>
  );
}