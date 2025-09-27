import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'], // add the weights you need
})

export const metadata = {
  title: 'Luxury Homes - Premium Real Estate',
  description: 'Find your dream luxury home with our premium real estate services',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}
      </body>
    </html>
  )
}
