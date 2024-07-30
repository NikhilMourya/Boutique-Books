import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import HomePage from './page/HomePage';

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <HomePage />
      <Footer />
    </>
  );
}
