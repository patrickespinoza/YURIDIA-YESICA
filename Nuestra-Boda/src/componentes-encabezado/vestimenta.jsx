import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Vestimenta = () => {
  return (
    <section
      className="
        relative w-full
        bg-[#F4EBDD]
        py-20 sm:py-24
        px-5 sm:px-8
        overflow-hidden
      "
    >
      {/* Fondos decorativos */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(184,155,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(31,56,41,0.12),transparent_40%)]
        "
      />

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#B89B5E]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#173124]/10 rounded-full blur-3xl" />

      {/* Hojas superiores */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -top-4 -left-5"
      >
        <div className="relative w-32 h-44">
          <div className="absolute left-12 top-0 w-[1px] h-40 bg-[#B89B5E]/60 rotate-[28deg]" />

          <div className="absolute left-3 top-8 w-16 h-8 bg-[#294634] rounded-[100%_0_100%_0] -rotate-12" />
          <div className="absolute left-12 top-16 w-16 h-8 bg-[#36543F] rounded-[0_100%_0_100%] rotate-[20deg]" />
          <div className="absolute left-0 top-28 w-16 h-8 bg-[#1F3829] rounded-[100%_0_100%_0] -rotate-12" />
        </div>
      </motion.div>

      {/* Hojas inferiores */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -bottom-6 -right-5 rotate-180"
      >
        <div className="relative w-32 h-44">
          <div className="absolute left-12 top-0 w-[1px] h-40 bg-[#B89B5E]/60 rotate-[28deg]" />

          <div className="absolute left-3 top-8 w-16 h-8 bg-[#294634] rounded-[100%_0_100%_0] -rotate-12" />
          <div className="absolute left-12 top-16 w-16 h-8 bg-[#36543F] rounded-[0_100%_0_100%] rotate-[20deg]" />
          <div className="absolute left-0 top-28 w-16 h-8 bg-[#1F3829] rounded-[100%_0_100%_0] -rotate-12" />
        </div>
      </motion.div>

      {/* CONTENIDO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-3xl mx-auto
          text-center
        "
      >
        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.45em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            uppercase
            text-[#8A6339]
            text-xs sm:text-sm
            font-semibold
          "
        >
          Código de Vestimenta
        </motion.p>

        {/* Ornamento */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "65px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[1px] bg-[#B89B5E]"
          />

          <Sparkles
            size={17}
            strokeWidth={1.3}
            className="text-[#B89B5E]"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "65px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[1px] bg-[#B89B5E]"
          />
        </div>

        {/* CASUAL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-10
            text-[#17291F]
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-playfair
            tracking-[0.08em]
          "
        >
          CASUAL FORMAL
        </motion.h1>

        {/* Tarjeta indicación */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          viewport={{ once: true }}
          className="
            relative
            max-w-xl mx-auto
            mt-12
            bg-[#14271D]
            rounded-tl-[3rem]
            rounded-br-[3rem]
            rounded-tr-xl
            rounded-bl-xl
            px-7 py-10
            sm:px-12 sm:py-12
            shadow-[0_18px_45px_rgba(20,39,29,0.20)]
            overflow-hidden
          "
        >
          {/* Línea superior */}
          <div
            className="
              absolute top-0 left-1/2
              -translate-x-1/2
              w-28 h-[2px]
              bg-[#C8A76B]
            "
          />

          <p
            className="
              text-[#D8B66F]
              uppercase
              tracking-[0.25em]
              text-xs
            "
          >
            Importante
          </p>

          <h2
            className="
              mt-5
              text-[#F4EBDD]
              text-2xl sm:text-3xl
              font-playfair
            "
          >
            Evitar colores claros
          </h2>

          <div className="w-16 h-[1px] bg-[#B89B5E]/70 mx-auto mt-6" />

          <p
            className="
              mt-6
              text-[#D8CDBA]
              text-sm sm:text-base
              leading-7
              max-w-md mx-auto
            "
          >
            Te agradecemos elegir tonos medios u oscuros
            para acompañarnos en esta celebración.
          </p>

        </motion.div>
       
      </motion.div>
    </section>
  );
};

export default Vestimenta;