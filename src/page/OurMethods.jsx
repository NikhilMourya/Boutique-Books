import React from 'react';
import M1 from '../assets/images/methods/1.png';
import M2 from '../assets/images/methods/2.png';
import M3 from '../assets/images/methods/3.png';
import M4 from '../assets/images/methods/4.png';
import M5 from '../assets/images/methods/5.png';
import M6 from '../assets/images/methods/6.png';
import H1 from '../components/H1';

const methods = [
  {
    title: 'Initial Consultation to understand your needs',
    img: M1,
    desc: 'Our initial conversation will explore your current need for bookkeeping, tax compliance services, business advisory and  financial operations assistance and discuss the ways that our staff bookkeepers can lighten your load and relieve unnecessary stress from your shoulders.  During this first meeting we will begin understanding your needs and pairing you with the best staff bookkeeper for your needs.',
  },
  {
    title: 'Gather information and meet your team',
    img: M2,
    desc: 'You will work with our team lead to determine what type of services would be of the most benefit to you and provide you with the ability to turn your focus to other aspects of your business.  Once it is determined what services you need you can rest assured, our team will take care of your bookkeeping and tax compliances as well as any tasks that need to be customized to your unique situation.',
  },
  {
    title: 'Onboarding with your staff bookkeeper',
    img: M3,
    desc: 'Once your subscription is chosen and you have opted in you will work closely with your team and we guide you through every step, from collecting necessary information and passwords to setting up secure portals for data transfer & storage. Your dedicated staff bookkeeper works closely with you, ensuring a smooth & personalized on-boarding experience tailored to your needs.',
  },
  {
    title: 'Recap meeting with your team lead',
    img: M4,
    desc: "We understand that a lot of activity is happening and we want to make sure that we aren't missing any details and that you are confident in your new team.  A recap meeting with our team lead once your onboarding activities are complete will happen to review your experience and confirm that all of the needs determined in your initial consultation have been communicated to and are being covered by your staff bookkeeper. ",
  },
  {
    title: 'Regular Communication',
    img: M5,
    desc: 'Your staff bookkeeper will be communicating with you regularly based on your preferred communication style.  You will continue to have regular meetings to review your financials so that you are confident and able to chase your goals with timely, accurate financial knowlege.​Your team lead will check in on you occasionally as well, just to be sure you are having a positive experience. ',
  },
  {
    title: 'Focus Shift',
    img: M6,
    desc: 'Trusting that your bookkeeping, tax compliance, financial operations and business advisory is now covered and you are receiving regular updates and detailed reports, you have the freedom to shift your focus to where you choose!',
  },
];
export default function OurMethods() {
  return (
    <main className="flex flex-col gap-y-24 py-24 pt-36">
      <section className="container mx-auto flex flex-col gap-y-10 md:gap-x-24 lg:px-16 items-center">
        <H1>How We Make It Happen?</H1>

        <p>
          At Boutique Books, we blend the precision of AI with the expertise of
          real human accountants to deliver top-notch accounting services. Our
          proven methods ensure accuracy, efficiency, and a personalized touch,
          making your financial management effortless and reliable.
        </p>
      </section>

      <section className="timelineContainer py-20 bg-black/80">
        {methods.map(({ title, desc, img }, idx) => (
          <div
            key={title}
            className="container p-10 w-3/4 mx-auto grid md:grid-cols-2 gap-y-5 justify-center text-white gap-x-20 items-center"
          >
            <section
              className={`rounded-lg grid text-black bg-white gap-3 place-items-center overflow-hidden ${
                idx % 2 == 0 && 'md:order-1'
              }`}
            >
              <img
                src={img}
                alt={title}
                className=" object-cover rounded-lg rounded-b-none"
              />
              <p className="w-full pb-3 font-bold">{title}</p>
            </section>
            <p className="text-justify">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
