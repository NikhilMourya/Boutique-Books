const FeedbackCard = ({ feedback, fbTitle, fbSubTitle }) => {
    return (
        <>
            <div className="feedback-card-shadow rounded-lg p-6 py-10 bg-white  text-left">
                <div>
                    <div className="flex justify-start my-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.58275e-07 24L1.90735e-06 -1.04907e-06L23.8125 -8.19588e-09L8.58275e-07 24Z" fill="url(#paint0_linear_112_444)" fillOpacity="0.4" />
                            <defs>
                                <linearGradient id="paint0_linear_112_444" x1="12" y1="-5.24537e-07" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#87CEEB" />
                                    <stop offset="1" stopColor="#CAF0FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.58275e-07 24L1.90735e-06 -1.04907e-06L23.8125 -8.19588e-09L8.58275e-07 24Z" fill="url(#paint0_linear_112_444)" fillOpacity="0.4" />
                            <defs>
                                <linearGradient id="paint0_linear_112_444" x1="12" y1="-5.24537e-07" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#87CEEB" />
                                    <stop offset="1" stopColor="#CAF0FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="text-black my-5 text-xl">"Boutique Books transformed our accounting.
                        Their AI precision and human expertise keep our books accurate and up-to-date.
                        We've saved so much time."</p>

                    {/* <div>
                        <h1 className=" text-left">Jane Doe <br />
                            <span>CEO,Tech Innovations</span></h1>
                    </div> */}

                    <div className="flex justify-start gap-5 my-10">
                        <div>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#87CEEB" />
                            </svg>

                        </div>
                        <h1 className=" text-left">Jane Doe <br />
                            <span>CEO,Tech Innovations</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackCard;