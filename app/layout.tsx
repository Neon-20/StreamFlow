import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import {shadesOfPurple,dark} from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamFlow',
  description: 'An app made for the streamers and gamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: shadesOfPurple
    }}
    >
    <html lang="en">
      <body className={inter.className}>
      {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
    </ClerkProvider>
  )
}
