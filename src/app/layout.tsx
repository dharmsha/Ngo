// app/layout.jsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"

// Single font - minimal
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Basic metadata
export const metadata: Metadata = {
  title: 'Ghazipur Pratibha Khoj',
  description: 'Ghazipur Pratibha Khoj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}