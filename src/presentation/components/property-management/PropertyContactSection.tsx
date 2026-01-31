'use client';

import { Box, Text } from '@frooxi-labs/adaptive-ui';

export const PropertyContactSection = () => {
    return (
        <Box as="section" className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
            <Box className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center shadow-[0_20px_50px_rgba(74,58,255,0.07)] rounded-[25px] bg-white p-10">

                {/* Left Content */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-[2px] bg-[#FF4D4D]"></div>
                        <span className="text-[#FF4D4D] font-medium text-lg">Contact us</span>
                    </div>

                    <Text as="h2" className="text-[40px] md:text-[56px] font-bold text-[#0A0A30] leading-[1.1]">
                        Find your dream <br />
                        property today
                    </Text>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                        Looking for your next home, office, or investment? Fill out the form and our real estate experts will reach out to you shortly.
                    </p>
                </div>

                {/* Right Form Card */}
                <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-[#0A0A30] font-semibold text-sm">Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="John Carter"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D] outline-none transition-all placeholder:text-gray-400 text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-[#0A0A30] font-semibold text-sm">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D] outline-none transition-all placeholder:text-gray-400 text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-[#0A0A30] font-semibold text-sm">Phone number</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D] outline-none transition-all placeholder:text-gray-400 text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Property Type */}
                            <div className="space-y-2">
                                <label className="text-[#0A0A30] font-semibold text-sm">Property type</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Apartment"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D] outline-none transition-all placeholder:text-gray-400 text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-[#0A0A30] font-semibold text-sm">Message</label>
                            <textarea
                                placeholder="If you have more to add, please type it here..."
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D] outline-none transition-all placeholder:text-gray-400 text-sm resize-none"
                            ></textarea>
                        </div>

                        {/* Privacy Policy */}
                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="privacy" className="w-4 h-4 rounded border-gray-300 text-[#FF4D4D] focus:ring-[#FF4D4D]" />
                            <label htmlFor="privacy" className="text-gray-500 text-sm cursor-pointer">
                                I have read and accept the Privacy Policy.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#FF4D4D] hover:bg-[#E63E3E] text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-red-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </Box>
        </Box>
    );
};
