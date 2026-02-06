'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

interface MemberCardProps {
    name: string;
    role: string;
    image: string;
    languages: string[];
}

export const MemberCard = ({ name, role, image, languages }: MemberCardProps) => {
    return (
        <Box className="relative w-full aspect-[3/4] rounded-[30px] overflow-hidden group cursor-pointer bg-gray-50">
            {/* Background Shape/Gradient (Optional, matching the 'arch' feel if needed, simplified here) */}
            <Box className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />

            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content Overlay */}
            <Box className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
                <Text className="text-2xl font-bold mb-1">{name}</Text>
                <Text className="text-xs text-gray-300 uppercase tracking-widest mb-4">{role}</Text>

                {/* Languages & Action */}
                <Flex className="justify-between items-end border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Flex className="gap-2">
                        {languages.map((lang, idx) => (
                            <Box key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium">
                                {lang}
                            </Box>
                        ))}
                    </Flex>

                    <Box className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
