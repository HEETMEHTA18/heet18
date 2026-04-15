import React from "react";
import { motion } from "framer-motion";
import { CursorDrivenParticleTypography } from "./ui/cursor-driven-particles-typography";

function PortfolioSignature() {
  return (
    <section
      id="signature"
      className="relative mx-auto max-w-6xl px-4 pt-4 pb-20 md:pb-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-8 left-12 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[240px] w-full items-center justify-center px-1 py-2 sm:min-h-[320px] sm:px-3 sm:py-3 md:min-h-[380px] md:px-5 md:py-4"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <CursorDrivenParticleTypography
          text="Heet"
          fontSize={190}
          particleDensity={5}
          particleSize={1.5}
          dispersionStrength={19}
          returnSpeed={0.07}
          color="#ffffff"
          className="min-h-[220px] sm:min-h-[300px] md:min-h-[360px]"
        />
      </motion.div>
    </section>
  );
}

export default PortfolioSignature;
