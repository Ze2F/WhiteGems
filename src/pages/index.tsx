import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Cardpanel from '@Components/welcome/CardPanel'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  useEffect(()=> {
    window.location.href = '/Welcome'
  }, [])

  return (
    <main>
    </main>
  )
}
