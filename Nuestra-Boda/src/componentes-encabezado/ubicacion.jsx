import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const Celebracion = () => {
  const ubicacion =
    "https://maps.app.goo.gl/MKY1Bcd9kLSdZQ6FA?g_st=ac";

  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-[#102019]
        px-5 py-20 sm:px-8 sm:py-24
      "
    >
      {/* Luces de fondo */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#B38A50]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#6F5035]/10 blur-3xl" />

      {/* Decoración superior */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -top-5 -left-5 opacity-80"
      >
        <div className="relative w-32 h-44">
          <div className="absolute left-12 top-0 w-[1px] h-40 bg-[#B89B5E]/50 rotate-[28deg]" />

          <div className="absolute left-3 top-8 w-16 h-8 bg-[#294634] rounded-[100%_0_100%_0] -rotate-12" />
          <div className="absolute left-12 top-16 w-16 h-8 bg-[#36543F] rounded-[0_100%_0_100%] rotate-[20deg]" />
          <div className="absolute left-0 top-28 w-16 h-8 bg-[#1F3829] rounded-[100%_0_100%_0] -rotate-12" />
        </div>
      </motion.div>

      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <p
          className="
            text-[#D7B56D]
            uppercase
            tracking-[0.35em]
            text-xs sm:text-sm
            font-playfair
          "
        >
          Nuestra Celebración
        </p>

        <h2
          className="
            mt-5
            text-[#F4EBDD]
            text-4xl sm:text-5xl
            font-playfair
          "
        >
          Ubicación
        </h2>

        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-14 h-[1px] bg-[#B89B5E]" />
          <span className="text-[#D7B56D] text-xs">◆</span>
          <div className="w-14 h-[1px] bg-[#B89B5E]" />
        </div>
      </motion.div>

      {/* FECHA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-xl mx-auto
          mt-14
          flex items-center justify-center
        "
      >
        <div className="flex items-center justify-center w-full">
          {/* Día */}
          <div className="text-right pr-5 sm:pr-8 border-r border-[#B89B5E]/50">
            <p className="text-[#D7B56D] uppercase tracking-[0.25em] text-xs sm:text-sm">
              Sábado
            </p>

            <p className="mt-2 text-[#F4EBDD] text-lg sm:text-xl font-playfair">
              Noviembre
            </p>
          </div>

          {/* Número */}
          <div className="px-5 sm:px-8">
            <p
              className="
                text-[#D7B56D]
                text-7xl sm:text-8xl
                font-playfair
                leading-none
              "
            >
              14
            </p>
          </div>

          {/* Año */}
          <div className="text-left pl-5 sm:pl-8 border-l border-[#B89B5E]/50">
            <p className="text-[#D7B56D] uppercase tracking-[0.25em] text-xs sm:text-sm">
              Año
            </p>

            <p className="mt-2 text-[#F4EBDD] text-lg sm:text-xl font-playfair">
              2026
            </p>
          </div>
        </div>
      </motion.div>

      {/* TARJETA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-xl w-full
          mx-auto mt-14
          bg-[#F4EBDD]
          px-7 py-12
          sm:px-12 sm:py-14

          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]

          border border-[#C7A66A]/40
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          overflow-hidden
        "
      >
        {/* Detalle dorado superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-[#B89B5E]" />

        {/* Ubicación icono */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="
            mx-auto
            w-14 h-14
            rounded-full
            border border-[#B89B5E]
            flex items-center justify-center
          "
        >
          <MapPin
            size={24}
            strokeWidth={1.5}
            className="text-[#8A6339]"
          />
        </motion.div>

        {/* Lugar */}
        <div className="text-center mt-7">
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#8A6339]
              text-xs
            "
          >
            Te esperamos en
          </p>

          <h3
            className="
              mt-4
              text-[#15271D]
              text-3xl sm:text-4xl
              font-playfair
            "
          >
            GH Rooftop
          </h3>

          <div className="w-20 h-[1px] bg-[#B89B5E] mx-auto mt-5" />

          <p
            className="
              mt-6
              max-w-md mx-auto
              text-[#594638]
              text-sm sm:text-base
              leading-7
            "
          >
            Av. Lázaro Cárdenas 1600
            <br />
            Alfareros, 64753
            <br />
            Monterrey, N.L.
          </p>
        </div>

        {/* Hora */}
        <div
          className="
            mt-9
            mx-auto
            max-w-sm
            border-y border-[#B89B5E]/30
            py-6
            flex items-center justify-center
            gap-4
          "
        >
          <Clock
            size={23}
            strokeWidth={1.4}
            className="text-[#8A6339]"
          />

          <div className="text-left">
            <p className="uppercase tracking-[0.25em] text-[#8A6339] text-[10px]">
              Bienvenida
            </p>

            <p className="mt-1 text-[#15271D] text-xl font-playfair">
              5:00 p. m.
            </p>
          </div>
        </div>

        {/* Botón */}
        <motion.a
          href={ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-9
            mx-auto
            w-full sm:w-fit
            flex items-center justify-center gap-3
            bg-[#173124]
            text-[#F4EBDD]
            px-9 py-4
            rounded-full
            shadow-[0_10px_25px_rgba(23,49,36,0.25)]
            uppercase
            tracking-[0.18em]
            text-xs
            transition-all duration-300
          "
        >
          <MapPin size={17} strokeWidth={1.5} />

          Ver en Google Maps
        </motion.a>

        {/* Detalle final */}
        <div className="flex justify-center items-center gap-3 mt-9">
          <div className="w-8 h-[1px] bg-[#B89B5E]/60" />
          <span className="text-[#B89B5E] text-[9px]">◆</span>
          <div className="w-8 h-[1px] bg-[#B89B5E]/60" />
        </div>
      </motion.div>

      {/* Texto inferior */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="
          relative z-10
          mt-12
          text-center
          text-[#D8CDBA]
          font-playfair
          italic
          text-base sm:text-lg
        "
      >
        Será un gusto compartir este momento contigo
      </motion.p>
    </section>
  );
};

export default Celebracion;