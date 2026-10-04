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

      {/* SOMBRA MUY SUTIL ARRIBA Y ABAJO */}
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

      {/* =========================
          NOMBRES - PARTE SUPERIOR
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-10
          top-12
          sm:top-14
          md:top-16
          left-0
          w-full
          px-6
          text-center
        "
      >
        <h1
          className="
            text-white
            font-playfair
            text-[42px]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            leading-[0.95]
            tracking-[-0.02em]
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
          "
        >
          Yuridia
        </h1>

        {/* & */}
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            my-1
            sm:my-2
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-[Cedarville_Cursive]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
          "
        >
          &
        </motion.p>

        <h1
          className="
            text-white
            font-playfair
            text-[42px]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            leading-[0.95]
            tracking-[-0.02em]
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
          "
        >
          Yesica
        </h1>
      </motion.div>

      {/* =========================
          FECHA - PARTE INFERIOR
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-10
          bottom-12
          sm:bottom-14
          md:bottom-16
          left-0
          w-full
          px-6
          text-center
        "
      >
        {/* LÍNEA */}
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

        {/* FECHA */}
        <p
          className="
            text-white
            font-playfair
            text-xl
            sm:text-lg
            md:text-xl
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