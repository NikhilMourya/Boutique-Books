import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ladyWithLaptop from '../assets/images/home/female-with-laptop.png';
import Finger from '../assets/images/home/finger.png';
import Graph from '../assets/images/home/Graph.png';
import Keyboard from '../assets/images/home/keyboard.png';
import LadyScroll from '../components/Homepage/LadyScroll';
import ProfileCard from '../components/Homepage/ProfileCard';
import FeedbackCard from '../components/shared/FeedbackCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const data = [
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Effortless',
  },
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Reassuring',
  },
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Empowering',
  },
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Insightful',
  },
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Efficient',
  },
  {
    img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
    title: 'Simplify',
  },
];

const profiles = data.map((item, index) => (
  <ProfileCard key={index} img={item.img} title={item.title} />
));
const HomePage = () => {
  // const container = useRef(null);
  const scrollContainerRef = useRef(null);
  const horizontalRefLeft = useRef(null);
  const horizontalRefRight = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your GSAP animation code here
      const scrollContainer = scrollContainerRef.current;
      const horizontalElementLeft = horizontalRefLeft.current;
      const horizontalElementRight = horizontalRefRight.current;

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scrub: 1,
          start: 'top 70%',
          end: 'top 20%',
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
          transform: 'translateX(-40%)',
          ease: 'none',
          duration: 3,
        },
        1
      );

      t1.to(
        horizontalElementRight,
        {
          transform: 'translateX(40%)',
          ease: 'none',
          duration: 3,
        },
        1
      );

      let keyboardTimline = gsap.timeline({
        scrollTrigger: {
          trigger: '.keyboard-container',
          start: 'top -5%',
          end: 'top -20%',
          scrub: 4,
          // pin:true,
        },
      });
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
      keyboardTimline.fromTo(
        '#keyboard-hand',
        { y: 20, display: 'none' },
        {
          display: 'block',
          y: -40,
        }
      );
      keyboardTimline.to('#keyboard-hand', {
        y: 200,
        display: 'none',
        opacity: 0,
      });

      keyboardTimline.to('#keyboard-img', {
        width: '50%',
      });

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
              Seamless Accounting with <br />
              AI-Enhanced Human Expertise
            </h1>
            <p className="pt-2">
              Effortless and Accurate Bookkeeping for Your Business
            </p>
          </div>
          <div className="my-4 p-3 flex gap-5 justify-center items-center">
            <button className="px-7 p-2 border-black border text-black rounded-full text-md">
              Learn More
            </button>

            <Link to="/contact">
              <button className="px-7 p-2 button-primary-bg text-white rounded-full">
                <div className="flex gap-3 flex-row">
                  <div className="inline-flex gap-3">
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
          </div>
        </main>
        <div
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
        </div>
        <LadyScroll />
        <div className="relative my-14 lg:mt-56 lg:pt-32 py-14 keyboard-container">
          <div className="relative z-10">
            <div className="relative">
              <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl">
                Streamlined Accounting
              </h1>
              <h1 className="font-primary text-2xl sm:text-3xl lg:text-4xl mt-4">
                with the Press of a Key.
              </h1>
              <img
                className="w-11/12 md:w-6/12 mx-auto"
                src={Keyboard}
                id="keyboard-img"
              />
              <button className="mt-10 px-7 p-2 button-primary-bg text-white rounded-full">
                <div className="flex gap-3 flex-row">
                  <div className="inline-flex gap-3">
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
              <img
                id="keyboard-hand"
                src={Finger}
                className="absolute h-32 w-auto md:h-52 right-7 -bottom-28 lg:right-56 lg:-bottom-36"
              />
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
        <section className="">
          <div className=" mx-auto w-[80%]" id="lady-laptop">
            <div className="mx-auto">
              <div className="center relative">
                <img
                  className="w-full h-screen object-cover md:h-full"
                  src={ladyWithLaptop}
                />
                <div
                  className="black-overlay overflow-hidden"
                  id="lady-laptop-overlay"
                >
                  <div className="p-5 md:p-10 w-full md:w-4/5 lg:w-3/5 mx-auto">
                    <div className="mx-auto text-white">
                      <div className="mt-16">
                        <h1 className="my-3 md:my-7 text-2xl md:text-4xl font-primary">
                          What our firm offers{' '}
                        </h1>
                        <p
                          className="my-3 md:my-7 text-lg opacity-0"
                          id="lady-laptop-subtitle"
                        >
                          We offer comprehensive AI-driven accounting services
                          for effortless financial management.
                        </p>
                      </div>
                      <div
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 p-10 md:mx-28 md:my-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
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
