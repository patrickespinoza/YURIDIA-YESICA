import React from "react";
import { motion } from "framer-motion";
import {
  DoorOpen,
  HeartHandshake,
  Camera,
  Sparkles,
  Utensils,
  CakeSlice,
  MoonStar,
} from "lucide-react";

const Itinerario2 = () => {
  const eventos = [
    {
      hora: "5:00 pm",
      titulo: "Bienvenida a nuestros invitados",
      Icono: DoorOpen,
    },
    {
      hora: "5:30 pm",
      titulo: "La promesa de caminar juntas",
      Icono: HeartHandshake,
    },
    {
      hora: "6:30 pm",
      titulo: "Instantes para recordar",
      Icono: Camera,
    },
    {
      hora: "7:00 pm",
      titulo: "Una noche fuera de lo común ",
      Icono: Sparkles,
    },
    {
      hora: "8:30 pm",
      titulo: "Un festin para el corazón ",
      Icono: Utensils,
    },
    {
      hora: "9:00 pm",
      titulo: "Endulzando nuestro para siempre",
      Icono: CakeSlice,
    },
    {
      hora: "9:30 pm",
      titulo: "Un último detalle para ti",
      Icono: MoonStar,
    },
  ];

  return (
    <section
      className="
        relative w-full
        bg-[#13271D]
        py-20 sm:py-24
        px-5 sm:px-8
        overflow-hidden
      "
    >
      {/* Fondos decorativos */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,80,53,0.14),transparent_40%)]
        "
      />

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B89B5E]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#6F5035]/10 blur-3xl" />

      {/* Decoración botánica superior */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -top-5 -left-5"
      >
        <div className="relative w-32 h-44">
          <div className="absolute left-12 top-0 w-[1px] h-40 bg-[#B89B5E]/50 rotate-[28deg]" />

          <div className="absolute left-3 top-8 w-16 h-8 bg-[#294634] rounded-[100%_0_100%_0] -rotate-12" />
          <div className="absolute left-12 top-16 w-16 h-8 bg-[#36543F] rounded-[0_100%_0_100%] rotate-[20deg]" />
          <div className="absolute left-0 top-28 w-16 h-8 bg-[#1F3829] rounded-[100%_0_100%_0] -rotate-12" />
        </div>
      </motion.div>

      {/* ENCABEZADO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-[#D7B56D]
            text-xs sm:text-sm
          "
        >
          Nuestro Día
        </p>

        <h1
          className="
            mt-5
            text-[#F4EBDD]
            text-4xl sm:text-5xl md:text-6xl
            font-playfair
          "
        >
          Itinerario
        </h1>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-14 h-[1px] bg-[#B89B5E]" />

          <span className="text-[#D7B56D] text-xs">
            ◆
          </span>

          <div className="w-14 h-[1px] bg-[#B89B5E]" />
        </div>

        <p
          className="
            mt-7
            text-[#D8CDBA]
            text-base sm:text-lg
            font-playfair
            italic
          "
        >
          Cada momento será parte de nuestra historia
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div
        className="
          relative z-10
          max-w-2xl
          mx-auto
          mt-16
        "
      >
        {/* Línea vertical */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="
            absolute
            left-[31px]
            sm:left-1/2
            top-0
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-[#B89B5E]
            to-transparent
            sm:-translate-x-1/2
          "
        />

        {/* EVENTOS */}
        <div className="relative flex flex-col gap-10 sm:gap-12">
          {eventos.map((evento, index) => {
            const Icono = evento.Icono;
            const izquierda = index % 2 === 0;

            return (
              <motion.div
                key={evento.titulo}
                initial={{
                  opacity: 0,
                  x: izquierda ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="
                  relative
                  grid
                  grid-cols-[64px_1fr]
                  sm:grid-cols-[1fr_70px_1fr]
                  items-center
                "
              >
                {/* LADO IZQUIERDO DESKTOP */}
                <div
                  className={`
                    hidden sm:block
                    ${
                      izquierda
                        ? "text-right pr-7"
                        : ""
                    }
                  `}
                >
                  {izquierda && (
                    <div>
                      <p
                        className="
                          text-[#D7B56D]
                          text-sm
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        {evento.hora}
                      </p>

                      <h2
                        className="
                          mt-2
                          text-[#F4EBDD]
                          text-2xl
                          font-playfair
                        "
                      >
                        {evento.titulo}
                      </h2>
                    </div>
                  )}
                </div>

                {/* ICONO CENTRAL */}
                <div className="relative flex justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.25 }}
                    className="
                      relative z-10
                      w-[54px] h-[54px]
                      sm:w-[62px] sm:h-[62px]
                      rounded-full

                      bg-[#F4EBDD]

                      border
                      border-[#B89B5E]

                      flex
                      items-center
                      justify-center

                      shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                    "
                  >
                    <Icono
                      size={23}
                      strokeWidth={1.4}
                      className="text-[#7D5A38]"
                    />
                  </motion.div>
                </div>

                {/* LADO DERECHO */}
                <div
                  className={`
                    pl-5 sm:pl-7
                    ${
                      !izquierda
                        ? "sm:text-left"
                        : ""
                    }
                  `}
                >
                  {/* MÓVIL */}
                  <div className="sm:hidden">
                    <p
                      className="
                        text-[#D7B56D]
                        text-xs
                        uppercase
                        tracking-[0.18em]
                      "
                    >
                      {evento.hora}
                    </p>

                    <h2
                      className="
                        mt-1
                        text-[#F4EBDD]
                        text-xl
                        font-playfair
                      "
                    >
                      {evento.titulo}
                    </h2>
                  </div>

                  {/* DESKTOP */}
                  {!izquierda && (
                    <div className="hidden sm:block">
                      <p
                        className="
                          text-[#D7B56D]
                          text-sm
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        {evento.hora}
                      </p>

                      <h2
                        className="
                          mt-2
                          text-[#F4EBDD]
                          text-2xl
                          font-playfair
                        "
                      >
                        {evento.titulo}
                      </h2>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CIERRE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-16"
      >
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-[1px] bg-[#B89B5E]/60" />

          <span className="text-[#D7B56D]">
            ✦
          </span>

          <div className="w-10 h-[1px] bg-[#B89B5E]/60" />
        </div>

        <p
          className="
            mt-6
            text-[#D8CDBA]
            font-playfair
            italic
            text-base sm:text-lg
          "
        >
          Gracias por acompañarnos
          <br />
          en cada momento de este día
        </p>
      </motion.div>
    </section>
  );
};

export default Itinerario2;