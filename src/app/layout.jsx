import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - DN Vishnu',
    default: 'DN Vishnu',
  },
  description:
    'I’m a founding software engineer passionate about building end-to-end AI-powered applications, intelligent assistants, and no-code/low-code solutions. I specialize in creating scalable products that simplify complex workflows and enhance user experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" />
        <meta
          name="google-site-verification"
          content="6IRQehazoMz1AGperqrebzUxl-YP_2-YLW7udzGNf6k"
        />
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
