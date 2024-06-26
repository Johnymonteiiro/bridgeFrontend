import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { ThemeProvider } from "../provider/theme_provider";
import { ContextProvider } from "@/context/context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime numbers calculator",
  description: "The easy way to calculate the primes numbers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>{children}</ContextProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
