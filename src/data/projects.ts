import projectMoscow    from "@assets/generated_images/project-moscow.jpg";
import projectVilla     from "@assets/generated_images/project-villa.jpg";
import projectLoft      from "@assets/generated_images/project-loft.jpg";
import projectPenthouse from "@assets/generated_images/project-penthouse.jpg";
import projectRetreat   from "@assets/generated_images/project-retreat.jpg";

import moscow1    from "@assets/generated_images/moscow-1.jpg";
import moscow2    from "@assets/generated_images/moscow-2.jpg";
import moscow3    from "@assets/generated_images/moscow-3.jpg";
import villa1     from "@assets/generated_images/villa-1.jpg";
import villa2     from "@assets/generated_images/villa-2.jpg";
import villa3     from "@assets/generated_images/villa-3.jpg";
import loft1      from "@assets/generated_images/loft-1.jpg";
import loft2      from "@assets/generated_images/loft-2.jpg";
import loft3      from "@assets/generated_images/loft-3.jpg";
import penthouse1 from "@assets/generated_images/penthouse-1.jpg";
import penthouse2 from "@assets/generated_images/penthouse-2.jpg";
import penthouse3 from "@assets/generated_images/penthouse-3.jpg";
import retreat1   from "@assets/generated_images/retreat-1.jpg";
import retreat2   from "@assets/generated_images/retreat-2.jpg";
import retreat3   from "@assets/generated_images/retreat-3.jpg";

export interface Project {
  id: number;
  slug: string;
  title: {
    RU: string;
    EN: string;
  };
  year: string;
  type: {
    RU: string;
    EN: string;
  };
  area: string;
  location: {
    RU: string;
    EN: string;
  };
  hero: string;
  photos: string[];
  task: {
    RU: string;
    EN: string;
  };
  solution: {
    RU: string;
    EN: string;
  };
  result: {
    RU: string;
    EN: string;
  };
  /** IDs from MATERIALS array — 3 textures that define this project */
  materialIds: [number, number, number];
  gridWidth: string;
  gridAspect: string;
  gridOffset: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "patriarshie",
    title: "КП «Академпарк»",
    year: "2026",
    type: "Частный дом",
    area: "200 м²",
    location: "д.Тульчино",
    hero: projectMoscow,
    photos: [moscow1, moscow2, moscow3],
    materialIds: [22, 21, 6], // Каррарский мрамор · Натуральный дуб · Известковая штукатурка
    task: "Создать современный двухэтажный дом в коттеджном посёлке «Академпарк» — с максимальным раскрытием природного окружения, панорамными видами и функциональными пространствами для жизни.",
    solution: "Архитектура построена вокруг двусветной гостиной с панорамным остеклением. Второй этаж дополнен  балконом, а эксплуатируемая кровля превращена в полноценную террасу для отдыха.",
    result: "Дом стал продолжением окружающего пейзажа: открытым, светлым и спокойным. Архитектура подчёркивает природное окружение, а каждое пространство ориентировано на свет, виды и комфорт.",
    gridWidth: "col-span-12 md:col-span-8",
    gridAspect: "aspect-[4/3]",
    gridOffset: "md:mt-0",
  },
  {
    id: 2,
    slug: "villa-repino",
    title: "ЖК «Южные сады»",
    year: "2026",
    type: "Частная квартира",
    area: "50 м²",
    location: "Москва",
    hero: projectVilla,
    photos: [villa1, villa2, villa3],
    materialIds: [50, 43, 40], // Натуральный дуб · Сланец · Бельгийский лён
    task: "Проектирование интерьера квартиры площадью 50 м² в новом жилом комплексе «Южные сады» в Москве. Небольшое пространство решено как цельный, светлый интерьер — без визуального шума и лишних деталей.",
    solution: "В основу интерьера легла тёплая нейтральная палитра с фактурами светлого дерева и камня. Зеркала и стекло расширяют пространство, встроенные системы хранения сохраняют чистоту линий. Графичные тёмные элементы добавляют глубину и собирают композицию.",
    result: "Квартира воспринимается просторнее своего метража. Всё необходимое встроено в архитектуру пространства, а сдержанная палитра и натуральные фактуры создают спокойную, цельную атмосферу.",
    gridWidth: "col-span-12 md:col-span-4",
    gridAspect: "aspect-[3/4]",
    gridOffset: "md:mt-32",
  },
  {
    id: 3,
    slug: "loft-arma",
    title: "Рязанское шоссе",
    year: "2025",
    type: "Квартира",
    area: "100 м²",
    location: "Новомосковск, Рязанское шоссе",
    hero: projectLoft,
    photos: [loft1, loft2, loft3],
    materialIds: [52, 42, 53], // Известковая штукатурка · Полированная сталь · Патинированная латунь
    task: "Создать светлый и функциональный интерьер квартиры площадью 100 м² в Новомосковске — с ощущением простора, единой общественной зоной и комфортными пространствами для повседневной жизни.",
    solution: "Кухня, столовая и гостиная объединены в единое пространство. Палитра построена на белом, тёплом бежевом и натуральном дереве, дополненных мраморными поверхностями. Графичная система потолочного света задаёт ритм и объединяет основные зоны.",
    result: "Квартира получилась светлой, цельной и спокойной: без визуальной перегруженности, но с выразительными деталями. Пространство работает как единая система, где функциональность сочетается с ощущением комфорта и воздуха.",
    gridWidth: "col-span-12 md:col-span-5",
    gridAspect: "aspect-square",
    gridOffset: "md:-mt-16",
  },
  {
    id: 4,
    slug: "penthouse-city",
    title: "Квартира в Ессентуках",
    year: "2026",
    type: "Квартира",
    area: "80 м²",
    location: "Ессентуки",
    hero: projectPenthouse,
    photos: [penthouse1, penthouse2, penthouse3],
    materialIds: [51, 3, 2], // Травертин · Чёрный оникс · Алебастр
    task: "Создать современный интерьер квартиры площадью 80 м², объединив пространство с балконом и сохранив ощущение воздуха и света.",
    solution: "Большие окна и объединённый с квартирой балкон визуально расширяют пространство. Матовые и глянцевые поверхности создают игру фактур, а белый кирпич добавляет интерьеру выразительности.",
    result: "Светлый и цельный интерьер с ощущением простора, где контраст фактур сочетается с архитектурной лёгкостью.",
    gridWidth: "col-span-12 md:col-span-7",
    gridAspect: "aspect-[16/9]",
    gridOffset: "md:mt-24",
  },
  {
    id: 5,
    slug: "country-retreat",
    title: "КП «Крестовский»",
    year: "2026",
    type: "Загородный поселок",
    area: "140 м²",
    location: "Новомосковск",
    hero: projectRetreat,
    photos: [retreat1, retreat2, retreat3],
    materialIds: [4, 41, 31], // Абсолютный гранит · Патинированная латунь · Изумрудный бархат
    task: "Создать современный интерьер загородного дома в коттеджном посёлке «Крестовский» — светлый, спокойный и функциональный, с выразительными деталями и комфортной атмосферой для повседневной жизни.",
    solution: "Интерьер построен на сочетании мягкой природной палитры, глубоких зелёных и синих оттенков, светлых поверхностей и выразительного освещения. Классические архитектурные детали объединены с современной мебелью и лаконичными декоративными решениями.",
    result: "Пространство получилось цельным и гармоничным: сдержанная цветовая гамма создаёт ощущение спокойствия, а фактуры, свет и акцентные элементы добавляют интерьеру глубину и индивидуальность. Дом воспринимается современным, уютным и продуманным до деталей.",
    gridWidth: "col-span-12",
    gridAspect: "aspect-[21/9]",
    gridOffset: "md:mt-32",
  },
];
