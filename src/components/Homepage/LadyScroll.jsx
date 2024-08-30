import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef } from 'react';
import ladyWithLaptop from "../../assets/images/home/female-with-laptop.png"

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const LadyScroll = () => {
    const ladyRef = useRef(null);
    const ladyRefOverlay = useRef(null);
    const ladyRefOverlayContent = useRef(null)

    useLayoutEffect(() => {
        const LadyRefElement = ladyRef.current;
        const ladyRefOverlayElement = ladyRefOverlay.current
        const ladyRefOverlayContentElement = ladyRefOverlayContent.current;

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#lady-wrapper",
                start: 'top 40%',
                scrub: true,
                end: 'top 0%',
            }
        })


        t1.to(LadyRefElement, {
            width: "100%",
            duration:2000,
        });

        t1.fromTo(ladyRefOverlayElement, { opacity: 0 }, {
            opacity: 1,
            duration: 2000,
        })


        t1.fromTo('#underline-divider',{width:'20%'}, {
            width: '50%',
            duration: 2000,
        })
    }, [])
    return (
        <>
            <section className='relative bg-dark-section h-screen' id='lady-wrapper'>
                <div className=" mx-auto my-10 w-[80%]" ref={ladyRef}>
                    <div className="mx-auto relative" >
                        <div className="center relative z-0">
                            <img className="w-full md:h-full h-screen object-cover" src={ladyWithLaptop} />
                            <div className="black-overlay" ref={ladyRefOverlay}>
                                <div className="lg:px-48 md:px-36 lg:p-32 md:p-28 h-screen w-full flex items-center" ref={ladyRefOverlayContent}>
                                    <div className="mx-auto text-white">
                                        <h1 className="my-10 lg:text-5xl md:text-4xl sm:text-3xl 2xl font-primary">Effortless Accounting <br />
                                            with Human and AI Precision</h1>
                                        <div className="center mx-auto">
                                            <div id='underline-divider' className="w-1/5 h-1 rounded-full bg-white"></div>
                                        </div>
                                        <p className="my-10 md:text-xl">Welcome to Boutique Books! We offer AI-driven accounting services that simplify bookkeeping and provide real-time insights. Enjoy effortless compliance and peace of mind with our expert solutions.</p>
                                        <button className="px-7 p-2 bg-white text-black rounded-full">
                                            <div className="flex gap-3 flex-row ">
                                                <div className="inline-flex gap-3">
                                                    <span className="text-md end">About US</span>
                                                    <span className="content-center"><svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z" fill="#87CEEB" />
                                                    </svg>
                                                    </span></div>

                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </section>

        </>
    )
}

export default LadyScroll;