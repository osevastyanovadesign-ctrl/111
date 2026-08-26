import matMarble from "@assets/generated_images/material-marble.jpg";
import matConcrete from "@assets/generated_images/material-concrete.jpg";
import matOak from "@assets/generated_images/material-oak.jpg";
import matLinen from "@assets/generated_images/material-linen.jpg";
import matBronze from "@assets/generated_images/material-bronze.jpg";
import matTravertine from "@assets/generated_images/material-travertine.jpg";
import matSlate from "@assets/generated_images/material-slate.jpg";
import matOnyx from "@assets/generated_images/material-onyx.jpg";
import matGranite from "@assets/generated_images/material-granite.jpg";
import matTerrazzo from "@assets/generated_images/material-terrazzo.jpg";
import matVelvet from "@assets/generated_images/material-velvet.jpg";
import matBrass from "@assets/generated_images/material-brass.jpg";
import matWenge from "@assets/generated_images/material-wenge.jpg";
import matAlabaster from "@assets/generated_images/material-alabaster.jpg";
import matPlaster from "@assets/generated_images/material-plaster.jpg";
import matSteel from "@assets/generated_images/material-steel.jpg";
import matRawstone from "@assets/generated_images/material-rawstone.jpg";
import matRattan from "@assets/generated_images/material-rattan.jpg";
import matEucalyptus from "@assets/generated_images/material-eucalyptus.jpg";
import matCopper from "@assets/generated_images/material-copper.jpg";

export type MaterialCategory = "stone" | "wood" | "textile" | "metal" | "glass";

export interface Material {
  id: number;

  name: string;

  origin: string;

  category: MaterialCategory;

  img: string;

  compatible?: number[];
}

export const MATERIALS: Material[] = [
  // ───────── STONE ─────────

  {
    id: 1,
    name: "Каррарский мрамор",
    origin: "Каррара, Италия",
    category: "stone",
    img: matMarble,
  },

  {
  id: 2,
  name: "Декоративный кирпич",
  origin: "White Hills, «Белый Сити Брик 375-00»",
  category: "stone",
  img: matTravertine,
},

  {
  id: 3,
  name: "Инженерная доска",
  origin: "Дуб, матовая поверхность, серо-коричневый оттенок",
  category: "wood",
  img: matOnyx,
},

  {
  id: 4,
  name: "Матовая интерьерная краска",
  origin: "Сложный светло-мятный оттенок",
  category: "stone",
  img: matGranite,
},

  {
    id: 5,
    name: "Сланец",
    origin: "Уэльс",
    category: "stone",
    img: matSlate,
  },

  {
    id: 6,
    name: "Дикий камень",
    origin: "Крым",
    category: "stone",
    img: matRawstone,
  },

  // ───────── WOOD ─────────

  {
    id: 20,
    name: "Натуральный дуб",
    origin: "Скандинавия",
    category: "wood",
    img: matOak,
  },

  {
    id: 21,
    name: "Венге",
    origin: "Камерун",
    category: "wood",
    img: matWenge,
  },

  {
    id: 22,
    name: "Эвкалипт копчёный",
    origin: "Португалия",
    category: "wood",
    img: matEucalyptus,
  },

  // ───────── TEXTILE ─────────

  {
    id: 30,
    name: "Бельгийский лён",
    origin: "Гент, Бельгия",
    category: "textile",
    img: matLinen,
  },

  {
  id: 31,
  name: "Керамогранит",
  origin: "Фактура натурального камня",
  category: "stone",
  img: matVelvet,
},

  // ───────── METAL ─────────

  {
    id: 40,
    name: "Состаренная бронза",
    origin: "Ручная работа",
    category: "metal",
    img: matBronze,
  },

  {
  id: 41,
  name: "Инженерная доска",
  origin: "Под выбеленный дуб",
  category: "wood",
  img: matBrass,
},

  {
    id: 42,
    name: "Полированная сталь",
    origin: "Германия",
    category: "metal",
    img: matSteel,
  },

  {
    id: 43,
    name: "Патинированная медь",
    origin: "Ручная работа",
    category: "metal",
    img: matCopper,
  },

  // ───────── OTHER ─────────

  {
    id: 50,
    name: "Терраццо",
    origin: "Венеция, Италия",
    category: "stone",
    img: matTerrazzo,
  },

  {
  id: 51,
  name: "Крупноформатный керамогранит",
  origin: "Фактура натурального камня, серо-бежевый оттенок",
  category: "stone",
  img: matAlabaster,
},

  {
    id: 52,
    name: "Известковая штукатурка",
    origin: "Авторский состав",
    category: "stone",
    img: matPlaster,
  },

  {
    id: 53,
    name: "Ротанг",
    origin: "Индонезия",
    category: "wood",
    img: matRattan,
  },
];
