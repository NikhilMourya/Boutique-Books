import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import AboutPage from './page/AboutPage';
import HomePage from './page/HomePage';
import PricingPage from './page/PricingPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
