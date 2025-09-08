import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-sphere">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 rounded-full"
          style={{ fontWeight: 700, letterSpacing: "-2px", fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          we're a music society
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MATE is the world's first music society built for true music seekers, discovering unique sounds across Hip-Hop, Pop, Afrobeats, and Amapiano. We connect music lovers to unforgettable sounds and help artists shine through high-quality promotion and direct pathways to record labels.
        </motion.p>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        scroll
      </motion.div>
    </section>
  );
}
