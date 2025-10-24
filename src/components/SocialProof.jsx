import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elara M.',
    title: 'Love Elixir V.II',
    content: 'Within a week, conversations flowed effortlessly and confidence bloomed. Subtle, elegant magic.',
    rating: 5,
  },
  {
    name: 'Dorian K.',
    title: 'Aegis Protection Draft',
    content: 'An immediate calm settled around my home. The craftsmanship is unreal.',
    rating: 5,
  },
  {
    name: 'Sable R.',
    title: 'Focus & Power Tonic',
    content: 'My deep work sessions doubled. Clean energy with no crash—pure alchemy.',
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex" aria-label={`${count} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-300 fill-amber-300' : 'text-emerald-200/30'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
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
          Trusted by Spellbinders Worldwide
        </motion.h2>
        <p className="mt-2 text-emerald-100/80 max-w-2xl">
          Real customers. Real enchantments. Every review is verified and secured.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl bg-white/5 border border-white/10 p-5"
            >
              <Stars count={t.rating} />
              <p className="mt-3 text-emerald-100/90">“{t.content}”</p>
              <footer className="mt-4 text-sm text-emerald-100/70">
                <span className="font-medium text-emerald-200">{t.name}</span> · {t.title}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
