import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Google Fonts via Next.js
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Henry Moreno — Software Architect",
    description: "Portfolio of Henry Moreno, a Software Architect.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-zinc-950 text-zinc-100 overflow-x-hidden`}>{children}</body>
        </html>
    );
}
