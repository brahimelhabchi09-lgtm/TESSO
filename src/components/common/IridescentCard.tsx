import React from 'react';
import { motion } from 'framer-motion';

interface IridescentCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  delay?: number;
  interactive?: boolean;
}

export const IridescentCard: React.FC<IridescentCardProps> = ({
  children,
  className = '',
  dark = false,
  delay = 0,
  interactive = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`perspective-container ${className}`}
    >
      <div
        className={`relative h-full transition-all duration-300 ${
          interactive ? 'card-3d-tilt' : ''
        } ${
          dark
            ? 'glass-panel-dark text-white hover:shadow-iridescent-glow'
            : 'bg-white/90 backdrop-blur-md border border-[#CBD5E1]/70 hover:border-[#08A6C1] hover:shadow-iridescent'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-iridescent-sheen opacity-0 hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
};
