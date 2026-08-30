export type Language = "RU" | "EN";

export const translations = {
  RU: {
    nav: {
      archive: "Архив",
      expertise: "Экспертиза",
      contact: "Контакт",
    },

    hero: {
      category: "Interior Design",
      architecture: "Architecture",
      alt: "Минималистичный интерьер",
    },

    philosophy: {
      label: "Философия",
      title: "Пространство как",
      words: [
        "тишина",
        "воздух",
        "свет",
        "дыхание",
      ],
      author: "Vladimir Sergeev",
      description: "Interior Design · Architecture",
      imageAlt: "Атмосфера интерьера",
    },

    projects: {
      label: "Портфолио",
      title: "Живой архив",
      materials: "Материалы проекта",
    },

    commercial: {
      title: "Коммерческие и корпоративные проекты",
      imageAlt: "Коммерческий и корпоративный проект",
    },

    about: {
      label: "Обо мне",
      name: "Владимир Сергеев",
      description: [
        "Архитектор и дизайнер интерьеров.",
        "Частные и общественные пространства,",
        "архитектура и предметная среда.",
      ],
      behance: "Подробно о проектах и профессиональном опыте",
      behanceArrow: "Behance →",
      imageAlt: "Владимир Сергеев — дизайн интерьера",
    },

    expertise: {
      label: "Экспертиза",
      title: "Направления",

      services: [
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
      ],
    },
  },

  EN: {
    nav: {
      archive: "Archive",
      expertise: "Expertise",
      contact: "Contact",
    },

    hero: {
      category: "Interior Design",
      architecture: "Architecture",
      alt: "Minimalist interior",
    },

    philosophy: {
      label: "Philosophy",
      title: "Space as",
      words: [
        "silence",
        "air",
        "light",
        "breath",
      ],
      author: "Vladimir Sergeev",
      description: "Interior Design · Architecture",
      imageAlt: "Interior atmosphere",
    },

    projects: {
      label: "Portfolio",
      title: "Living Archive",
      materials: "Project Materials",
    },

    commercial: {
      title: "Commercial & Corporate Projects",
      imageAlt: "Commercial and corporate project",
    },

    about: {
      label: "About",
      name: "Vladimir Sergeev",
      description: [
        "Architect and interior designer.",
        "Private and public spaces,",
        "architecture and objects.",
      ],
      behance: "Projects and professional experience",
      behanceArrow: "Behance →",
      imageAlt: "Vladimir Sergeev — interior design",
    },

    expertise: {
      label: "Expertise",
      title: "Directions",

      services: [
        {
          roman: "I",
          title: "Private Residences",
          desc: "Full-cycle private interior design — from architectural concept to realization.",
        },
        {
          roman: "II",
          title: "Spatial Architecture",
          desc: "Planning solutions, interior architecture, volumes and the logic of space.",
        },
        {
          roman: "III",
          title: "Material Curation",
          desc: "Selection of natural materials, finishes and textures that create a coherent interior.",
        },
        {
          roman: "IV",
          title: "Design Supervision",
          desc: "Project realization, coordination of decisions and attention to every detail throughout the process.",
        },
      ],
    },
  },
} as const;
