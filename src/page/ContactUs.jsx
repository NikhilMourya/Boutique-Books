import React from 'react';

export default function ContactUs() {
    return (
        <main className="pt-36">
            <div className="min-h-screen">
                <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-5 text-center">Customer Services</h1>
                <div className="flex justify-center md:flex-row flex-col gap-10  md:gap-20 w-full max-w-4xl mx-auto">

                    <div className="w-full p-4">
                        <h2 className="text-2xl md:text-4xl font-medium mb-4 text-center">Contact us</h2>
                        <form className="space-y-4">
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
                        </form>
                    </div>
                    <div className="w-full p-4">
                        <h2 className="text-2xl md:text-4xl font-medium mb-4 text-center ">Support</h2>
                        <div className="text-center space-y-2 flex flex-col justify-around items-center gap-2">
                            <p>Timing: Mon-Sun | 10:00 AM - 07:00 PM (IST)</p>
                            <p>
                                Contact us on: <a href="tel:+919004585459">+91 9004585459</a>
                            </p>
                            <p>or 073-146-20478</p>
                            <p>
                                Email: <a href="mailto:support@kingdomofwhite.com">support@kingdomofwhite.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
