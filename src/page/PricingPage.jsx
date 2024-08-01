import ModelImg from '../assets/images/home/female-with-laptop.png';
import P1 from '../assets/images/pricing/P1-Icon.png';
import P2 from '../assets/images/pricing/P2-Icon.png';
import P3 from '../assets/images/pricing/P3-Icon.png';
import PlaceholderLogo from '../assets/images/pricing/placeholderLogo.png';

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
  return (
    <main className="flex flex-col gap-y-16 py-16">
      <section className="flex flex-col items-center">
        <h2 className="text-5xl text-center">
          Transparent Pricing for Hassle-Free Accounting Solutions
        </h2>
      </section>

      <section className="px-16 sm:min-h-[400px] grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 justify-evenly">
        {pricingCarts.map(
          ({ title, desc, montlyRate, yearlyRate, customPricing }, idx) => (
            <div
              className="card grid items-center text-left gap-y-0 shadow-md border border-primary/40 shadow-primary rounded-3xl"
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

      <section class="flex flex-col justify-center items-center relative min-h-[801px] my-20">
        <img src={ModelImg} className="w-full absolute brightness-50" />

        <div
          className="w-[80%] grid rounded-2xl p-20  text-white mx-auto md:h-[648px] bg-black/60 drop-shadow-sm"
          style={{
            boxShadow: '0px 0px 11px 5px #060606cf',
          }}
        >
          <h2 className="text-5xl text-center">Why Choose Us?</h2>
          <section className="flex gap-20">
            {whyChooseUs.map(({ title, desc, imgURL }) => (
              <div
                key={imgURL}
                className="text-left flex flex-col gap-y-5 justify-center"
              >
                <img
                  src={imgURL}
                  className="w-[80px] block mx-auto"
                  alt={title}
                />
                <h3 className="text-2xl">{title}</h3>
                <p className="leading-tight">{desc}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="container mx-auto md:px-20 flex flex-col gap-y-20 py-20">
        <h2 className="text-5xl text-center">As seen in</h2>

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
