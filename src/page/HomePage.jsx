import ProfileCard from "../components/Homepage/ProfileCard";
import ladyWithLaptop from "../assets/images/home/female-with-laptop.png"
import Keyboard from "../assets/images/home/keyboard.png"
import Finger from "../assets/images/home/finger.png"
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LadyScroll from "../components/Homepage/LadyScroll";


gsap.registerPlugin(ScrollTrigger);


const data = [
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Effortless'
    },
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Reassuring'
    },
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Empowering'
    },
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Insightful'
    },
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Efficient'
    },
    {
        img: 'https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg',
        title: 'Simplify'
    }
]

const profiles = data.map((item, index) =>
    <ProfileCard key={index} img={item.img} title={item.title} />
)
const HomePage = () => {

    // const container = useRef(null);
    const scrollContainerRef = useRef(null);
    const horizontalRefLeft = useRef(null);
    const horizontalRefRight = useRef(null);



    useLayoutEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const horizontalElementLeft = horizontalRefLeft.current;
        const horizontalElementRight = horizontalRefRight.current;


        gsap.to(horizontalElementLeft, {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: scrollContainer,
                scrub: 1,
            }
        });

        gsap.to(horizontalElementRight, {
            xPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: scrollContainer,
                scrub: 1,
            }
        });

        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".test",
        //         start: 'top center',
        //         end: 'top',
        //         scrub: true,
        //         markers: true,
        //     },
        // })


        // gsap.fromTo(LadyRefElement, { width: "70%" }, {
        //     width: "100%",
        //     duration: 2,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".test",
        //         start: 'top center',
        //         end: 'top',
        //         scrub: true,
        //     }
        // });

        // gsap.fromTo(ladyRefOverlayElement, { opacity: "0" }, {
        //     opacity: "0.7",
        //     duration: 2,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".test",
        //         start: 'top center',
        //         end: 'top',
        //         scrub: true,
        //     }
        // });

    }, [])


    return (
        <>
            <section className="w-full relative">
                <main className="py-32">
                    <div><h1 className="font-primary text-4xl">Seamless Accounting with <br />
                        AI-Enhanced Human Expertise</h1>
                        <p className="pt-2">Effortless and Accurate Bookkeeping for Your Business</p></div>
                    <div className="my-4 p-3 flex gap-5 justify-center items-center">
                        <button className="px-7 p-2 border-black border text-black rounded-full text-md">Learn More</button>
                        <button className="px-7 p-2 button-primary-bg text-white rounded-full">
                            <div className="flex gap-3 flex-row">
                                <div className="inline-flex gap-3">
                                    <span className="text-md">Book a Call</span>
                                    <span className="content-center"><svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z" fill="#87CEEB" />
                                    </svg>
                                    </span></div>

                            </div>
                        </button>
                    </div>
                </main>
                <div className="container" ref={scrollContainerRef}>
                    <div ref={horizontalRefLeft} className="w-[140rem] my-2.5 flex gap-5 justify-start items-center">
                        {
                            profiles
                        }
                    </div>
                    <div ref={horizontalRefRight} className="w-[140rem] my-2.5 flex gap-5 justify-start items-center">
                        {
                            profiles
                        }
                    </div>
                </div>
                <LadyScroll />
                <div className="relative my-20 py-52">
                    <div className="relative center z-10">
                        <div className="relative">
                            <h1 className="font-primary text-4xl">Streamlined Accounting <br />with the Press of a Key.</h1>
                            <img src={Keyboard} className="" />
                            <button className="mt-10 px-7 p-2 button-primary-bg text-white rounded-full">
                                <div className="flex gap-3 flex-row">
                                    <div className="inline-flex gap-3">
                                        <span className="text-md">Book a Call</span>
                                        <span className="content-center"><svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z" fill="#87CEEB" />
                                        </svg>
                                        </span></div>

                                </div>
                            </button>
                            <img src={Finger} className="absolute right-0 bottom-0" />
                        </div>
                    </div>
                    <div className="absolute top-52 flex justify-between w-full z-0">
                        <div className="relative">
                            <div className="h-72 w-72 homepage-circle">

                            </div>
                        </div>
                        <div className="relative">
                            <div className="mt-36 h-72 w-72 homepage-circle">

                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default HomePage