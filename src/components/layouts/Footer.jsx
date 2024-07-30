import FooterLogo from '../../assets/images/layouts/footer-logo.png';
import Logo from '../../assets/images/layouts/logo.png';

const navigation = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Our Methods', href: '/methods' },
  { text: 'Pricing', href: '/pricing' },
  { text: 'Contact Us', href: '/contact' },
];
const quickLinks = [
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: 'Terms of Service', href: '/terms-of-service' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary grid gap-y-6 pb-8">
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 md:justify-evenly py-16">
        <img src={Logo} width={150} className="block mx-auto md:-mt-5" />
        <section className="flex flex-col justify-start text-left gap-y-2">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="flex flex-col justify-start text-leftgap-y-2">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-90 transition-all"
              >
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col justify-start text-left gap-y-2">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="flex flex-col justify-start text-left gap-y-2">
            {quickLinks.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-90 transition-all"
              >
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col justify-start text-left gap-y-2">
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <div className="flex flex-col justify-start text-left gap-y-2">
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
      <div className="container px-10 flex justify-center pl-16">
        <img src={FooterLogo} className="block w-full" />
      </div>

      <h6>© {year} by Boutique Books LLC.</h6>
    </footer>
  );
}
