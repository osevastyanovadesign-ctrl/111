import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const VISIT_TIMES = [
  "Пн 10:00",
  "Пн 15:00",
  "Вт 10:00",
  "Вт 15:00",
  "Ср 10:00",
  "Ср 15:00",
  "Чт 10:00",
  "Чт 15:00",
  "Пт 10:00",
  "Пт 15:00",
  "Сб 10:00",
  "Сб 15:00",
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmedTime, setConfirmedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  return (
    <section
      id="contact"
      className="
        relative
        bg-[#1A1A18]
        text-white
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          min-h-[85vh]
          grid
          grid-cols-1
          md:grid-cols-2
        "
      >
        {/* LEFT — PRIVATE VISIT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="
            p-8
            md:p-20
            border-b
            md:border-b-0
            md:border-r
            border-white/10
            flex
            flex-col
            justify-center
          "
        >
          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/40
              mb-6
            "
          >
            Частный визит
          </p>

          <h2
            className="
              font-serif
              italic
              text-4xl
              md:text-5xl
              leading-tight
              mb-14
            "
          >
            Выберите
            <br />
            удобное время
          </h2>

          <div
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-3
              max-w-[380px]
            "
          >
            {VISIT_TIMES.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  text-left
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  py-4
                  px-4
                  border
                  transition-all
                  duration-500

                  ${
                    selectedTime === time
                      ? "border-white bg-white text-[#1A1A18]"
                      : "border-white/15 text-white/60 hover:border-white/50 hover:text-white"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>

          {selectedTime && (
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: EASE,
              }}
              className="
                mt-10
                font-mono
                text-[0.6rem]
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >
              Выбрано: {selectedTime}
            </motion.p>
          )}
        </motion.div>

        {/* RIGHT — PRIVATE CONSULTATION */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: EASE,
          }}
          className="
            p-8
            md:p-20
            flex
            flex-col
            justify-center
          "
        >
          <div
  className="
    flex
    justify-end
    mb-4
  "
>
  <a
    href="tel:+79038429153"
    className="
      font-mono
      text-sm
      tracking-[0.25em]
      text-white/60
      hover:text-white
      transition-colors
    "
  >
    8-903-842-91-53
  </a>
</div>
          <h3
            className="
              font-serif
              italic
              text-3xl
              md:text-5xl
              leading-tight
              mb-12
              pr-8
              md:pr-0
            "
          >
            Начнём
            <br />
            диалог?
          </h3>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                }}
              >
                <p
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                    mb-8
                  "
                >
                  Как вас зовут?
                </p>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-5
                    text-xl
                    font-light
                    outline-none
                    placeholder:text-white/20
                    focus:border-white/60
                    transition-colors
                  "
                />

                <button
                  onClick={() => {
                    if (name.trim()) {
                      setStep(2);
                    }
                  }}
                  className={`
                    group
                    mt-12
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    transition-opacity
                    ${
                      name.trim()
                        ? "opacity-100"
                        : "opacity-40 cursor-not-allowed"
                    }
                  `}
                >
                  <span className="inline-flex items-center gap-3">
                    Продолжить
                    <span
                      className="
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      "
                    >
                      →
                    </span>
                  </span>
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                }}
              >
                <p
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                    mb-8
                  "
                >
                  Контакт для связи
                </p>

                <input
                  placeholder="Telegram, телефон или e-mail"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-5
                    text-xl
                    font-light
                    outline-none
                    placeholder:text-white/20
                    focus:border-white/60
                    transition-colors
                  "
                />

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    gap-8
                    pr-4
                  "
                >

                  <button
                    onClick={() => {
                      setName("");
                      setSelectedTime(null);
                      setStep(1);
                    }}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      font-mono
                      text-[0.6rem]
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                      hover:text-white
                      transition-colors
                    "
                  >
                    <span
                      className="
                        transition-transform
                        duration-500
                        group-hover:-translate-x-2
                      "
                    >
                      ←
                    </span>

                    Назад

                  </button>


                  <button
                    onClick={() => {
                      setConfirmedTime(selectedTime);
                      setSelectedTime(null);
                      setStep(3);
                    }}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      pr-4
                      font-mono
                      text-[0.6rem]
                      uppercase
                      tracking-[0.18em]
                      text-white
                    "
                  >

                    Продолжить

                    <span
                      className="
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      "
                    >
                      →
                    </span>

                  </button>

                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                }}
              >
                <p
                  className="
                    font-serif
                    italic
                    text-3xl
                    leading-tight
                  "
                >
                  Спасибо.
                </p>

                <p
                  className="
                    mt-6
                    text-lg
                    font-light
                    text-white/70
                    leading-relaxed
                  "
                >
                  Владимир свяжется
                  <br />с вами для подтверждения консультации.
                </p>

                {confirmedTime && (
                  <p
                    className="
                      mt-6
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    Выбранное время:
                    <br />
                    {confirmedTime}
                  </p>
                )}

                <button
                  onClick={() => {
                    setName("");
                    setSelectedTime(null);
                    setConfirmedTime(null);
                    setStep(1);
                  }}
                  className="
                    mt-12
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    text-white/50
                    hover:text-white
                    transition-colors
                  "
                >
                  ← Назад
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="
              mt-16
              flex
              items-center
              gap-3
            "
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${step === 1 ? "bg-white" : "bg-white/20"}
              `}
            />

            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${step === 2 ? "bg-white" : "bg-white/20"}
              `}
            />

            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${step === 3 ? "bg-white" : "bg-white/20"}
              `}
            />
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}

      <div
        className="
              mt-10
              border-t
              border-white/10
              px-8
              md:px-20
              py-8
              max-w-[1400px]
              mx-auto
              flex
              items-center
              justify-between
              font-mono
              text-[0.65rem]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
      >
        <span>© {new Date().getFullYear()} Vladimir Sergeev</span>

        <span>Novomoskovsk, Russia</span>
      </div>
    </section>
  );
}
