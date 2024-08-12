import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from './../../assets/images/layouts/main-logo.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about-us' },
  { text: 'Services', href: '/services' },
  { text: 'Our Methods', href: '/our-methods' },
  { text: 'Pricing', href: '/pricing' },
];

const loginSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 50 50"
  >
    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
  </svg>
);

const logoutSVG = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2933_24459)">
      <path
        d="M25 7.17188L7 25.1719"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M25 25.1719L7 7.17188"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_2933_24459">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.171875)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('header', {
        borderRadius: '0px',
        position: 'static',
        top: 'auto',
        boxShadow: 'none',
      });
      gsap.to('header', {
        borderRadius: '50px',
        duration: 0.5,
        position: 'fixed',
        top: '10',
        boxShadow:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        scrollTrigger: {
          trigger: 'header',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('max-sm:overflow-hidden');
    } else {
      document.body.classList.remove('max-sm:overflow-hidden');
    }
    return () => {
      document.body.classList.remove('max-sm:overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="fixed center top-0 z-20 w-full">
      <header className="bg-white w-10/12 flex items-center justify-between px-14 py-2 ">
        <Link to={'/'}>
          <img src={MainLogo} className="h-20 relative z-20" />
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
          <span className="absolute z-20 top-8">
            {' '}
            {!isOpen ? loginSVG : logoutSVG}
          </span>

          <ul
            className={`absolute top-0 pt-28 z-10 right-0 flex justify-start gap-y-8 transition-all ease-linear duration-200 w-full h-screen text-left bg-white flex-col gap-x-10 items-center list-none ${
              isOpen ? 'translate-x-0' : 'translate-x-[100vw]'
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer w-[65%] hover:opacity-90 transition-all"
                onClick={closeNav}
              >
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
            <li
              className="cursor-pointer w-[65%] text-center text-white hover:bg-primary/90 transition-all bg-primary py-2 px-5 rounded-full"
              onClick={closeNav}
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
