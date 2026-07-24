import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ShieldOff, EyeOff, Check } from "lucide-react";
import styles from "./LiveDemo.module.css";

const demos = [
  {
    src: "/demos/zoom-interview.png",
    alt: "Noctisai overlay open during a Zoom interview",
    label: "Zoom Interview",
    caption: "App stays private while Zoom is live",
  },
  {
    src: "/demos/meet-interview.png",
    alt: "Noctisai overlay open during a Google Meet interview",
    label: "Google Meet",
    caption: "Invisible to screen share on Meet",
  },
  {
    src: "/demos/app-overlay.png",
    alt: "Noctisai chat assistant window",
    label: "Noctisai Overlay",
    caption: "Always-on-top AI chat beside the call",
  },
];

const platforms: { name: string; color: string; icon: ReactNode }[] = [
  {
    name: "Google Meet",
    color: "#00832D",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.platformSvg}>
        <path fill="#00832D" d="M12 2a5 5 0 0 1 5 5v1h2.5A2.5 2.5 0 0 1 22 10.5v7A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-7A2.5 2.5 0 0 1 4.5 8H7V7a5 5 0 0 1 5-5Z" opacity=".2" />
        <path fill="#00832D" d="M4 9h7v6H4V9Zm8 0h4l3 2.5V15h-7V9Z" />
        <path fill="#34A853" d="M4 9h7v3H4V9Z" />
        <path fill="#FBBC04" d="M4 12h7v3H4v-3Z" />
        <path fill="#EA4335" d="M11 9h1v6h-1V9Z" />
        <path fill="#1A73E8" d="M12 9h4l3 2.5V12h-7V9Z" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    color: "#2D8CFF",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.platformSvg}>
        <rect x="2" y="5" width="14" height="12" rx="3" fill="#2D8CFF" />
        <path fill="#2D8CFF" d="M17 9.2 22 6v10l-5-3.2V9.2Z" />
      </svg>
    ),
  },
  {
    name: "Teams",
    color: "#6264A7",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.platformSvg}>
        <circle cx="16.5" cy="6.5" r="2.2" fill="#6264A7" />
        <rect x="12.5" y="9.5" width="8" height="7" rx="2" fill="#7B83EB" />
        <rect x="3" y="7" width="11" height="11" rx="2" fill="#5059C9" />
        <text x="8.5" y="14.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700" fontFamily="system-ui,sans-serif">T</text>
      </svg>
    ),
  },
  {
    name: "Discord",
    color: "#5865F2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.platformSvg}>
        <path
          fill="#5865F2"
          d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.36-.76-.54-1.09A.09.09 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33A.08.08 0 0 0 4.67 5.4C2.69 8.41 2.11 11.33 2.4 14.21a.1.1 0 0 0 .04.07c1.8 1.32 3.53 2.12 5.24 2.65a.09.09 0 0 0 .1-.03c.4-.55.76-1.13 1.07-1.74a.09.09 0 0 0-.05-.12 10.7 10.7 0 0 1-1.52-.73.09.09 0 0 1 0-.15c.1-.08.2-.16.3-.24a.09.09 0 0 1 .09-.01c3.2 1.46 6.66 1.46 9.82 0a.09.09 0 0 1 .1.01c.1.08.2.16.3.24a.09.09 0 0 1 0 .15 10.2 10.2 0 0 1-1.53.73.09.09 0 0 0-.04.12c.32.61.68 1.19 1.07 1.74a.09.09 0 0 0 .1.03c1.72-.53 3.45-1.33 5.25-2.65a.1.1 0 0 0 .04-.07c.34-3.34-.58-6.24-2.45-8.81a.07.07 0 0 0-.06-.03ZM8.88 12.86c-.96 0-1.75-.89-1.75-1.98 0-1.09.78-1.98 1.75-1.98s1.77.9 1.75 1.98c0 1.09-.78 1.98-1.75 1.98Zm6.24 0c-.96 0-1.75-.89-1.75-1.98 0-1.09.78-1.98 1.75-1.98s1.77.9 1.75 1.98c0 1.09-.79 1.98-1.75 1.98Z"
        />
      </svg>
    ),
  },
];

export default function LiveDemo() {
  return (
    <section id="live-demo" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Seen in real interviews</p>
        <h2 className={styles.title}>Works beside Zoom &amp; Google Meet</h2>
        <p className={styles.subtitle}>
          Keep Noctisai open during live interviews. Your AI overlay stays on your screen —
          hidden from screen share, taskbar, and recording tools.
        </p>

        <div className={styles.bypassBar}>
          <div className={styles.bypassBadge}>
            <ShieldOff className={styles.bypassIcon} />
            <span className={styles.bypassLabel}>Screen-Share Bypass</span>
            <span className={styles.bypassPulse} aria-hidden="true" />
            <span className={styles.bypassStatus}>ACTIVE</span>
          </div>
          <div className={styles.bypassMeta}>
            <EyeOff className={styles.metaIcon} />
            <span>Invisible on shared screens • Hidden from OBS &amp; screenshots</span>
          </div>
        </div>

        <div className={styles.platformRow}>
          {platforms.map((platform) => (
            <div key={platform.name} className={styles.platformChip}>
              <span className={styles.platformIconWrap} style={{ "--chip": platform.color } as CSSProperties}>
                {platform.icon}
              </span>
              <span className={styles.platformName}>{platform.name}</span>
              <span className={styles.bypassCheck} title="Bypass enabled">
                <Check size={14} />
              </span>
            </div>
          ))}
        </div>

        <div className={styles.gallery}>
          {demos.map((demo) => (
            <figure key={demo.src} className={styles.shot}>
              <div className={styles.shotFrame}>
                <Image
                  src={demo.src}
                  alt={demo.alt}
                  width={448}
                  height={1024}
                  className={styles.shotImage}
                  sizes="(max-width: 768px) 70vw, 280px"
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionLabel}>{demo.label}</span>
                <span className={styles.captionText}>{demo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
