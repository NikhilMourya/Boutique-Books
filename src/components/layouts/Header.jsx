import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from './../../assets/images/layouts/main-logo.png';

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about-us' },
  { text: 'Services', href: '/services' },
  { text: 'Our Methods', href: '/methods' },
  { text: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      gsap.to('header', {
        borderRadius: '50px',
        duration: 0.5,
        position: 'fixed',
        top: '10',
        boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        scrollTrigger: {
          trigger: 'header',
          start: 'top -10%',
        }
      })
    });

    return () => ctx.revert(); // <- cleanup!

  }, [])

  return (
    <div className='fixed center top-0 z-20 w-full'>
      <header className="bg-white w-10/12 flex items-center justify-between px-14 py-2 ">
        <Link to={'/'}>
          <img src={MainLogo} className="h-20" />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden lg:block">
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

        {/* Moblie nav */}
        <nav className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'open' : 'close'}
        </nav>
      </header>
    </div>

  );
}
