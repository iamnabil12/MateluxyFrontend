'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

export const ContactHero = () => {
    return (
        <Box
            as="section"
            className="w-full aspect-[1.83963494133] relative bg-white p-4 flex items-center justify-center"
        >
            {/* Background Image Container - Rounded 30px */}
            <Box className="absolute inset-4 rounded-[30px] overflow-hidden z-0">
                {/* Background Image */}
                <Image
                    src="/Image/BGimage.png"
                    alt="Contact Mateluxy"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Sophisticated Gradient Overlay */}
                <Box
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)'
                    }}
                />
            </Box>

            {/* Content Container */}
            <Flex className="flex relative z-10 w-full h-full px-4 md:px-8 lg:px-16 items-center justify-center pt-[135px]">
                <Box className="w-full flex justify-center">

                    {/* Hero Text Content */}
                    <Box className="flex flex-col gap-6 max-w-3xl items-center text-center">

                        {/* Main Headline */}
                        <Box>
                            <Text as="h1" className="text-[40px] md:text-[64px] lg:text-[80px] font-bold text-white leading-[1.1] mb-4">
                                Contact Mateluxy
                            </Text>
                        </Box>

                        {/* Subheading */}
                        <Text className="text-white/90 text-[18px] md:text-[22px] font-medium max-w-2xl">
                            Need expert advice? Our team of property consultants, marketing specialists, and customer service experts is here to help and guide you to the right support.
                        </Text>

                        {/* Stats Row */}
                        <Flex className="flex gap-8 md:gap-12 mt-4 flex-wrap justify-center">
                            <Box className="border-l-2 border-[#FF0000] pl-4 text-left">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">500+</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Properties for Sale</Text>
                            </Box>
                            <Box className="border-l-2 border-[#FF0000] pl-4 text-left">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">95%</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Client Satisfaction</Text>
                            </Box>
                            <Box className="border-l-2 border-[#FF0000] pl-4 text-left">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Support Available</Text>
                            </Box>
                        </Flex>

                        {/* CTA Buttons */}
                        <Flex className="flex gap-4 mt-8 flex-col sm:flex-row justify-center">
                            <Box
                                as="button"
                                className="group bg-[#FF0000] text-white px-8 py-4 h-[63px] rounded-[20px] font-semibold text-[18px] hover:bg-[#CC0000] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Browse Properties
                                <svg
                                    className="group-hover:translate-x-1 transition-transform"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Box>
                            <Box
                                as="button"
                                className="group border-2 border-white/80 text-white px-8 py-4 h-[63px] rounded-[20px] hover:bg-white hover:text-black transition-all flex items-center justify-center font-semibold text-[18px] backdrop-blur-sm hover:scale-105 active:scale-95"
                            >
                                Learn More
                                <svg
                                    className="ml-2 group-hover:rotate-12 transition-transform"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
