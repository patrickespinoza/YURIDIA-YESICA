import React from "react";
import { motion } from "framer-motion";

export default function Portada() {
  return (
    <>
      {/* ALLURA - ESTILO CALIGRÁFICO */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
        `}
      </style>

      <section className="relative w-full h-[100svh] min-h-[650px] overflow-hidden">

        {/* IMAGEN PRINCIPAL */}
        <motion.img
          src="/portada.jpg"
          alt="Yuri y Yesi"
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

        {/* =========================
            NOMBRES ARRIBA
        ========================== */}
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
            top-9 sm:top-12 md:top-16
            left-0
            w-full
            px-5
          "
        >
          <div className="w-full max-w-[650px] mx-auto">

            {/* =====================
                YURI - IZQUIERDA
            ====================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
                y: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="
                flex
                justify-start
                pl-3
                sm:pl-8
                md:pl-12
              "
            >
              <h1
                style={{
                  fontFamily: "'Allura', cursive",
                }}
                className="
                  text-white
                  text-[82px]
                  sm:text-[100px]
                  md:text-[120px]
                  lg:text-[140px]
                  leading-[0.8]
                  font-normal
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
                "
              >
                Yuri
              </h1>
            </motion.div>

            {/* =====================
                & - CENTRO
            ====================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                flex
                justify-center
                -my-1
                sm:my-0
              "
            >
              <span
                style={{
                  fontFamily: "'Allura', cursive",
                }}
                className="
                  text-white
                  text-[52px]
                  sm:text-[62px]
                  md:text-[72px]
                  leading-none
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                "
              >
                &
              </span>
            </motion.div>

            {/* =====================
                YESI - DERECHA
            ====================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                y: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.9,
              }}
              className="
                flex
                justify-end
                pr-3
                sm:pr-8
                md:pr-12
              "
            >
              <h1
                style={{
                  fontFamily: "'Allura', cursive",
                }}
                className="
                  text-white
                  text-[82px]
                  sm:text-[100px]
                  md:text-[120px]
                  lg:text-[140px]
                  leading-[0.8]
                  font-normal
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
                "
              >
                Yesi
              </h1>
            </motion.div>

          </div>
        </motion.div>

        {/* =========================
            FECHA ABAJO
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
            absolute z-10
            bottom-12 sm:bottom-14 md:bottom-16
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
    </>
  );
}