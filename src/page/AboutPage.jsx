import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/images/about/about.png';
import CollaborationImg from '../assets/images/about/Collaboration.png';
import InnovationImg from '../assets/images/about/Innovation.png';
import PersomalDevelopementImg from '../assets/images/about/Persomal-Developement.png';
import RelationshipsImg from '../assets/images/about/Relationships.png';
import Team1 from '../assets/images/about/team-1.png';
import Team2 from '../assets/images/about/team-2.png';
import Team3 from '../assets/images/about/team-3.png';
import Team4 from '../assets/images/about/team-4.png';
import TeamWorkImg from '../assets/images/about/Team-Work.png';
import WomenEmpowermentImg from '../assets/images/about/Women-Empowerment.png';
import H1 from '../components/H1';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const paragraphs = [
  'Boutique Books was born from a passion for delivering unparalleled service and a deep-seated desire to revolutionize the bookkeeping industry.  With over 25 years of experience serving customers in the bookkeeping realm, I found myself at a crossroads.  The traditional hourly billing model was not only cumbersome and time-consuming but also counterproductive for both myself and my customers.',
  'The incessant tracking of hours and tedious billing processes detracted from the quality of service I aimed to provide. It hindered my ability to fully engage with customers and offer the comprehensive support they truly needed.  It became abundantly clear that a paradigm shift was necessary—a shift towards a model that prioritized efficiency, value, and client satisfaction above all else.',
  "The concept of a subscription-based business model presented itself as the solution I had been searching for. It offered the opportunity to break free from the shackles of hourly billing and instead provide clients with a seamless, all-inclusive bookkeeping experience.  I immediately recognized the immense value this model could bring to both my customers and my team. It wasn't just about abandoning outdated practices; it was about embracing a new approach—one that would empower us to deliver a higher level of service and cater to our customers' needs in a more holistic manner.",
  "And so, Boutique Books was born.  Armed with a vision to transform the bookkeeping landscape, I set out to implement this innovative model.  By offering full-service bookkeeping on a subscription basis, we eliminated the hassle of hourly billing and ushered in a new era of efficiency and simplicity.   But we didn't stop there.",
  'Recognizing the symbiotic relationship between bookkeeping and tax compliance, we seamlessly integrated tax services into our offering.  With our meticulous bookkeeping ensuring accuracy and reliability, completing annual tax returns for our clients became a natural extension of our services.  We also took it a step further by assisting clients with their tax payments throughout the year, ensuring compliance and peace of mind every step of the way.',
  'Today, Boutique Books stands as a testament to innovation, dedication, and a commitment to excellence.  Our journey is fueled by a relentless pursuit of providing unparalleled support to our clients and empowering them to thrive in an ever-evolving business landscape.  As we continue to evolve and grow, our mission remains unchanged—to redefine bookkeeping and tax services, one subscription at a time.',
];

const coreValues = [
  { title: 'Collaboration', imgUrl: CollaborationImg },
  { title: 'Innovation', imgUrl: InnovationImg },
  { title: 'Personal Developement', imgUrl: PersomalDevelopementImg },
  { title: 'Women Empowerment', imgUrl: WomenEmpowermentImg },
  { title: 'Team Work', imgUrl: TeamWorkImg },
  { title: 'Relationships', imgUrl: RelationshipsImg },
];

const team = [
  {
    id: 1,
    name: 'Tajni Diller',
    role: 'Founder and Senior Business Advisor',
    imgURL: Team1,
  },
  {
    id: 2,
    name: 'Raquel Pryor',
    role: 'Tax & Bookkeeping Specialist ',
    imgURL: Team2,
  },
  {
    id: 3,
    name: 'Savannah Clarke',
    role: 'Tax & Bookkeeping Specialist',
    imgURL: Team3,
  },
  {
    id: 4,
    name: 'Sharon Teraji',
    role: 'Tax & Bookkeeping Specialist',
    imgURL: Team4,
  },
  {
    id: 5,
    name: 'Marc Diller',
    role: 'Tax Specialist',
    imgURL: Team4,
  },
  {
    id: 6,
    name: 'Breana Gonzalez',
    role: 'Customer Success Coordinator',
    imgURL: Team4,
  },
];
export default function AboutPage() {
  const [paras, setParas] = useState(paragraphs);
  const [teamImg, setTeamImg] = useState(team[0].imgURL);

  useEffect(() => {
    let paras = document.querySelector('.horizontal-para');
    paras.style.paddingLeft='300px';

    function getScrollAmount() {
      let parasWidth = paras.scrollWidth + 100;
      return -(parasWidth - window.innerWidth);
    }

    let ctx = gsap.context(() => {
      // let t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.horizontal-para-wrapper',
      //     start: 'top 60%',
      //     end: () => `+=${getScrollAmount() * -1}`,
      //     pin: true,
      //     pinSpacing: true,
      //     scrub: 1,
      //     invalidateOnRefresh: true,
      //   },
      // });


      // t1.to(paras, {
      //   x: getScrollAmount,
      //   ease: 'none',
      // });

      // let t2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.about-value',
      //     start: 'top 30%',
      //     end: 'top 0%',
      //     scrub: 3,
      //   },
      // });

      // t2.from('.title-container', {
      //   opacity: 0,
      //   translateY: '70%',
      // });
      // t2.from('.title-container1', {
      //   translateY: '70%',
      //   opacity: 0,
      //   delay: 2,
      // });
    });
    return () => ctx.revert(); 

    
  }, []);

  return (
    <main className="md:pt-28 pt-20 bg-white">
      <section
        id="top-sec"
        className="z-10 md:fixed lg:top-16 my-5 mx-auto flex flex-col-reverse lg:flex-row gap-y-10 md:gap-x-24 lg:px-40 items-center"
      >
        <img
          src={AboutImg}
          className="sm:h-40 md:h-52 lg:h-60 w-9/12 mx-auto "
          alt=""
        />
        <H1 className="font-primary lg:text-6xl flex lg:flex-col space-x-3 lg:-space-x-5 gap-y-5">
          <span className="font-primary">Origin</span>{' '}
          <span className="font-primary">Story</span>
        </H1>
      </section>

      <div className="relative z-20">
        <div className="horizontal-para-wrapper relative overflow-hidden">
          <div className="lg:ml-20 lg:rounded-tl-[50px] flex  horizontal-para">
            {paras.map((para, index) => (
              <div className={`flex-shrink-0 w-[50%] p-5 bg-primary ${index==0 ? 'rounded-tl-3xl' : index==paras.length ? 'pr-12' : ''}` } key={index}>
                <p className="text-white text-left text-lg">{para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="z-20 relative bg-primary py-14 px-5 md:px-24 text-white about-value">
        <div>
          <div className="title-container">
            <H1 className={'my-14 font-primary'}>Our Core Values</H1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreValues.slice(0, 3).map(({ title, imgUrl }) => (
                <div
                  key={imgUrl}
                  className="flex w-11/12 lg:w-full mx-auto flex-col space-y-2 p-5 rounded-2xl bg-white"
                  style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
                >
                  <img src={imgUrl} className="w-full rounded-lg" />
                  <span className="text-black text-lg text-left mt-2">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 title-container1">
            {coreValues.slice(3, coreValues.length).map(({ title, imgUrl }) => (
              <div
                key={imgUrl}
                className="flex w-11/12 lg:w-full mx-auto flex-col space-y-2 p-5 rounded-2xl bg-white"
                style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
              >
                <img src={imgUrl} className="w-full rounded-lg" />
                <span className="text-black text-lg text-left mt-2">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="z-20 relative md:container w-full md:mx-auto lg:px-16 py-16 bg-white">
        <H1 className={'font-primary'}>Meet the team</H1>
        <div className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-10 items-center justify-between pt-10">
          <div className="w-full flex flex-col border-t border-b">
            {team.map(({ id, name, role, imgURL }) => (
              <div
                className="grid grid-cols-[8%,55%,37%] lg:grid-cols-[15%,45%,40%] cursor-pointer group hover:bg-primary px-5 transition-all ease-linear duration-300 min-h-16 text-left items-center justify-between border-t border-b"
                key={id}
                onMouseEnter={() => setTeamImg(imgURL)}
              >
                <h4 className="text-sm sm:text-lg lg:text-3xl group-hover:text-white text-[#8D8D8D]">
                  {id.toString().padStart(2, '0')}
                </h4>
                <h4 className="font-primary text-sm sm:text-lg lg:text-2xl group-hover:text-white">
                  {name}
                </h4>
                <h5 className="text-sm sm:text-lg lg:text-xl group-hover:text-white text-[#8D8D8D]">
                  {role}
                </h5>
              </div>
            ))}
          </div>
          <div className="flex place-items-center">
            <img src={teamImg} />
          </div>
        </div>
      </section>
    </main>
  );
}
