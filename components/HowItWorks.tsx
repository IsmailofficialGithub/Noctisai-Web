import styles from './HowItWorks.module.css';

const steps = [
  {
    number: "1",
    title: "Download and Install",
    description: "Get the latest binary installer (Windows .exe or Linux .AppImage/.deb). Run the installer, and the app will launch silently.",
  },
  {
    number: "2",
    title: "Setup Your Environment",
    description: "Create a secure master password (minimum 12 chars). Configure your API keys (OpenAI, Groq, or compatible) in Settings.",
  },
  {
    number: "3",
    title: "Master Core Shortcuts",
    description: "Ctrl+Alt+H to Show/Hide app. Ctrl+Alt+V to Ghost Type clipboard. Ctrl+Alt+O for OCR Selection Overlay.",
  },
  {
    number: "4",
    title: "Utilize Voice Modes",
    description: "Use 'Mine Mode' to transcribe your microphone, or 'Yours Mode' to capture system audio for real-time interview context.",
  },
  {
    number: "5",
    title: "Deploy Ghost Typer",
    description: "Copy AI-generated text, click your destination window, and press Ctrl+Alt+V to human-type the text past detection.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          How It Works
        </h2>
        <p className={styles.subtitle}>
          Get started in minutes with these simple steps
        </p>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={styles.step}
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className={styles.numberContainer}>
                <div className={styles.numberCircle}>
                  {step.number}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                <p className={styles.stepDescription}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
