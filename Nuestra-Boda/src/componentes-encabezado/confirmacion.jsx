import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Users,
  Baby,
  MessageCircle,
  Send,
} from "lucide-react";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const WHATSAPP = "528118211807";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim()) {
      setError("Por favor escribe tu nombre.");
      return;
    }

    if (!asistencia) {
      setError("Por favor selecciona si asistirás.");
      return;
    }

    if (asistencia === "Sí asistiré" && (!adultos || !ninos)) {
      setError(
        "Por favor selecciona la cantidad de adultos y niños."
      );
      return;
    }

    let texto = "";

    if (asistencia === "Sí asistiré") {
      texto = `Hola Yuridia & Yesica ✨

Quiero confirmar mi asistencia.

Nombre: ${nombre}
Asistencia: Sí asistiré
Adultos: ${adultos}
Niños: ${ninos}${
        mensaje.trim()
          ? `\n\nMensaje: ${mensaje}`
          : ""
      }

¡Nos vemos pronto! 🤎`;
    } else {
      texto = `Hola Yuridia & Yesica ✨

Gracias por la invitación.

Nombre: ${nombre}
Asistencia: No podré asistir${
        mensaje.trim()
          ? `\n\nMensaje: ${mensaje}`
          : ""
      }

Les deseo que tengan una celebración muy especial. 🤎`;
    }

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
  };

  const seleccionarAsistencia = (valor) => {
    setAsistencia(valor);
    setError("");

    if (valor === "No asistiré") {
      setAdultos("");
      setNinos("");
    }
  };

  return (
    <section
      className="
        relative w-full
        bg-[#F4EBDD]
        px-5 py-20 sm:py-24
        overflow-hidden
      "
    >
      {/* FONDO */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(31,56,41,0.12),transparent_40%)]
        "
      />

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B89B5E]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#173124]/10 blur-3xl" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-2xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#8A6339]
              text-xs sm:text-sm
            "
          >
            Queremos compartir contigo
          </p>

          <h2
            className="
              mt-5
              text-[#17291F]
              text-4xl sm:text-5xl md:text-6xl
              font-playfair
              leading-tight
            "
          >
            Confirmación
            <br />
            de Asistencia
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-14 h-[1px] bg-[#B89B5E]" />
            <span className="text-[#B89B5E] text-xs">◆</span>
            <div className="w-14 h-[1px] bg-[#B89B5E]" />
          </div>

          <p
            className="
              mt-7
              text-[#594638]
              text-base sm:text-lg
              font-playfair
              italic
              leading-relaxed
            "
          >
            Nos encantará saber si podremos
            <br className="hidden sm:block" />
            contar con tu presencia.
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            relative
            mt-12
            bg-[#14271D]
            rounded-tl-[4rem]
            rounded-br-[4rem]
            rounded-tr-[1rem]
            rounded-bl-[1rem]
            px-6 py-12
            sm:px-10 sm:py-14
            shadow-[0_20px_60px_rgba(20,39,29,0.25)]
            overflow-hidden
          "
        >
          {/* Línea dorada */}
          <div
            className="
              absolute top-0 left-1/2
              -translate-x-1/2
              w-32 h-[2px]
              bg-[#C8A76B]
            "
          />

          {/* NOMBRE */}
          <div>
            <label
              className="
                block mb-3
                text-[#D7B56D]
                uppercase
                tracking-[0.2em]
                text-[10px]
              "
            >
              Tu nombre
            </label>

            <input
              type="text"
              placeholder="Nombre y apellido"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="
                w-full
                bg-[#F4EBDD]
                text-[#17291F]
                placeholder:text-[#76573D]/50
                px-5 py-4
                rounded-xl
                outline-none
                border border-transparent
                focus:border-[#B89B5E]
                transition
              "
            />
          </div>

          {/* ASISTENCIA */}
          <div className="mt-8">
            <p
              className="
                text-center
                text-[#D7B56D]
                uppercase
                tracking-[0.2em]
                text-[10px]
                mb-4
              "
            >
              ¿Podrás acompañarnos?
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  seleccionarAsistencia("Sí asistiré")
                }
                className={`
                  min-h-[62px]
                  rounded-xl
                  border
                  flex items-center justify-center
                  gap-2
                  text-sm
                  transition-all duration-300

                  ${
                    asistencia === "Sí asistiré"
                      ? "bg-[#F4EBDD] border-[#F4EBDD] text-[#17291F]"
                      : "border-[#B89B5E]/50 text-[#F4EBDD] hover:bg-white/5"
                  }
                `}
              >
                <Check size={18} strokeWidth={1.5} />
                Sí asistiré
              </button>

              <button
                type="button"
                onClick={() =>
                  seleccionarAsistencia("No asistiré")
                }
                className={`
                  min-h-[62px]
                  rounded-xl
                  border
                  flex items-center justify-center
                  gap-2
                  text-sm
                  transition-all duration-300

                  ${
                    asistencia === "No asistiré"
                      ? "bg-[#F4EBDD] border-[#F4EBDD] text-[#17291F]"
                      : "border-[#B89B5E]/50 text-[#F4EBDD] hover:bg-white/5"
                  }
                `}
              >
                <X size={18} strokeWidth={1.5} />
                No asistiré
              </button>
            </div>
          </div>

          {/* ADULTOS Y NIÑOS */}
          <AnimatePresence>
            {asistencia === "Sí asistiré" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-9">
                  <p
                    className="
                      text-center
                      text-[#D8CDBA]
                      text-sm
                      leading-relaxed
                    "
                  >
                    Indícanos cuántos invitados asistirán
                  </p>

                  {/* ADULTOS */}
                  <div
                    className="
                      mt-7
                      bg-white/[0.04]
                      border border-[#B89B5E]/20
                      rounded-2xl
                      p-5
                    "
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Users
                        size={21}
                        strokeWidth={1.4}
                        className="text-[#D7B56D]"
                      />

                      <p
                        className="
                          text-[#F4EBDD]
                          font-playfair
                          text-lg
                        "
                      >
                        Adultos
                      </p>
                    </div>

                    <p
                      className="
                        text-center
                        text-[#D8CDBA]/60
                        text-xs
                        mt-2
                      "
                    >
                      Selecciona 1 o 2
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      {[1, 2].map((cantidad) => (
                        <button
                          key={cantidad}
                          type="button"
                          onClick={() =>
                            setAdultos(String(cantidad))
                          }
                          className={`
                            py-4
                            rounded-xl
                            border
                            font-playfair
                            text-lg
                            transition-all duration-300

                            ${
                              adultos === String(cantidad)
                                ? "bg-[#D7B56D] border-[#D7B56D] text-[#14271D]"
                                : "border-[#B89B5E]/40 text-[#F4EBDD] hover:bg-white/5"
                            }
                          `}
                        >
                          {cantidad}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NIÑOS */}
                  <div
                    className="
                      mt-4
                      bg-white/[0.04]
                      border border-[#B89B5E]/20
                      rounded-2xl
                      p-5
                    "
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Baby
                        size={21}
                        strokeWidth={1.4}
                        className="text-[#D7B56D]"
                      />

                      <p
                        className="
                          text-[#F4EBDD]
                          font-playfair
                          text-lg
                        "
                      >
                        Niños
                      </p>
                    </div>

                    <p
                      className="
                        text-center
                        text-[#D8CDBA]/60
                        text-xs
                        mt-2
                      "
                    >
                      Selecciona 1 o 2
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      {[1, 2].map((cantidad) => (
                        <button
                          key={cantidad}
                          type="button"
                          onClick={() =>
                            setNinos(String(cantidad))
                          }
                          className={`
                            py-4
                            rounded-xl
                            border
                            font-playfair
                            text-lg
                            transition-all duration-300

                            ${
                              ninos === String(cantidad)
                                ? "bg-[#D7B56D] border-[#D7B56D] text-[#14271D]"
                                : "border-[#B89B5E]/40 text-[#F4EBDD] hover:bg-white/5"
                            }
                          `}
                        >
                          {cantidad}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MENSAJE */}
          <div className="mt-8">
            <label
              className="
                flex items-center gap-2
                mb-3
                text-[#D7B56D]
                uppercase
                tracking-[0.2em]
                text-[10px]
              "
            >
              <MessageCircle
                size={14}
                strokeWidth={1.5}
              />
              Déjanos un mensaje
            </label>

            <textarea
              placeholder="Escribe un mensaje especial..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows={4}
              className="
                w-full
                bg-[#F4EBDD]
                text-[#17291F]
                placeholder:text-[#76573D]/50
                px-5 py-4
                rounded-xl
                outline-none
                resize-none
                border border-transparent
                focus:border-[#B89B5E]
                transition
              "
            />
          </div>

          {/* ERROR */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="
                  mt-5
                  text-center
                  text-[#E9C9B4]
                  text-sm
                "
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* BOTÓN WHATSAPP */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-8
              w-full
              bg-[#D7B56D]
              text-[#14271D]
              rounded-full
              px-6 py-4
              flex items-center justify-center
              gap-3
              uppercase
              tracking-[0.15em]
              text-xs
              font-semibold
              shadow-[0_10px_30px_rgba(0,0,0,0.20)]
              transition
            "
          >
            <Send size={17} strokeWidth={1.6} />
            Confirmar por WhatsApp
          </motion.button>

          <p
            className="
              mt-5
              text-center
              text-[#D8CDBA]/50
              text-[10px]
              tracking-[0.08em]
            "
          >
            Al confirmar serás dirigido a WhatsApp
          </p>
        </motion.form>

        {/* CIERRE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-[#B89B5E]/60" />
            <span className="text-[#B89B5E] text-xs">♥</span>
            <div className="w-10 h-[1px] bg-[#B89B5E]/60" />
          </div>

          <p
            className="
              mt-5
              text-[#76573D]
              font-playfair
              italic
              text-base
            "
          >
            Esperamos celebrar contigo
          </p>
        </motion.div>
      </div>
    </section>
  );
}