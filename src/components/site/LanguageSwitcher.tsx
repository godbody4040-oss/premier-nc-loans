import { useLanguage } from "@/lib/i18n";

/** Homepage-only English / Spanish selector. */
export function LanguageSwitcher({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { lang, setLang } = useLanguage();

  const base = `inline-flex items-center px-1.5 text-[0.66rem] uppercase tracking-[0.12em] transition-colors ${
    compact ? "min-h-8" : "min-h-9 px-2"
  }`;

  return (
    <div
      className={`flex items-center gap-1 border border-white/20 px-1 ${className}`}
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? "text-gold" : "text-white/60 hover:text-white"}`}
      >
        <span aria-hidden="true" className="mr-1">
          🇺🇸
        </span>
        {compact ? "EN" : "English"}
      </button>
      <span className="text-white/25">|</span>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`${base} ${lang === "es" ? "text-gold" : "text-white/60 hover:text-white"}`}
      >
        <span aria-hidden="true" className="mr-1">
          🇪🇸
        </span>
        {compact ? "ES" : "Español"}
      </button>
    </div>
  );
}
