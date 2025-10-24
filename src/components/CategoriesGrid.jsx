import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Sparkles, Leaf, Moon } from 'lucide-react';

const categories = [
  {
    key: 'love',
    name: 'Love',
    desc: 'Attract affection and deepen bonds with rose-quartz infusions.',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    href: '#checkout',
  },
  {
    key: 'healing',
    name: 'Healing',
    desc: 'Restore vitality with moonleaf and crystal-clear springwater.',
    icon: Leaf,
    color: 'from-emerald-500 to-green-600',
    href: '#checkout',
  },
  {
    key: 'power',
    name: 'Power',
    desc: 'Channel raw energy for focus, courage, and mastery.',
    icon: Zap,
    color: 'from-violet-500 to-purple-700',
    href: '#checkout',
  },
  {
    key: 'protection',
    name: 'Protection',
    desc: 'Ward off ill omens with obsidian and silver wards.',
    icon: Shield,
    color: 'from-cyan-500 to-teal-600',
    href: '#checkout',
  },
  {
    key: 'luck',
    name: 'Luck',
    desc: 'Tip fate in your favor with four-leaf shimmer.',
    icon: Sparkles,
    color: 'from-amber-400 to-yellow-500',
    href: '#checkout',
  },
  {
    key: 'dreams',
    name: 'Dreams',
    desc: 'Lucid journeys and star-swept reveries await.',
    icon: Moon,
    color: 'from-indigo-500 to-blue-700',
    href: '#checkout',
  },
];

export default function CategoriesGrid() {
  return (
    <div className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-emerald-200"
        >
          Explore Potions by Intention
        </motion.h2>
        <p className="mt-2 text-emerald-100/80 max-w-2xl">
          Choose your path. Each elixir is small-batch brewed with ritual-grade ingredients.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.article
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl bg-white/5 border border-white/10 p-5 focus-within:ring-2 focus-within:ring-emerald-400"
            >
              <div className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r ${cat.color} text-[#0e0b1a] shadow-lg shadow-black/30`}>
                <cat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-emerald-100">{cat.name}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{cat.desc}</p>
              <div className="mt-5">
                <a
                  href={cat.href}
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white text-sm font-medium hover:from-emerald-400 hover:to-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-label={`Shop ${cat.name} potions`}
                >
                  Shop {cat.name}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
