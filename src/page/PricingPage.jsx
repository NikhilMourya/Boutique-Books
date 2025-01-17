import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useState } from 'react';
import ModelImg from '../assets/images/home/female-with-laptop.png';
import ladyWithLaptopMobile from "../assets/images/lady_laptop_mobile.jpg";
import P1 from '../assets/images/pricing/P1-Icon.png';
import P2 from '../assets/images/pricing/P2-Icon.png';
import P3 from '../assets/images/pricing/P3-Icon.png';
import PlaceholderLogo from '../assets/images/pricing/placeholderLogo.png';
import H1 from '../components/H1';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    title: 'Expert Human Support',
    desc: 'Our team of seasoned finance professionals provides you with personalized support, ensuring that your unique financial needs are met. By combining the best of human expertise with the efficiency of AI, we offer a comprehensive and responsive service tailored to your business.',
    imgURL: P1,
  },
  {
    title: 'AI-Enhanced Accuracy',
    desc: 'Our cutting-edge AI technology delivers unparalleled precision in your bookkeeping processes. By minimizing errors and automating routine tasks, we save you valuable time and significantly reduce the stress associated with financial management.',
    imgURL: P2,
  },
  {
    title: 'Transparent Pricing',
    desc: 'We believe in clear and upfront pricing with no hidden fees. Our transparent pricing model allows you to understand exactly what you are paying for, enabling you to plan your finances with confidence and avoid unexpected costs.',
    imgURL: P3,
  },
];

const pricingTable = [
  { min: 0, max: 30000, standard: 395, plus: 449 },
  { min: 30001, max: 60000, standard: 495, plus: 595 },
  { min: 60001, max: 100000, standard: 700, plus: 975 },
  { min: 100001, max: 150000, standard: 875, plus: 1150 },
  { min: 150001, max: 200000, standard: 1050, plus: 1325 },
];
const MIN = pricingTable[0].min;
const MAX = pricingTable.slice(-1)[0].max;
const STEP = 500;

const price = (amt) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amt);
};

const getBookkeepingCost = (monthlyExpenses, isBookkeepingPlus = false) => {
  const pricing = pricingTable.find(
    ({ min, max }) => monthlyExpenses >= min && monthlyExpenses <= max
  );

  if (!pricing) return 'Invalid range';
  // console.log('pricing ', pricing);
  return isBookkeepingPlus ? pricing.plus : pricing.standard;
};

export default function PricingPage() {
  const [priceRange, setPriceRange] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const visibleItemsCount = 3; // Number of items to show before "View More"

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const bookkeepingServices = [
    "Comprehensive Bookkeeping",
    "Monthly Financial Review",
    "Cash Flow Forecasting",
    "Unlimited Phone & Email support",
    "Dedicated Account Manager",
    "Real time record-keeping of all financial accounts",
    "Monthly reconciliations of all accounts",
    "Dedicated Bookkeeper",
    "Unlimited email support",
    "Secure online portal storage",
    "Secure financial login and password maintenance",
    "One monthly phone call to tidy up expense and income tracking",
    "Quarterly financial reports"
  ];

  const bookkeepingServices2 = [
    "Accounts Payable",
    "Accounts Receivable - Invoicing",
    "Collection Calls - follow up on 30 day late pays",
    "Monthly Financial Review",
    "Officer Reasonable Comp Reports (S-Corp)",
    "Entity Compliance",
    "Capital Calls & Bank Management"
  ];


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#lady-section',
          start: 'top 20%',
          end: 'top 0%',
          // pin: true,
          // markers: true
        },
      });
      t1.to('#lady-section', {
        width: '100%',
        duration: 1,
      });
      t1.from('#bg-overlay', {
        opacity: 0,
        width: '120vw',
        height: '120vh',
        duration: 1,
      });
      t1.from(
        '.feature-icon0',
        {
          x: '-200px',
          y: '-200px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-icon1',
        {
          x: '200px',
          y: '-200px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-icon2',
        {
          x: '200px',
          y: '-200px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-title0',
        {
          x: '-200px',
          y: '-500px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-title1',
        {
          x: '200px',
          y: '300px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-title2',
        {
          x: '-200px',
          y: '-300px',
          opacity: 0,
          duration: 1,
        },
        0
      );

      t1.from(
        '.feature-desc0',
        {
          translateX: '-300px',
          translateY: '-300px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-desc1',
        {
          translateX: '300px',
          translateY: '300px',
          opacity: 0,
          duration: 1,
        },
        0
      );
      t1.from(
        '.feature-desc2',
        {
          translateX: '-300px',
          translateY: '-300px',
          opacity: 0,
          duration: 1,
        },
        0
      );
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);
  return (
    <main className="flex flex-col justify-between gap-12 lg:gap-24 pt-16 bg-white">
      <section className="container my-10 mx-auto px-5 flex flex-col items-center">
        <h1
          className="font-primary text-balance text-[1.4rem] sm:text-2xl md:text-4xl text-center"
          style={{ lineHeight: 1.5 }}
        >
          Transparent Pricing for <br className="hidden md:block" /> Hassle-Free
          Bookkeeping Solutions
        </h1>
      </section>

      <section className="max-md:px-10 px-5 md:px-16 sm:min-h-[400px] grid grid-cols-1 gap-y-16 gap-x-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
        <div className="card p-10 grid gap-y-5 items-center text-left md:gap-y-2 shadow-md border border-primary/40 shadow-primary rounded-3xl min-h-[400px]">
          <h3 className="font-semibold text-2xl">Essential Plan</h3>
          <p>For startups in the pre-revenue stage, just starting out.</p>
          <div className="w-full max-w-md mx-auto mb-5">
            <ul
              className={`overflow-hidden list-disc pl-6 transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-screen" : `max-h-[3rem]`
                }`}
            >
              {bookkeepingServices.map((item, index) => (
                <li key={index} className="p-1 border-gray-200 text-xs">
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={toggleExpanded}
              className="mt-4 text-[#3d638a] focus:outline-none"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          </div>
          <div className='min-h-44 flex flex-col gap-3 pt-2' >
            <div className="relative flex items-center my-4">
              <input
                value={priceRange}
                min={MIN}
                max={MAX}
                type="range"
                step={STEP}
                className="tw-range"
                onChange={(e) => setPriceRange(e.target.value)}
              />
              {/* Tick Marks */}
              <section className="absolute inset-0 flex justify-between px-1 pointer-events-none">
                <div className="price-range-tick _0"></div>
                <div className="price-range-tick _1"></div>
                <div className="price-range-tick _2"></div>
                <div className="price-range-tick _3"></div>
                <div className="price-range-tick _4"></div>
                <div className="price-range-tick _5"></div>
              </section>
            </div>
            <p>
              <span className="font-bold">{price(priceRange)}</span> in monthly
              expenses
            </p>
            <p>
              <span className="text-4xl font-bold">
                {price(getBookkeepingCost(priceRange))}
              </span>
              /mo billed annually
            </p>
            <Link to="/contact" >
              <button className="bg-[#3d638a] w-full self-end text-2xl py-2 rounded-lg text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="card p-10 grid gap-y-5 items-center text-left md:gap-y-2 shadow-md border border-primary/40 shadow-primary rounded-3xl min-h-[400px]">
          <div className='h-full flex flex-col justify-start gap-3' >
            <h3 className="font-semibold text-2xl">Premium Plan</h3>
            <p>For companies with refined needs, reflecting their high value.</p>
          </div>
          <div className="w-full max-w-md mx-auto mb-5">
            <h3 className=' font-medium text-lg'>Essential Plan + </h3>
            <ul
              className={`overflow-hidden list-disc pl-6 transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-screen" : `max-h-[3rem]`
                }`}
            >
              {bookkeepingServices2.map((item, index) => (
                <li key={index} className="p-1 border-gray-200 text-xs">
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={toggleExpanded}
              className="mt-4 text-[#3d638a] focus:outline-none"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          </div>
          <div className='h-full justify-end flex flex-col gap-3' >
            <div className="relative flex items-center my-4">
              <input
                value={priceRange}
                min={MIN}
                max={MAX}
                type="range"
                step={STEP}
                className="tw-range"
                onChange={(e) => setPriceRange(e.target.value)}
              />
              {/* Tick Marks */}
              <section className="absolute inset-0 flex justify-between px-1 pointer-events-none">
                <div className="price-range-tick _0"></div>
                <div className="price-range-tick _1"></div>
                <div className="price-range-tick _2"></div>
                <div className="price-range-tick _3"></div>
                <div className="price-range-tick _4"></div>
                <div className="price-range-tick _5"></div>
              </section>
            </div>
            <p>
              <span className="font-bold">{price(priceRange)}</span> in monthly
              expenses
            </p>
            <p>
              <span className="text-4xl font-bold">
                {price(getBookkeepingCost(priceRange, true))}

              </span>
              /mo billed annually
            </p>
            <Link to="/contact" >
              <button className="bg-[#3d638a] text-white w-full self-end text-2xl py-2 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="relative card p-10 grid gap-y-5 items-start text-left md:gap-y-2 shadow-md border border-primary/40 shadow-primary rounded-3xl min-h-[400px]">
          <h3 className="font-semibold text-2xl">Elite Plan</h3>
          <p>
            Craft a plan precisely suited to your business needs.
          </p>
          <p className="self-end md:relative md:top-10">
            <span className="text-2xl font-bold">Custom Pricing</span>
          </p>
          <Link to="/contact" className="self-end">
            <button className="bg-[#3d638a] text-white w-full self-end text-2xl py-2 rounded-lg">
              Contact Us
            </button></Link>

        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center relative md:min-h-[800px] mx-auto w-11/12 lg:w-10/12 overflow-hidden"
        id="lady-section"
      >
        <img
          src={ModelImg}
          className="sm:block hidden w-full h-full bg-cover md:bg-cover bg-center object-cover bg-no-repeat absolute brightness-50"
        />
        <img
          src={ladyWithLaptopMobile}
          className="block sm:hidden w-full h-full bg-cover md:bg-cover bg-center object-cover bg-no-repeat absolute brightness-50"
        />


        <div
          id="bg-overlay"
          className="w-[80%] grid rounded-2xl gap-y-5 p-4 sm:p-14 md:p-20 my-10  text-white mx-auto md:h-[648px] bg-black/60 drop-shadow-sm"
          style={{
            boxShadow: '0px 0px 11px 5px #060606cf',
          }}
        >
          <h2 className="text-2xl md:text-4xl text-center font-primary">
            Why Choose Us?
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-20">
            {whyChooseUs.map(({ title, desc, imgURL }, index) => (
              <div
                key={imgURL}
                className="text-left flex flex-col gap-y-5 justify-center items-center"
              >
                <img
                  src={imgURL}
                  className={`w-[50px] h-[50px] object-contain block mx-auto ${'feature-icon' + index}`}
                  alt={title}
                />
                <h3
                  className={`texl-xl text-center md:text-2xl ${'feature-title' + index}`}
                >
                  {title}
                </h3>
                <p
                  className={`leading-tight min-h-64 text-center whitespace-pre-line text-base ${'feature-desc' + index
                    }`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </section>
        </div>
      </section>

      {/* <section className="container mx-auto md:px-20 flex flex-col gap-y-20 ">
        <H1 className={'font-primary font-semibold'} >As seen in</H1>

        <div className="flex flex-wrap justify-center gap-20">
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
        </div>
      </section> */}
    </main>
  );
}
