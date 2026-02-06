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
        <Box className="container mx-auto px-4 py-16">
            <Text className="text-3xl md:text-4xl font-bold mb-8 text-black">View more from our Agents</Text>

            <Box className="relative">
                {/* Navigation Arrows (Optional, can add later) */}
                <Flex className="gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                    {MOCK_REELS.map((reel, idx) => (
                        <Box key={idx} className="relative min-w-[200px] md:min-w-[240px] aspect-[9/16] rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer group snap-center border border-gray-200">
                            <Image
                                src={reel.image}
                                alt={reel.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gradient Overlay */}
                            <Box className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Profile Overlay */}
                            <Flex className="absolute bottom-4 left-4 items-center gap-3">
                                <Box className="w-10 h-10 rounded-full border-2 border-[#D4AF37] overflow-hidden relative">
                                    <Image src={reel.image} alt="Avatar" fill className="object-cover" />
                                </Box>
                                <Box>
                                    <Text className="text-white font-semibold text-sm leading-tight">{reel.name}</Text>
                                    <Text className="text-gray-300 text-[10px] uppercase">{reel.role}</Text>
                                </Box>
                            </Flex>

                            {/* Play Icon Center (Optional) */}
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
