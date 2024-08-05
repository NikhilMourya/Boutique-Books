import React, { useState } from 'react';
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
  { title: 'Persomal Developement', imgUrl: PersomalDevelopementImg },
  { title: 'Women Empowerment', imgUrl: WomenEmpowermentImg },
  { title: 'Team Work', imgUrl: TeamWorkImg },
  { title: 'Relationships', imgUrl: RelationshipsImg },
];

const team = [
  {
    id: 1,
    name: 'Tajni Diller',
    role: 'Founder & CEO',
    imgURL: Team1,
  },
  {
    id: 2,
    name: 'Raquel Pryor',
    role: 'Team Lead',
    imgURL: Team2,
  },
  {
    id: 3,
    name: 'Savannah Clarke',
    role: 'Staff Bookkeeper',
    imgURL: Team3,
  },
  {
    id: 4,
    name: 'Sharon Teraji-Cole',
    role: 'Staff Bookkeeper',
    imgURL: Team4,
  },
];
export default function AboutPage() {
  const [paras, setParas] = useState(paragraphs);
  const [teamImg, setTeamImg] = useState(team[0].imgURL);
  return (
    <main className="flex flex-col gap-y-24 py-24">
      <section className="container mx-auto flex flex-col-reverse lg:flex-row gap-y-10 md:gap-x-24 lg:px-16 items-center">
        <img src={AboutImg} alt="" />
        <H1 className="lg:text-8xl flex lg:flex-col space-x-3 lg:-space-x-5 gap-y-5">
          <span>Origin</span> <span>Story</span>
        </H1>
      </section>

      <div className="bg-primary w-full overflow-x-auto flex gap-5">
        {paras.map((para, index) => (
          <div className="flex-shrink-0 w-[70%] max-h-full p-5" key={index}>
            <p className="text-white">{para}</p>
          </div>
        ))}
      </div>

      <section className="bg-primary flex flex-col gap-y-10 md:gap-y-16 py-16 px-5 md:px-24 text-white">
        <H1>Our Core Values</H1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map(({ title, imgUrl }) => (
            <div
              key={imgUrl}
              className="flex w-11/12 lg:w-full mx-auto flex-col space-y-2 p-5 rounded-2xl bg-white"
              style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}
            >
              <img src={imgUrl} className="w-full rounded-lg" />
              <span className="text-black text-lg text-left mt-2">{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto lg:px-16">
        <H1>Meet the team</H1>

        <div className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-10 items-center justify-between pt-10">
          <div className="w-full flex flex-col border-t border-b">
            {team.map(({ id, name, role, imgURL }) => (
              <div
                className="grid grid-cols-[10%,55%,45%] lg:grid-cols-[15%,60%,25%] cursor-pointer group hover:bg-primary px-5 transition-all ease-linear duration-300 min-h-16 text-left items-center justify-between border-t border-b"
                key={id}
                onClick={() => setTeamImg(imgURL)}
              >
                <h4 className="text-lg lg:text-3xl group-hover:text-white text-[#8D8D8D]">
                  {id.toString().padStart(2, '0')}
                </h4>
                <h4 className="text-lg lg:text-2xl group-hover:text-white">
                  {name}
                </h4>
                <h5 className="text-lg lg:text-xl group-hover:text-white text-[#8D8D8D]">
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
