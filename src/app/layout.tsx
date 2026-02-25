import type { Metadata } from "next";
import { Space_Grotesk, Source_Code_Pro } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TypeScript Learning Lab",
  description: "Learn TypeScript from basics to advanced with practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${sourceCode.variable} antialiased`}>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
