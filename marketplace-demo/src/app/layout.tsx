import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { PageProvider } from "@/contexts/PageContexts";
import Sidebar from "@/components/layout/sidebar";

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
}: Readonly<{
    children: React.ReactNode;
    activeCategory?: string;
    onSearch?: (query: string) => void;
    searchQuery?: string;
}>) {


    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <PageProvider>
                    <div className="min-h-screen bg-gray-50">
                        <Header />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="flex gap-8">
                                {/* Sidebar */}
                                <Sidebar />
                                {/* Mainn content */}
                                <div className="flex-1">
                                    { children }
                                </div>
                            </div>
                        </div>
                    </div>
                </PageProvider>
                
            </body>
        </html>
    );
}
