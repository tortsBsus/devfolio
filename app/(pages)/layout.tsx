
import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import Navbar from '../components/Navbar';

const sourceSerif4 = Source_Serif_4({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function ProtectedLayout({ children }:{children:React.ReactNode}) {
  return (
    <>
    <div className='sticky z-50 md:top-[85%] w-screen'>  <Navbar/> </div>  
        {children}
    </>
  );
}
