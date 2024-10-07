import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BookKeepingBG from '../assets/images/services/BookKeeping-bg.png';
import BookKeeping from '../assets/images/services/BookKeeping.png';
import BusinessAdvisoryBG from '../assets/images/services/BusinessAdvisory-bg.png';
import BusinessAdvisory from '../assets/images/services/BusinessAdvisory.png';
import FinancialOperationBG from '../assets/images/services/FinancialOperation-bg.png';
import FinancialOperation from '../assets/images/services/FinancialOperation.png';
import TaxBG from '../assets/images/services/Tax-bg.png';
import Tax from '../assets/images/services/Tax.png';

gsap.registerPlugin(ScrollTrigger);

const Bgimages = [
  BookKeepingBG,
  BusinessAdvisoryBG,
  FinancialOperationBG,
  TaxBG,
];
const images = [BookKeeping, BusinessAdvisory, FinancialOperation, Tax];
const data = [
  {
    bgImage: BookKeepingBG,
    image: BookKeeping,
    heading: 'Bookkeeping',
    content:
      "Our bookkeeping services are designed to keep your financial records accurate and up-to-date, giving you a clear picture of your business's health. We manage everything from daily transaction tracking to monthly reconciliations, ensuring your books are always in order. For those who prefer real-time insights, we offer the tools and access needed to monitor your finances at your convenience. Whether you want to stay closely involved or focus on other aspects of your business, Boutique Books adapts to your needs, providing a reliable and flexible financial foundation",
  },
  {
    bgImage: TaxBG,
    image: Tax,
    heading: 'Business Tax Return Preparation and Filing',
    content:
      "Navigating tax season doesn't have to be stressful. Our business tax return preparation and filing services ensure that you stay compliant with the latest regulations while optimizing your tax strategy. We work closely with you throughout the year, so when it’s time to file, everything is in place for a smooth, hassle-free process. To help with budgeting, you can add these services to your subscription or choose a one-time fee at tax time. Our expert team is dedicated to minimizing your tax burden and maximizing your peace of mind.",
  },
  {
    bgImage: BusinessAdvisoryBG,
    image: BusinessAdvisory,
    heading: 'Business Advisory Services',
    content:
      "Our business advisory services go beyond the numbers to provide you with strategic insights that drive growth and efficiency. We specialize in cash flow management and small business growth, offering tailored advice to help you navigate the unique challenges of scaling your business. These services are available through a separate subscription, giving you the flexibility to access expert guidance on an ongoing basis. Whether you need assistance with financial planning, optimizing cash flow, or making informed decisions for expansion, we're here to guide you every step of the way. With Boutique Books as your trusted advisor, you'll gain the clarity and confidence needed to propel your business forward.",
  },
  {
    bgImage: FinancialOperationBG,
    image: FinancialOperation,
    heading: 'Financial Operations +',
    content:
      "At Boutique Books, we go beyond traditional bookkeeping to offer comprehensive support services through our tailored subscription tiers. In our 'Financial Operations Plus' tier, we provide assistance with Accounts Receivable, Accounts Payable, Collections, 1099 filings, Capital Call Funding, and Bank Management Services. These services, while outside the scope of standard bookkeeping subscriptions, are facilitated by our team working closely with our network of experts and affiliates to ensure seamless completion on behalf of our customers.",
  },
  // {
  //     bgImage:FinancialOperationBG,
  //     image:FinancialOperation,
  //     heading:"Financial Operations +",
  //     content:""
  // }
];

const ServicesPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [activeHeading, SetActiveHeading] = useState(data[0].heading);
  const [activeContent, SetActiveContent] = useState(data[0].content);
  let sliderRefBG = useRef(null);
  let sliderRefMain = useRef(null);

  const handleBeforeChange = (current, next) => {
    // console.log('Before Change - Current Slide:', current);
  };

  // Handler for after the slide changes
  const handleAfterChange = (current) => {
    if (current === 2.5) current = 3;
    // setSlideIndex(current);
    // console.log('Current Slide:', current, data[current]);
    SetActiveContent(data[current].content);
    SetActiveHeading(data[current].heading);
    animate();
    // console.log()
    if (sliderRefBG) {
      sliderRefBG.slickGoTo(current);
    }
  };

  var SliderSettings = {
    dots: true,
    // fade:true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  var SliderSettingsBg = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  // Pause the slider on hover
  const handleMouseEnter = () => {
    if (sliderRefMain.current) {
      sliderRefMain.current.slickPause();
    }
  };

  // Resume the slider on hover out
  const handleMouseLeave = () => {
    if (sliderRefMain.current) {
      sliderRefMain.current.slickPlay();
    }
  };

  const handleSelectService = (index) => {
    console.log('handleservice change clicked', index);
    SetActiveHeading(data[index].heading);
    SetActiveContent(data[index].content);
    window.scrollTo({ top: 0 })
    // setUpdateCount(index);
    // setSlideIndex(index)
  }

  const animate = () => {
    gsap.from('.service-heading', {
      // opacity: 0,
      y: 20,
      duration: 0.5,
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from('.service-heading',{
      //     opacity:0,
      //     y:20,
      //     duration:0.5
      // })
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <>
      <section className="bg-white overflow-x-hidden">
        <section className="relative mt-20 md:mt-36">
          <div className=" mx-auto w-full lg:rounded-t-2xl overflow-hidden">
            <div className="mx-auto relative lg:rounded-t-2xl">
              <div className="center relative z-0">
                <div className="w-full h-[110vh] max-sm:h-auto lg:h-full lg:rounded-t-2xl"
                  onMouseEnter={handleMouseEnter} // Pause autoplay on hover
                  onMouseLeave={handleMouseLeave}>
                  <Slider
                    {...SliderSettingsBg}
                    ref={(slider) => {
                      sliderRefBG = slider;
                    }}
                  >
                    {data.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.bgImage}
                          className="object-cover w-full h-screen lg:h-auto lg:rounded-t-2xl"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="black-overlay lg:rounded-t-2xl">
                  <div className="p-5 md:p-20 pr-0 sm:h-screen w-full">
                    <div className="mx-auto text-white">
                      <h1 className="mb-10 text-2xl opacity-80 font-primary text-left">
                        Our Services
                      </h1>
                      <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-grow h-80 md:h-auto">
                          <h1 className="mb-5 md:mb-10 md:text-4xl lg:text-5xl font-medium font-primary text-left service-heading">
                            {activeHeading}
                          </h1>
                          <p className="text-left md:text-lg lg:text-xl">
                            {activeContent}
                          </p>
                        </div>
                        <div className="w-64 md:w-72 lg:w-96 ml-auto">
                          <div className="md:mt-20">
                            <div>
                              <Slider
                                {...SliderSettings}
                                ref={(slider) => {
                                  sliderRefMain = slider;
                                }}
                              >
                                {data.map((item, index) => (
                                  <div key={index} className="p-3 lg:p-4">
                                    <img
                                      src={item.image}
                                      className="object-cover transition-all duration-500 ease-in-out h-44 w-40 md:w-full md:h-auto rounded-md"
                                    />
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden lg:flex  h-72 w-full bg-transparent justify-center items-center gap-5'>
                    {data.map((item, index) => (
                      <div key={index} onClick={() => handleSelectService(index)} className='bg-white rounded-xl w-52 h-44 cursor-pointer'>
                        <img
                          src={item.bgImage}
                          className="object-cover w-52 h-32 lg:rounded-t-2xl"
                        />
                        <div className='flex items-center justify-center '>
                          <p className='whitespace-pre-line my-auto' >{item.heading}</p>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full max-sm:py-20 md:h-[70vh] lg:p-10 lg:px-16 overflow-hidden">
          <div className="absolute top-0 flex justify-between w-full">
            <div className="relative ">
              <div className="h-72 w-72 homepage-circle"></div>
            </div>
            <div className="max-sm:hidden relative">
              <div className="mt-36 h-72 w-72 homepage-circle"></div>
            </div>
          </div>
          <div className="relative center">
            <div className="lg:mt-10 lg:px-32 px-12 mx-auto">
              <h1 className="text-4xl my-10 font-primary whitespace-nowrap">
                Get Started Now!
              </h1>
              <button className="lg:px-52 md:px-36 sm:px-24 px-4 py-3 button-primary-bg text-white rounded-full">
                <div className="flex gap-3 flex-row">
                  <div className="inline-flex gap-3">
                    <Link to="https://www.calendly.com/boutiquebooks" target='_blank' className=''>
                      Book a Call</Link>

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
        </section>
      </section>
    </>
  );
};

export default ServicesPage;
