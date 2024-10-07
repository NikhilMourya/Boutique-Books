import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import assessment from '../assets/Icons/assessment.png';
import business_process from '../assets/Icons/business_process.png';
import procedures from '../assets/Icons/procedures.png';
import project_management from '../assets/Icons/project_management.png';
import quality from '../assets/Icons/quality.png';
import success from '../assets/Icons/success.png';
import ladyWithLaptop from '../assets/images/home/female-with-laptop.png';
import Graph from '../assets/images/home/Graph.png';
import Keyboard from '../assets/images/home/keyboard.png';
import LadyScroll from '../components/Homepage/LadyScroll';
import ProfileCard from '../components/Homepage/ProfileCard';
import FeedbackCard from '../components/shared/FeedbackCard';
import Support from '../assets/images/home/support.jpg'
import Solution from '../assets/images/home/solution.jpg'
import Peace from '../assets/images/home/peace.jpg'
import Realtime from '../assets/images/home/realtime.jpg'
import Effortless from '../assets/images/home/effortless.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const data = [
  {
    img: quality,
    title: 'Effortless',
  },
  {
    img: success,
    title: 'Reassuring',
  },
  {
    img: project_management,
    title: 'Empowering',
  },
  {
    img: assessment,
    title: 'Insightful',
  },
  {
    img: business_process,
    title: 'Efficient',
  },
  {
    img: procedures,
    title: 'Simplify',
  },
];

const firmOffers = [
  {
    title: "Personalized Support",
    desc: "We know every business is unique. That's why our team provides high-touch, personalized service designed to meet your specific needs, goals, and challenges. You're never just another client—you're a partner.",
    img: Support
  },
  {
    title: "Real-Time Insights",
    desc: "Beyond managing your books, we offer real-time financial reporting and insights that give you a clear picture of your cash flow, profits, and upcoming obligations. No more guessing or last-minute surprises when it comes to your financial health.",
    img: Realtime
  },
  {
    title: "Effortless Compliance",
    desc: "Forget the stress of tax season or regulatory deadlines. We ensure your books are always compliant, so when tax time rolls around, everything is organized, accessible, and accurate. Say goodbye to scrambling through receipts or fearing audits.",
    img: Effortless
  },
  {
    title: "Scalable Solutions",
    desc: "Whether you're a solo practitioner or a growing startup, our services scale with you. We provide the flexibility you need to grow at your own pace without worrying about outgrowing your financial management system.",
    img: Solution
  },
  {
    title: "Peace of Mind",
    desc: "By combining human expertise with AI precision, we offer a level of accuracy and efficiency that brings peace of mind. You’ll always know where your business stands financially and can focus on what really matters: growing your business.",
    img: Peace
  },
]

const testimonials = [
  {
    title: 'Shellye Archambeau',
    subTitle: '',
    feedback: 'The Team is Great to work with!'
  },
  {
    title: 'San Benito Bene',
    subTitle: '',
    feedback: 'Highly Recommend! Tajni and her team are trustworthy and reliable. When I started my small business, it was daunting having to comply with so many regulations. Tajni provided me with professional guidance and set me up with a clear financial structure.'
  },
  {
    title: 'Sujeet Vasudevan',
    subTitle: '',
    feedback: 'Tajni and team have done an excellent job with tax filing requirements for us.'
  },
  {
    title: 'Charisse Tyson',
    subTitle: '',
    feedback: "I've been working with Tajni for over 15 years. She and her team are excellent. We all dread tax season to a certain extent, but it's less painfull when you are working with a quality company."
  },

  {
    title: 'Kim J',
    subTitle: '',
    feedback: '"TD tax is great! They are quick to answer my questions and staff is always available and get back to me within 24 hours. I have been using them for a few years and I am very happy with them. It\'s so easy to upload your documents and communicate back and forth online. Highly recommended."'
  },
  {
    title: 'Mishkat A',
    subTitle: '',
    feedback: "I have been using their services since 2016 and I couldn't be happier. Tajni and her staff are honest and hardworking people who strive to help you file your taxes. I recently worked with Sharon who is highly experienced and easy to talk to. Sharon is also very responsive. I highly recommend them."
  },
  {
    title: 'Reno R',
    subTitle: '',
    feedback: '"If you are looking for a great quality tax person, look no further. If you\'re looking for someone who is honest and will treat you like you are her only client, she is the gal for you. I have known Tajni and her family and they are all wonderful people. Tajni takes pride in her business and will always bend over backwards to help you with your tax needs. Give her a try, you will not be disappointed."'
  },
  {
    title: "Alisse Winn",
    subTitle: "",
    feedback: "Needed major help with huge accounting book issues. TD came in and worked miracles.  I am so blessed to have her work with me on this project.  She didn't get overwhelmed. And was able to get everything fixed and up and running.  USE TD TAX for anything!!! You won't be disappointed"
  },
  {
    title: "Alexis R",
    subsTitle: "",
    feedback: "Tajni & her team (especially Raquel) are amazing. I used to HATE having to deal with my company's books & payroll. It is so hard to find someone reliable who knows their stuff inside and out. Tajni knows her stuff! She has a way of making you feel so reassured & confident that everything is being tracked correctly. Raquel has payroll done so quickly it amazes me! If you never want to stress over your books or payroll, leave it to these girls! They're worth it."
  }
]

const profiles = data.map((item, index) => (
  <ProfileCard key={index} img={item.img} title={item.title} />
));
const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  // const container = useRef(null);
  const scrollContainerRef = useRef(null);
  const horizontalRefLeft = useRef(null);
  const horizontalRefRight = useRef(null);
  const [activeFirmPara, setactiveFirmPara] = useState(null);
  const activePara = (index) => {
    console.log('active para clicked', index)
    setactiveFirmPara(index)
  }

  useLayoutEffect(() => {




    let ctx = gsap.context(() => {
      // all your GSAP animation code here
      const scrollContainer = scrollContainerRef.current;
      const horizontalElementLeft = horizontalRefLeft.current;
      const horizontalElementRight = horizontalRefRight.current;

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scrub: 2.5,
          start: 'top 70%',
          end: 'top -10%',
        },
      });

      t1.to(scrollContainer, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      });

      t1.to(
        horizontalElementLeft,
        {
          transform: 'translateX(-50%)',
          ease: 'none',
          duration: 3,
        },
        1
      );

      t1.to(
        horizontalElementRight,
        {
          transform: 'translateX(50%)',
          ease: 'none',
          duration: 3,
        },
        1
      );

      let keyboardTimline;
      if (window.innerWidth > 768) {
        keyboardTimline = gsap.timeline({
          scrollTrigger: {
            trigger: '.keyboard-container',
            start: 'top 10%',
            end: 'top -20%',
            scrub: 4,
            // pin:true,
          },
        });
      } else {
        keyboardTimline = gsap.timeline({
          scrollTrigger: {
            trigger: '.keyboard-container',
            start: 'top 50%',
            end: 'top 30%',
            scrub: 4,
            // pin:true,
          },
        });
      }

      keyboardTimline.fromTo(
        '#keyboard-img',
        { y: -60 },
        {
          width: '60%',
          y: 20,
        }
      );
      keyboardTimline.fromTo(
        '#keyboard-bubble',
        { display: 'none', opacity: 0 },
        { display: 'flex', opacity: 1 }
      );

      if (window.innerWidth > 768) {
        // keyboardTimline.fromTo(
        //   '#keyboard-hand',
        //   { y: 20, display: 'none' },
        //   {
        //     display: 'block',
        //     y: -40,
        //   }
        // );
        // keyboardTimline.to('#keyboard-hand', {
        //   y: 200,
        //   display: 'none',
        //   opacity: 0,
        // });
        keyboardTimline.to('#keyboard-img', {
          width: '50%',
        });
      }


      let ladyLaptopTimline = gsap.timeline({
        scrollTrigger: {
          trigger: '#lady-laptop',
          start: 'top 50%',
          scrub: 2,
          end: 'top 20%',
          // markers: true,
          // pin: true,
          // pinSpacing:false,
          // anticipatePin: 1,
          // fastScrollEnd:false,
        },
      });

      ladyLaptopTimline.to('#lady-laptop', {
        width: '100%',
        duration: 1.2,
      });

      ladyLaptopTimline.fromTo(
        '#lady-laptop-overlay',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        }
      );

      ladyLaptopTimline.to('#lady-laptop-subtitle', {
        opacity: 1,
        duration: 1,
      });

      ladyLaptopTimline.to('#ladyLaptopGraph', {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      });
    });

    return () => ctx.revert(); // <- cleanup!


  }, []);



  return (
    <>
      <section className="w-full relative bg-white">
        <main className="py-32 my-20">
          <div>
            <h1 className="font-primary lg:text-4xl md:text-3xl">
              Seamless Bookkeeping with <br />
              AI-Enhanced Human Expertise
            </h1>
            <p className="pt-2">
              Effortless and Accurate Bookkeeping for Your Business
            </p>
          </div>
          <div className="my-4 p-3 flex gap-5 justify-center items-center">
            <Link to="/contact">
              <button className="px-7 p-2 border-black border text-black rounded-full text-md">
                Learn More
              </button></Link>

            <Link to="https://www.calendly.com/boutiquebooks" target='_blank'>
              <button className="px-7 p-2 button-primary-bg text-white rounded-full">
                <div className="flex gap-3 flex-row justify-center">
                  <div className="inline-flex gap-2 justify-center">
                    <span className="text-md">Book a Call</span>
                    <span className="content-center">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z"
                          fill="#87CEEB"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </main>
        {/* <div
          className="-translate-y-28 opacity-0 scale-125 overflow-hidden"
          ref={scrollContainerRef}
        >
          <div
            ref={horizontalRefLeft}
            className="w-[140rem] my-2.5 flex gap-5 justify-start items-center"
          >
            {profiles}
          </div>
          <div
            ref={horizontalRefRight}
            className="w-[140rem] my-2.5 flex gap-5 justify-start items-center -ml-96"
          >
            {profiles}
          </div>
        </div> */}
        <LadyScroll />
        <section className="relative w-full lg:mt-80 my-20">
          <div className="absolute top-0 flex justify-between w-full">
            <div className="relative ">
              <div className="h-72 w-72 homepage-circle"></div>
            </div>
            <div className="max-sm:hidden relative">
              <div className="mt-36 h-72 w-72 homepage-circle"></div>
            </div>
          </div>
          <section class="mx-auto p-8 text-white rounded-lg">
            <h1 class="text-3xl font-bold text-blue-600 mb-6">Is financial chaos holding your business back?</h1>
            <p class="mb-6 text-gray-600">Running a business should be rewarding, but instead, you're stuck:</p>
            <ul class="list-disc list-inside space-y-4 mb-8 lg:mx-40 sm:mx-20">
              <li class="text-gray-700 text-left">
                <strong>Chasing late payments</strong> while your bills pile up, wondering if you'll have enough to cover next month's expenses.
              </li>
              <li class="text-gray-700 text-left">
                <strong>Dreading tax season</strong>, knowing you're facing another last-minute scramble to pull together months of disorganized receipts.
              </li>
              <li class="text-gray-700 text-left">
                <strong>Hit by unexpected expenses</strong>, making it impossible to plan, invest, or grow your business the way you want.
              </li>
              <li class="text-gray-700 text-left">
                <strong>Losing sleep over cash flow</strong>—constantly unsure if the money you see today will still be there tomorrow.
              </li>
              <li class="text-gray-700 text-left">
                You're working hard, but these financial challenges keep pulling you in every direction, leaving you overwhelmed and uncertain about your next steps. It feels like no matter how much effort you put in, you're just treading water.
              </li>
            </ul>
            <div class="bg-blue-50 p-6 rounded-lg shadow-inner lg:mx-40 sm:mx-20">
              <p class="text-lg font-semibold text-blue-600 mb-4">But now you've found us.</p>
              <p class="text-gray-700">
                At <strong>Boutique Books</strong>, we turn that financial chaos into clarity. With our expert team and AI-driven precision, you'll experience effortless bookkeeping, real-time insights, and the dedicated support you deserve—so you can get back to running and growing your business with confidence.
              </p>
            </div>
          </section>
        </section>
        <div className="relative my-14 lg:mt-20 lg:pt-32 py-14 keyboard-container bg-light-section">
          <div className="relative z-10">
            <div className="relative">
              <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl">
                Streamlined Bookkeeping
              </h1>
              <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl mt-4">
                with the Press of a Key.
              </h1>
              <img
                className="w-11/12 md:w-6/12 mx-auto"
                src={Keyboard}
                id="keyboard-img"
              />
              <Link to="https://www.calendly.com/boutiquebooks" target='_blank'>
                <button className="mt-10 px-5 p-2 button-primary-bg text-white rounded-full">
                  <div className="flex gap-3 flex-row text-xl px-2 py-2">
                    <div className="inline-flex gap-6">
                      <span className="text-md">Book a Call</span>
                      <span className="content-center">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z"
                            fill="#87CEEB"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </button>
              </Link>

              {/* keyboard animation removed by client */}
              {/* <img
                id="keyboard-hand"
                src={Finger}
                className="hidden md:block absolute h-20 w-auto md:h-52 right-16 -bottom-1 lg:right-56 lg:-bottom-36"
              /> */}
            </div>
          </div>
          <div
            className="absolute top-52 flex justify-between w-full z-0"
            id="keyboard-bubble"
          >
            <div className="relative">
              <div className="h-72 w-72 homepage-circle"></div>
            </div>
            <div className="hidden lg:block relative">
              <div className="mt-36 h-72 w-72 homepage-circle"></div>
            </div>
          </div>
        </div>
        <section className="bg-dark-section relative z-20">
          <div className=" mx-auto w-[80%]" id="lady-laptop">
            <div className="mx-auto">
              <div className="center relative">
                <img
                  className="md:block w-full h-screen object-cover md:h-full"
                  src={ladyWithLaptop}
                />
                <div
                  className="black-overlay overflow-hidden"
                  id="lady-laptop-overlay"
                >
                  <div className="p-5 md:p-10 w-full md:w-4/5 mx-auto">
                    <div className="mx-auto text-white">
                      <div className="mt-10">
                        <h1 className="my-3 md:mb-7 text-2xl md:text-4xl font-primary">
                          What our firm offers{' '}
                        </h1>
                        <p
                          className="my-3 md:my-4 text-sm md:text-lg opacity-0"
                          id="lady-laptop-subtitle"
                        >
                          At Boutique Books, we do more than just bookkeeping - we provide a complete financial management solution tailored specifically for solo practitioners, startups, and professional service businesses.
                        </p>
                      </div>
                      <section className='grid md:grid-cols-3 gap-5 justify-center items-center'>
                        {
                          firmOffers.map((offer, index) => {
                            return (
                              <div key={index} onClick={() => activePara(index)} className="flex flex-col items-center py-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl md:min-h-52 h-[100%]">
                                <div className='flex flex-row items-center justify-start gap-2 w-full px-5' >
                                  <img className="object-cover max-w-28 rounded-t-lg h-24 md:rounded-none md:rounded-s-lg" src={offer.img} alt="" />
                                  <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{offer.title}</h5>
                                </div>

                                <div className="flex flex-col justify-between p-4 leading-normal">
                                  <p className={` mb-3 text-sm font-normal text-left text-gray-700 dark:text-gray-400`}>{offer.desc}</p>
                                </div>
                              </div>
                            )
                          })
                        }


                        {/* <div
                          className="relative w-full lg:p-5 p-3 center my-5 lg:my-10  opacity-0 scale-125"
                          id="ladyLaptopGraph"
                        >
                          <div className="absolute bg-black opacity-60 w-full h-full blur-sm md:p-5 p-2 z-0"></div>
                          <div className="relative z-10 p-5">
                            <img src={Graph} className="rounded-lg w-full" />
                            <div className="m-2 md:my-4 my-2 flex justify-between gap-5 items-center">
                              <div className="text-left">
                                <h3 className="text-2xl md:text-3xl ">
                                  Sales <span>$158,500</span>
                                </h3>
                                <h3 className="text-lg text-gray-400">
                                  Expenses <span>$95,200</span>
                                </h3>
                              </div>
                              <Link to="/contact">
                                <button className="md:px-7 p-2 bg-gray-700 text-white rounded-full">
                                  <div className="flex gap-3 flex-row ">

                                    <div className="inline-flex gap-3">
                                      <span className="text-md end">
                                        Learn More
                                      </span>
                                      <span className="content-center">
                                        <svg
                                          width="20"
                                          height="16"
                                          viewBox="0 0 24 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z"
                                            fill="#87CEEB"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              </Link>

                            </div>
                          </div>
                        </div> */}
                      </section>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 p-10 px-0 md:mx-28 md:my-32 bg-light-section">
          <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl mb-8">
            Real Feedback from Real Clients
          </h1>
          {/* <div className=' overflow-x-scroll px-5' >
            <div className="min-w-[60rem] flex flex-row  md:grid py-5 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {
                testimonials.map((review, index) => {
                  return (
                    <FeedbackCard key={index} fbSubTitle={review.subTitle} fbTitle={review.title} feedback={review.feedback} />
                  )
                })
              }
            </div>
          </div> */}

          {/* New Slider Testimonials */}
          <div className=''>
            <Slider {...settings}>
              {testimonials.map((review, index) => (
                <div key={index} className='px-5'>
                  <FeedbackCard fbSubTitle={review.subTitle} fbTitle={review.title} feedback={review.feedback} />
                </div>
              ))}
            </Slider>
          </div>

        </section>
      </section>
    </>
  );
};

export default HomePage;

/* Rectangle 3 */

// position: absolute;
// width: 1224px;
// height: 648px;
// left: 0px;
// top: 0px;

// background: rgba(0, 0, 0, 0.6);
// filter: blur(5px);
// border-radius: 20px;
