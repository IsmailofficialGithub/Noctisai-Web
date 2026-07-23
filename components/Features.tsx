"use client";

import { useState } from "react";
import { Lock, Shield, Bot, EyeOff, Mic, Keyboard, ScanText, AppWindow, Users, ChevronDown, CheckCircle2 } from "lucide-react";
import styles from './Features.module.css';

const features = [
  {
    title: "Privacy & Stealth",
    description: "Undetectable presence hidden from taskbar and task manager. Global stealth shortcut (Ctrl+Alt+H) to hide instantly.",
    details: [
      "Hidden from the taskbar, task manager (via process masking), and screen sharing tools like Zoom, Teams, and OBS.",
      "Use the Global Stealth Shortcut (Ctrl+Alt+H) to toggle visibility instantly without using your mouse.",
      "Includes a built-in Stealth Browser that opens all links in-app to prevent unexpected external browser windows popping up during critical moments.",
      "Automatically detects when screen sharing starts and hides sensitive UI elements to ensure your privacy is never compromised."
    ],
    icon: EyeOff,
  },
  {
    title: "Ghost Typer (Humanizer)",
    description: "Physically simulates human typing with variable speeds and 'fat finger' mistakes to bypass copy-paste detection.",
    details: [
      "Copy your AI-generated text, click your target window, and press Ctrl+Alt+V to start.",
      "Physically simulates human keystrokes to paste answers into restrictive code editors (e.g., HackerRank, LeetCode) or monitored docs.",
      "Includes a variable typing speed algorithm to mimic natural thought processes and hesitations.",
      "Features a 'fat finger' algorithm that intentionally makes typos and backspaces to correct them, completely bypassing copy-paste detection."
    ],
    icon: Keyboard,
  },
  {
    title: "Real-Time Voice Transcription",
    description: "Capture your mic (Mine Mode) or system audio (Yours Mode) using Whisper for real-time AI context.",
    details: [
      "Mine Mode: Accurately transcribe your own voice using your microphone for dictation or querying the AI.",
      "Yours Mode: Captures your system audio (from meetings, interviews, or videos) to give the AI real-time context of the conversation.",
      "Powered by the highly accurate Whisper transcription engine (configurable via OpenAI or Groq).",
      "Features Advanced Voice Activity Detection (VAD) to only process audio when someone is actually speaking, saving you API costs."
    ],
    icon: Mic,
  },
  {
    title: "Transparent OCR Overlay",
    description: "Extract text seamlessly using a transparent overlay window. Perfect for uncopiable screens (Ctrl+Alt+O).",
    details: [
      "Press Ctrl+Alt+O to instantly activate a transparent, draggable overlay on your screen.",
      "Select any area to automatically extract text using Optical Character Recognition (OCR).",
      "Perfect for quickly extracting questions or code from uncopiable screens, locked PDFs, or secure browser environments.",
      "Extracted text is immediately sent to the AI as context without you needing to type a single word."
    ],
    icon: ScanText,
  },
  {
    title: "Multi-Model Support",
    description: "Integrated with OpenAI (GPT-4/3.5), Groq (Llama 3, Mixtral), and OpenAI-compatible APIs like Ollama.",
    details: [
      "Integrated directly with OpenAI for industry-leading reasoning (GPT-4o, GPT-3.5).",
      "Supports the ultra-fast Groq engine (Llama 3, Mixtral) for near-instantaneous responses during fast-paced interviews.",
      "Connects to any OpenAI-compatible local APIs (like Ollama) for completely offline, 100% private inference.",
      "Easily configure your API keys in Settings > AI Accounts and switch between models seamlessly mid-conversation."
    ],
    icon: Bot,
  },
  {
    title: "Zero-Knowledge Encryption",
    description: "All chats and API keys are encrypted locally using AES-256-GCM. We never see your data.",
    details: [
      "All your chat logs, prompts, and API keys are encrypted at rest locally on your machine.",
      "Uses military-grade AES-256-GCM encryption with PBKDF2 key derivation from your Master Password.",
      "No cloud databases or remote telemetry. We use a strict zero-knowledge architecture.",
      "Even if your device is compromised, your data is mathematically unreadable without your Master Password."
    ],
    icon: Lock,
  },
  {
    title: "Content Protection",
    description: "Native OS-level protection prevents screenshots and screen recording of the app window. Auto-hides on screen sharing.",
    details: [
      "Native OS-level protection actively blocks screenshots of the application window.",
      "Prevents screen recording software (OBS, ShareX) from capturing the UI.",
      "If you are sharing your screen (e.g., Zoom, Teams, Google Meet), Noctisai automatically detects the screen share state.",
      "The app will render as a black box or become completely invisible on the broadcasted screen, ensuring your privacy."
    ],
    icon: Shield,
  },
  {
    title: "Advanced Window Management",
    description: "Always-on-top, keyboard-controlled resizing and positioning, plus desktop app embedding capabilities.",
    details: [
      "Toggle Always-On-Top so the AI assistant never gets buried beneath other windows.",
      "Resize the window incrementally using Ctrl+Alt+Plus/Minus without needing to drag edges with a mouse.",
      "Move the window precisely around your screen using your arrow keys for exact positioning.",
      "Unique capability to embed other Windows desktop applications directly within the Noctisai window for seamless integration."
    ],
    icon: AppWindow,
  },
  {
    title: "Multiple Chat Contexts",
    description: "Create separate chat sessions with custom context for different scenarios (interviews, meetings, coding, etc.).",
    details: [
      "Create separate, isolated chat sessions tailored for specific use cases.",
      "Inject custom system instructions into each session to change the AI's behavior and constraints.",
      "Easily switch between profiles like an 'Interview Coach', 'Meeting Summarizer', or 'Coding Assistant'.",
      "Conversation histories remain isolated per context, preventing the AI from getting confused across different tasks."
    ],
    icon: Users,
  },
];

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
          {features.map((feature, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
                onClick={() => toggleFeature(index)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <feature.icon className={styles.icon} />
                  </div>
                  <ChevronDown className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`} />
                </div>
                <h3 className={styles.cardTitle}>
                  {feature.title}
                </h3>
                <p className={styles.cardDescription}>
                  {feature.description}
                </p>
                
                <div className={`${styles.detailsContainer} ${isExpanded ? styles.detailsExpanded : ''}`}>
                  <div className={styles.detailsDivider}></div>
                  <h4 className={styles.detailsHeading}>Deep Dive:</h4>
                  <ul className={styles.detailsList}>
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className={styles.detailsListItem}>
                        <CheckCircle2 className={styles.checkIcon} />
                        <span className={styles.detailsText}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
