import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-sphere">
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-light mb-8"
          style={{ fontWeight: 300, letterSpacing: "-2px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          we're a music society
        </motion.h1>
        
        <motion.div
          className="flex items-center justify-center space-x-6 mt-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">M</span>
            </div>
            <span className="text-sm tracking-wider">MATE</span>
          </div>
          
          <div className="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full transition-transform duration-300"></div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🎵</span>
            </div>
            <span className="text-sm tracking-wider">MUSIC SOCIETY</span>
          </div>
        </motion.div>
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
