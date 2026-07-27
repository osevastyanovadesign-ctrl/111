import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SERVICES = [
  {
    roman: "I",
    title: "Частные резиденции",
    desc: "Проектирование частных интерьеров полного цикла — от архитектурной концепции до реализации.",
  },
  {
    roman: "II",
    title: "Архитектура пространства",
    desc: "Разработка планировочных решений, работа с архитектурой интерьера, объёмами и логикой пространства.",
  },
  {
    roman: "III",
    title: "Кураторство материалов",
    desc: "Подбор натуральных материалов, отделки и фактур, создающих целостный образ интерьера.",
  },
  {
    roman: "IV",
    title: "Авторское сопровождение",
    desc: "Контроль реализации проекта, координация решений и внимание к каждой детали на всех этапах.",
  },
];


export default function ExpertiseSection() {

  return (

    <section
      id="expertise"
      className="
        py-20
        md:py-48
        px-6
        md:px-24
        bg-[#171715]
        text-white
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-20
            md:mb-28
          "

          initial={{
            opacity:0,
            y:24
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true,
            margin:"-15%"
          }}

          transition={{
            duration:1,
            ease:EASE
          }}
        >

          <div>

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                opacity-40
                mb-4
              "
            >
              Экспертиза
            </p>


            <h2
              className="
                font-serif
                text-4xl
                md:text-6xl
                italic
                leading-none
                text-white
              "
            >
              Направления
            </h2>

          </div>


        </motion.div>





        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-px
            bg-white/10
          "
        >


          {SERVICES.map((svc, idx) => (


            <motion.div

              key={svc.roman}


              initial={{
                opacity:0,
                y:30
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true,
                margin:"-10%"
              }}


              transition={{
                duration:1,
                ease:EASE,
                delay:idx*0.1
              }}


              className="
                group
                relative
                p-8
                md:p-12
                min-h-[280px]
                md:min-h-[340px]
                bg-[#171715]
                hover:bg-white/5
                transition-colors
                duration-700
                cursor-default
                overflow-hidden
              "

            >



              {/* LARGE ROMAN */}


              <span

                aria-hidden

                className="
                  absolute
                  right-8
                  top-4
                  font-serif
                  text-[8rem]
                  md:text-[10rem]
                  leading-none
                  opacity-[0.04]
                  select-none
                  pointer-events-none
                "

              >
                {svc.roman}
              </span>





              <h3

                className="
                  font-serif
                  text-2xl
                  md:text-3xl
                  leading-tight
                  mb-5
                  text-white
                  group-hover:italic
                  transition-all
                  duration-500
                "

              >
                {svc.title}
              </h3>

              <p
                className="
                  font-mono
                  text-[0.65rem]
                  md:text-xs
                  uppercase
                  tracking-[0.12em]
                  leading-loose
                  opacity-45
                  max-w-sm
                "
              >
                {svc.desc}
              </p>





              {/* HOVER LINE */}

              <motion.div

                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  bg-background/20
                  origin-left
                "

                initial={{
                  scaleX:0
                }}

                whileInView={{
                  scaleX:1
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:1.2,
                  ease:EASE,
                  delay:0.3+idx*0.1
                }}

              />



            </motion.div>


          ))}


        </div>


      </div>


    </section>


  );

}