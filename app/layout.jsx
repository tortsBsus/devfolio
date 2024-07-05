import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"


const sourceSerif4 = Source_Serif_4({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="peachy" className='scroll-smooth'>
      <head>
        <title>Meghana Rathanraj's Devfolio </title>        
      </head>
      <body className={sourceSerif4.className}>
        <Analytics>
        {children} 
        </Analytics>     
      </body>      
    </html>
  );
}
