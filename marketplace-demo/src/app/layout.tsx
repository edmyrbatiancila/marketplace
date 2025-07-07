import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { usePathname } from "next/navigation";
import { PageProvider, usePageContext } from "@/contexts/PageContexts";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Marketplace App",
    description: "Created a marketplace facebook inspired app",
};

export default function RootLayout({
    children,
    activeCategory,
    onSearch,
    searchQuery
}: Readonly<{
    children: React.ReactNode;
    activeCategory?: string;
    onSearch?: (query: string) => void;
    searchQuery?: string;
}>) {

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(localSearchQuery);
        }
    };

    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <PageProvider>
                <div className="min-h-screen bg-gray-50">
                    <Header />
                </div>
                {children}
            </PageProvider>
            
        </body>
        </html>
    );
}
