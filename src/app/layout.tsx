import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raul Rodrigues',
  description: 'Desenvolvedor de Software e designer gráfico',
  openGraph: {
    title: 'Raul Rodrigues',
    description: 'Desenvolvedor de Software e designer gráfico',
    url: 'https://www.devluar.com',
    siteName: 'DevLuar',
    locale: 'pt-BR',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
