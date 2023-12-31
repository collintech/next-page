import '../styles/global.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ weight: ['200', '400', '600', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
