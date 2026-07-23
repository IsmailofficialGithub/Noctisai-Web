import Image from "next/image";
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
                <div className={styles.logoContainer}>
                    <Image
                        src="/logo-neon.png"
                        alt="Noctisai Logo"
                        width={200}
                        height={200}
                        priority
                        className={styles.logo}
                    />
                </div>
                <h1 className={styles.title}>
                    Noctisai
                </h1>

                <p className={styles.subtitle}>
                    A stealthy, secure, and advanced AI assistant for interviews & meetings.
                </p>

                <p className={styles.description}>
                    A desktop application for private, secure AI conversations with zero-knowledge encryption, stealth display modes, and undetectable operation. Now available on Windows and Linux!
                </p>

                <div className={styles.buttonContainer}>
                    <a
                        href="#download"
                        className={styles.button}
                    >
                        Download for Windows & Linux
                    </a>
                    <a
                        href="/guide"
                        className={styles.secondaryButton}
                    >
                        Read Master Guide
                    </a>
                </div>

                <p className={styles.footer}>
                    Windows (exe) • Linux (AppImage, deb)
                </p>
            </div>
        </section>
    );
}
