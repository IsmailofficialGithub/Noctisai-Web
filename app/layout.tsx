import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        "Ghost Typer",
        "AI interview assistant",
        "AI meeting assistant",
        "zero-knowledge encryption",
        "screen sharing protection",
        "transparent OCR",
        "local AI chat",
        "Windows AI chat",
        "Linux AI assistant",
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
                url: "/logo-neon.png",
                width: 1200,
                height: 630,
                alt: "Noctisai - Stealthy, Secure AI Assistant",
            },
        ],
    },
    icons: {
        icon: "/logo-neon.png",
        shortcut: "/logo-neon.png",
        apple: "/logo-neon.png",
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
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Noctisai",
      "operatingSystem": "Windows, Linux",
      "applicationCategory": "UtilitiesApplication",
      "image": "https://noctisai.com/logo-neon.png",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "A stealthy, secure, and advanced AI assistant for interviews and meetings with zero-knowledge encryption."
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <div className="layoutWrapper">
                    <Navbar />
                    <main className="mainContent">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
