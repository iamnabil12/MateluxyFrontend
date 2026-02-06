'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

export const TeamHero = () => {
    return (
        <Box
            as="section"
            className="w-full aspect-[1.83963494133] relative bg-white p-4 flex items-center justify-center"
        >
            {/* Background Image Container - Rounded 30px */}
            <Box className="absolute inset-4 rounded-[30px] overflow-hidden z-0">
                {/* Background Image with Overlay */}
                <Image
                    src="/Image/TeamHeroImage.png"
                    alt="Team Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay Gradient */}
                <Box className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </Box>

            {/* Content Container */}
            <Flex className="flex relative z-10 w-full h-full px-4 md:px-8 lg:px-16 items-center pt-[135px]">
                <Box className="w-full pl-4 md:pl-[60px] lg:pl-[125px] flex justify-between items-center">

                    {/* Left Side: Text Content */}
                    <Box className="max-w-[600px] text-white">
                        {/* Badge */}
                        <Box className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <Box className="w-1.5 h-1.5 rounded-full bg-[#FF4444]" />
                            <Text className="text-[10px] uppercase tracking-wider font-semibold">Meet Our Professionals</Text>
                        </Box>

                        <Text className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            The Experts Behind <br /> Our Success
                        </Text>

                        <Text className="text-gray-300 mb-10 text-sm md:text-base max-w-[480px] leading-relaxed">
                            Our team of dedicated professionals combines years of industry experience with innovative thinking to deliver exceptional results for our clients.
                        </Text>

                        {/* Stats Row */}
                        <Flex className="gap-12 border-t border-white/10 pt-8">
                            <Box>
                                <Text className="text-3xl font-bold mb-1">33+</Text>
                                <Text className="text-xs text-gray-400 uppercase tracking-widest">Years Working</Text>
                            </Box>
                            <Box>
                                <Text className="text-3xl font-bold mb-1">7</Text>
                                <Text className="text-xs text-gray-400 uppercase tracking-widest">Departments</Text>
                            </Box>
                            <Box>
                                <Text className="text-3xl font-bold mb-1">11</Text>
                                <Text className="text-xs text-gray-400 uppercase tracking-widest">Languages</Text>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Right Side: Floating Video Card */}
                    <Box className="hidden xl:block relative w-[400px] h-[280px] rounded-[24px] overflow-hidden border-[6px] border-white/20 shadow-2xl backdrop-blur-sm mr-16">
                        <Image
                            src="/Image/team-discussion.png" // Placeholder
                            alt="Team Discussion"
                            fill
                            className="object-cover"
                        />
                        {/* Play Button Overlay */}
                        <Box className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group">
                            <Box className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ml-1">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
