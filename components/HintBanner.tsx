"use client";

import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import styles from './HintBanner.module.css';

const HINTS = [
    "Pro Tip: Installing on Linux? Check out our Master Guide for detailed steps on Ubuntu, Fedora, and Arch.",
    "Hint: Use Ctrl+Alt+H to toggle Stealth Mode instantly without clicking.",
    "Did you know? All your chats are encrypted locally with zero-knowledge AES-256-GCM.",
    "Pro Tip: Ghost Typer mimics human keystrokes to bypass AI detection in real-time.",
    "Security Hint: NocticAI natively blocks OBS and screenshot tools from capturing your screen.",
    "Pro Tip: You can bring your own API keys for maximum privacy and cost control."
];

export default function HintBanner() {
    const [hintIndex, setHintIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Pick a random hint on initial load
        const randomIndex = Math.floor(Math.random() * HINTS.length);
        setHintIndex(randomIndex);

        // Rotate hint every 8 seconds
        const interval = setInterval(() => {
            setHintIndex((prev) => (prev + 1) % HINTS.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // Return empty placeholder with same height to avoid layout shift before hydration
    if (!mounted) return <div className={styles.bannerWrapper} style={{ visibility: 'hidden' }}></div>;

    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <Lightbulb className={styles.icon} />
                <p className={`${styles.text} animate-fade-in`} key={hintIndex}>
                    {HINTS[hintIndex]}
                </p>
            </div>
        </div>
    );
}
