"use client";

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Guide.module.css';

type Chapter = {
    title: string;
    slug: string;
    content: string;
    subtopics: { title: string; slug: string }[];
};

interface GuideLayoutProps {
    chapters: Chapter[];
}

export default function GuideLayout({ chapters }: GuideLayoutProps) {
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);

    // Reset scroll position when chapter changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeChapterIndex]);

    const activeChapter = chapters[activeChapterIndex];
    const progressPercentage = ((activeChapterIndex + 1) / chapters.length) * 100;

    return (
        <>
            {/* Reading Progress Bar (Chapter Based) */}
            <div className={styles.progressBarContainer}>
                <div 
                    className={styles.progressBar} 
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>

            <main className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>NocticAI Master Guide</h1>
                    <p className={styles.subtitle}>
                        Documentation for Windows & Linux
                    </p>
                </header>

                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <h3 className={styles.tocTitle}>Table of Contents</h3>
                        <div className={styles.tocSticky}>
                            <nav className={styles.tocNav}>
                                {chapters.map((chapter, i) => {
                                    const isActive = i === activeChapterIndex;
                                    
                                    return (
                                        <React.Fragment key={i}>
                                            <button
                                                onClick={() => setActiveChapterIndex(i)}
                                                className={`
                                                    ${styles.tocLevel2}
                                                    ${isActive ? styles.tocActive : ''}
                                                `}
                                                style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                                            >
                                                {chapter.title}
                                            </button>
                                            
                                            {isActive && chapter.subtopics.map((sub, j) => (
                                                <a 
                                                    key={j} 
                                                    href={`#${sub.slug}`} 
                                                    className={styles.tocLevel3}
                                                >
                                                    <span className={styles.subIndicator}>— </span>
                                                    {sub.title}
                                                </a>
                                            ))}
                                        </React.Fragment>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    <div className={styles.contentWrapper}>
                        <article className={`${styles.markdownContainer} markdown-body`}>
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeSlug]}
                            >
                                {activeChapter.content}
                            </ReactMarkdown>
                        </article>

                        {/* Pagination Buttons */}
                        <div className={styles.paginationBox}>
                            {activeChapterIndex > 0 ? (
                                <button 
                                    className={styles.pageButton} 
                                    onClick={() => setActiveChapterIndex(activeChapterIndex - 1)}
                                >
                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                    <div style={{ textAlign: 'left' }}>
                                        <div className={styles.pageLabel}>Previous</div>
                                        <div className={styles.pageTitle}>{chapters[activeChapterIndex - 1].title}</div>
                                    </div>
                                </button>
                            ) : <div></div>}

                            {activeChapterIndex < chapters.length - 1 ? (
                                <button 
                                    className={`${styles.pageButton} ${styles.pageNext}`} 
                                    onClick={() => setActiveChapterIndex(activeChapterIndex + 1)}
                                >
                                    <div style={{ textAlign: 'right' }}>
                                        <div className={styles.pageLabel}>Next</div>
                                        <div className={styles.pageTitle}>{chapters[activeChapterIndex + 1].title}</div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            ) : <div></div>}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
