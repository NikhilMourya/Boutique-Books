import React from 'react';

export default function ContactUs() {
    return (
        <main className="pt-36">
            <div className="">
                {/* <h1 className="text-2xl md:text-4xl font-semibold mb-3 text-center">Customer Service</h1> */}
                <div className="grid grid-cols-2 gap-5  md:gap-20 w-full max-w-6xl mx-auto">

                    <div className="col-span-2 w-full p-4 flex-grow h-screen pb-10">
                        <iframe
                            title="Mailchimp Contact Form"
                            src="https://us17.list-manage.com/contact-form?u=fada68f8697eace3c42993d0d&form_id=13cc1c9dea2f419c09dc60db25311019"
                            width="100%"
                            height="100%"
                            allowFullScreen
                        />
                        {/* <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                type="submit"
                                className="w-full p-3 text-white bg-gray-400 rounded hover:bg-gray-500 transition-colors"
                            >
                                Send
                            </button>
                        </form> */}
                    </div>
                    {/* <div className=" p-4 w-3/5 mx-auto col-span-2">
                        <h2 className="text-2xl md:text-4xl font-medium mb-4 text-center ">Support</h2>
                        <div className="text-center space-y-2 flex flex-col justify-around items-center gap-2">
                            <p>Timing: Monday - Friday 9:00am - 4:30pm                            </p>
                            <p>
                                Contact us on: <a href="tel:+2834u10939">1-408-214-1798</a>
                            </p>
                            <p>or 1-831-637-1155
                            </p>
                            <p>
                                Email: <a href="mailto:hello@boutiquebooks.us">hello@boutiquebooks.us
                                </a>
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
