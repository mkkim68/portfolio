import { useEffect, useRef, useState } from "react";

type GamePhase = "idle" | "countdown" | "running" | "done";

export default function TypingGame({ lines }: { lines: readonly string[] }) {
  const [phase, setPhase] = useState<GamePhase>("idle");
  const [count, setCount] = useState<number>(3);
  const [target, setTarget] = useState<string>("");
  const [typed, setTyped] = useState<string>("");
  const [elapsed, setElapsed] = useState<number>(0);

  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const pickRandomLine = () => {
    const safe = lines.length > 0 ? lines : ["const ready = true;"]; // fallback
    const idx = Math.floor(Math.random() * safe.length);
    return safe[idx];
  };

  const startCountdown = () => {
    setTyped("");
    setElapsed(0);
    setTarget("");
    setCount(3);
    setPhase("countdown");
  };

  // Countdown
  useEffect(() => {
    if (phase !== "countdown") return;

    const t = window.setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          window.clearInterval(t);
          const next = pickRandomLine();
          setTarget(next);
          setTyped("");
          setElapsed(0);
          startTimeRef.current = performance.now();
          setPhase("running");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Timer
  useEffect(() => {
    if (phase !== "running") return;

    const tick = () => {
      if (startTimeRef.current == null) return;
      const ms = performance.now() - startTimeRef.current;
      setElapsed(ms / 1000);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [phase]);

  // Auto Focus
  useEffect(() => {
    if (phase !== "running") return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, [phase]);

  // Finish Condition
  useEffect(() => {
    if (phase !== "running") return;
    if (!target) return;
    if (typed === target) {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      setPhase("done");
    }
  }, [phase, target, typed]);

  const onChangeTyped = (v: string) => {
    const next = v.replace(/\n/g, "");
    setTyped(next.slice(0, target.length || next.length));
  };

  const timeText = `${elapsed.toFixed(2)}s`;
  const total = target.length;
  const correct = target
    .split("")
    .slice(0, typed.length)
    .reduce((acc, ch, i) => acc + (typed[i] === ch ? 1 : 0), 0);
  const mistakes = Math.max(0, typed.length - correct);
  const accuracy =
    typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="text-border text-sm">
          // type the code as fast as you can
        </div>
      </div>

      {/* Screen */}
      <div className="h-[220px] relative rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm px-5 py-5 overflow-hidden flex flex-col">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] [background:repeating-linear-gradient(180deg,transparent_0px,transparent_2px,rgba(255,255,255,0.35)_3px,transparent_4px)]" />

        {phase === "idle" && (
          <div className="h-full flex flex-col items-start justify-between relative z-10">
            <div className="flex flex-col gap-3">
              <div className="font-mono text-highlight text-lg">
                Typing Challenge
              </div>
              <div className="text-border text-sm leading-6">
                Hit <span className="text-highlight">Start</span>, wait for the
                countdown, then type the line exactly.
              </div>
            </div>
            <button
              onClick={startCountdown}
              className="mt-2 w-fit px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-highlight transition-colors"
            >
              Start
            </button>
          </div>
        )}

        {phase === "countdown" && (
          <div className="flex flex-col items-center justify-center min-h-[160px] relative z-10">
            <div className="font-mono text-border text-sm mb-3">Get ready…</div>
            <div className="font-mono text-highlight text-6xl tracking-tight tabular-nums">
              {count}
            </div>
          </div>
        )}

        {(phase === "running" || phase === "done") && (
          <div className="relative z-10 flex flex-col gap-4 flex-1 min-h-0">
            <div className="font-mono text-sm leading-6 whitespace-pre overflow-x-auto flex-1 min-h-0">
              {target.split("").map((ch, idx) => {
                const hasTyped = idx < typed.length;
                const isCursor = idx === typed.length && phase === "running";
                const ok = hasTyped && typed[idx] === ch;
                const bad = hasTyped && typed[idx] !== ch;

                return (
                  <span
                    key={`${ch}-${idx}`}
                    className={
                      ok
                        ? "text-highlight"
                        : bad
                          ? "text-red-400"
                          : "text-border/60"
                    }
                  >
                    {isCursor ? (
                      <span className="inline-block w-[10px] h-[18px] align-[-3px] bg-highlight/80 animate-pulse mr-0.5" />
                    ) : null}
                    {ch}
                  </span>
                );
              })}
              {typed.length >= target.length && phase === "running" ? (
                <span className="inline-block w-[10px] h-[18px] align-[-3px] bg-highlight/80 animate-pulse" />
              ) : null}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-border/80">&gt;</span>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    value={typed}
                    onChange={(e) => onChangeTyped(e.target.value)}
                    onPaste={(e) => e.preventDefault()}
                    spellCheck={false}
                    autoCapitalize="none"
                    autoCorrect="off"
                    className="w-full bg-transparent font-mono text-sm text-highlight placeholder:text-border/50 outline-none border-b border-white/10 focus:border-highlight/40 pb-2"
                    placeholder="type here…"
                    disabled={phase !== "running"}
                  />
                </div>
              </div>

              <div className="h-[20px] flex items-center justify-between">
                {phase === "done" ? (
                  <div className="flex items-center gap-2 text-border/80 text-xs">
                    <span className="inline-block h-2 w-2 rounded-full bg-white/15 border border-white/10" />
                    <span>
                      Completed in{" "}
                      <span className="text-highlight font-mono tabular-nums">
                        {timeText}
                      </span>
                    </span>
                  </div>
                ) : phase === "running" ? (
                  <div className="flex items-center gap-2 text-border/70 text-xs font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    <span>LIVE</span>
                  </div>
                ) : (
                  <div className="text-border/60 text-xs font-mono">ready</div>
                )}
              </div>
            </div>
          </div>
        )}

        {(phase === "running" || phase === "done") && (
          <div className="mt-3 relative z-10">
            <div className="mt-2 flex items-center justify-between text-[12px] font-mono text-border/80 tabular-nums h-[20px]">
              <div className="flex items-center gap-4">
                <span>
                  ACC <span className="text-highlight">{accuracy}%</span>
                </span>
                <span>
                  ERR{" "}
                  <span
                    className={mistakes > 0 ? "text-red-400" : "text-highlight"}
                  >
                    {mistakes}
                  </span>
                </span>
                <span>
                  POS <span className="text-highlight">{typed.length}</span>/
                  {total}
                </span>
              </div>

              {phase === "done" ? (
                <button
                  onClick={startCountdown}
                  className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-highlight transition-colors"
                >
                  Retry
                </button>
              ) : (
                <div className="font-mono text-xs tabular-nums px-2 py-1 rounded-md bg-white/5 border border-white/10 text-highlight">
                  {phase === "running" ? timeText : "0.00s"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="h-[120px] w-full flex justify-between items-center">
        {/* left */}
        <div className="w-[120px] h-[96px] relative flex items-end px-2 pb-2">
          {/* <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-border/40">
            control
          </span> */}
        </div>

        {/* right */}
        <div className="w-[120px] h-[96px] relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/3 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-10px_18px_rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.08] [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_2px,transparent_7px)]" />

          {/* label */}
          <div className="absolute top-2 left-3 text-[9px] uppercase tracking-[0.24em] text-border/60 font-mono cursor-default">
            LEVEL
          </div>

          {/* tick marks */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className={
                  i % 3 === 0
                    ? "h-[10px] w-[2px] bg-white/20"
                    : "h-[6px] w-[2px] bg-white/12"
                }
              />
            ))}
          </div>

          {/* knob */}
          <div
            className="relative z-10 w-[56px] h-[56px] rounded-full border border-white/10 shadow-[0_10px_18px_rgba(0,0,0,0.35)]"
            style={{
              background:
                "radial-gradient(70% 70% at 35% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.55) 100%)",
            }}
          >
            {/* knurled edge */}
            <div className="absolute inset-0 rounded-full pointer-events-none opacity-[0.22] [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.30)_0px,rgba(255,255,255,0.30)_1px,transparent_2px,transparent_4px)]" />

            {/* pointer */}
            <div className="absolute left-1/2 top-[5px] -translate-x-1/2 w-[4px] h-[14px] rounded-sm bg-highlight/70 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />

            {/* center cap */}
            <div className="absolute inset-0 m-auto w-[18px] h-[18px] rounded-full border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
