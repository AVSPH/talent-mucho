"use client";

import { useEffect, useRef, useState } from "react";
import { Video, FileText } from "lucide-react";
import { VA_FOUNDATIONS_CURRICULUM } from "@/lib/va-foundations/curriculum";

const PIN = "00012";
const STORAGE_KEY = "tm_va_foundations_portal_unlocked";

export default function PortalClient() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setUnlocked(window.sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  function handleUnlock() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setUnlocked(true);
  }

  if (unlocked === null) {
    return <div className="min-h-screen bg-beige-50" />;
  }

  if (!unlocked) {
    return <PinGate onUnlock={handleUnlock} />;
  }

  return <Curriculum />;
}

/* ──────────────────────────────────────────
   PIN GATE
────────────────────────────────────────── */
function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [val, setVal] = useState("");
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function tryPin(v: string) {
    if (v === PIN) {
      onUnlock();
      return;
    }
    if (v.length === PIN.length) {
      setShake(true);
      setVal("");
      setTimeout(() => setShake(false), 500);
    } else {
      setVal(v);
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-900 flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 max-w-sm text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay-500">
          Talent Mucho · VA Foundations Workshop
        </p>
        <h1
          className="text-3xl md:text-4xl font-light text-beige-50 leading-tight"
          style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
        >
          Participants only.
        </h1>
        <p className="text-sm text-beige-300 font-light leading-relaxed">
          Enter your access PIN to continue.
        </p>
        <input
          ref={inputRef}
          type="password"
          inputMode="numeric"
          maxLength={PIN.length}
          value={val}
          onChange={(e) => tryPin(e.target.value.replace(/\D/g, ""))}
          aria-label="Access PIN"
          placeholder="·····"
          className={`bg-espresso-800 border border-white/10 rounded-xl text-beige-50 text-2xl text-center w-48 outline-none focus:border-clay-500 transition-all ${shake ? "animate-shake" : ""}`}
          style={{ letterSpacing: "0.5em", padding: "14px 16px 14px 28px" }}
        />
        <p className="text-xs text-beige-300/50 font-light">
          Lost your PIN? Email{" "}
          <a href="mailto:hello@talentmucho.com" className="text-clay-500 hover:text-clay-400">
            hello@talentmucho.com
          </a>
          .
        </p>
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            75% { transform: translateX(6px); }
          }
          .animate-shake { animation: shake 0.4s ease; }
        `}</style>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   CURRICULUM / LESSONS
────────────────────────────────────────── */
function Curriculum() {
  return (
    <div className="min-h-screen bg-beige-50">
      <section className="pt-16 pb-10 bg-charcoal-900">
        <div className="section-container">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
            Participant Portal
          </p>
          <h1
            className="text-3xl md:text-4xl font-light text-beige-50 mb-2 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
          >
            Welcome.
          </h1>
          <p className="text-beige-300 font-light text-sm">
            All 8 hours, lesson by lesson. Recordings and resources appear here as each session wraps.
          </p>
        </div>
      </section>

      <section className="section-padding bg-beige-50">
        <div className="section-container max-w-3xl">
          <div className="flex flex-col gap-10">
            {VA_FOUNDATIONS_CURRICULUM.map((session) => (
              <div key={session.num} className="bg-white border border-beige-200 rounded-2xl overflow-hidden">
                <div className="px-6 md:px-8 py-5 bg-charcoal-900">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay-500 mb-1">
                    Session {session.num} · {session.date}
                  </p>
                  <p
                    className="text-2xl font-light text-beige-50 mb-1"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    {session.title}
                  </p>
                  <p className="text-sm text-beige-300/80 font-light">{session.theme}</p>
                </div>

                <div className="flex flex-col">
                  {session.lessons.map((lesson, i) => (
                    <details
                      key={lesson.id}
                      className={`group ${i < session.lessons.length - 1 ? "border-b border-beige-200" : ""}`}
                    >
                      <summary className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 cursor-pointer list-none select-none hover:bg-beige-50 transition-colors">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500 mb-1">
                            {lesson.hour}
                          </p>
                          <p className="text-base font-medium text-charcoal-900">{lesson.title}</p>
                        </div>
                        <span className="w-6 h-6 rounded-full border border-beige-300 flex items-center justify-center shrink-0 text-clay-500 group-open:rotate-45 transition-transform duration-200">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 md:px-8 pb-6">
                        <ul className="flex flex-col gap-1.5 mb-5">
                          {lesson.items.map((item) => (
                            <li key={item} className="text-sm text-espresso-800 font-light leading-relaxed flex gap-2">
                              <span className="text-taupe-400 shrink-0">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <ul className="flex flex-col gap-2.5 mb-5 bg-beige-50 border border-beige-200 rounded-xl p-5">
                          {lesson.content.map((line, idx) => {
                            const isExample = line.startsWith("Example");
                            return (
                              <li
                                key={idx}
                                className={
                                  isExample
                                    ? "text-sm text-espresso-800 font-light leading-relaxed italic bg-white border border-beige-200 rounded-lg px-3 py-2"
                                    : "text-sm text-espresso-800 font-light leading-relaxed flex gap-2"
                                }
                              >
                                {isExample ? (
                                  line
                                ) : (
                                  <>
                                    <span className="text-clay-500 shrink-0">✓</span>
                                    <span>{line}</span>
                                  </>
                                )}
                              </li>
                            );
                          })}
                        </ul>

                        <div className="flex flex-col gap-2">
                          {lesson.recordingUrl ? (
                            <a
                              href={lesson.recordingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-clay-500 hover:text-clay-600 font-medium"
                            >
                              <Video className="w-3.5 h-3.5" /> Watch the recording
                            </a>
                          ) : (
                            <p className="inline-flex items-center gap-2 text-xs text-taupe-400 font-light italic">
                              <Video className="w-3.5 h-3.5" /> Recording added after this session
                            </p>
                          )}

                          {lesson.resources.length > 0 ? (
                            lesson.resources.map((r) => (
                              <a
                                key={r.url}
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-clay-500 hover:text-clay-600 font-medium"
                              >
                                <FileText className="w-3.5 h-3.5" /> {r.label}
                              </a>
                            ))
                          ) : (
                            <p className="inline-flex items-center gap-2 text-xs text-taupe-400 font-light italic">
                              <FileText className="w-3.5 h-3.5" /> Templates added after this session
                            </p>
                          )}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm text-taupe-400 font-light">
            Questions about a lesson?{" "}
            <a href="mailto:hello@talentmucho.com" className="text-clay-500 hover:text-clay-400 transition-colors">
              Email hello@talentmucho.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
