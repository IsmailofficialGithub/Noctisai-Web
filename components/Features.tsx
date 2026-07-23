import { Lock, Shield, Bot, EyeOff, Mic, Keyboard, ScanText, AppWindow, Users } from "lucide-react";
import styles from './Features.module.css';

const features = [
  {
    title: "Privacy & Stealth",
    description: "Undetectable presence hidden from taskbar and task manager. Global stealth shortcut (Ctrl+Alt+H) to hide instantly.",
    icon: EyeOff,
  },
  {
    title: "Ghost Typer (Humanizer)",
    description: "Physically simulates human typing with variable speeds and 'fat finger' mistakes to bypass copy-paste detection.",
    icon: Keyboard,
  },
  {
    title: "Real-Time Voice Transcription",
    description: "Capture your mic (Mine Mode) or system audio (Yours Mode) using Whisper for real-time AI context.",
    icon: Mic,
  },
  {
    title: "Transparent OCR Overlay",
    description: "Extract text seamlessly using a transparent overlay window. Perfect for uncopiable screens (Ctrl+Alt+O).",
    icon: ScanText,
  },
  {
    title: "Multi-Model Support",
    description: "Integrated with OpenAI (GPT-4/3.5), Groq (Llama 3, Mixtral), and OpenAI-compatible APIs like Ollama.",
    icon: Bot,
  },
  {
    title: "Zero-Knowledge Encryption",
    description: "All chats and API keys are encrypted locally using AES-256-GCM. We never see your data.",
    icon: Lock,
  },
  {
    title: "Content Protection",
    description: "Native OS-level protection prevents screenshots and screen recording of the app window. Auto-hides on screen sharing.",
    icon: Shield,
  },
  {
    title: "Advanced Window Management",
    description: "Always-on-top, keyboard-controlled resizing and positioning, plus desktop app embedding capabilities.",
    icon: AppWindow,
  },
  {
    title: "Multiple Chat Contexts",
    description: "Create separate chat sessions with custom context for different scenarios (interviews, meetings, coding, etc.).",
    icon: Users,
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
