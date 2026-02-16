import { getDict } from "data/i18n";
import { useLang } from "../../LangProvider";

export default function Education() {
  const lang = useLang();
  const t = getDict(lang);
  const lineArr = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
    <div className="h-full flex cursor-default border-t-[0.5px] border-border lg:border-none">
      <section className="hidden lg:flex h-full w-[50%] border-r-[0.5px] border-border min-h-0 min-w-0 box-border overflow-x-auto overflow-y-auto p-5">
        <div style={{ lineHeight: "20px" }} className="mr-[15px]">
          {lineArr.map((cnt, idx) => (
            <p className="text-right text-border" key={idx}>
              {cnt}
            </p>
          ))}
        </div>
        <div
          style={{ lineHeight: "20px" }}
          className="flex flex-col items-start whitespace-nowrap"
        >
          <p className="text-keyword">{t.education.ssafy.code.header}</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">{t.education.ssafy.code.programLine}</p>
          <p>
            <span className="text-border">
              {t.education.ssafy.code.studiedBefore}
            </span>
            <span className="text-type">
              {t.education.ssafy.code.studiedTech}
            </span>
            <span className="text-border">
              {t.education.ssafy.code.studiedAfter}
            </span>
          </p>

          <p className="text-transparent">blank</p>
          <p className="text-keyword">
            {t.education.ssafy.code.projectsHeader}
          </p>
          <p className="text-transparent">blank</p>

          <p className="text-keyword">{t.education.ssafy.code.jamjam.title}</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">
            {t.education.ssafy.code.jamjam.description}
          </p>
          <p>
            <span className="text-border">
              {t.education.ssafy.code.jamjam.builtWithLabel}
            </span>
            <span className="text-function">
              {t.education.ssafy.code.jamjam.tech}
            </span>
          </p>
          <p className="text-border">{t.education.ssafy.code.jamjam.award}</p>

          <p className="text-transparent">blank</p>

          <p className="text-keyword">
            {t.education.ssafy.code.newsseug.title}
          </p>
          <p className="text-transparent">blank</p>
          <p className="text-border">
            {t.education.ssafy.code.newsseug.description}
          </p>
          <p>
            <span className="text-border">
              {t.education.ssafy.code.newsseug.builtWithLabel}
            </span>
            <span className="text-function">
              {t.education.ssafy.code.newsseug.tech}
            </span>
          </p>
          <p className="text-border">{t.education.ssafy.code.newsseug.award}</p>

          <p className="text-transparent">blank</p>

          <p className="text-keyword">{t.education.ssafy.code.classik.title}</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">
            {t.education.ssafy.code.classik.description}
          </p>
          <p>
            <span className="text-border">
              {t.education.ssafy.code.classik.builtWithLabel}
            </span>
            <span className="text-function">
              {t.education.ssafy.code.classik.tech}
            </span>
          </p>
        </div>
      </section>
      <section className="h-full w-full lg:w-[50%] p-[35px] min-h-0 min-w-0 overflow-y-auto box-border">
        <section
          className="
      rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
      shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]
      p-5
    "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-highlight text-lg font-semibold">
                {t.education.ssafy.title}
              </h3>
              <p className="text-border text-sm mt-1">
                {t.education.ssafy.card.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="flex gap-2">
              <span className="text-border">•</span>
              <p className="text-border">
                {t.education.ssafy.card.bullets.b1Before}
                {t.education.ssafy.card.bullets.b1Tech.map((tech, idx, arr) => (
                  <span key={tech} className="text-type">
                    {tech}
                    {idx < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
                {t.education.ssafy.card.bullets.b1After}
              </p>
            </div>

            <div className="flex gap-2">
              <span className="text-border">•</span>
              <p className="text-border">
                {t.education.ssafy.card.bullets.b2Before}
                <span className="text-function">
                  {t.education.ssafy.card.bullets.b2Highlight}
                </span>
                {t.education.ssafy.card.bullets.b2After}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-highlight text-sm mb-2">
              {t.education.ssafy.card.highlightsTitle}
            </p>

            <div className="flex flex-wrap gap-2">
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                {t.education.ssafy.card.highlights.jamjam}
              </span>
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                {t.education.ssafy.card.highlights.newsseug}
              </span>
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                {t.education.ssafy.card.highlights.classik}
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
