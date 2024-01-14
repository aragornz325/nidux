import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Clon de twitter',
  description: 'Generado moviendo las manitas'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}
