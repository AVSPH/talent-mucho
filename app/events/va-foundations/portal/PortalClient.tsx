"use client";

import { useEffect, useState } from "react";
import { Lock, Mail, Video, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { VA_FOUNDATIONS_CURRICULUM } from "@/lib/va-foundations/curriculum";

const STORAGE_KEY = "tm_va_foundations_portal";

interface Participant {
  email: string;
  name: string | null;
  certified: boolean;
}

export default function PortalClient() {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) setParticipant(JSON.parse(raw));
    } catch {
      /* ignore */
    } finally {
      setLoaded(true);
    }
  }, []);

  function handleUnlock(p: Participant) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch {
      /* ignore */
    }
    setParticipant(p);
  }

  if (!loaded) {
    return <div className="min-h-screen bg-beige-50" />;
  }

  if (!participant) {
    return <EmailGate onUnlock={handleUnlock} />;
  }

  return <Curriculum participant={participant} />;
}

/* ──────────────────────────────────────────
   EMAIL GATE
────────────────────────────────────────── */
function EmailGate({ onUnlock }: { onUnlock: (p: Participant) => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "not_found" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.includes("@")) return;

    setStatus("checking");
    try {
      const res = await fetch(`/api/events/va-foundations/portal/${encodeURIComponent(trimmed)}`);
      if (res.ok) {
        const data = await res.json();
        onUnlock({ email: data.email, name: data.name ?? null, certified: !!data.certified });
        return;
      }
      if (res.status === 404) {
        setStatus("not_found");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-clay-500/15 border border-clay-500/30 flex items-center justify-center mb-5">
            <Lock className="w-5 h-5 text-clay-500" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
            Participant Portal
          </p>
          <h1
            className="text-3xl font-light text-beige-50 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
          >
            VA Foundations <em className="italic text-clay-500">Workshop</em>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-espresso-800/60 border border-white/5 rounded-2xl p-6">
          <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-beige-300/70 mb-2">
            Enter the email you registered with
          </label>
          <div className="flex items-center gap-2 bg-charcoal-900 border border-white/10 rounded-xl px-4 py-3 mb-4">
            <Mail className="w-4 h-4 text-taupe-400 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-transparent text-beige-50 text-sm outline-none w-full placeholder:text-beige-300/30"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "checking"}
            className="w-full inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 disabled:opacity-60 text-beige-50 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200"
          >
            {status === "checking" ? "Checking..." : "Unlock the portal"}
            <ArrowRight className="w-4 h-4" />
          </button>

          {status === "not_found" && (
            <p className="text-xs text-beige-300/70 font-light leading-relaxed mt-4">
              We don't see that email on the roster yet. If you just registered, it can take a
              little while to show up here. Email{" "}
              <a href="mailto:hello@talentmucho.com" className="text-clay-500 hover:text-clay-400">
                hello@talentmucho.com
              </a>{" "}
              if it still doesn't work.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-beige-300/70 font-light leading-relaxed mt-4">
              Something went wrong checking the roster. Please try again in a moment.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   CURRICULUM / LESSONS
────────────────────────────────────────── */
function Curriculum({ participant }: { participant: Participant }) {
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
            Welcome{participant.name ? `, ${participant.name}` : ""}.
          </h1>
          <p className="text-beige-300 font-light text-sm">
            All 8 hours, lesson by lesson. Recordings and resources appear here as each session wraps.
          </p>
          {participant.certified && (
            <div className="inline-flex items-center gap-2 mt-4 bg-clay-500/10 border border-clay-500/30 rounded-full px-4 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-clay-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-500">
                Certified
              </span>
            </div>
          )}
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
                        <ul className="flex flex-col gap-1.5 mb-4">
                          {lesson.items.map((item) => (
                            <li key={item} className="text-sm text-espresso-800 font-light leading-relaxed flex gap-2">
                              <span className="text-taupe-400 shrink-0">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
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
