import { motion } from 'framer-motion';
import { CreditCard, Lock, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div className="relative bg-[#0a1110] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl text-emerald-200"
            >
              Secure Checkout
            </motion.h2>
            <p className="mt-2 text-emerald-100/80 max-w-md">
              Encrypted payments, fraud protection, and 30-day money-back guarantee.
            </p>
            <ul className="mt-4 flex flex-wrap gap-4" role="list" aria-label="Trust badges">
              <li className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2">
                <Lock className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                <span className="text-sm">256-bit SSL</span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                <span className="text-sm">Buyer Protection</span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2">
                <CreditCard className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                <span className="text-sm">Secure Payments</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a0f2e] px-5 py-3 font-medium shadow-lg shadow-amber-900/30 hover:from-amber-300 hover:to-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                aria-label="Proceed to secure checkout"
              >
                Proceed to Secure Checkout
              </a>
              <p className="mt-2 text-xs text-emerald-100/70">
                By proceeding, you agree to our terms and privacy policy. All orders include tracked shipping.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-emerald-200">Stay in the Circle</h3>
            <p className="mt-2 text-emerald-100/80">Early access to new brews, rituals, and limited drops.</p>
            <form
              className="mt-4 flex flex-col sm:flex-row gap-3"
              aria-label="Newsletter signup"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks for joining the circle!'); }}
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full sm:max-w-xs rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                placeholder="you@realm.com"
                aria-describedby="newsletter-desc"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 font-medium hover:from-emerald-400 hover:to-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Join
              </button>
            </form>
            <p id="newsletter-desc" className="mt-2 text-xs text-emerald-100/70">We respect your privacy. Unsubscribe anytime.</p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-emerald-200">Contact</h3>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-0.5" aria-hidden="true" />
                <span className="text-emerald-100/90">13 Moonlight Arcade, Verdant Vale</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-300 mt-0.5" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-300 mt-0.5" aria-hidden="true" />
                <a href="mailto:support@arcanaelixirs.com" className="hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1">support@arcanaelixirs.com</a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-serif text-xl text-emerald-200">Follow</h4>
              <div className="mt-3 flex gap-4" role="group" aria-label="Social links">
                <a href="#" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Instagram</a>
                <a href="#" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Twitter</a>
                <a href="#" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-emerald-100/60">
          <p>© {new Date().getFullYear()} Arcana Elixirs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
