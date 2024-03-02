import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexa | Trust | Bank",
  description: "Your Trust is Our Commitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className } >
        <div className="min-h-screen" >
          {children}
        </div>
      </body>
    </html>
  );
}

