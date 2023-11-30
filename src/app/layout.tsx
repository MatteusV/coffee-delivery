import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header'

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'E-commerce of coffee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className={` bg-background`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
