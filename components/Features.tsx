import { Lock, Shield, Bot, Key, LockKeyhole, Zap, Moon } from "lucide-react";
import styles from './Features.module.css';

const features = [
  {
    title: "Zero-Knowledge Encryption",
    description: "All chat logs and API keys encrypted with AES-256-GCM. Even we can't access your data.",
    icon: Lock,
  },
  {
    title: "Screen Sharing Protection",
    description: "Prevents content capture in video calls. Your conversations stay private even when sharing your screen.",
    icon: Shield,
  },
  {
    title: "Multi-LLM Support",
    description: "Works with OpenAI GPT-3.5/4, Ollama local models, and any OpenAI-compatible API endpoint.",
    icon: Bot,
  },
  {
    title: "Secure Authentication",
    description: "Master password protection with PBKDF2 key derivation. Your data is locked behind strong encryption.",
    icon: Key,
  },
  {
    title: "Privacy First",
    description: "No telemetry, no cloud storage. All data stays local on your computer. Complete privacy guaranteed.",
    icon: LockKeyhole,
  },
  {
    title: "System Tray Integration",
    description: "Hide or show the app instantly with CTRL+SHIFT+H hotkey. Quick access from your system tray.",
    icon: Zap,
  },
  {
    title: "Dark Mode UI",
    description: "Beautiful, modern dark interface designed for comfortable extended use and reduced eye strain.",
    icon: Moon,
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Powerful Features
        </h2>
        <p className={styles.description}>
          Everything you need for secure, private AI conversations
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.iconContainer}>
                <feature.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>
                {feature.title}
              </h3>
              <p className={styles.cardDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
