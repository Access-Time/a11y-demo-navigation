import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Navigation A11y Test Suite | Next.js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
