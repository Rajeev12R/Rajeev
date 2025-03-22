import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GridBackgroundDemo from "@/components/ui/Gradient"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rajeev Ranjan | Portfolio",
  description: "Built by Rajeev Ranjan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <Navbar />
        <div className="relative w-full">
          <div className="absolute inset-0 -z-10">
            <GridBackgroundDemo />
          </div>
        </div>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          {children}
        </body>
        <Footer />
      </html>
  )
}
