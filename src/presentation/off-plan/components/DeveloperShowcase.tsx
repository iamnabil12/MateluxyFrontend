'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

const DEVELOPER_LOGOS = [
    { name: "OBHA", logo: "/developers/obha.png" },
    { name: "LEOS", logo: "/developers/leos.png" },
    { name: "WASL ASSET GREENS", logo: "/developers/wasl.png" },
    { name: "CityView", logo: "/developers/cityview.png" },
    { name: "Dubai Holding", logo: "/developers/dubai_holding.png" },
    { name: "IMAN", logo: "/developers/iman.png" },
    { name: "GP", logo: "/developers/gp.png" },
    { name: "Developer", logo: "/developers/developer.png" },
];

export const DeveloperShowcase = () => {
    return (
        <Box className="w-full py-16 bg-white">
            <Box className="px-4 md:px-8 xl:pl-[94px]">
                {/* Header Section */}
                <Flex className="justify-between items-start mb-12">
                    <Box>
                        <Text
                            className="text-[45px] font-semibold text-black mb-2 leading-tight"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Meet the Masters Behind the Projects
                        </Text>
                        <Text
                            className="text-[18px] text-[#6B6B6B] font-normal mb-4"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Get to know Dubai's leading developers and what sets their visions apart.
                        </Text>
                        {/* Red underline decoration */}
                        <Box className="w-[63px] h-[4px] bg-[#FF0000]" />
                    </Box>

                    {/* All Developers Button */}
                    <button className="px-8 py-3 bg-[#F5F5F5] text-[#333333] rounded-[10px] text-[16px] font-medium hover:bg-[#E5E5E5] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        All Developers
                    </button>
                </Flex>

                {/* Developer Logos */}
                <Flex className="gap-12 items-center justify-start flex-wrap">
                    {DEVELOPER_LOGOS.map((developer, idx) => (
                        <Box
                            key={idx}
                            className="relative h-[60px] w-[120px] grayscale hover:grayscale-0 transition-all cursor-pointer opacity-70 hover:opacity-100"
                        >
                            <Image
                                src={developer.logo}
                                alt={developer.name}
                                fill
                                className="object-contain"
                            />
                        </Box>
                    ))}
                </Flex>

                {/* Pagination Dots */}
                <Flex className="gap-3 justify-center mt-8">
                    <Box className="w-[78px] h-[4px] bg-[#FF0000] rounded-full" />
                    <Box className="w-[40px] h-[4px] bg-[#D9D9D9] rounded-full" />
                </Flex>
            </Box>
        </Box>
    );
};
