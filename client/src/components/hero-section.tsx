import { motion } from "framer-motion";
import { TypingLogo } from "./typing-logo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-sphere">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <TypingLogo />
        </motion.div>
        
        <div className="mb-12">
          <button
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white font-medium"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            data-testid="button-visit"
          >
            Visit ↓
          </button>
        </div>
        
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="text-hero-tagline"
        >
          The music of revolution, we are the solution.
        </motion.p>
      </div>
    </section>
  );
}
