import ModelImg from '../assets/images/home/female-with-laptop.png';
import { useState, useRef, useLayoutEffect } from "react";
import P1 from '../assets/images/pricing/P1-Icon.png';
import P2 from '../assets/images/pricing/P2-Icon.png';
import P3 from '../assets/images/pricing/P3-Icon.png';
import PlaceholderLogo from '../assets/images/pricing/placeholderLogo.png';
import H1 from '../components/H1';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    title: 'Expert Human Support',
    desc: 'Our team of seasoned accountants provides you with personalized support, ensuring that your unique financial needs are met. By combining the best of human expertise with the efficiency of AI, we offer a comprehensive and responsive service tailored to your business.',
    imgURL: P1,
  },
  {
    title: 'AI-Enhanced Accuracy',
    desc: 'Our cutting-edge AI technology delivers unparalleled precision in your accounting processes. By minimizing errors and automating routine tasks, we save you valuable time and significantly reduce the stress associated with financial management.',
    imgURL: P2,
  },
  {
    title: 'Transparent Pricing',
    desc: 'We believe in clear and upfront pricing with no hidden fees. Our transparent pricing model allows you to understand exactly what you are paying for, enabling you to plan your finances with confidence and avoid unexpected costs.',
    imgURL: P3,
  },
];
const pricingCarts = [
  {
    title: 'Essential Plan',
    desc: 'For startups in the pre-revenue stage, just starting out.',
    montlyRate: '$39,600',
    yearlyRate: '$499',
  },
  {
    title: 'Premium Plan',
    desc: 'For companies with refined needs, reflecting their high value.',
    montlyRate: '$39,600',
    yearlyRate: '$499',
  },
  {
    title: 'Elite Plan',
    desc: 'Craft a plan precisely suited to your business needs.',
    customPricing: 'Custom Pricing',
  },
];

export default function PricingPage() {

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#lady-section',
          start: 'top 20%',
          end: 'top 0%',
          // pin: true,
          // markers: true
        }
      })
      t1.to('#lady-section', {
        width: '100%',
        duration: 1,
      })
      t1.from('#bg-overlay',{
        opacity:0,
        width:'120vw',
        height:'120vh',
        duration:1,
      })
      t1.from('.feature-icon0', {
        x: '-200px',
        y: '-200px',
        opacity: 0,
        duration:1,
      }, 0);
      t1.from('.feature-icon1', {
        x: '200px',
        y: '-200px',
        opacity: 0,
        duration:1,
      }, 0)
      t1.from('.feature-icon2', {
        x: '200px',
        y: '-200px',
        opacity: 0,
        duration:1,
      }, 0)
      t1.from('.feature-title0', {
        x: '-200px',
        y: '-500px',
        opacity: 0,
        duration:1,
      }, 0)
      t1.from('.feature-title1', {
        x: '200px',
        y: '300px',
        opacity: 0,
        duration:1,
      }, 0)
      t1.from('.feature-title2', {
        x: '-200px',
        y: '-300px',
        opacity: 0,
        duration:1,
      }, 0)

      // t1.from('.feature-desc0', {
      //   x: '-300px',
      //   y: '-300px',
      //   opacity: 0,
      //   duration:1,
      // }, 0)
      // t1.from('.feature-desc1', {
      //   x: '300px',
      //   y: '300px',
      //   opacity: 0,
      //   duration:1,
      // }, 0)
      // t1.from('.feature-desc2', {
      //   x: '-300px',
      //   y: '-300px',
      //   opacity: 0,
      //   duration:1,
      // }, 0)

    });

    return () => ctx.revert(); // <- cleanup!

  }, [])
  return (
    <main className="flex flex-col gap-y-16 md:gap-y-24 py-16 md:py-24 bg-white">
      <section className="container my-10 mx-auto px-5 flex flex-col items-center">
        <h1
          className="font-primary text-3xl md:text-4xl text-center"
          style={{ lineHeight: 1.5 }}
        >
          Transparent Pricing for <br className="hidden md:block" /> Hassle-Free
          Accounting Solutions
        </h1>
      </section>

      <section className="px-5 md:px-16 sm:min-h-[400px] grid grid-cols-1 gap-y-16 gap-x-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {pricingCarts.map(
          ({ title, desc, montlyRate, yearlyRate, customPricing }, idx) => (
            <div
              className="card p-10 grid gap-y-5 items-center text-left md:gap-y-0 shadow-md border border-primary/40 shadow-primary rounded-3xl"
              key={title}
            >
              <h3 className="font-semibold text-2xl">{title}</h3>
              <p className={idx == 2 && 'self-start'}>{desc}</p>

              {montlyRate && (
                <p>
                  <span className="font-bold">{montlyRate}</span> in monthly
                  expenses
                </p>
              )}

              {yearlyRate && (
                <p>
                  <span className="text-4xl font-bold">{yearlyRate}</span>/mo
                  billed annually
                </p>
              )}

              {customPricing && (
                <p className="self-end">
                  <span className="text-2xl font-bold">{customPricing}</span>
                </p>
              )}
              <button className="bg-primary w-full self-end text-2xl py-2 rounded-lg">
                Contact Us
              </button>
            </div>
          )
        )}
      </section>

      <section class="flex flex-col justify-center items-center relative md:min-h-[800px] mx-auto w-10/12" id='lady-section'>
        <img
          src={ModelImg}
          className="w-full h-full object-cover absolute brightness-50"
        />

        <div
          id='bg-overlay'
          className="w-[80%] grid rounded-2xl gap-y-5 p-14 md:p-20 my-10  text-white mx-auto md:h-[648px] bg-black/60 drop-shadow-sm"
          style={{
            boxShadow: '0px 0px 11px 5px #060606cf',
          }}
        >
          <h2 className="text-2xl md:text-4xl text-center font-primary">Why Choose Us?</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-20">
            {whyChooseUs.map(({ title, desc, imgURL }, index) => (
              <div
                key={imgURL}
                className="text-left flex flex-col gap-y-5 justify-center "
              >
                <img
                  src={imgURL}
                  className={`w-[50px] block mx-auto ${'feature-icon' + index}`}
                  alt={title}
                />
                <h3 className={`texl-xl md:text-2xl ${'feature-title' + index}`}>{title}</h3>
                <p className={`leading-tight text-base ${'feature-desc'+index}`}>{desc}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="container mx-auto md:px-20 flex flex-col gap-y-20">
        <H1>As seen in</H1>

        <div className="flex flex-wrap justify-center gap-20">
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
          <img src={PlaceholderLogo} className="block mx-auto" />
        </div>
      </section>
    </main>
  );
}
