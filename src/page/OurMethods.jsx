import React from 'react';
import { useLayoutEffect, useState, useEffect } from "react";
import M1 from '../assets/images/methods/1.png';
import M2 from '../assets/images/methods/2.png';
import M3 from '../assets/images/methods/3.png';
import M4 from '../assets/images/methods/4.png';
import M5 from '../assets/images/methods/5.png';
import M6 from '../assets/images/methods/6.png';
import MenWithLaptop from '../assets/images/methods/men-with-laptop.jpg';
import H1 from '../components/H1';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  ;


  useLayoutEffect(() => {
    let wrapper = document.querySelector("#timeline-wrappper");
    let wrppperheight = wrapper.offsetHeight;

    function getScrollAmount() {
      let timelineHeight = wrapper.scrollHeight + 100;
      return -(timelineHeight - window.innerHeight);
    }

    // if (window.innerWidth > 768) {
    let ctx = gsap.context(() => {
      // gsap.from('#timeline-wrapper', {
      //   width: '80%',
      //   transformOrigin: 'center center',
      //   scrollTrigger: {
      //     trigger: '#timeline-wrapper',
      //     start: 'top 40%',
      //     end: 'top 0%',
      //     scrub: 2,
      //   }
      // })
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#timeline-container',
          start: 'top 0%',
          end: () => `+=${getScrollAmount() * -1}`,
          scrub: 2,
          pin: true,
        }
      })

      t2.to('.overlay', {
        opacity: 0.7,
        duration: 0.1,
      }, 0)

      t2.to('#title-wrapper', {
        opacity: 0,
        duration: 0.1,
      }, 0)

      t2.fromTo('#timeline-wrappper', {
        opacity: 0,
        duration: 0.2,
      }, {
        opacity: 1,
        duration: 0.2,
      }, 0)

      t2.to(wrapper, {
        duration: 5,
        y: getScrollAmount,
      })
    });
    return () => ctx.revert();
    // }


  }, [])
  return (
    <main className="flex flex-col gap-y-24 pt-28 md:pt-36" id='our-methods-wrapper'>


      <section className="fixed z-20" id='title-wrapper'>
        <div className='w-9/12 bg-white rounded-2xl py-4 mx-auto flex flex-col gap-y-10 md:gap-x-24 lg:px-16 items-center justify-center'>
          <H1 className={'font-primary text-2xl'}>How We Make It Happen</H1>

          <p className='text-black text-sm md:text-lg font-semibold'>
            At Boutique Books, we blend AI-driven accuracy with personalized support from our expert team. Our streamlined approach ensures your books are always precise, compliant, and tailored to your business, making financial management effortless and worry-free.

          </p>
        </div>
      </section>

      <section className='relative mt-72 w-full' id='timeline-wrapper'>
        {/* <div className="relative overlay  mx-auto h-screen"> */}
        <div className="relative   " id='timeline-container'>
          <div className='overlay'></div>
          <div className=''>
            <img
              src={MenWithLaptop}
              alt=""
              id='fixed-img'
              className="absolute w-full h-screen object-cover -z-10 rounded-t-2xl border-red-300"
            />
            {!isMobile && (
              <section className="py-20 h-screen" id='timeline-wrappper'>
                {/* Extra timeline bar on top */}
                <div
                  className="container h-56 w-3/4 mx-auto flex gap-10  justify-center"
                >
                  <div className='overflow-hidden w-7/12 p-5'>
                    <section
                      className="rounded-lg text-black"
                    >

                    </section>
                  </div>
                  <div className="relative mx-4">
                    <div className="w-1 h-full bg-white"></div>
                  </div>

                  <div className='w-7/12 p-5 center' >
                  </div>
                </div>
                {/* Extra timeline bar on top */}

                {methods.map(({ title, desc, img }, index) => (
                  <div
                    key={title}
                    className={`container w-3/4 mx-auto flex gap-10  justify-center text-white ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className='w-7/12 p-5 relative'>
                      {/* <div className='absolute -right-14 bg-[#3d638a] h-1 w-12 top-52'></div> */}
                      <section
                        className="rounded-lg text-black bg-white "
                      >
                        <img
                          src={img}
                          alt={title}
                          className=" object-cover rounded-lg rounded-b-none"
                        />

                        <p className="w-full pb-3 font-bold font-primary">{title}</p>
                      </section>

                    </div>
                    <div className="relative mx-4">
                      {/* <div class="w-px bg-white h-full"></div> */}
                      <div className="w-1 h-full bg-white"></div>
                    </div>

                    <div className='w-7/12 p-5 center relative' >
                      <div className={`absolute  bg-white h-1 w-12 ${index % 2 == 0 ? '-left-14' : '-right-14'}`}></div>
                      <p className="text-justify font-article ">{desc}</p>
                    </div>
                  </div>
                ))}
                {/* Extra timeline bar on bottom */}
                <div
                  className="container h-56 w-3/4 mx-auto flex gap-10  justify-center"
                >
                  <div className='overflow-hidden w-7/12 p-5'>
                    <section
                      className="rounded-lg text-black"
                    >

                    </section>
                  </div>
                  <div className="relative mx-4">
                    <div className="w-1 h-full bg-white"></div>
                  </div>

                  <div className='w-7/12 p-5 center' >
                  </div>
                </div>
                {/* Extra timeline bar on bottom */}
              </section>
            )}


            {isMobile && (
              <section className="py-20 h-screen" id='timeline-wrappper'>
                {/* Extra timeline bar on top */}
                {/* <div
                  className="container h-56 w-3/4 mx-auto flex gap-10  justify-center"
                >
                  <div className='overflow-hidden w-7/12 p-5'>
                    <section
                      className="rounded-lg text-black"
                    >

                    </section>
                  </div>
                  <div className="relative mx-4">
                    <div className="w-1 h-full bg-[#3d638a]"></div>
                  </div>

                  <div className='w-7/12 p-5 center' >
                  </div>
                </div> */}
                {/* Extra timeline bar on top */}

                {methods.map(({ title, desc, img }, index) => (
                  <div
                    key={title}
                    className={`container w-full mx-auto flex gap-2  justify-start text-white flex-row`}
                  >

                    <div className="relative mx-2">
                      <div className="w-1 h-full bg-[#3d638a]"></div>
                    </div>


                    <div className='w-full flex-grow p-2 relative'>

                      <div className={`absolute  bg-[#3d638a] h-1 w-6 -left-4 top-32`}></div>
                      {/* <div className='absolute -right-14 bg-[#3d638a] h-1 w-12 top-52'></div> */}
                      <section
                        className="rounded-lg text-black bg-white mb-5"
                      >
                        <img
                          src={img}
                          alt={title}
                          className=" object-cover rounded-lg rounded-b-none"
                        />

                        <p className="w-full py-1 font-bold font-primary text-sm">{title}</p>
                      </section>
                      <div className='w-full center relative mb-10' >
                        <p className="text-left">{desc}</p>
                      </div>
                    </div>



                  </div>
                ))}
                {/* Extra timeline bar on bottom */}
                {/* <div
                  className="container h-56 w-3/4 mx-auto flex gap-10  justify-center"
                >
                  <div className='overflow-hidden w-7/12 p-5'>
                    <section
                      className="rounded-lg text-black"
                    >

                    </section>
                  </div>
                  <div className="relative mx-4">
                    <div className="w-1 h-full bg-[#3d638a]"></div>
                  </div>

                  <div className='w-7/12 p-5 center' >
                  </div>
                </div> */}
                {/* Extra timeline bar on bottom */}
              </section>
            )}


          </div>

        </div>
      </section>

    </main>
  );
}
