"use client";

import type { SlideProps } from "../../types";

const HOSTS = [
  {
    name: "Abie",
    accent: "Maxey",
    role: "The Tech Chameleon who's all over the place",
    photo: "/assets/abiemaxey.jpg",
    flag: "🇵🇭 → 🌍 → 🇪🇸",
    location: "Davao → Madrid",
    story: [
      "Throughout my tech career I was placed in several roles ~ analyst, architect, engineer, manager. <em>Always adapting.</em>",
      "Same as a digital nomad ~ country to country, no roots. <em>A chameleon in every sense.</em>",
      "Then I found my love in AI ~ and finally found a base in Spain. <em>My build era.</em>",
    ],
    links: [
      { handle: "abiemaxey.com", url: "https://abiemaxey.com" },
      { handle: "happyvoyager.com", url: "https://happyvoyager.com" },
    ],
  },
  {
    name: "Meri",
    accent: "Gee",
    role: "The marketer who burned out",
    photo: "/assets/merigee.jpg",
    flag: "🇵🇭 → 🌍 → 🇪🇸",
    location: "Balkans now ~ Madrid soon",
    story: [
      "Marketing + business, not tech. Built my agency from scratch.",
      "Burned out managing people, personalities, deadlines. <em>It was exhausting.</em>",
      "ChatGPT made me curious. <em>Claude changed everything.</em> Less staff. More output. Better results.",
    ],
    links: [
      { handle: "advancedvirtualstaff.com", url: "https://advancedvirtualstaff.com" },
    ],
  },
];

export function OriginIntro({ C, mono, sans, serif, scale = 1 }: SlideProps) {
  const onDark = "#FAF8F5";
  const sz = (px: number) => Math.round(px * scale);

  return (
    <div style={{ maxWidth: 1400, margin: "24px auto 0", position: "relative" }}>
      {/* floating sticker */}
      <div style={{
        position: "absolute", top: -20, right: 0,
        transform: "rotate(8deg)", zIndex: 1, pointerEvents: "none",
        animation: "floatSticker 4s ease-in-out infinite",
      }}>
        <img src="/assets/stickers/ok.png" alt="" style={{ width: sz(96), height: "auto", filter: `drop-shadow(0 8px 16px ${C.text}25)` }} />
      </div>

      {/* section label */}
      <div style={{ ...mono, fontSize: sz(13), fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.primary, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ display: "inline-block", width: 22, height: 1, background: C.primary }} />
        Meet your hosts
      </div>
      <div style={{ ...sans, fontSize: sz(20), color: C.muted, marginBottom: 32, lineHeight: 1.5, maxWidth: 700 }}>
        Two very different stories. One business.{" "}
        <span style={{ color: C.primary, fontWeight: 600 }}>Operators, not coaches.</span>
      </div>

      {/* host cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
        {HOSTS.map((host) => (
          <div key={host.name} style={{
            position: "relative", padding: "32px 32px 28px",
            borderRadius: 22, background: C.surface, border: `1px solid ${C.border}`, overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: C.primary }} />

            {/* header */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 20 }}>
              <img
                src={host.photo}
                alt={`${host.name} ${host.accent}`}
                style={{ width: sz(72), height: sz(72), flexShrink: 0, borderRadius: "50%", objectFit: "cover", boxShadow: `0 8px 20px -6px ${C.primary}55` }}
              />
              <div>
                <div style={{ ...sans, fontSize: sz(34), fontWeight: 700, color: C.text, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                  {host.name}{" "}
                  <em style={{ ...serif, fontWeight: 400, color: C.primary }}>{host.accent}</em>
                </div>
                <div style={{ ...mono, fontSize: sz(11), fontWeight: 700, color: C.primary, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 4 }}>
                  {host.role}
                </div>
              </div>
            </div>

            {/* location chip */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 100, background: `${C.muted}15`, marginBottom: 16 }}>
              <span style={{ fontSize: sz(13) }}>{host.flag}</span>
              <span style={{ ...mono, fontSize: sz(11), color: C.text, letterSpacing: "0.06em" }}>{host.location}</span>
            </div>

            {/* story */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
              {host.story.map((line, i) => (
                <div key={i} style={{ ...serif, fontSize: sz(17), lineHeight: 1.55, color: C.text }}
                  dangerouslySetInnerHTML={{ __html: line.replace(/<em>/g, `<em style="color:${C.primary}">`) }}
                />
              ))}
            </div>

            {/* links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", paddingTop: 14, borderTop: `1px solid ${C.border}`, width: "100%" }}>
              {host.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, ...mono, fontSize: sz(11), fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                  ↳ {link.handle}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Together section ── */}
      <div style={{ marginTop: 36 }}>
        <div style={{ ...mono, fontSize: sz(13), fontWeight: 700, color: C.primary, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 22, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 22, height: 1, background: C.primary }} />
          Together: Talent Mucho
        </div>

        {/* equation */}
        <div style={{ padding: "26px 28px", borderRadius: 18, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          {([
            { label: "Tech", sub: "Abie", highlight: false },
            { op: "+" },
            { label: "Business", sub: "Meri", highlight: false },
            { op: "+" },
            { label: "AI", sub: "Claude", highlight: false },
            { op: "=" },
            { label: "Superpowers", sub: "Talent Mucho", highlight: true },
          ] as const).map((part, i) => {
            if ("op" in part) {
              return <div key={`op-${i}`} style={{ ...sans, fontSize: sz(28), fontWeight: 300, color: C.muted }}>{part.op}</div>;
            }
            return (
              <div key={part.label} style={{
                flex: 1, minWidth: 130, padding: "18px 18px", borderRadius: 14, textAlign: "center",
                background: part.highlight ? C.primary : C.bg,
                border: `1px solid ${part.highlight ? C.primary : C.border}`,
                color: part.highlight ? onDark : C.text,
                boxShadow: part.highlight ? `0 8px 24px -10px ${C.primary}80` : "none",
              }}>
                <div style={{ ...sans, fontSize: sz(18), fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 4 }}>{part.label}</div>
                <div style={{ ...mono, fontSize: sz(10), fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: part.highlight ? 0.85 : 0.55 }}>{part.sub}</div>
              </div>
            );
          })}
        </div>

        {/* how we met */}
        <div style={{ padding: "22px 26px", borderRadius: 18, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 18, display: "flex", alignItems: "flex-start", gap: 18 }}>
          <div style={{ fontSize: sz(28), lineHeight: 1, flexShrink: 0 }}>🤝</div>
          <div>
            <div style={{ ...mono, fontSize: sz(10), fontWeight: 700, color: C.primary, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>How we met</div>
            <div style={{ ...sans, fontSize: sz(17), color: C.text, lineHeight: 1.55 }}>
              Meri found Abie on YouTube. They decided to meet in Barcelona ~ strangers from the internet.
              Abie&apos;s thread went viral. People thought she was getting trafficked.{" "}
              <em style={{ color: C.primary }}>1 million views.</em>
            </div>
            <div style={{ ...sans, fontSize: sz(13), color: C.muted, marginTop: 8 }}>
              And here we are ~ building Talent Mucho.
            </div>
          </div>
        </div>

        {/* why we're here */}
        <div style={{ padding: "28px 30px", borderRadius: 18, background: C.text, color: onDark, marginBottom: 18 }}>
          <div style={{ ...mono, fontSize: sz(11), fontWeight: 700, color: C.primary, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>
            Why we&apos;re here
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ ...sans, fontSize: sz(20), color: onDark, lineHeight: 1.45 }}>
              AI isn&apos;t new. The hype isn&apos;t new.{" "}
              <em style={{ color: C.primary }}>But most of you are still on the sidelines.</em>
            </div>
            <div style={{ ...sans, fontSize: sz(15), color: "rgba(250,248,245,0.85)", lineHeight: 1.55 }}>
              The ones cashing in right now? Developers. Tech operators. They can plug-and-play ~{" "}
              <em style={{ color: C.primary }}>and they also face the biggest replacement risk.</em>
            </div>
            <div style={{ ...sans, fontSize: sz(15), color: "rgba(250,248,245,0.85)", lineHeight: 1.55 }}>
              We sit at the intersection. <em style={{ color: C.primary }}>Tech + business + AI.</em> That&apos;s why we built Talent Mucho.
            </div>
            <div style={{ ...sans, fontSize: sz(16), fontWeight: 600, color: onDark, lineHeight: 1.5, marginTop: 4 }}>
              Our mission: get you <em style={{ color: C.primary }}>the same superpowers</em> ~ without needing to be a developer.
            </div>
          </div>
        </div>

        {/* three pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {([
            { label: "Educate", desc: "Workshops, hands-on training, team adoption", tonight: true },
            { label: "Build", desc: "Websites, automations, AI systems your business runs on" },
            { label: "Operate", desc: "AI-trained VAs and engineers placed inside your business" },
          ] as const).map((p) => (
            <div key={p.label} style={{
              padding: "20px 20px", borderRadius: 14, position: "relative",
              background: "tonight" in p ? `${C.primary}10` : C.surface,
              border: `1px solid ${"tonight" in p ? `${C.primary}40` : C.border}`,
            }}>
              {"tonight" in p && (
                <div style={{
                  position: "absolute", top: -10, right: 14,
                  ...mono, fontSize: sz(9), fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                  background: C.primary, color: onDark, padding: "3px 10px", borderRadius: 6,
                }}>
                  Tonight
                </div>
              )}
              <div style={{ ...sans, fontSize: sz(18), fontWeight: 700, color: C.text, letterSpacing: "-0.01em", marginBottom: 6 }}>{p.label}</div>
              <div style={{ ...sans, fontSize: sz(14), color: C.muted, lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes floatSticker { 0%, 100% { transform: rotate(8deg) translateY(0); } 50% { transform: rotate(8deg) translateY(-8px); } }`}</style>
    </div>
  );
}
