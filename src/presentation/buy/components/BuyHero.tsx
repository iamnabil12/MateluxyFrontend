'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const BuyHero = () => {
    const router = useRouter();

    const handleBrowseProperties = () => {
        router.push('/properties?purpose=Sale');
    };

    const handleContactAgent = () => {
        // Navigate to contact section or page
        router.push('/#contact');
    };

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
                    alt="Luxury Property for Sale"
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
                                Find Your Dream <br />
                                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                    Property
                                </span>
                            </Text>
                        </Box>



                        {/* Stats Row */}
                        <Flex className="flex gap-8 md:gap-12 mt-4 flex-wrap justify-center">
                            <Box className="border-l-2 border-[#FF0000] pl-4">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">500+</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Properties for Sale</Text>
                            </Box>
                            <Box className="border-l-2 border-[#FF0000] pl-4">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">95%</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Client Satisfaction</Text>
                            </Box>
                            <Box className="border-l-2 border-[#FF0000] pl-4">
                                <Text className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</Text>
                                <Text className="text-xs text-gray-300 uppercase tracking-wider">Support Available</Text>
                            </Box>
                        </Flex>

                        {/* CTA Buttons */}
                        <Flex className="flex gap-4 mt-8 flex-col sm:flex-row justify-center">
                            <Box
                                as="button"
                                onClick={handleBrowseProperties}
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
                                onClick={handleContactAgent}
                                className="group border-2 border-white/80 text-white px-8 py-4 h-[63px] rounded-[20px] hover:bg-white hover:text-black transition-all flex items-center justify-center font-semibold text-[18px] backdrop-blur-sm hover:scale-105 active:scale-95"
                            >
                                Contact Agent
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
