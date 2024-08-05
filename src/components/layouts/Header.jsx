import { Link } from 'react-router-dom';
import MainLogo from './../../assets/images/layouts/main-logo.png';
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about-us' },
  { text: 'Services', href: '/services' },
  { text: 'Our Methods', href: '/methods' },
  { text: 'Pricing', href: '/pricing' },
];

export default function Header() {
  return (
    <header className="container flex items-center justify-between mx-auto px-16 py-2">
      <Link to={'/'}>
        <img src={MainLogo} className="h-20" />
      </Link>
      <nav className="">
        <ul className="flex gap-x-10 items-center list-none">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:opacity-90 transition-all"
            >
              <Link to={item.href}>{item.text}</Link>
            </li>
          ))}
          <li className="cursor-pointer hover:bg-primary/90 transition-all bg-primary py-2 px-5 rounded-full">
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}
