import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/elements/navbar'
import { ContextProvider } from './context'

export const metadata: Metadata = {
  title: 'Simple Web Games by Casey Martin',
  description: 'These are three simple games to be enjoyed by anyone with a browser.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ContextProvider>
      <html lang='en'>
        <body className='overflow-hidden overflow-y-auto bg-body'>
          <Navbar />
          {children}
        </body>
      </html>
    </ContextProvider>
  )
}
