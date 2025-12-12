import styles from './HowItWorks.module.css';

const steps = [
  {
    number: "1",
    title: "Download and Install",
    description: "Download the Windows installer from this page and run the setup file. The installation takes just a minute.",
  },
  {
    number: "2",
    title: "Create Master Password",
    description: "Launch the app and create a master password (minimum 12 characters). This password encrypts all your data.",
  },
  {
    number: "3",
    title: "Configure AI Provider",
    description: "Add your OpenAI API key, or set up Ollama for local AI models. You can also use any OpenAI-compatible endpoint.",
  },
  {
    number: "4",
    title: "Start Chatting",
    description: "Begin your secure conversations! All your chats are automatically encrypted and stored locally on your computer.",
  },
  {
    number: "5",
    title: "Quick Hide/Show",
    description: "Use CTRL+SHIFT+H to instantly hide or show the app. Perfect for quick privacy when needed.",
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
