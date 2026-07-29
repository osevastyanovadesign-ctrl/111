import { motion } from "framer-motion";
import { useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { PROJECTS } from "@/data/projects";
import { MATERIALS } from "@/data/materials";
import CustomCursor from "@/components/CustomCursor";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const project = PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
  window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-sm opacity-40 cursor-none">
        <CustomCursor />
        Проект не найден
      </div>
    );
  }

  // The 3 materials for this project
  const projectMaterials = project.materialIds
    .map(id => MATERIALS.find(m => m.id === id)!)
    .filter(Boolean);

  const displayMaterials = [...projectMaterials];

  while (displayMaterials.length < 3) {
    displayMaterials.push(
      projectMaterials[
        displayMaterials.length % projectMaterials.length
      ]
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen cursor-none">
      <CustomCursor />

      {/* Back button glass */}
      <div
        className="
          fixed top-0 left-0
          w-full h-20 md:h-24
          z-40
          bg-gradient-to-b
          from-black/25
          via-black/10
          to-transparent
          backdrop-blur-md
          pointer-events-none
        "
      />

      {/* Back button */}
<motion.button
  onClick={() => {
    sessionStorage.setItem("returnTo", "projects");
    navigate("/");
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="
      fixed top-6 left-6
            md:top-8 md:left-8
            z-50
            flex items-center gap-3
            font-mono
            text-[0.6rem]
            md:text-xs
            uppercase
            tracking-[0.2em]
            text-white
            opacity-80
            hover:opacity-100
            transition-opacity
            group
        "
      >
        <span
          className="
            inline-block
            transition-transform
            duration-300
            group-hover:-translate-x-1
          "
        >
          ←
        </span>

        <span>
          Живой архив
        </span>

      </motion.button>

      {/* Hero image */}
      <motion.div
        className="w-full h-[65dvh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <motion.img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 py-10 md:py-24">

        {/* Title row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-12 md:mb-24 pb-8 md:pb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        >
          <div className="md:col-span-7">
            <h1 className="font-serif text-3xl md:text-7xl leading-tight mb-4">
              {project.title}
            </h1>
          </div>

          <div className="md:col-span-5 flex flex-col justify-start md:justify-end gap-2 font-mono text-[0.48rem] md:text-xs uppercase tracking-[0.12em] opacity-50">
            <p>{project.type}</p>
            <p>{project.area} · {project.location}</p>
            <p>{project.year}</p>
          </div>
        </motion.div>


        {/* Main content: photo left, text right */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
        >

          {/* Left — main photo */}

          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-muted sticky top-8">

              <motion.img
                src={project.photos[0]}
                alt={`${project.title} — главное фото`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.5, ease: EASE }}
              />

            </div>
          </div>


          {/* Right — Задача / Решение / Результат */}

          <div className="md:col-span-7 flex flex-col justify-center gap-14 md:py-8">

            {[
              { label: "Задача", text: project.task },
              { label: "Решение", text: project.solution },
              { label: "Результат", text: project.result },
            ].map((block, i) => (

              <div
                key={i}
                className="flex flex-col gap-4 border-l-2 border-foreground/10 pl-8"
              >

                <div className="flex items-center gap-4">

                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] opacity-30">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">
                    {block.label}
                  </span>

                </div>

                <p className="font-mono text-sm md:text-lg leading-relaxed opacity-70">
                  {block.text}
                </p>

              </div>

            ))}

          </div>

        </motion.div>
        </div>
      {/* Materials */}

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-24 mb-24 border-t border-foreground/10 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.6 }}
      >
        <div className="mb-8 px-6 md:px-0">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] opacity-40">
            Материалы
          </span>
        </div>

        <div className="max-w-[67rem] mx-auto px-6 md:px-0 grid grid-cols-3 gap-4 md:gap-6">
          {projectMaterials.map((material) => (
            <div
              key={material.id}
              className="flex flex-col gap-3"
            >
              <div className="h-24 md:h-32 overflow-hidden">
                <motion.img
                  src={material.img}
                  alt={material.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: EASE }}
                />
              </div>

              <div>
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] opacity-60">
                  {material.name}
                </p>

                <p className="font-mono text-[0.5rem] uppercase tracking-[0.15em] opacity-30 mt-1">
                  {material.origin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-foreground/10 px-6 md:px-24 py-8 font-mono text-xs uppercase tracking-[0.2em] opacity-30 flex justify-between max-w-7xl mx-auto">
        <span>© {new Date().getFullYear()} Vladimir Sergeev</span>
        <span>Авторский дизайн интерьера</span>
      </div>
    </div>
  );
}
