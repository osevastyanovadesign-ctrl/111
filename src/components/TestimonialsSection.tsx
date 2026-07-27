import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import reviewer1 from "@assets/generated_images/reviewer-1.jpg";
import reviewer2 from "@assets/generated_images/reviewer-2.jpg";
import reviewer3 from "@assets/generated_images/reviewer-3.jpg";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TESTIMONIAL_WORDS = [
  "своим",
  "живым",
  "личным",
  "естественным",
];

const TESTIMONIALS = [
  {
    image: reviewer1,
    quote:
      "«Пространство стало продолжением нашего образа жизни.»",
    meta: "Частный интерьер · Москва · 2025",
  },
  {
    image: reviewer2,
    quote:
      "«Главным результатом стало ощущение гармонии.»",
    meta: "Квартира · Тула · 2023",
  },
  {
    image: reviewer3,
    quote:
      "«Каждая деталь получила своё место.»",
    meta: "Частный интерьер · Новомосковск · 2025",
  },
];


export default function TestimonialsSection() {

  const [wordIndex, setWordIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setWordIndex((prev) =>
        (prev + 1) % TESTIMONIAL_WORDS.length
      );

    }, 3500);


    return () => clearInterval(timer);

  }, []);



  return (

    <section
      id="testimonials"
      className="
        relative
        py-16
        md:py-56
        px-6
        md:px-24
        bg-[#171715]
        overflow-hidden
        text-white
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 1,
            ease: EASE
          }}

          className="
            mb-12
            md:mb-24
          "
        >

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/40
              mb-10
            "
          >
            Голоса клиентов
          </p>


          <h2
            className="
              font-serif
              text-2xl
              md:text-6xl
              leading-[0.95]
              text-white
            "
          >
            Когда пространство
            <br />
            становится
            <br />
            <span className="italic inline-block">

              <AnimatePresence mode="wait">

                <motion.span
                  key={TESTIMONIAL_WORDS[wordIndex]}
                  initial={{
                    opacity: 0,
                    y: 12
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -12
                  }}
                  transition={{
                    duration: 0.8,
                    ease: EASE
                  }}
                >
                  {TESTIMONIAL_WORDS[wordIndex]}
                </motion.span>

              </AnimatePresence>

            </span>
          </h2>


        </motion.div>




        {/* STORIES */}

        <div className="flex flex-col gap-40">


          {TESTIMONIALS.map((item, index) => (

            <div
              key={index}
              className="relative"
            >


              {/* IMAGE */}

              <motion.div

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: 1.2,
                  ease: EASE
                }}

                className="
                  relative
                  w-full
                  max-w-[850px]
                  mx-auto
                  aspect-[3/4]
                  md:aspect-[4/3]
                  overflow-hidden
                "

              >

                <img
                  src={item.image}
                  alt="Interior project"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    scale-[1.03]
                  "
                />


                <div className="absolute inset-0 pointer-events-none">

                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-24
                      md:h-36
                      bg-gradient-to-b
                      from-[#171715]
                      via-[#171715]/60
                      to-transparent
                    "
                  />


                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-32
                      md:h-40
                      bg-gradient-to-t
                      from-[#171715]
                      via-[#171715]/60
                      to-transparent
                    "
                  />


                  <div
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-16
                      md:w-28
                      bg-gradient-to-r
                      from-[#171715]
                      via-[#171715]/50
                      to-transparent
                    "
                  />


                  <div
                    className="
                      absolute
                      inset-y-0
                      right-0
                      w-16
                      md:w-28
                      bg-gradient-to-l
                      from-[#171715]
                      via-[#171715]/50
                      to-transparent
                    "
                  />

                </div>


              </motion.div>




              {/* REVIEW */}

              <motion.div

                initial={{
                  opacity: 0,
                  y: 30
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:1,
                  delay:0.3,
                  ease:EASE
                }}

                className="
                  absolute
                  right-4
                  bottom-[-35px]
                  w-[48%]
                  md:right-0
                  md:bottom-0
                  md:w-[360px]
                "

              >

                <p
                  className="
                    font-serif
                    text-xs
                    md:text-2xl
                    leading-tight
                    text-white/80
                    max-h-[70px]
                    overflow-hidden
                  "
                >
                  {item.quote}
                </p>


                <div
                  className="
                    mt-4
                    pt-3
                    md:mt-8
                    md:pt-6
                    border-t
                    border-white/10
                  "
                >

                  <p
                    className="
                      font-mono
                      text-[0.45rem]
                      md:text-[0.6rem]
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    {item.meta}
                  </p>

                </div>


              </motion.div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}