import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Abie Maxey | UGC Videos + Web Development for Brands That Move",
  description:
    "Digital nomad and software engineer helping brands grow with high-converting UGC videos and modern web builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-neo-bg text-black font-sans antialiased">{children}</body>
    </html>
  );
}
