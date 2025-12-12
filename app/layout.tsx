import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Noctisai - Secure AI Chat with Screen-Sharing Protection",
    description: "Noctisai is a Windows-native desktop application for private, secure AI chat with zero-knowledge encryption and screen-sharing protection. Download for Windows 10/11.",
    keywords: [
        "Noctisai",
        "private AI chat",
        "secure AI chat",
        "encrypted AI chat",
        "Windows AI chat",
        "desktop AI application",
        "zero-knowledge encryption",
        "screen sharing protection",
        "privacy AI",
        "local AI chat",
        "Ollama chat",
        "OpenAI desktop app",
    ],
    authors: [{ name: "Noctisai" }],
    creator: "Noctisai",
    publisher: "Noctisai",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://noctisai.com"), // TODO: Update with actual domain
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Noctisai - Secure AI Chat with Screen-Sharing Protection",
        description: "Noctisai is a Windows-native desktop application for private, secure AI chat with zero-knowledge encryption and screen-sharing protection.",
        url: "https://noctisai.com", // TODO: Update with actual domain
        siteName: "Noctisai",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Noctisai - Secure AI Chat",
            },
        ],
    },
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    twitter: {
        card: "summary_large_image",
        title: "Noctisai - Secure AI Chat with Screen-Sharing Protection",
        description: "Noctisai is a Windows-native desktop application for private, secure AI chat with zero-knowledge encryption and screen-sharing protection.",
        creator: "@noctisai", // TODO: Update with actual Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
        { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
