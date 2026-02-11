'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

const MOCK_REELS = [
    { name: "Tania Almas", role: "Agent", image: "/Image/profile_1.png" },
    { name: "William Yang", role: "CEO", image: "/Image/profile_2.png" },
    { name: "Viwan Han", role: "Managing Director", image: "/Image/profile_3.png" },
    { name: "Abdullah Mahi", role: "Manager", image: "/Image/profile_4.png" },
    { name: "Tanvir Ahmed", role: "Agent", image: "/Image/profile_5.png" },
];

export const AgentReels = () => {
    return (
        <Box className="w-full py-16">
            <Text
                className="text-[45px] font-normal mb-8 text-black px-4 md:px-8 xl:pl-[94px]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                View more from our Agents
            </Text>

            <Box className="relative px-4 md:px-8 xl:pl-[94px]">
                {/* Custom Gap 30px */}
                <Flex className="gap-[30px] overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                    {MOCK_REELS.map((reel, idx) => (
                        <Box
                            key={idx}
                            // Fixed Dimensions 257x375px, Radius 20px
                            className="relative min-w-[257px] w-[257px] h-[375px] rounded-[20px] overflow-hidden flex-shrink-0 cursor-pointer group snap-center border border-gray-200"
                        >
                            <Image
                                src={reel.image}
                                alt={reel.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gradient Overlay - Custom Linear Gradient (Behind Blur) */}
                            <Box
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 57%, rgba(0, 0, 0, 1) 81%, rgba(0, 0, 0, 1) 100%)'
                                }}
                            />
                            {/* Progressive Blur Layer (On Top) */}
                            <Box
                                className="absolute inset-0 backdrop-blur-[20px]"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 66%, black 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 66%, black 100%)'
                                }}
                            />

                            {/* Profile Overlay */}
                            <Flex className="absolute bottom-4 left-4 items-center gap-3">
                                {/* Profile Picture with Layered Design */}
                                <Box className="relative">
                                    {/* Outer Container with Green Stroke */}
                                    <Box
                                        className="w-[60px] h-[60px] rounded-full relative flex items-center justify-center"
                                        style={{
                                            border: '3px solid #00FF33'
                                        }}
                                    >
                                        {/* Yellow Background Circle */}
                                        <Box className="w-[54px] h-[54px] rounded-full bg-[#FFD700] absolute" />

                                        {/* Profile Image */}
                                        <Box className="w-[54px] h-[54px] rounded-full overflow-hidden relative z-10">
                                            <Image src={reel.image} alt="Avatar" fill className="object-cover" />
                                        </Box>

                                        {/* Green Status Dot with White Border */}
                                        <Box className="absolute -top-1 -right-1 w-4 h-4 bg-[#00FF33] rounded-full border-[3px] border-white z-20" />
                                    </Box>
                                </Box>

                                <Box>
                                    <Text
                                        className="text-white text-[18px] font-normal leading-tight"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {reel.name}
                                    </Text>
                                    <Text
                                        className="text-[#DCDCDC] text-[15px] font-normal uppercase tracking-wider whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {reel.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
