import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-emerald-200">
            Sip the Extraordinary
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 max-w-xl">
            Handcrafted magic potions for love, healing, courage, and boundless power. Sustainably sourced, ethically brewed, and sealed with shimmering stardust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Primary actions">
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-900/30 hover:from-emerald-400 hover:to-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-[#0e0b1a]"
            >
              Shop Potions
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-md border border-emerald-400/50 px-6 py-3 text-emerald-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              See Reviews
            </a>
          </div>
          <p className="mt-6 text-sm text-emerald-100/70">
            100% enchanted ingredients. WCAG-compliant, keyboard friendly, and mobile-first by design.
          </p>
        </motion.div>

        <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] order-1 lg:order-2 rounded-xl overflow-hidden ring-1 ring-white/10">
          <Spline
            aria-label="Animated product display of iridescent potion bottles"
            scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1a0f2e]/60 via-transparent to-[#1a0f2e]/20" />
        </div>
      </div>
    </div>
  );
}
