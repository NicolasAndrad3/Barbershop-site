"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhyEstilo: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.5) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full h-screen flex bg-[#111827] isolate relative z-10">
      <motion.div
        className="w-1/2 h-full relative overflow-hidden"
        initial={{ x: "-100%" }}
        animate={visible ? { x: 0 } : {}}
        transition={{ duration: 1 }}
        style={{
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent z-10 pointer-events-none" />
        <img
          src="/banner2.webp"
          alt="Estilo Work"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      </motion.div>

      <motion.div
        className="w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-16 z-30 bg-[#111827]/90 text-center"
        initial={{ x: "100%" }}
        animate={visible ? { x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-md">
          <h2 className="font-graffiti text-red-500 leading-none mb-4 sm:mb-6 text-[36px] sm:text-[60px]">
            Why choose{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
              Estilo
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg text-red-300 mb-4 sm:mb-6">
            At our barbershop, it's not just about cutting hair — it's about
            crafting identity. Our barbers don’t just follow trends; they shape
            them, blending tradition and edge in every detail.
          </p>
          <p className="text-base sm:text-lg text-red-300">
            This is more than grooming. It’s where confidence starts. When you
            sit in our chair, you leave with more than a fresh look — you leave
            with attitude.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyEstilo;
