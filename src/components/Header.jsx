import MainLogo from '../assets/imgs/main-logo.png';
export default function Header() {
  return (
    <header className="container flex items-center justify-between mx-auto px-16 py-2">
      <img src={MainLogo} className="h-20" />
      <nav className="">
        <ul className="flex gap-x-10 items-center list-none">
          <li className="cursor-pointer hover:opacity-90 transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:opacity-90 transition-all">
            Services
          </li>
          <li className="cursor-pointer hover:opacity-90 transition-all">
            Our Methods
          </li>
          <li className="cursor-pointer hover:opacity-90 transition-all">
            Pricing
          </li>
          <li className="cursor-pointer hover:bg-primary/90 transition-all bg-primary py-2 px-5 rounded-full">
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}
