// app/page.tsx
import Sidebar from '@/components/layouts/Sidebar';
import MobileMenu from '@/components/layouts/MobileMenu';
import Hero from '@/components/sections/Hero';
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
        <div className="h-10"></div>
      </main>
    </>
  );
}