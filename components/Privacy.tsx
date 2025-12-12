import { Lock, Radio, HardDrive, Shield } from "lucide-react";
import styles from './Privacy.module.css';

export default function Privacy() {
    return (
        <section id="privacy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Privacy & Security First
                </h2>
                <p className={styles.subtitle}>
                    Your privacy is not an afterthought—it's our foundation
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Lock className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>
                            Zero-Knowledge Encryption
                        </h3>
                        <p className={styles.cardDescription}>
                            All your chat logs and API keys are encrypted with AES-256-GCM.
                            We use zero-knowledge architecture, meaning even we cannot access your data.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Radio className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>
                            No Telemetry
                        </h3>
                        <p className={styles.cardDescription}>
                            We don't track you. No analytics, no usage data collection, no telemetry.
                            Your privacy is respected from day one.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <HardDrive className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>
                            Local-Only Storage
                        </h3>
                        <p className={styles.cardDescription}>
                            All your data stays on your computer. Nothing is stored in the cloud.
                            You have complete control over your information.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Shield className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>
                            Screen Sharing Protection
                        </h3>
                        <p className={styles.cardDescription}>
                            Advanced protection prevents screen capture tools from recording your conversations.
                            Stay private even during video calls.
                        </p>
                    </div>
                </div>

                <div className={styles.trustBox}>
                    <p className={styles.trustText}>
                        <strong className={styles.strongText}>Trust is earned, not assumed.</strong> We've built Noctisai
                        with privacy and security as core principles, not features added later. Your conversations are yours alone.
                    </p>
                </div>
            </div>
        </section>
    );
}
