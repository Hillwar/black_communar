import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SwipeProvider } from "@/components/providers/swipe-provider";
import { Navigation } from "@/components/layout/navigation";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Черный Комунар",
  description: "Информационная система лагеря",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SwipeProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
            </div>
          </SwipeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 