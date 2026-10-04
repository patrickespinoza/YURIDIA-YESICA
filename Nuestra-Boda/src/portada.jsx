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

      {/* SOMBRA SUTIL SUPERIOR */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/35
          via-black/5
          to-transparent
          pointer-events-none
        "
      />

      {/* CONTENIDO SUPERIOR */}
      <div
        className="
          relative z-10
          w-full h-full
          flex flex-col
          items-center
          justify-start
          text-center
          px-6
          pt-14
          sm:pt-16
          md:pt-20
        "
      >
        {/* NOMBRES */}
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
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
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
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
            "
          >
            Yuridia
          </h1>

          {/* & */}
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="
              my-1
              sm:my-2
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-[Cedarville_Cursive]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
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
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
            "
          >
            Yesica
          </h1>
        </motion.div>

        {/* LÍNEA */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="
            h-[1px]
            bg-white/80
            mt-6
          "
        />

        {/* FECHA */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="
            mt-4
            text-white
            font-playfair
            text-2xl
            sm:text-base
            md:text-lg
            tracking-[0.35em]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
          "
        >
          14 · NOV · 26
        </motion.p>
      </div>
    </section>
  );
}