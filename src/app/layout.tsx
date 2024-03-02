import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./layoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menu Food",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200`}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
