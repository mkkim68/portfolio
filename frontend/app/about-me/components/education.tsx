export default function Education() {
  const lineArr = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
    <div className="h-full flex cursor-default">
      <div className="h-full w-[50%] border-r-[0.5px] border-border flex min-h-0 min-w-0 box-border overflow-x-auto overflow-y-auto p-5">
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
          <p className="text-keyword">
            # SSAFY 11th (Samsung Software Academy For Youth)
          </p>
          <p className="text-transparent">blank</p>
          <p className="text-border">
            - Intensive software development program sponsored by Samsung
          </p>
          <p>
            <span className="text-border">- studied </span>
            <span className="text-type">
              **Python, JavaScript, Django, Vue.js**
            </span>
            <span className="text-border">
              {" "}
              and core problem-solving skills through algorithms and team-based
              projects
            </span>
          </p>

          <p className="text-transparent">blank</p>
          <p className="text-keyword">## Projects</p>
          <p className="text-transparent">blank</p>

          <p className="text-keyword">### JamJam</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">- A real-time meeting service</p>
          <p>
            <span className="text-border">- built with </span>
            <span className="text-function">
              _JavaScript, React, Styled-components, Recoil_
            </span>
          </p>
          <p className="text-border">- 🏆 Award-winning project</p>

          <p className="text-transparent">blank</p>

          <p className="text-keyword">### Newsseug</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">- A short-form news platform</p>
          <p>
            <span className="text-border">- built with </span>
            <span className="text-function">
              _TypeScript, React, Redux, React-Query, Styled-components_
            </span>
          </p>
          <p className="text-border">- 🏆 Award-winning project</p>

          <p className="text-transparent">blank</p>

          <p className="text-keyword">### C-LASSIK</p>
          <p className="text-transparent">blank</p>
          <p className="text-border">
            - A multisensory music streaming application
          </p>
          <p>
            <span className="text-border">- built with </span>
            <span className="text-function">
              _Kotlin, Android Studio, Jetpack Compose_
            </span>
          </p>
        </div>
      </div>
      <div className="h-full w-[50%] p-[35px] min-h-0 min-w-0 overflow-y-auto box-border">
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
                SSAFY 11th
              </h3>
              <p className="text-border text-sm mt-1">
                Samsung Software Academy For Youth
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="flex gap-2">
              <span className="text-border">•</span>
              <p className="text-border">
                Built web services with{" "}
                <span className="text-type">Python</span>,{" "}
                <span className="text-type">JavaScript</span>,{" "}
                <span className="text-type">Django</span>,{" "}
                <span className="text-type">Vue.js</span>.
              </p>
            </div>

            <div className="flex gap-2">
              <span className="text-border">•</span>
              <p className="text-border">
                Strengthened problem-solving through{" "}
                <span className="text-function">algorithm practice</span> and
                collaboration in an industry-like environment.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-highlight text-sm mb-2">Highlights</p>

            <div className="flex flex-wrap gap-2">
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                JamJam 🏆
              </span>
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                Newsseug 🏆
              </span>
              <span
                className="
            px-3 py-1.5 rounded-full text-sm
            border border-highlight/10 bg-highlight/5 text-highlight/80
          "
              >
                C-LASSIK
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
