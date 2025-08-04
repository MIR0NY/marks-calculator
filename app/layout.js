import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sonargaon Quality School and College",
  description: "Half Yearly Exam Marks Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex justify-between items-center p-2 bg-accent">
            <div className="text-2xl mx-6 font-bold">
              SQSC
            </div>
            <div className="mx-5">
            <ModeToggle />
            </div>
          </div>
          {children}
        
        </ThemeProvider>
      </body>
    </html>
  );
}
