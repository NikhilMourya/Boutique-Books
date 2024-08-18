import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import useScrollToTop from './hooks/useScrollToTop';
import AboutPage from './page/AboutPage';
import HomePage from './page/HomePage';
import OurMethods from './page/OurMethods';
import PricingPage from './page/PricingPage';
import ServicesPage from './page/ServicesPage';

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from './components/Cursor';
import BlogDetailsPage from './page/BlogDetailPage';
import BlogPage from './page/BlogPage';
import NotFoundPage from './page/NotFoundPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useScrollToTop();
  // useLayoutEffect(() => {

  //   gsap.to('header',{
  //     backgroundColor:'black',
  //     duration:1.5,
  //     color:'white',
  //     ease:'back.out',
  //     scrollTrigger: {
  //       trigger: ".bg-dark-section",
  //       start: 'top 20%',
  //       scrub: 1,
  //       end: 'top -50%',
  //     }
  //   })

  // }, [])

  return (
    <>

      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-methods" element={<OurMethods />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogSlug" element={<BlogDetailsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
