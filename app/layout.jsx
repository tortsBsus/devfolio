import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';


const sourceSerif4 = Source_Serif_4({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="peachy" className='scroll-smooth'>
      <head>
        <title>Meghana Rathanraj's Devfolio </title>
        <meta property="twitter:image" content="https://www.meghana.tech/assets/preview.png"></meta>   public\assets\preview.png

        <meta property="twitter:card" content="summary_large_image"></meta>   
        <meta property="twitter:title" content="Devfolio - Meghana Rathanraj's Developer Portfolio"></meta>
        <meta property="twitter:description" content="Showcasing Meghana's projects"></meta>

        <meta property="description" content="Discover the portfolio of Meghana Rathanraj, showcasing projects and expertise in web development."></meta>

        <meta property="og:image" content="https://www.meghana.tech/assets/preview.png"></meta>

        <meta property="og:site_name" content="Devfolio"></meta>
        <meta property="og:title" content="Devfolio - Meghana Rathanraj's Developer Portfolio"></meta>
        <meta property="og:description" content="Showcasing Meghana's projects"></meta>
        <meta property="og:url" content="https://www.meghana.tech/"></meta>





      </head>
      <body className={sourceSerif4.className}>
        {children}      
      </body>      
    </html>
  );
}
