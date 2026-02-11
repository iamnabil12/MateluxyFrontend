'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

interface MemberCardProps {
    name: string;
    role: string;
    department?: string;
    image: string;
    languages: string[];
}

export const MemberCard = ({ name, role, department, image, languages }: MemberCardProps) => {
    return (
        <Box className="group relative w-full sm:w-[300px] h-[437px] bg-[#F3F3F3] rounded-[40px] overflow-hidden transition-shadow duration-300 border-[4px] border-[#F3F3F3]">
            {/* Background Image Area - Full Box */}
            <Box className="absolute inset-0 w-full h-full overflow-hidden bg-gray-50">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Readability: White Gradient based on specs */}
                <Box
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 42%, #FFFFFF 91%, #FFFFFF 100%)'
                    }}
                />
            </Box>

            {/* Content Area - Bottom Overlay */}
            <Box className="absolute bottom-0 left-0 right-0 p-6 pt-12 z-20">
                <Text
                    className="text-[25px] font-semibold text-black mb-1 leading-tight"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {name}
                </Text>

                <Flex className="gap-2 items-center mb-6 overflow-hidden w-full">
                    <Text
                        className="text-[14px] text-[#444444] font-medium tracking-wide whitespace-nowrap truncate flex-1 min-w-0"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {role}
                    </Text>
                    {department && (
                        <Flex className="items-center gap-2 flex-shrink-0 max-w-[50%]">
                            <Box className="w-[1px] h-[12px] bg-gray-400 flex-shrink-0" />
                            <Text
                                className="text-[14px] text-[#747474] font-normal tracking-wide whitespace-nowrap truncate"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                {department}
                            </Text>
                        </Flex>
                    )}
                </Flex>

                <Flex className="justify-between items-end">
                    {/* Languages Pills */}
                    <Flex className="gap-2 flex-wrap">
                        {languages.slice(0, 2).map((lang, idx) => (
                            <Box
                                key={idx}
                                className="bg-gray-100 px-3 py-1.5 rounded-full text-[14px] font-medium text-gray-600"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                {lang}
                            </Box>
                        ))}
                    </Flex>

                    {/* Arrow Button */}
                    <Box className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
