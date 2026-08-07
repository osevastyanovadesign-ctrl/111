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
  title: string;
  year: string;
  type: string;
  area: string;
  location: string;
  hero: string;
  photos: string[];
  task: string;
  solution: string;
  result: string;
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
    title: "Дом в коттеджном поселке «Академпарк»",
    year: "2023",
    type: "Частный дом",
    area: "180 м²",
    location: "д.Тульчино",
    hero: projectMoscow,
    photos: [moscow1, moscow2, moscow3],
    materialIds: [1, 20, 52], // Каррарский мрамор · Натуральный дуб · Известковая штукатурка
    task: "Создать современный двухэтажный дом в коттеджном посёлке «Академпарк» — с максимальным раскрытием природного окружения, панорамными видами и функциональными пространствами для жизни.",
    solution: "Архитектура построена вокруг двусветной гостиной с панорамным остеклением. Второй этаж дополнен непрерывным балконом по периметру дома, а эксплуатируемая кровля превращена в полноценную террасу для отдыха.",
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
    materialIds: [20, 5, 30], // Натуральный дуб · Сланец · Бельгийский лён
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
    title: "Лофт на Арме",
    year: "2024",
    type: "Лофт-апартаменты",
    area: "95 м²",
    location: "Москва, Арма",
    hero: projectLoft,
    photos: [loft1, loft2, loft3],
    materialIds: [52, 42, 41], // Известковая штукатурка · Полированная сталь · Патинированная латунь
    task: "Превратить сырое промышленное пространство бывшего завода в комфортное жильё для молодого архитектора — сохранив индустриальный дух и добавив жилую теплоту.",
    solution: "Бетонные перекрытия и кирпич оставлены открытыми. Добавлены чёрная сталь, тёплый дуб и текстиль. Антресоль со спальной зоной отделена стеклянной перегородкой в чёрном профиле. Свет — локальный, точечный, акцентный.",
    result: "Пространство звучит честно: здесь ничего не притворяется тем, чем не является. Клиент говорит, что это первое место, где он чувствует себя собой.",
    gridWidth: "col-span-12 md:col-span-5",
    gridAspect: "aspect-square",
    gridOffset: "md:-mt-16",
  },
  {
    id: 4,
    slug: "penthouse-city",
    title: "Пентхаус Сити",
    year: "2023",
    type: "Пентхаус",
    area: "310 м²",
    location: "Москва-Сити",
    hero: projectPenthouse,
    photos: [penthouse1, penthouse2, penthouse3],
    materialIds: [2, 3, 51], // Травертин · Чёрный оникс · Алебастр
    task: "Спроектировать интерьер пентхауса на 65-м этаже для делового человека, ценящего лаконичность и статус — без избыточной демонстративности.",
    solution: "Весь периметр отдан панорамному остеклению. Мебель низкая, чтобы не конкурировать с видом. Материалы: чёрный гранит, латунь, кашемир. Единственное украшение — скульптура у входа.",
    result: "Клиент назвал результат «тишиной на высоте». Пространство работает как рамка для города — не претендуя быть главнее пейзажа за окном.",
    gridWidth: "col-span-12 md:col-span-7",
    gridAspect: "aspect-[16/9]",
    gridOffset: "md:mt-24",
  },
  {
    id: 5,
    slug: "country-retreat",
    title: "Загородная резиденция",
    year: "2021",
    type: "Загородная резиденция",
    area: "680 м²",
    location: "Подмосковье",
    hero: projectRetreat,
    photos: [retreat1, retreat2, retreat3],
    materialIds: [4, 41, 31], // Абсолютный гранит · Патинированная латунь · Изумрудный бархат
    task: "Создать родовое гнездо для большой семьи — место, которое будет передаваться из поколения в поколение и никогда не устареет.",
    solution: "Архитектура интерьера опирается на вечные материалы: известняк, морёный дуб, кованое железо. Каждая комната имеет собственный характер, но читается как часть единого замысла. Камин — структурный центр всего дома.",
    result: "Через три года после завершения клиент написал: «Дом стал лучше». Это лучшая рецензия, которую может получить проект.",
    gridWidth: "col-span-12",
    gridAspect: "aspect-[21/9]",
    gridOffset: "md:mt-32",
  },
];
