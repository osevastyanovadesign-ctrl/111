import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  MATERIALS,
  type MaterialCategory,
  type Material,
} from "@/data/materials";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CATEGORIES: {
  id: MaterialCategory;
  label: string;
}[] = [
  { id: "stone", label: "Камень" },
  { id: "wood", label: "Дерево" },
  { id: "textile", label: "Текстиль" },
  { id: "metal", label: "Металл" },
];

// Запасные композиции.
// Потом можно заменить их через compatible в materials.ts

const DEFAULT_COMPOSITIONS: Record<number, number[]> = {
  // ───────── STONE ─────────

  // Каррарский мрамор
  1: [20, 30, 41],

  // Травертин
  2: [20, 30, 40],

  // Чёрный оникс
  3: [21, 40, 42],

  // Абсолютный гранит
  4: [22, 42, 30],

  // Сланец
  5: [20, 31, 43],

  // Дикий камень
  6: [20, 53, 40],

  // ───────── WOOD ─────────

  // Натуральный дуб
  20: [1, 30, 41],

  // Венге
  21: [3, 40, 42],

  // Эвкалипт
  22: [2, 31, 41],

  // ───────── TEXTILE ─────────

  // Лен
  30: [1, 20, 40],

  // Бархат
  31: [3, 21, 41],

  // ───────── METAL ─────────

  // Бронза
  40: [2, 20, 30],

  // Латунь
  41: [1, 22, 31],

  // Сталь
  42: [3, 21, 52],

  // Медь
  43: [5, 20, 30],

  // ───────── OTHER ─────────

  // Терраццо
  50: [20, 30, 41],

  // Алебастр
  51: [22, 31, 41],

  // Штукатурка
  52: [20, 42, 30],

  // Ротанг
  53: [2, 30, 40],
};

function getCompatible(material: Material): Material[] {
  const ids = material.compatible || DEFAULT_COMPOSITIONS[material.id] || [];

  return ids
    .map((id) => MATERIALS.find((item) => item.id === id))
    .filter(Boolean) as Material[];
}
function getFirstMaterial(category: MaterialCategory) {
  return MATERIALS.find((item) => item.category === category) || MATERIALS[0];
}
export default function MaterialsCollage() {
  const [activeCategory, setActiveCategory] =
    useState<MaterialCategory>("stone");

  const [selectedMaterial, setSelectedMaterial] = useState<Material>(
    getFirstMaterial("stone"),
  );

  const categoryMaterials = useMemo(
    () => MATERIALS.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const composition = useMemo(
    () => getCompatible(selectedMaterial),
    [selectedMaterial],
  );

  function changeCategory(category: MaterialCategory) {
    setActiveCategory(category);

    const first = getFirstMaterial(category);

    setSelectedMaterial(first);
  }

  return (
    <section
      id="materials"
      className="
        py-20 md:py-28
        px-6 md:px-24
        bg-background
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="mb-8"
        >
          <p
            className="
              font-mono
              text-[0.55rem]
              uppercase
              tracking-[0.3em]
              opacity-40
              mb-12
              -translate-y-3
            "
          >
            Materials research
          </p>

          <h2
            className="
              font-serif
              text-4xl
              md:text-6xl
              leading-[0.95]
              -translate-y-3
            "
          >
            Палитра
            <br />
            <span className="italic">материалов</span>
          </h2>

          <p
            className="
              mt-6
              max-w-md
              font-mono
              text-[0.6rem]
              md:text-xs
              uppercase
              tracking-[0.18em]
              leading-normal
              opacity-50
            "
          >
            Материалы раскрываются через сочетание фактур, света и тактильных
            ощущений.
          </p>
        </motion.div>

        {/* CATEGORY */}

        <div
          className="
            flex
            gap-3
            mb-10
            flex-nowrap
          "
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => changeCategory(category.id)}
              className={`
                font-mono
                text-[0.5rem]
                uppercase
                tracking-[0.2em]
                whitespace-nowrap
                transition-opacity
                ${activeCategory === category.id ? "opacity-100" : "opacity-35"}
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* MATERIAL SELECTOR */}

        <div
          className="
            flex
            flex-wrap
            gap-6
            mb-16
          "
        >
          {categoryMaterials.map((material) => (
            <button
              key={material.id}
              onClick={() => setSelectedMaterial(material)}
              className={`
                relative
                w-20
                h-20
                overflow-hidden
                transition-all
                duration-700
                ${
                  selectedMaterial.id === material.id
                    ? "ring-1 ring-[#C8B89A]"
                    : "opacity-50 hover:opacity-100"
                }
              `}
            >
              <img
                src={material.img}
                alt={material.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </button>
          ))}
        </div>

        {/* MATERIAL LIST */}

        <div
          className="
            flex
            flex-wrap
            gap-3
            mb-20
          "
        >
          {categoryMaterials.map((material) => (
            <button
              key={material.id}
              onClick={() => setSelectedMaterial(material)}
              className={`
                px-4
                py-2
                border
                text-[0.6rem]
                uppercase
                tracking-[0.18em]
                transition-all
                ${
                  selectedMaterial.id === material.id
                    ? "border-black opacity-100"
                    : "border-black/10 opacity-50"
                }
              `}
            >
              {material.name}
            </button>
          ))}
        </div>

        {/* COMPOSITION */}

        <div
          className="
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-8
                    items-stretch
                    w-full
                  "
        >
          {/* MAIN MATERIAL */}

          <div
            className="
                      md:col-span-6
                    "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMaterial.id}
                initial={{
                  opacity: 0,
                  scale: 1.03,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 1,
                  ease: EASE,
                }}
                className="
                          relative
                          aspect-[4/5]
                          overflow-hidden
                        "
              >
                <motion.img
                  src={selectedMaterial.img}
                  alt={selectedMaterial.name}
                  className="
                            w-full
                            h-full
                            object-cover
                          "
                  animate={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-transparent
                            to-transparent
                          "
                />

                {/* MATERIAL INFO */}

                <div
                  className="
                            absolute
                            bottom-0
                            left-0
                            p-8
                            text-white
                          "
                >
                  <p
                    className="
                              font-mono
                              text-[0.55rem]
                              uppercase
                              tracking-[0.3em]
                              opacity-70
                            "
                  ></p>

                  <h3
                    className="
                              font-serif
                              text-3xl
                              md:text-4xl
                              mt-3
                            "
                  >
                    {selectedMaterial.name}
                  </h3>

                  <div
                    className="
                              w-12
                              h-px
                              bg-white/35
                              my-4
                            "
                  />

                  <p
                    className="
                              font-mono
                              text-[0.55rem]
                              uppercase
                              tracking-[0.2em]
                              opacity-70
                            "
                  >
                    {selectedMaterial.origin}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* COMPANIONS */}

          <div
            className="
                      md:col-span-5
                      aspect-[4/5]
                      grid
                      grid-rows-3
                      gap-4
                      relative
                    "
          >
            <p
              className="
                        absolute
                        -top-10
                        left-0
                        font-mono
                        text-[0.55rem]
                        uppercase
                        tracking-[0.3em]
                        opacity-55
                      "
            >
              Материалы-компаньоны
            </p>

            {composition.slice(0, 3).map((material, index) => (
              <motion.div
                key={material.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: EASE,
                }}
                className="
                            relative
                            overflow-hidden
                            h-full
                          "
              >
                <img
                  src={material.img}
                  alt={material.name}
                  className="
                              w-full
                              h-full
                              object-cover
                              transition-transform
                              duration-1000
                              hover:scale-105
                            "
                />

                <div
                  className="
                              absolute
                              inset-0
                              bg-black/25
                            "
                />

                <div
                  className="
                              absolute
                              bottom-0
                              left-0
                              p-5
                              text-white
                            "
                >
                  <p
                    className="
                                font-serif
                                text-xl
                              "
                  >
                    {material.name}
                  </p>

                  <p
                    className="
                                font-mono
                                text-[0.5rem]
                                uppercase
                                tracking-[0.2em]
                                opacity-70
                                mt-2
                              "
                  >
                    {material.origin}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
