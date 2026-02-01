'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

const TEAM_MEMBERS = [
    '/Image/profile_1.png',
    '/Image/profile_2.png',
    '/Image/profile_3.png',
    '/Image/profile_4.png',
    '/Image/profile_5.png',
    '/Image/profile_4.png', // Duplicating one to make it 6 for the grid if needed, or we can stick to 5 as per request. The image shows overlap.
];

export const GuidesSection = () => {
    return (
        <Box as="section" className="w-full relative py-20 overflow-hidden">
            {/* Background Image */}
            <Box className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/Image/guidepagebg.png"
                    alt="Background"
                    fill
                    className="object-fill object-center"
                    priority
                />
            </Box>

            <Box className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header Content */}
                <Flex className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-0">
                    <Box>
                        <Text as="h2" className="text-[45px] font-medium text-black leading-tight font-montserrat">
                            Guides that help you <span className="text-[#FF0000] font-semibold">grow</span>
                        </Text>
                    </Box>
                    <Box className="max-w-md text-right w-full md:w-auto">
                        <Text className="text-[#AAAAAA] text-[18px] font-semibold font-montserrat leading-relaxed text-right">
                            Discover properties with your desired features
                            <br className="hidden md:block" />
                            and amenities to find your perfect home
                        </Text>
                    </Box>
                </Flex>

                {/* Team Cards - Overlapping Layout */}
                <Box className="relative h-[300px] md:h-[400px] w-full flex justify-center items-center mb-16">
                    <Flex className="items-center justify-center -space-x-12 md:-space-x-16 hover:space-x-4 transition-all duration-300 ease-in-out py-10 px-4 overflow-x-auto no-scrollbar md:overflow-visible w-full">
                        {TEAM_MEMBERS.map((src, index) => (
                            <Box
                                key={index}
                                className="relative w-[200px] h-[280px] md:w-[260px] md:h-[360px] rounded-[20px] overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 hover:z-20 border-4 border-white flex-shrink-0 grayscale hover:grayscale-0"
                                style={{ zIndex: 10 - index }} // Stack order
                            >
                                <Image
                                    src={src}
                                    alt={`Team Member ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Optional Overlay gradient if needed based on the dark cards in reference */}
                                {index % 2 !== 0 && ( /* Make some cards darker based on the reference image showing alternating dark/light cards? The reference has dark backgrounds for some. Assuming images have backgrounds. */
                                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                                )}
                            </Box>
                        ))}
                    </Flex>
                </Box>

                {/* CTA Button */}
                <Flex className="justify-center">
                    <button className="group relative flex items-center justify-start pl-[20px] bg-[#FF0000] text-white w-[254px] h-[59px] rounded-full text-[18px] font-semibold font-montserrat transition-all hover:bg-[#D60000] hover:shadow-lg">
                        Choose Your Guide
                        <Box className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-white rounded-full w-[39px] h-[39px] flex items-center justify-center">
                            <Image
                                src="/Arrow.svg"
                                alt=""
                                width={12}
                                height={12}
                                className="w-[12px] h-[12px]"
                                style={{ filter: 'brightness(0) saturate(100%) invert(19%) sepia(88%) saturate(7495%) hue-rotate(356deg) brightness(96%) contrast(116%)' }}
                            />
                        </Box>
                    </button>
                </Flex>
            </Box>
        </Box>
    );
};
