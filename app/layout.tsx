import "./globals.css";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ModalProvider } from "../components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lotion",
  description:
    "Take your workspace to the next level to achieve better results",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-black.png",
        href: "/logo-black.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-white.png",
        href: "/logo-white.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="lotion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
