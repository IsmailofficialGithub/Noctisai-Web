import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background gradient */}
      <div className={styles.heroBackground}></div>

      {/* Animated background pattern */}
      <div className={styles.patternContainer}>
        <div className={styles.pattern}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Noctisai
        </h1>

        <p className={styles.subtitle}>
          Secure AI Chat with Screen-Sharing Protection
        </p>

        <p className={styles.description}>
          A Windows-native desktop application for private, secure AI conversations with zero-knowledge encryption and protection from screen sharing tools.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="#download"
            className={styles.button}
          >
            Download for Windows
          </a>
        </div>

        <p className={styles.footer}>
          Windows 10/11 • x64 • 100MB+
        </p>
      </div>
    </section>
  );
}
