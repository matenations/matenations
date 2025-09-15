import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-sphere">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 rounded-full leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-2px", fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The music of revolution,<br />
          We are the solution
        </motion.h1>
        
        <motion.p
          className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MATE is an innovative record label empowering artists across Hip-Hop, Pop, Afrobeats, and Amapiano. We provide comprehensive artist development, distribution, and promotion to help musicians reach their full potential in the industry.
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
