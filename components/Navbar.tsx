"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo & Brand - Acts as Back/Home button */}
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoWrapper}>
                        <Image src="/logo-neon.png" alt="NocticAI Logo" width={32} height={32} className={styles.logoImg} />
                    </div>
                    <span className={styles.brandName}>NocticAI</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <Link href="/#features" className={styles.navLink}>Features</Link>
                    <Link href="/guide" className={styles.navLink}>Master Guide</Link>
                    <Link href="/#download" className={styles.downloadBtn}>Download</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className={styles.mobileNav}>
                    <Link href="/#features" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                    <Link href="/guide" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Master Guide</Link>
                    <Link href="/#download" className={styles.mobileDownloadBtn} onClick={() => setIsMobileMenuOpen(false)}>Download</Link>
                </div>
            )}
        </header>
    );
}
