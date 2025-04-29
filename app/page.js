import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Demos from '@/components/landing/Demos';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Marq from '@/components/landing/Marq';
import Navbar from '@/components/landing/Navbar';
import Pages from '@/components/landing/Pages';
import Show from '@/components/landing/Show';
import Testimonials from '@/components/landing/Testimonials';
import Script from 'next/script';
import Home1 from "@/app/home-personal/page"

export const metadata = {
  title: 'ReadyWeb-AiServices',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/landing-preview/css/preview-style.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
<Home1/>
  );
}
