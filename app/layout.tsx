import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas Nemeth',
  description: 'Thomas is a backend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} relative bg-slate-200 text-gray-900`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[31rem] blur-[9rem] rounded-full sm:w-[68rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-34rem] h-[31rem] w-[50rem] -z-10 blur-[9rem] rounded-full sm:w-[68rem] md:left-[-33rem] lg:left-[-27rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
        <Toaster position="top-center" />
        </body>
    </html>
  )
}
