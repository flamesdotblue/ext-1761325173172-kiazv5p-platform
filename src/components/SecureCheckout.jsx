import { motion } from 'framer-motion';
import { Lock, Shield, BadgeCheck, CreditCard } from 'lucide-react';

export default function SecureCheckout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-yellow-300">Secure, Trusted Checkout</h2>
          <p className="mt-3 text-purple-100/90 max-w-prose">Your order is protected by bank‑grade encryption and verified seals. We never store full card details, and every vial ships in shock‑proof, temperature‑safe packaging.</p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-purple-800/40 ring-1 ring-purple-700/60 p-4">
              <div className="flex items-center gap-2">
                <Lock className="text-yellow-300" aria-hidden="true" />
                <dt className="font-medium">256‑bit SSL</dt>
              </div>
              <dd className="text-sm text-purple-100/80 mt-1">Encrypted from cart to cauldron.</dd>
            </div>
            <div className="rounded-lg bg-purple-800/40 ring-1 ring-purple-700/60 p-4">
              <div className="flex items-center gap-2">
                <Shield className="text-yellow-300" aria-hidden="true" />
                <dt className="font-medium">Buyer Protection</dt>
              </div>
              <dd className="text-sm text-purple-100/80 mt-1">30‑day money‑back guarantee.</dd>
            </div>
            <div className="rounded-lg bg-purple-800/40 ring-1 ring-purple-700/60 p-4">
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-yellow-300" aria-hidden="true" />
                <dt className="font-medium">Trusted Sellers</dt>
              </div>
              <dd className="text-sm text-purple-100/80 mt-1">Certified master alchemists.</dd>
            </div>
          </dl>
        </div>

        <motion.form
          className="rounded-xl bg-purple-800/40 ring-1 ring-purple-700/60 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          aria-label="Checkout form"
        >
          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-describedby="req">
            <legend className="sr-only">Contact details</legend>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
              <input id="firstName" name="firstName" type="text" required className="mt-1 w-full rounded-md bg-purple-900/60 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 px-3 py-2" placeholder="Elara" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
              <input id="lastName" name="lastName" type="text" required className="mt-1 w-full rounded-md bg-purple-900/60 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 px-3 py-2" placeholder="Nightbloom" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md bg-purple-900/60 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 px-3 py-2" placeholder="elara@moonspire.ac" />
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <legend className="sr-only">Payment details</legend>
            <div className="sm:col-span-2">
              <label htmlFor="cardNumber" className="block text-sm font-medium">Card number</label>
              <div className="mt-1 flex items-center gap-2 rounded-md bg-purple-900/60 border border-purple-700 focus-within:ring-4 focus-within:ring-emerald-300 px-3">
                <CreditCard className="text-purple-300" aria-hidden="true" />
                <input id="cardNumber" name="cardNumber" inputMode="numeric" pattern="[0-9\\s]{12,19}" placeholder="4242 4242 4242 4242" required className="w-full bg-transparent text-white placeholder-purple-300 outline-none py-2" />
              </div>
            </div>
            <div>
              <label htmlFor="exp" className="block text-sm font-medium">Expiry</label>
              <input id="exp" name="exp" placeholder="MM/YY" required className="mt-1 w-full rounded-md bg-purple-900/60 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 px-3 py-2" />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium">CVC</label>
              <input id="cvc" name="cvc" inputMode="numeric" maxLength={4} placeholder="123" required className="mt-1 w-full rounded-md bg-purple-900/60 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 px-3 py-2" />
            </div>
          </fieldset>

          <div className="mt-6 flex items-start gap-2">
            <input id="tos" name="tos" type="checkbox" required className="mt-1 h-4 w-4 rounded border-purple-700 bg-purple-900/60 text-emerald-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300" />
            <label htmlFor="tos" className="text-sm text-purple-100/90">I agree to the terms and privacy policy.</label>
          </div>

          <button type="submit" className="mt-6 w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-gradient-to-r from-yellow-300 to-amber-300 text-gray-900 font-semibold hover:from-yellow-200 hover:to-amber-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300">
            Complete Purchase Securely
          </button>

          <p id="req" className="sr-only">All fields are required.</p>

          <div className="mt-4 text-center text-xs text-purple-200/90">By placing your order you consent to energy alignment checks to prevent adverse arcane reactions. No hard credit check.</div>
        </motion.form>
      </div>
    </div>
  );
}
