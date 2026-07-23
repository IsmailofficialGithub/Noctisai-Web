import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.brand}>
                            <Image src="/logo-neon.png" alt="NocticAI Logo" width={24} height={24} />
                            <span className={styles.brandName}>NocticAI</span>
                        </Link>
                        <p className={styles.description}>
                            The ultimate stealth AI assistant. Zero-knowledge encryption, Ghost Typer, and full local control for Windows and Linux.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.groupTitle}>Product</h4>
                        <Link href="/#features" className={styles.link}>Features</Link>
                        <Link href="/#how-it-works" className={styles.link}>How it Works</Link>
                        <Link href="/#download" className={styles.link}>Download</Link>
                        <Link href="/guide" className={styles.link}>Master Guide</Link>
                    </div>

                    {/* Legal Links */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.groupTitle}>Legal</h4>
                        <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.link}>Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} NocticAI. All rights reserved.
                    </p>
                    <div className={styles.socials}>
                        {/* Placeholder for social links */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Discord</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
