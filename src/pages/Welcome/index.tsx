import { Inter } from 'next/font/google'
import CardPanel from '@Components/welcome/CardPanel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <CardPanel />
      <div className="fixed top-3/4 w-screen flex">
        <div className="m-auto rounded-md ease-linear duration-300 bg-red-100 hover:bg-red-200 hover:shadow-lg hover:shadow-red-100">
          {/* <button className="w-96 h-12">Enter Website</button> */}
        </div>
      </div>
    </main>
  )
}
