import type { Metadata } from "next";
import { DM_Mono } from "next/font/google"
import "./globals.css";

const fnt = DM_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500']
})

export const metadata: Metadata = {
  title: "Anurag Angal",
  description: "Welcome to my Altar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fnt.className} text-neutral-800`}>
        {children}
      </body>
    </html>
  );
}
