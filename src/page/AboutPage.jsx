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
import MarcDiller from '../assets/images/about/Marc_Diller.png';
import Breana from '../assets/images/about/Breana.jpg'
// import Sharon from '../assets/images/about/Sharon.JPEG'
import TeamWorkImg from '../assets/images/about/Team-Work.png';
import WomenEmpowermentImg from '../assets/images/about/Women-Empowerment.png';
import H1 from '../components/H1';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const paragraphs = [
  "Boutique Books was born from a passion for delivering exceptional service and a desire to revolutionize the bookkeeping industry. After over 25 years in the field, I found myself frustrated with the traditional hourly billing model. It often left clients hesitant to seek the services they truly needed—either because they didn't fully understand the value or simply couldn't afford extra hours. I knew this approach wasn't allowing me to offer the full support my clients required, especially when issues like compliance arose.",
  "I realized it was time for a change—one that prioritized client satisfaction and removed the barriers to providing comprehensive service. The solution came in the form of a subscription-based model, which allowed us to deliver all-inclusive bookkeeping without worrying about hourly rates or unexpected fees. This change immediately resonated with clients, as it gave them a predictable monthly cost they could budget for, while allowing us to focus on their long-term success.",
  "For example, one client had fallen behind on state corporate compliance for three years. Under the hourly model, they had been unwilling to pay for the extra time needed to address it. But with our subscription service, we handled the entire process without any additional fees, getting them reinstated with the state. This model has empowered us to focus on what's best for our clients, without being restricted by cost concerns.",
  "By integrating tax services, we ensure that our clients' books are always in order, allowing us to help them make proactive financial decisions throughout the year. Without proper bookkeeping in place, tax season is simply a reporting of past activity—there's no way to make changes that could benefit the client at that point. Now, we can offer ongoing guidance to help optimize their finances, rather than simply reporting on what has already occurred.",
  "Today, Boutique Books continues to grow, fueled by a commitment to innovation and excellence. We are excited to expand our reach, helping more small business owners achieve their dreams through reliable, value-driven bookkeeping and tax services. Our mission is simple: to deliver bookkeeping and tax solutions that pay for themselves through the value we provide."
];

const coreValues = [
  { title: 'Collaboration', imgUrl: CollaborationImg, desc: "At Boutique Books, collaboration is key to delivering the highest level of service. Both my team and I work closely with our clients to create a well-rounded experience, drawing on the diverse expertise of each professional on the team. This collaborative approach ensures that we can tailor our services to meet the unique needs of each business, resulting in more effective and personalized bookkeeping solutions. By combining our collective knowledge, we can offer more strategic, comprehensive support." },
  { title: 'Innovation', imgUrl: InnovationImg, desc: "We believe that innovation is essential to staying ahead in the rapidly evolving world of bookkeeping and tax services. Beyond our subscription model, we are incorporating AI technology to handle routine tasks, freeing up our team to focus on what matters most—our clients' financial strategies and ensuring their compliance needs are fully met. While AI supports efficiency, we remain committed to the human touch that provides value through personalized, thoughtful service." },
  { title: 'Personal Developement', imgUrl: PersomalDevelopementImg, desc: "Personal growth is central to our success at Boutique Books, both for myself and my team. We ensure ongoing professional development by adhering to annual continuing education requirements, which keep us at the top of our field in bookkeeping and tax compliance. Beyond technical training, we encourage skill-building that helps us better serve our clients, empowering us to stay sharp, adapt to changes, and continuously elevate the quality of service we provide." },
  { title: 'Women Empowerment', imgUrl: WomenEmpowermentImg, desc: "As a woman in business, I understand the challenges that can arise when navigating entrepreneurship, especially in rural or solo-practitioner environments. At Boutique Books, we are committed to empowering women in business, providing the resources, support, and services they need to succeed. Whether through education, networking, or sharing insights in our blog, we aim to uplift women as they grow their businesses, offering a strong foundation to support their journey." },
  { title: 'Team Work', imgUrl: TeamWorkImg, desc: "Teamwork is the backbone of how we operate at Boutique Books. Each client works with a dedicated team member who gets to know their business inside and out, but the entire team is familiar with all client accounts. This ensures that if one person is unavailable, another can step in seamlessly. Strong teamwork enhances both the quality of service and the client experience, fostering trust and consistency in every interaction." },
  { title: 'Relationships', imgUrl: RelationshipsImg, desc: "At the heart of Boutique Books are the relationships we build with our clients. A successful relationship is one where clients feel comfortable reaching out to us—not just when there's a problem, but to share their wins and successes. We value the referrals we receive, as they are a testament to the trust our clients place in us. When our clients speak highly of us without being asked, it reflects our commitment to building strong, lasting relationships based on trust and integrity." },
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
    desc: "At Boutique Books, I don't just crunch numbers — I work with you to make managing your finances easier and more rewarding. With years of experience in tax and bookkeeping, I've helped individuals and businesses streamline their financial processes while saving money along the way. I take pride in bringing a down-to-earth, approachable style to everything I do. I know taxes and bookkeeping can seem complicated, but my goal is to make it feel simple and stress-free for you. I love getting to know each client's unique needs and offering practical solutions that actually make a difference. When we work together, you can expect a hands-on, personalized approach tailored to your specific situation. I'm here to keep your finances organized and make sure more of your hard-earned money stays where it belongs—in your pocket. Let's connect and take the hassle out of your financial journey today!",
    imgURL: MarcDiller,
  },
  {
    id: 6,
    name: 'Breana Gonzalez',
    role: 'Customer Success Coordinator',
    desc: "Meet Breana, our dedicated Customer Success Coordinator here at Boutique Books! With over 10 years of customer service experience, Breana is passionate about keeping our office running smoothly and ensuring you're connected with the best bookkeepers and tax preparers. She's your go-to for all things client communication and loves making sure your needs are met with care and expertise. When she's not assisting clients, Breana is deeply involved with her local church, where she's been a part of the community for 27 years. Fun fact: it's where she met her husband! They've been happily married for two years and recently welcomed an adorable cat into their family. In her free time, Breana enjoys drawing, traveling with her husband, and finding new ways to give back.",
    imgURL: Breana,
  },
];
export default function AboutPage() {
  const [paras, setParas] = useState(paragraphs);
  const [teamImg, setTeamImg] = useState(team[0].imgURL);
  const [activeIndex, SetActiveIndex] = useState(0);

  useEffect(() => {
    let paras = document.querySelector('.horizontal-para');


    function getScrollAmount() {
      let parasWidth = paras.scrollWidth + 100;
      return -(parasWidth - window.innerWidth);
    }

    if (window.innerWidth > 768) {
      paras.style.paddingLeft = '300px';
      let ctx = gsap.context(() => {
        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.horizontal-para-wrapper',
            start: 'top 60%',
            end: () => `+=${getScrollAmount() * -0.8}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });


        t1.to(paras, {
          // x: getScrollAmount,
          x: () => getScrollAmount() * 1,
          ease: 'none',
        });

        let t2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.about-value',
            start: 'top 30%',
            end: 'top 0%',
            scrub: 3,
          },
        });

        t2.from('.title-container', {
          opacity: 0,
          translateY: '70%',
        });
        t2.from('.title-container1', {
          translateY: '70%',
          opacity: 0,
          delay: 2,
        });
      });
      return () => ctx.revert();

    }
    else {

      let ctx = gsap.context(() => {
        gsap.from('.title-container-sm',
          {
            opacity: 0,
            translateY: '30%',
            scrollTrigger: {
              trigger: '.about-value',
              start: 'top 40%',
              end: 'top 20%',
              scrub: 3,
            },
          });
      })
      return () => ctx.revert();
    }



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
          <div className="lg:ml-20 lg:rounded-tl-[50px] flex flex-col md:flex-row horizontal-para">
            {paras.map((para, index) => (
              <div className={`flex-shrink-0 w-full md:w-[50%] p-5 bg-primary ${index == 0 ? 'md:rounded-tl-3xl' : index == paras.length ? 'pr-12' : ''}`} key={index}>
                <p className="text-white text-left text-base md:text-base">{para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="z-20 relative bg-primary py-14 px-5 md:px-24 text-white about-value">
        <div className=''>
          <H1 className={'my-14 font-primary'}>Our Core Values</H1>
          <div className="title-container hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreValues.slice(0, 3).map(({ title, imgUrl, desc }) => (
                <div
                  key={imgUrl}
                  className="flex w-11/12 lg:w-full mx-auto flex-col space-y-2 p-5 rounded-2xl bg-white"
                  style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
                >
                  <img src={imgUrl} className="w-full rounded-lg" />
                  <span className="text-black text-lg text-left mt-2">
                    {title}
                  </span>
                  <p className="text-black text-left text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 title-container1 hidden ">
            {coreValues.slice(3, coreValues.length).map(({ title, imgUrl, desc }) => (
              <div
                key={imgUrl}
                className="flex w-11/12 lg:w-full mx-auto flex-col space-y-2 p-5 rounded-2xl bg-white"
                style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
              >
                <img src={imgUrl} className="w-full rounded-lg" />
                <span className="text-black text-lg text-left mt-2">
                  {title}
                </span>
                <p className="text-black text-left text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5 md:hidden title-container-sm">
            {coreValues.map(({ title, imgUrl }) => (
              <div
                key={imgUrl}
                className="flex w-full lg:w-full mx-auto flex-col space-y-2 p-2 rounded-2xl bg-white"
                style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
              >
                <img src={imgUrl} className="w-full rounded-lg" />
                <span className="text-black text-sm text-center mt-2">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="z-20 relative md:container w-full md:mx-auto py-10 md:p-16 bg-white">
        <H1 className={'font-primary text-2xl md:text-6xl'}>Meet the team</H1>
        <div className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-5 md:gap-y-10 items-center justify-between pt-5 md:pt-10">
          <div className="w-full flex flex-col border-t border-b">
            {team.map(({ id, name, role, imgURL, desc }, index) => (
              <div
                className="grid grid-cols-[5%,40%,50%] md:grid-cols-[8%,55%,37%] lg:grid-cols-[15%,45%,40%] cursor-pointer group hover:bg-primary px-5 transition-all ease-linear duration-300 min-h-16 text-left items-center justify-between border-t border-b"
                key={id}
                onMouseEnter={() => { setTeamImg(imgURL); SetActiveIndex(index) }}
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
                {
                  activeIndex == index && (<div className='col-span-3 p-3' >
                    <p className='hover:text-white text-gray-600 text-base' >{desc}</p>
                  </div>)
                }
              </div>
            ))}
          </div>
          <div className="flex justify-center place-items-center">
            <img src={teamImg} className='h-96 w-52 object-contain rounded-md' />
          </div>
        </div>
      </section>
    </main>
  );
}
