import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import {shadesOfPurple,dark} from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"



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
          <div className='min-h-screen mx-auto max-w-7xl sm:max-w-full'>
        {children}
        </div>
        {/* </ThemeProvider> */}
        <Toaster richColors position="bottom-center" expand={false}/>
      </body>
    </html>
    </ClerkProvider>
  )
}
