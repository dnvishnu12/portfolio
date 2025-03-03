import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - DN Vishnu',
    default: 'DN Vishnu - Software Developer, Innovator, and Tech Explorer',
  },
  description:
    'I’m Vishnu, a software developer passionate about building scalable products and seamless user experiences. From automation to web platforms, I craft solutions that enhance efficiency and usability.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
