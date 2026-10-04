import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section
      className="
        relative w-full min-h-[650px]
        flex items-center justify-center
        overflow-hidden
        bg-[#F4EBDD]
        px-5 py-20 sm:px-8
      "
    >
      {/* FONDO DECORATIVO */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(54,74,51,0.13),transparent_40%)]
        "
      />

      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-[#B89B5E]/10 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 rounded-full bg-[#1F3829]/10 blur-3xl" />

      {/* RAMA SUPERIOR */}
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
          rotate: -15,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="
          absolute
          -top-4
          -left-3
          sm:left-5
        "
      >
        <div className="relative w-28 h-40">
          <div
            className="
              absolute
              left-10 top-0
              w-[2px] h-36
              bg-[#B89B5E]/60
              rotate-[25deg]
            "
          />

          <div
            className="
              absolute
              left-4 top-6
              w-12 h-6
              bg-[#294634]
              rounded-[100%_0_100%_0]
              rotate-[-20deg]
            "
          />

          <div
            className="
              absolute
              left-10 top-12
              w-14 h-7
              bg-[#36543F]
              rounded-[0_100%_0_100%]
              rotate-[25deg]
            "
          />

          <div
            className="
              absolute
              left-1 top-20
              w-14 h-7
              bg-[#1F3829]
              rounded-[100%_0_100%_0]
              rotate-[-15deg]
            "
          />
        </div>
      </motion.div>

      {/* RAMA INFERIOR */}
      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          rotate: 15,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="
          absolute
          -bottom-5
          -right-5
          sm:right-4
          rotate-180
        "
      >
        <div className="relative w-32 h-44">
          <div
            className="
              absolute
              left-10 top-0
              w-[2px] h-40
              bg-[#B89B5E]/60
              rotate-[25deg]
            "
          />

          <div
            className="
              absolute
              left-3 top-7
              w-14 h-7
              bg-[#294634]
              rounded-[100%_0_100%_0]
              rotate-[-20deg]
            "
          />

          <div
            className="
              absolute
              left-11 top-14
              w-14 h-7
              bg-[#36543F]
              rounded-[0_100%_0_100%]
              rotate-[25deg]
            "
          />

          <div
            className="
              absolute
              left-0 top-24
              w-16 h-8
              bg-[#1F3829]
              rounded-[100%_0_100%_0]
              rotate-[-15deg]
            "
          />
        </div>
      </motion.div>

      {/* CONTENIDO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          relative z-10
          w-full max-w-3xl
          text-center
          px-6 py-14
          sm:px-12 sm:py-16
        "
      >
        {/* TÍTULO */}
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "0.4em",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.25em",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            uppercase
            text-[#1C2D22]
            text-sm sm:text-base
            font-playfair
          "
        >
          Nuestro Hijo
        </motion.p>

        {/* SEPARADOR */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            flex items-center
            justify-center
            gap-3
            mt-5
          "
        >
          <div className="w-16 sm:w-24 h-[1px] bg-[#B28A4A]" />

          <span className="text-[#B28A4A] text-lg">
            ♥
          </span>

          <div className="w-16 sm:w-24 h-[1px] bg-[#B28A4A]" />
        </motion.div>

        {/* FRASE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
          viewport={{ once: true }}
          className="
            mt-12
            text-[#3E332A]
            text-lg sm:text-xl md:text-2xl
            font-playfair
            leading-relaxed
          "
        >
          La mayor bendición
          <br />
          de nuestras vidas
        </motion.p>

        {/* NOMBRE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.55,
          }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
            className="
              text-[#8A6339]
              text-[58px]
              sm:text-[72px]
              md:text-[86px]
              leading-[1.05]
              font-normal
            "
          >
            Mauro Samuel
          </h1>

          <p
            className="
              mt-3
              uppercase
              tracking-[0.25em]
              text-[#1C2D22]
              text-sm sm:text-base
              font-normla
            "
          >
            López Ramirez
          </p>
        </motion.div>

        {/* LÍNEA */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "110px",
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="
            h-[1px]
            bg-[#B28A4A]
            mx-auto
            mt-10
          "
        />

        {/* MENSAJE */}
        <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 1,
  }}
  viewport={{ once: true }}
  className="
    mt-9
    max-w-xl
    mx-auto
    text-center
    text-[#3E332A]
    text-base sm:text-lg
    font-playfair
    leading-[1.9]
  "
>
  <p>Es quien hace aún más especial este momento,</p>

  <p>y nos encantará contar con tu presencia</p>

  <p>para celebrar juntos.</p>
</motion.div>

        {/* DECORACIÓN FINAL */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          viewport={{ once: true }}
          className="
            flex justify-center
            items-center
            gap-3
            mt-10
          "
        >
          <div className="w-10 h-[1px] bg-[#B28A4A]/60" />

          <span className="text-[#B28A4A] text-xs">
            ◆
          </span>

          <div className="w-10 h-[1px] bg-[#B28A4A]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Novios;