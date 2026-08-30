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
    projectData: {
  patriarshie: {
    title: "КП «Академпарк»",
    type: "Частный дом",
    location: "д. Тульчино",
    task: "Создать современный двухэтажный дом в коттеджном посёлке «Академпарк» — с максимальным раскрытием природного окружения, панорамными видами и функциональными пространствами для жизни.",
    solution: "Архитектура построена вокруг двусветной гостиной с панорамным остеклением. Второй этаж дополнен балконом, а эксплуатируемая кровля превращена в полноценную террасу для отдыха.",
    result: "Дом стал продолжением окружающего пейзажа: открытым, светлым и спокойным. Архитектура подчёркивает природное окружение, а каждое пространство ориентировано на свет, виды и комфорт.",
  },

  "villa-repino": {
    title: "ЖК «Южные сады»",
    type: "Частная квартира",
    location: "Москва",
    task: "Проектирование интерьера квартиры площадью 50 м² в новом жилом комплексе «Южные сады» в Москве. Небольшое пространство решено как цельный, светлый интерьер — без визуального шума и лишних деталей.",
    solution: "В основу интерьера легла тёплая нейтральная палитра с фактурами светлого дерева и камня. Зеркала и стекло расширяют пространство, встроенные системы хранения сохраняют чистоту линий. Графичные тёмные элементы добавляют глубину и собирают композицию.",
    result: "Квартира воспринимается просторнее своего метража. Всё необходимое встроено в архитектуру пространства, а сдержанная палитра и натуральные фактуры создают спокойную, цельную атмосферу.",
  },

  "loft-arma": {
    title: "Рязанское шоссе",
    type: "Квартира",
    location: "Новомосковск, Рязанское шоссе",
    task: "Создать светлый и функциональный интерьер квартиры площадью 100 м² в Новомосковске — с ощущением простора, единой общественной зоной и комфортными пространствами для повседневной жизни.",
    solution: "Кухня, столовая и гостиная объединены в единое пространство. Палитра построена на белом, тёплом бежевом и натуральном дереве, дополненных мраморными поверхностями. Графичная система потолочного света задаёт ритм и объединяет основные зоны.",
    result: "Квартира получилась светлой, цельной и спокойной: без визуальной перегруженности, но с выразительными деталями. Пространство работает как единая система, где функциональность сочетается с ощущением комфорта и воздуха.",
  },

  "penthouse-city": {
    title: "Квартира в Ессентуках",
    type: "Квартира",
    location: "Ессентуки",
    task: "Создать современный интерьер квартиры площадью 80 м², объединив пространство с балконом и сохранив ощущение воздуха и света.",
    solution: "Большие окна и объединённый с квартирой балкон визуально расширяют пространство. Матовые и глянцевые поверхности создают игру фактур, а белый кирпич добавляет интерьеру выразительности.",
    result: "Светлый и цельный интерьер с ощущением простора, где контраст фактур сочетается с архитектурной лёгкостью.",
  },

  "country-retreat": {
    title: "КП «Крестовский»",
    type: "Загородный поселок",
    location: "Новомосковск",
    task: "Создать современный интерьер загородного дома в коттеджном посёлке «Крестовский» — светлый, спокойный и функциональный, с выразительными деталями и комфортной атмосферой для повседневной жизни.",
    solution: "Интерьер построен на сочетании мягкой природной палитры, глубоких зелёных и синих оттенков, светлых поверхностей и выразительного освещения. Классические архитектурные детали объединены с современной мебелью и лаконичными декоративными решениями.",
    result: "Пространство получилось цельным и гармоничным: сдержанная цветовая гамма создаёт ощущение спокойствия, а фактуры, свет и акцентные элементы добавляют интерьеру глубину и индивидуальность. Дом воспринимается современным, уютным и продуманным до деталей.",
  },
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
    projectData: {
  patriarshie: {
    title: "Akadempark",
    type: "Private House",
    location: "Tulchino",
    task: "Create a contemporary two-storey house in the Akadempark residential community, opening the architecture to its natural surroundings with panoramic views and functional spaces for everyday life.",
    solution: "The architecture is organized around a double-height living room with panoramic glazing. The upper floor opens onto a balcony, while the accessible roof has been transformed into a full terrace for relaxation.",
    result: "The house becomes an extension of the surrounding landscape: open, light and calm. The architecture frames the natural setting, while every space is oriented towards light, views and comfort.",
  },

  "villa-repino": {
    title: "Yuzhnye Sady",
    type: "Private Apartment",
    location: "Moscow",
    task: "Design the interior of a 50 m² apartment in the new Yuzhnye Sady residential complex in Moscow. The compact space is conceived as a coherent, light-filled interior without visual noise or unnecessary details.",
    solution: "The interior is built around a warm neutral palette with light wood and stone textures. Mirrors and glass visually expand the space, while integrated storage keeps the lines clean. Graphic dark elements add depth and bring the composition together.",
    result: "The apartment feels more spacious than its actual size. Everything essential is integrated into the architecture, while the restrained palette and natural textures create a calm, coherent atmosphere.",
  },

  "loft-arma": {
    title: "Ryazanskoye Highway",
    type: "Apartment",
    location: "Novomoskovsk, Ryazanskoye Highway",
    task: "Create a light and functional 100 m² apartment in Novomoskovsk, with a sense of openness, a unified social area and comfortable spaces for everyday life.",
    solution: "The kitchen, dining area and living room are combined into one continuous space. The palette is based on white, warm beige and natural wood, complemented by marble surfaces. A graphic ceiling lighting system establishes rhythm and unifies the main areas.",
    result: "The apartment feels light, coherent and calm: free from visual overload yet rich in expressive details. The space works as a unified system where functionality meets comfort and a sense of airiness.",
  },

  "penthouse-city": {
    title: "Apartment in Yessentuki",
    type: "Apartment",
    location: "Yessentuki",
    task: "Create a contemporary 80 m² apartment interior, integrating the balcony into the living space while preserving a sense of air and light.",
    solution: "Large windows and the integrated balcony visually expand the space. Matte and glossy surfaces create a play of textures, while white brick adds character to the interior.",
    result: "A light and coherent interior with a sense of openness, where contrasting textures meet architectural lightness.",
  },

  "country-retreat": {
    title: "Krestovsky",
    type: "Country House",
    location: "Novomoskovsk",
    task: "Create a contemporary country house interior in the Krestovsky residential community — light, calm and functional, with expressive details and a comfortable atmosphere for everyday life.",
    solution: "The interior combines a soft natural palette with deep greens and blues, light surfaces and expressive lighting. Classical architectural details are integrated with contemporary furniture and restrained decorative elements.",
    result: "The space feels coherent and harmonious: the restrained colour palette creates a sense of calm, while textures, light and accent elements add depth and individuality. The house feels contemporary, comfortable and carefully considered down to the smallest detail.",
  },
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
