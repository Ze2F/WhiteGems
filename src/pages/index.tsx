import Image from 'next/image'
import { Inter } from 'next/font/google'
import WelcomePage from '@/components/welcome/Welcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <WelcomePage />
    </main>
  )
}
