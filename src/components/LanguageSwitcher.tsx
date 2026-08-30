import { useEffect, useState } from "react";
import { translations, type Language } from "@/data/translations";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");

    return saved === "EN" ? "EN" : "RU";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em]">
      <button
        onClick={() => setLanguage("RU")}
        className={`transition-opacity ${
          language === "RU"
            ? "opacity-100"
            : "opacity-40 hover:opacity-80"
        }`}
      >
        RU
      </button>

      <span className="opacity-20">/</span>

      <button
        onClick={() => setLanguage("EN")}
        className={`transition-opacity ${
          language === "EN"
            ? "opacity-100"
            : "opacity-40 hover:opacity-80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
