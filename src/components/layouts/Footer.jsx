import { Link } from 'react-router-dom';
import BOUTIQUE0 from '../../assets/images/footer/BOUTIQUE-0.png';
import BOUTIQUE1 from '../../assets/images/footer/BOUTIQUE-1.png';
import BOUTIQUE10 from '../../assets/images/footer/BOUTIQUE-10.png';
import BOUTIQUE11 from '../../assets/images/footer/BOUTIQUE-11.png';
import BOUTIQUE12 from '../../assets/images/footer/BOUTIQUE-12.png';
import BOUTIQUE2 from '../../assets/images/footer/BOUTIQUE-2.png';
import BOUTIQUE3 from '../../assets/images/footer/BOUTIQUE-3.png';
import BOUTIQUE4 from '../../assets/images/footer/BOUTIQUE-4.png';
import BOUTIQUE5 from '../../assets/images/footer/BOUTIQUE-5.png';
import BOUTIQUE6 from '../../assets/images/footer/BOUTIQUE-6.png';
import BOUTIQUE7 from '../../assets/images/footer/BOUTIQUE-7.png';
import BOUTIQUE8 from '../../assets/images/footer/BOUTIQUE-8.png';
import BOUTIQUE9 from '../../assets/images/footer/BOUTIQUE-9.png';
import Logo from '../../assets/images/layouts/logo.png';

import gsap from 'gsap';
import { useLayoutEffect } from 'react';
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about-us' },
  { text: 'Services', href: '/services' },
  { text: 'Our Methods', href: '/our-methods' },
  { text: 'Pricing', href: '/pricing' },
  { text: 'Contact Us', href: '/contact' },
];
const quickLinks = [
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: 'Terms of Service', href: '/terms-of-service' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#footer-img-container',
        start: 'top 50%',
        end: 'top 45%',
      },
    });

    t1.to('.boutique-img-logo', {
      opacity: 1,
      rotate: '0deg',
      duration: 1,
      y: -50,
      stagger: 0.1,
    });
  });

  return (
    <footer className="bg-primary grid gap-y-6 pb-8 relative z-50">
      <div className="grid grid-cols-1 justify-center sm:w-9/12 mx-auto sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 md:justify-evenly gap-y-6 py-16">
        <div className="flex md:-mt-5">
          <img src={Logo} width={150} className="mx-auto" />
        </div>
        <section className="flex flex-col justify-start text-center md:text-left gap-y-2">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="flex flex-col justify-start text-leftgap-y-2">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-90 transition-all"
              >
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col justify-start text-center md:text-left gap-y-2">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="flex flex-col justify-start gap-y-2">
            {quickLinks.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-90 transition-all"
              >
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col justify-start text-center md:text-left gap-y-2">
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <div className="flex flex-col justify-start gap-y-2">
            <p>
              <a
                href="mailto:hello@boutiquebooks.com"
                className="hover:underline"
              >
                hello@boutiquebooks.com
              </a>
            </p>
            <p>
              <a href="tel:+14082141798" className="hover:underline">
                +1 (408) 214-1798
              </a>
            </p>
          </div>
        </section>
      </div>
      <div
        id="footer-img-container"
        className="hidden px-10 lg:flex justify-center w-full"
      >
        <div className="flex justify-start gap-1 flex-row w-10/12">
          <img
            src={BOUTIQUE0}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0 border-black"
          />
          <img
            src={BOUTIQUE1}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE2}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE3}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE4}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE5}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE6}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE7}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <div className="w-10 h-10"></div>
          <img
            src={BOUTIQUE8}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE9}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE10}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE11}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
          <img
            src={BOUTIQUE12}
            className="block w-auto h-24 boutique-img-logo -rotate-12 opacity-0"
          />
        </div>
        {/* <img src={FooterLogo} className="block w-full" /> */}
      </div>

      <h6>© {year} by Boutique Books LLC.</h6>
    </footer>
  );
}
