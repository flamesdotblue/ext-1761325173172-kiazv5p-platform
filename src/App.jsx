import { useEffect } from 'react';
import { Rocket } from 'lucide-react';
import Hero from './components/Hero';
import CategoriesGrid from './components/CategoriesGrid';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f2e] via-[#0e0b1a] to-[#071a14] text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-emerald-600 text-white px-4 py-2 rounded">Skip to content</a>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-[#0e0b1a]/60 border-b border-white/10">
        <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 font-serif text-lg sm:text-xl text-emerald-300 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">
            <Rocket className="w-5 h-5" aria-hidden="true" />
            Arcana Elixirs
          </a>

          <ul className="flex items-center gap-6 text-sm" role="list">
            <li><a href="#categories" className="hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">Potions</a></li>
            <li><a href="#testimonials" className="hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">Testimonials</a></li>
            <li><a href="#checkout" className="hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">Secure Checkout</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section id="hero"><Hero /></section>
        <section id="categories" className="scroll-mt-20"><CategoriesGrid /></section>
        <section id="testimonials" className="scroll-mt-20"><SocialProof /></section>
      </main>

      <footer id="checkout" className="scroll-mt-20"><Footer /></footer>
    </div>
  );
}
