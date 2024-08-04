import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookKeeping from "../assets/images/services/BookKeeping.png";
import BusinessAdvisory from "../assets/images/services/BusinessAdvisory.png"
import FinancialOperation from "../assets/images/services/FinancialOperation.png"
import Tax from "../assets/images/services/Tax.png"
import BookKeepingBG from "../assets/images/services/BookKeeping-bg.png";
import BusinessAdvisoryBG from "../assets/images/services/BusinessAdvisory-bg.png"
import FinancialOperationBG from "../assets/images/services/FinancialOperation-bg.png"
import TaxBG from "../assets/images/services/Tax-bg.png"






const Bgimages = [BookKeepingBG, BusinessAdvisoryBG, FinancialOperationBG, TaxBG]
const images = [BookKeeping, BusinessAdvisory, FinancialOperation, Tax]
const data = [
    {
        bgImage: BookKeepingBG,
        image: BookKeeping,
        heading: "Bookkeeping",
        content: "At Boutique Books, we pair our customers with a dedicated, highly skilled bookkeeper and we provide comprehensive bookkeeping services tailored to meet the unique needs of our clients. From meticulous data entry to detailed financial reporting, our team handles all aspects of bookkeeping with precision and expertise. Whether it's tracking income and expenses, reconciling accounts, or managing accounts payable and receivable, we ensure that your financial records are accurate and up-to-date. Please note that while we provide a wide range of bookkeeping services, we do not offer payroll processing as part of our standard offerings."
    },
    {
        bgImage: TaxBG,
        image: Tax,
        heading: "Tax",
        content: "At Boutique Books, our tax compliance services are designed to streamline the tax process for our customers who susbscribe to this tier of service. As part of this comprehensive offering, the annual tax return preparation for the business we provide bookkeeping services for is taken care of, ensuring accuracy and timeliness. Additionally, we track quarterly estimated tax payments to help customers stay compliant throughout the year. Our commitment to staying updated on relevant tax laws ensures that our customers are informed and prepared for any changes that may affect their financial obligations."
    },
    {
        bgImage: BusinessAdvisoryBG,
        image: BusinessAdvisory,
        heading: "Business Advisory",
        content: "At Boutique Books, our advisory services elevate the support we provide to our customers, offering access to executive-level fractional C-suite executives through our premium subscription tier. This tier goes beyond just traditional bookkeeping and tax preparation, encompassing strategic business development activities such as KPI development, strategic business plan development, and other growth and scaling offerings. Our goal is to empower our customers with the strategic guidance and expertise needed to drive their businesses forward and achieve sustainable growth."
    },
    {
        bgImage: FinancialOperationBG,
        image: FinancialOperation,
        heading: "Financial Operations +",
        content: "At Boutique Books, we go beyond traditional bookkeeping to offer comprehensive support services through our tailored subscription tiers. In our 'Financial Operations Plus' tier, we provide assistance with Accounts Receivable, Accounts Payable, Collections, 1099 filings, Capital Call Funding, and Bank Management Services. These services, while outside the scope of standard bookkeeping subscriptions, are facilitated by our team working closely with our network of experts and affiliates to ensure seamless completion on behalf of our customers."
    },
    // {
    //     bgImage:FinancialOperationBG,
    //     image:FinancialOperation,
    //     heading:"Financial Operations +",
    //     content:""
    // }
]


const ServicesPage = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);

    const handleBeforeChange = (current, next) => {
        console.log("Before Change - Current Slide:", current);
    };

    // Handler for after the slide changes
    const handleAfterChange = (current) => {
        // setSlideIndex(current);
        console.log("Current Slide:", current);
        sliderRef.slickGoTo(slideIndex);
    };

    var SliderSettings = {
        dots: true,
        // fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // slidesToShow: 2,
        // slidesToScroll: 2,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
    };

    var SliderSettingsBg = {
        dots: false,
        // fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)

    };

    return (
        <>
            <section className="bg-white">
                <section className="relative">
                    <div className=" mx-auto w-full">
                        <div className="mx-auto relative" >
                            <div className="center relative z-0">
                                <div className="w-full h-full">
                                    <Slider {...SliderSettingsBg} ref={slider => {
                                        sliderRef = slider;
                                    }}>
                                        {data.map((item, index) => (
                                            <div key={index}>
                                                <img src={item.bgImage} className="object-cover w-full h-auto" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                {/* <img className="w-full h-full" src={activeBg(0)} /> */}
                                <div className="black-overlay" >
                                    <div className="p-20 h-screen w-full">
                                        <div className="mx-auto text-white">
                                            <h1 className="mb-10 text-2xl opacity-80 font-primary text-left">Our Services</h1>
                                            <div className="grid grid-cols-10 gap-5">
                                                <div className="col-span-6">
                                                    <h1 className="mb-10 text-6xl font-medium font-primary text-left">Bookkeeping</h1>
                                                    <p className="text-left">
                                                        At Boutique Books, we pair our customers with a dedicated, highly
                                                        skilled bookkeeper and we provide comprehensive bookkeeping services
                                                        tailored to meet the unique needs of our clients. From meticulous data
                                                        entry to detailed financial reporting, our team handles all aspects of
                                                        bookkeeping with precision and expertise. Whether it's tracking income
                                                        and expenses, reconciling accounts, or managing accounts payable
                                                        and receivable, we ensure that your financial records are accurate
                                                        and up-to-date. Please note that while we provide a wide range of
                                                        bookkeeping services, we do not offer payroll processing as part of
                                                        our standard offerings.
                                                    </p>
                                                </div>
                                                <div className="col-span-4 px-5">
                                                    <div className="mt-32">
                                                        <Slider {...SliderSettings}>
                                                            {data.map((item, index) => (
                                                                <div key={index}>
                                                                    <img src={item.image} className="object-cover w-full h-auto" />
                                                                </div>
                                                            ))}
                                                        </Slider>
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
                <section className="relative w-full h-[70vh] p-10 px-16 overflow-hidden border-black border">
                    <div className="absolute top-0 flex justify-between w-full">
                        <div className="relative ">
                            <div className="h-72 w-72 homepage-circle">

                            </div>
                        </div>
                        <div className="relative">
                            <div className="mt-36 h-72 w-72 homepage-circle">

                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="lg:mt-10 lg:px-32 px-12 mx-auto">
                            <h1 className="text-4xl my-10 font-primary whitespace-nowrap">Get Started Now!</h1>
                            <button className="lg:px-52 md:px-36 sm:px-24 px-14 p-2 button-primary-bg text-white rounded-full">
                                <div className="flex gap-3 flex-row">
                                    <div className="inline-flex gap-3">
                                        <span className="text-md font-primary">Book a Call</span>
                                        <span className="content-center"><svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.3659 19.7046L24 10.0493L14.3659 0.393967C14.2789 0.280049 14.1684 0.186099 14.0418 0.118479C13.9152 0.0508581 13.7755 0.0111451 13.6322 0.00202784C13.4888 -0.00708939 13.3452 0.0146026 13.211 0.0656346C13.0769 0.116667 12.9552 0.195847 12.8544 0.297817C12.7536 0.399786 12.6759 0.522163 12.6267 0.656664C12.5774 0.791164 12.5577 0.934646 12.5689 1.0774C12.5801 1.22015 12.6219 1.35884 12.6915 1.48407C12.7611 1.60931 12.8569 1.71817 12.9724 1.80328L20.1805 9.04976L1.00251 9.04976C0.736625 9.04976 0.481634 9.15506 0.293628 9.34251C0.105621 9.52995 -4.2768e-07 9.78419 -4.39268e-07 10.0493C-4.50855e-07 10.3144 0.105621 10.5686 0.293628 10.756C0.481634 10.9435 0.736625 11.0488 1.00251 11.0488L20.1805 11.0488L12.9724 18.2953C12.785 18.4835 12.6802 18.7382 12.6811 19.0035C12.6821 19.2687 12.7887 19.5227 12.9774 19.7096C13.1662 19.8965 13.4217 20.0009 13.6878 20C13.9538 19.9991 14.2085 19.8928 14.396 19.7046L14.3659 19.7046Z" fill="#87CEEB" />
                                        </svg>
                                        </span></div>

                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ServicesPage