import './globals.css'

export const metadata = {
  title: 'TT26W1 - Tech Trends 2026 Week 1',
  description: 'Weekly analysis of AI & technology trends - January 3-10, 2026',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
