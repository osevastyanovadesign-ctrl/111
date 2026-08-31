import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "wouter";

import IntroOverlay from "@/components/IntroOverlay";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import SectionIndicator from "@/components/SectionIndicator";
import MarqueeTicker from "@/components/MarqueeTicker";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroImage from "@assets/generated_images/hero-interior.jpg";
import philosophyImage from "@assets/generated_images/moscow-3.jpg";

import commercial01 from "@assets/generated_images/commercial-project-01.webp";
import commercial02 from "@assets/generated_images/commercial-project-02.webp";
import commercial03 from "@assets/generated_images/commercial-project-03.webp";
import commercial04 from "@assets/generated_images/commercial-project-04.webp";
import commercial05 from "@assets/generated_images/commercial-project-05.webp";
import commercial06 from "@assets/generated_images/commercial-project-06.webp";
import commercial07 from "@assets/generated_images/commercial-project-07.webp";
import commercial08 from "@assets/generated_images/commercial-project-08.webp";

import { PROJECTS } from "@/data/projects";
import { MATERIALS } from "@/data/materials";


const EASE: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1
];

const TRANSITION = {
  duration: 1.2,
  ease: EASE
};


// The last word cycles; "Пространство как" is fixed
const CYCLE_WORDS = [
  "тишина",
  "воздух",
  "свет",
  "дыхание"
];


function HeroCycleWord() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const id = setInterval(() => {
      setIndex(i => (i + 1) % CYCLE_WORDS.length);
    }, 2600);


    return () => clearInterval(id);

  }, []);


  return (
    <span className="relative inline-block">

      <AnimatePresence mode="wait">

        <motion.span
          key={index}
          className="inline-block font-serif italic"
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -18
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {CYCLE_WORDS[index]}

        </motion.span>

      </AnimatePresence>

    </span>
  );
}

const CLIENTS = [
  "ПромТехноПарк",
  "Новомосковскгаздеталь",
  "Procter & Gamble",
  "Медцентр «Здоровье»",
  "Донская обувь",
  "ЭСТМ",
  "Центр «Мечта»",
  "ЦМ «Вектор»",
];
const COMMERCIAL_IMAGES = [
  commercial01,
  commercial02,
  commercial03,
  commercial04,
  commercial05,
  commercial06,
  commercial07,
  commercial08,
];

function ClientCycleWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % CLIENTS.length);
    }, 2600);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block font-serif italic"
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -18
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {CLIENTS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
function CommercialProjectImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % COMMERCIAL_IMAGES.length);
    }, 4800);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="aspect-[4/5] overflow-hidden relative">

      {/* PHOTO */}
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={COMMERCIAL_IMAGES[index]}
          alt="Commercial and corporate project"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </AnimatePresence>

      {/* SOFT EDGES */}

      {/* TOP */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-16
          pointer-events-none
          bg-gradient-to-b
          from-[#171715]
          to-transparent
        "
      />

      {/* LEFT */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-16
          pointer-events-none
          bg-gradient-to-r
          from-[#171715]
          to-transparent
        "
      />

      {/* RIGHT */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-16
          pointer-events-none
          bg-gradient-to-l
          from-[#171715]
          to-transparent
        "
      />

      {/* BOTTOM */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-28
          pointer-events-none
          bg-gradient-to-t
          from-[#171715]
          to-transparent
        "
      />

    </div>
  );
}
function AboutImage() {
  const aboutImage = PROJECTS[1]?.hero;

  if (!aboutImage) return null;

  return (
    <div className="aspect-[4/5] overflow-hidden relative">

      {/* BLACK & WHITE */}
<img
  src={aboutImage}
  alt="Vladimir Sergeev — interior design"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    grayscale
  "
/>

{/* COLOR */}
<motion.div
  className="
    absolute
    inset-0
    overflow-hidden
    pointer-events-none
  "
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
  duration: 5,
  delay: 0.3,
  ease: [0.16, 1, 0.3, 1],
}}
>
  <img
    src={aboutImage}
    alt=""
    className="
      w-full
      h-full
      object-cover
    "
  />
</motion.div>

      {/* SOFT TRANSITION */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 38%, rgba(23,23,21,0.18) 48%, transparent 58%)",
        }}
      />

      {/* TOP */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-16
          pointer-events-none
          bg-gradient-to-b
          from-[#171715]
          to-transparent
        "
      />

      {/* LEFT */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-16
          pointer-events-none
          bg-gradient-to-r
          from-[#171715]
          to-transparent
        "
      />

      {/* RIGHT */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-16
          pointer-events-none
          bg-gradient-to-l
          from-[#171715]
          to-transparent
        "
      />

      {/* BOTTOM */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-28
          pointer-events-none
          bg-gradient-to-t
          from-[#171715]
          to-transparent
        "
      />

    </div>
  );
}

export default function Home() {
  console.log("HOME MOUNT");

  const [introComplete, setIntroComplete] = useState(
  sessionStorage.getItem("returnTo") === "projects"
);

  const isReturning =
    sessionStorage.getItem("returnTo") === "projects";

  const [, setLocation] = useLocation();

  const heroRef = useRef(null);


  useEffect(() => {

    if (!introComplete) {

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

    }

  }, [introComplete]);



  useEffect(() => {

  if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

  }

  const returnTo = sessionStorage.getItem("returnTo");

  if (!returnTo) {

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }

}, []);
  useEffect(() => {

  const returnTo = sessionStorage.getItem("returnTo");

if (returnTo === "projects") {

  sessionStorage.removeItem("returnTo");

  setTimeout(() => {

    document
  .getElementById("projects")
  ?.scrollIntoView({
    behavior: "instant",
    block: "start",
  });

  }, 0);

}

}, []);



return (

  <div className="
    bg-background
    text-foreground
    selection:bg-accent
    selection:text-accent-foreground
    w-full
    overflow-hidden
    cursor-none
  ">

      <CustomCursor />


  {!isReturning && (
  <IntroOverlay
    onComplete={() => setIntroComplete(true)}
  />
)}


      <SectionIndicator />

      {/* 01. Hero ─────────────────────────────────────── */}
      <section 
        id="hero" 
        ref={heroRef} 
        className="relative h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden"
      >

        {/* Nav */}

        {/* Soft glass header */}
        <div
          className="
            fixed top-0 left-0 w-full
            h-20 md:h-24
            z-40
            bg-gradient-to-b
            from-black/25
            via-black/10
            to-transparent
            backdrop-blur-md
            pointer-events-none
          "
        />

        <nav
          className="
            fixed top-0 left-0 w-full
            h-20 md:h-24
            px-6 md:px-12
            z-50
            flex items-center justify-between
            text-white
            -translate-y-1 md:-translate-y-2
          "
        >

          <div
            className="
              font-mono
              text-[0.6rem]
              md:text-xs
              uppercase
              tracking-[0.25em]
              opacity-90
            "
          >
            Vladimir Sergeev
          </div>


          <div
            className="
              hidden md:flex
              gap-12
              font-mono
              text-[0.65rem]
              uppercase
              tracking-[0.25em]
            "
          >
            <a 
              href="#projects" 
              className="hover:opacity-50 transition-opacity"
            >
              Архив
            </a>

            <a 
              href="#expertise" 
              className="hover:opacity-50 transition-opacity"
            >
              Экспертиза
            </a>

            <a 
              href="#contact" 
              className="hover:opacity-50 transition-opacity"
            >
              Контакт
            </a>
          </div>

        </nav>

        {/* Hero Caption */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ ...TRANSITION, delay: 0.4 }}
            className="pb-10 md:pb-16 px-6 md:px-12"
          >
            <p
              className="
                font-mono
                text-[0.58rem]
                md:text-xs
                uppercase
                tracking-[0.28em]
                text-white/80
                leading-relaxed
              "
            >
              <span className="md:inline">
                Interior Design
              </span>

              <span className="hidden md:inline">
                {" · "}
              </span>

              <br className="md:hidden" />

              <span>
                Architecture
              </span>
            </p>
          </motion.div>
        </div>
        {/* Hero Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={heroImage}
            alt="Minimalist interior"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={introComplete ? { opacity: 0.85, scale: 1 } : {}}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
        </div>
      </section>

      {/* Marquee after hero */}
      <MarqueeTicker />

      {/* 02. Philosophy ─────────────────────────────── */}
      <section 
        id="philosophy" 
        className="
          py-20 
          md:py-48 
          px-6 
          md:px-24 
          bg-[#171715]
          text-white
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">

          {/* Left — Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={TRANSITION}
            className="md:col-span-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-50 mb-10 -translate-y-4">
              Philosophy
            </p>

            <h2
              className="
                font-serif
                text-[2.2rem]
                md:text-7xl
                leading-[0.95]
                max-w-[85vw]
                -translate-x-3
                md:translate-x-0
              "
            >
              Пространство как
              <br />
              <span className="italic">
                <HeroCycleWord />
              </span>
            </h2>

            <p
              className="
                mt-10
                font-mono
                text-[0.38rem]
                md:text-xs
                uppercase
                tracking-[0.18em]
                opacity-45
                leading-loose
              "
            >
              Vladimir Sergeev
              <br />
              Interior Design · Architecture
            </p>
          </motion.div>


          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="md:col-span-6 -translate-y-6 md:translate-y-0"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <motion.img
                src={philosophyImage}
                alt="Interior atmosphere"
                className="w-full h-full object-cover"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 18,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      

      {/* 03. Materials Collage removed */}

      {/* 03. Живой Архив */}

      <section
       id="projects"
       className="
         py-20
         md:py-48
         px-6
         md:px-24
         bg-[#171715]
         text-white
         overflow-hidden
       "
      >

        <div
          className="
            max-w-7xl
            mx-auto
          "
        >


          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16
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
              mb-8
              md:mb-16
              grid
              grid-cols-1
              md:grid-cols-12
              gap-16
              md:gap-24
              items-center
            "
          >

            <div className="md:col-span-6">

              <p
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                  mb-10
                "
              >
                Портфолио
              </p>


              <h2
                className="
                  font-serif
                  text-[2.2rem]
                  md:text-7xl
                  leading-[0.95]
                  max-w-[85vw]
                  md:translate-x-0
                  text-white
                "
              >
                Живой архив
              </h2>

            </div>


            </motion.div>


            <div className="h-16 md:h-32" />


            {PROJECTS.map((project, i) => (

            <div key={project.id}>

              <motion.div

                data-project-card

                initial={false}

animate={{
  opacity: 1,
  y: 0
}}

transition={{
  duration: 0
}}

                onClick={() => {
                sessionStorage.setItem("returnTo", "projects");
                setLocation(`/project/${project.slug}`);
               }}

                className="
                  relative
                  w-full
                  h-[95vh]
                  md:h-[110vh]
                  overflow-hidden
                  cursor-pointer
                  group
                "

              >

                <img
                  src={project.hero}
                  alt={project.title}

                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-[1200ms]
                    group-hover:scale-105
                  "

                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, black 90%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 90%, transparent 100%)",
                  }}
                />

                {/* DARK GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-l
                    from-black/50
                    via-black/10
                    to-transparent
                  "
                />

                {/* SOFT EDGES */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-r
                    from-[#151513]/50
                    via-transparent
                    to-[#151513]/50
                  "
                />

                {/* TOP / BOTTOM FADE */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-b
                    from-[#151513]/20
                    via-transparent
                    to-[#151513]/25
                  "
                />
                {/* PHOTO BOTTOM LINE */}

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    ease: EASE,
                  }}
                  className="
                    absolute
                    left-6
                    right-6
                    md:left-20
                    md:right-20
                    bottom-0
                    h-[2px]
                    origin-center
                    bg-white/40
                  "
                />

                {/* PROJECT INFO */}

                <div
                  className="
                    absolute
                    right-6
                    bottom-12
                    md:right-20
                    md:bottom-20
                    text-white
                    text-right
                  "
                >

                  <h4
                    className="
                      font-serif
                      text-3xl
                      md:text-5xl
                      italic
                    "
                  >
                    {project.title}
                  </h4>

                  <p
                    className="
                      font-mono
                      text-[0.55rem]
                      uppercase
                      tracking-[0.3em]
                      opacity-70
                      mt-4
                    "
                  >
                    {project.location} · {project.year}
                  </p>

                </div>

              </motion.div>


              {/* PROJECT MATERIALS */}

              <motion.div
                className="
                  max-w-7xl
                  mx-auto
                  px-6
                  md:px-24
                  pt-12
                  mb-10
                "

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
              >

                {/* TITLE */}

                <div className="mb-8">

                  <span
                    className="
                      font-mono
                      text-[0.6rem]
                      uppercase
                      tracking-[0.25em]
                      text-white/50
                    "
                  >
                    Материалы проекта
                  </span>

                </div>


                {/* MATERIALS GRID */}

                <div
                  className="
                    max-w-[67rem]
                    mx-auto
                    grid
                    grid-cols-3
                    gap-4
                    md:gap-6
                  "
                >

                  {project.materialIds.map((id, index) => {

                  const material = MATERIALS.find(
                    (m) => m.id === id
                  );

                  if (!material) return null;


                  return (

                  <motion.div
                    key={material.id}
                    initial={{
                      opacity: 0,
                      y: 12
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.55,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="
                      flex
                      flex-col
                      gap-3
                    "
                  >

                        {/* IMAGE */}

                        <div
                          className="
                            h-24
                            md:h-32
                            overflow-hidden
                          "
                        >

                          <motion.img
                            src={material.img}
                            alt={material.name}

                            className="
                              w-full
                              h-full
                              object-cover
                            "

                            whileHover={{
                              scale: 1.04
                            }}

                            transition={{
                              duration: 1.2,
                              ease: EASE
                            }}
                          />

                        </div>


                        {/* TEXT */}

                        <div>

                          <p
  className="
    font-mono
    text-[10px]
    md:text-xs
    uppercase
    tracking-[0.08em]
    md:tracking-[0.18em]
    text-white
    leading-relaxed
  "
>
  {material.name}
</p>

                          <p
                            className="
                              font-mono
                              text-[10px]
                              tracking-[0.15em]
                              text-white/70
                              mt-1
                            "
                          >
                            {material.origin}
                          </p>

                          </div>


                          </motion.div>

                          );

                          })}

                          </div>


                          </motion.div>

                          </div>

                          ))}


                          </div>
      </section>

      {/* 05. Коммерческие и корпоративные проекты */}

<section
  className="
    pt-32
    md:pt-64
    pb-20
    md:pb-48
    px-6
    md:px-24
    bg-[#171715]
    text-white
  "
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">

    {/* Left — Commercial / Corporate Projects */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={TRANSITION}
      className="md:col-span-6 -translate-y-12 md:-translate-y-8"
    >

      <h2
        className="
          font-serif
          text-[2rem]
          md:text-6xl
          leading-[0.95]
          max-w-[85vw]
          -translate-x-3
          md:translate-x-0
        "
      >
        Коммерческие и корпоративные проекты
        <br />
        <span className="inline-block mt-5 md:mt-8">
          <ClientCycleWord />
        </span>
      </h2>

    </motion.div>


    {/* Right — Image */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="md:col-span-6 -translate-y-6 md:translate-y-0"
    >
      <CommercialProjectImage />
    </motion.div>

  </div>
</section>


{/* 06. About */}

<section
  className="
    pt-32
    md:pt-64
    pb-20
    md:pb-48
    px-6
    md:px-24
    bg-[#171715]
    text-white
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      grid
      grid-cols-1
      md:grid-cols-12
      gap-16
      md:gap-24
      items-center
    "
  >

    {/* LEFT — ABOUT */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={TRANSITION}
      className="
        md:col-span-6
        -translate-y-8
        md:-translate-y-6
      "
    >

      <p
        className="
          font-mono
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/50
          mb-10
        "
      >
        Обо мне
      </p>

      <h2
        className="
          font-serif
          text-[2.2rem]
          md:text-6xl
          leading-[0.95]
          max-w-[85vw]
          -translate-x-3
          md:translate-x-0
        "
      >
        Владимир Сергеев
      </h2>

      <p
        className="
          mt-8
          font-mono
          text-[0.58rem]
          md:text-xs
          uppercase
          tracking-[0.18em]
          text-white/60
          leading-loose
        "
      >
        Архитектор и дизайнер интерьеров.
        <br />
        Частные и общественные пространства,
        <br />
        архитектура и предметная среда.
      </p>

      <div className="mt-12">

  <a
    href="https://www.behance.net/cbacaf41"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-baseline
      gap-3
      group
    "
  >
    <span
      className="
        font-mono
        text-[0.65rem]
        md:text-xs
        uppercase
        tracking-[0.18em]
        text-white/60
        group-hover:text-white
        transition-colors
      "
    >
      Подробно о проектах и профессиональном опыте
    </span>

    <span
  className="
  font-mono
  text-xl
  md:text-2xl
  uppercase
  tracking-[0.18em]
  text-white
  group-hover:opacity-60
  transition-opacity
"
>
  BEHANCE →
</span>
  </a>

</div>
      <div className="mt-4">

  <a
  href="https://vk.ru/id271068896"
  target="_blank"
  rel="noopener noreferrer"
  className="
    font-mono
    text-[0.65rem]
    md:text-xs
    uppercase
    tracking-[0.18em]
    text-white/60
    hover:text-white
    transition-colors
  "
>
  Личная страница{" "}
  <span className="
  font-mono
  text-xl
  md:text-2xl
  uppercase
  tracking-[0.18em]
  text-white
">
  ВКонтакте →
</span>
</a>

</div>

    </motion.div>


    {/* RIGHT — IMAGE */}

    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  className="
    md:col-span-6
    -translate-y-6
    md:translate-y-0
  "
>
  <a
    href="https://www.behance.net/cbacaf41"
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer"
  >
    <AboutImage />
  </a>
</motion.div>

  </div>

</section>


{/* 07. Expertise */}

<ExpertiseSection />


{/* 08. Testimonials ────────────────────────────── */}

<TestimonialsSection />

      {/* Marquee before contact */}
      <MarqueeTicker />

      {/* 09. Contact ─────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
