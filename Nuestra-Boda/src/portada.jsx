import React from "react";
import { motion } from "framer-motion";

export default function Portada() {
  return (
    <section className="relative w-full h-[100svh] min-h-[650px] overflow-hidden">

      {/* IMAGEN PRINCIPAL */}
      <motion.img
        src="/portada.jpg"
        alt="Yuridia y Yesica"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
        "
      />

      {/* SOMBRA SUTIL */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/30
          via-transparent
          to-black/30
          pointer-events-none
        "
      />

      {/* NOMBRES ARRIBA */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute z-10
          top-10 sm:top-12 md:top-16
          left-0
          w-full
          px-5
          text-center
        "
      >
        {/* YURIDIA */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            text-white
            text-[64px]
            sm:text-[82px]
            md:text-[100px]
            lg:text-[120px]
            leading-[0.85]
            font-normal
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
          "
        >
          Yuri
        </motion.h1>

        {/* & */}
        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            text-white
            text-[34px]
            sm:text-[42px]
            md:text-[50px]
            leading-none
            my-2
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          "
        >
          &
        </motion.p>

        {/* YESICA */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="
            text-white
            text-[64px]
            sm:text-[82px]
            md:text-[100px]
            lg:text-[120px]
            leading-[0.85]
            font-normal
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
          "
        >
          Yesi
        </motion.h1>
      </motion.div>

      {/* FECHA ABAJO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute z-10
          bottom-12 sm:bottom-14 md:bottom-16
          left-0
          w-full
          px-6
          text-center
        "
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="
            h-[1px]
            bg-white/80
            mx-auto
            mb-5
          "
        />

        <p
          className="
            text-white
            font-playfair
            text-xl
            sm:text-xl
            md:text-2xl
            tracking-[0.35em]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          "
        >
          14 · NOV · 26
        </p>
      </motion.div>
    </section>
  );
}