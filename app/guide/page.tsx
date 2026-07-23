import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import GithubSlugger from 'github-slugger';
import GuideLayout from './GuideLayout';

export const metadata: Metadata = {
    title: 'NocticAI Master Guide - Official Documentation',
    description: 'The definitive guide to using NocticAI on Windows and Linux. Master stealth features, Ghost Typer, OCR overlay, and zero-knowledge encryption.',
    keywords: [
        'NocticAI guide', 
        'NocticAI documentation', 
        'stealth AI guide', 
        'setup NocticAI', 
        'NocticAI Linux installation', 
        'NocticAI Windows setup',
        'Ghost Typer tutorial'
    ],
    alternates: {
        canonical: 'https://noctisai.com/guide'
    },
    openGraph: {
        title: 'NocticAI Master Guide - Official Documentation',
        description: 'The definitive guide to using NocticAI on Windows and Linux.',
        images: [{ url: '/logo-neon.png' }],
    }
};

export type Chapter = {
    title: string;
    slug: string;
    content: string;
    subtopics: { title: string; slug: string }[];
};

function parseChapters(markdown: string): Chapter[] {
    const chapters: Chapter[] = [];
    
    // Split the document into chunks every time a ## (H2) starts a new line
    const parts = markdown.split(/\n(?=##\s+)/);
    
    for (const part of parts) {
        if (!part.trim()) continue;
        
        // Since ReactMarkdown renders each chunk in isolation, rehype-slug will start
        // a fresh slugger state for each chunk. We must mimic that here.
        const chunkSlugger = new GithubSlugger();
        
        let title = 'Introduction';
        let slug = 'introduction';
        let isFirstH2 = true;
        const subtopics: { title: string; slug: string }[] = [];
        
        const lines = part.split('\n');
        for (const line of lines) {
            const match = line.match(/^(#{1,6})\s+(.*)/);
            if (match) {
                const level = match[1].length;
                const rawText = match[2].replace(/[\*\_]/g, '').trim();
                const generatedSlug = chunkSlugger.slug(rawText);
                
                if (level === 2 && isFirstH2) {
                    title = rawText;
                    slug = generatedSlug;
                    isFirstH2 = false;
                } else if (level === 3) {
                    subtopics.push({ title: rawText, slug: generatedSlug });
                }
            }
        }
        
        chapters.push({
            title,
            slug,
            content: part,
            subtopics
        });
    }
    
    return chapters;
}

export default function GuidePage() {
    const filePath = path.join(process.cwd(), 'USER_GUIDE.md');
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Strip the very first # H1 heading to avoid duplicate main titles
    fileContent = fileContent.replace(/^#\s+.*?\n/, '');

    const chapters = parseChapters(fileContent);

    return (
        <GuideLayout chapters={chapters} />
    );
}
