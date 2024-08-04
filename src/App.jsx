import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import HomePage from './page/HomePage';
import PricingPage from './page/PricingPage';
import ServicesPage from './page/ServicesPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
}
