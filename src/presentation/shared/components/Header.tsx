'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
    theme?: 'light' | 'dark';
}

export const Header = ({ theme = 'light' }: HeaderProps) => {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const pathname = usePathname();

    const isDark = theme === 'dark';
    const textColor = isDark ? 'text-black' : 'text-white';
    const logoSrc = isDark ? '/Logo_Color.svg' : '/Logo.svg';
    const searchBg = isDark ? 'bg-[#F7F7F7]' : 'bg-[#D6D6D6]/20';
    const searchIconColor = isDark ? 'text-black' : 'text-white';

    return (
        <Box as="nav" className="absolute top-6 left-6 right-6 z-50">
            <Flex className="flex justify-between items-center w-full px-6 py-3">
                {/* Logo Area */}
                <Box className="shrink-0">
                    <Link href="/">
                        <Image src={logoSrc} alt="Mateluxy Real Estate" width={167} height={57} className="object-contain cursor-pointer" />
                    </Link>
                </Box>

                {/* Center Links - Desktop Only */}
                <Box className={`hidden lg:block absolute -translate-x-1/2 transition-all duration-300 ease-out ${isSearchExpanded ? 'left-[44%]' : 'left-1/2'}`}>
                    <Flex className={`h-[54px] ${isDark ? 'bg-[#F7F7F7]' : 'bg-[#ffffff]/40 backdrop-blur-[5px]'} rounded-full p-1.5 items-center`}>
                        {['Buy', 'Rent', 'Off Plan', 'Commercial', 'Contact', 'Team', 'News'].map((item) => {
                            // Determine Route
                            const href = `/${item.toLowerCase().replace(' ', '-')}`;

                            // Check Active State
                            // Homepage ('/') should have NO selection as per user request
                            // Other pages check exact match
                            const isActive = pathname === href;

                            return (
                                <Link key={item} href={href} passHref>
                                    <Box
                                        className={`rounded-full px-6 py-2.5 h-[42px] flex items-center cursor-pointer transition-all duration-300 ${isActive
                                            ? 'bg-white shadow-sm'
                                            : 'hover:bg-white/20'
                                            }`}
                                    >
                                        <Text
                                            className={`${isActive ? 'text-black font-semibold' : `${textColor} font-medium`} text-[15px] font-[family-name:var(--font-montserrat)]`}
                                        >
                                            {item}
                                        </Text>
                                    </Box>
                                </Link>
                            );
                        })}
                    </Flex>
                </Box>

                {/* Right Actions */}
                <Flex className="flex items-center gap-3">
                    {/* Expandable Search Button */}
                    <Box
                        className={`h-[36px] flex items-center ${searchBg} rounded-full ${searchIconColor} transition-all duration-300 ease-out ${isSearchExpanded ? 'w-[240px] px-4 justify-start bg-white/20 backdrop-blur-md border border-gray-200' : 'w-[36px] justify-center cursor-pointer hover:opacity-80'
                            }`}
                        onClick={() => {
                            if (!isSearchExpanded) setIsSearchExpanded(true);
                        }}
                    >
                        {isSearchExpanded ? (
                            <Flex className="w-full items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${isDark ? 'text-black' : 'text-white/80'}`}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input
                                    type="text"
                                    autoFocus
                                    onBlur={() => setIsSearchExpanded(false)}
                                    placeholder="Search properties..."
                                    className={`bg-transparent border-none outline-none ${isDark ? 'text-black placeholder-gray-500' : 'text-white placeholder-white/70'} text-[14px] w-full font-medium`}
                                />
                            </Flex>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        )}
                    </Box>

                    {/* WhatsApp Button */}
                    <Flex as="button" className="flex bg-[#4BD37B] text-white pl-1.5 pr-5 py-1.5 rounded-full items-center gap-0 font-semibold text-[15px] hover:bg-[#4BD37B]/90 transition-all shadow-sm h-[36px]">
                        <Box className="w-[34px] h-[34px] rounded-full flex items-center justify-center">
                            <Image src="/whatsapp_white.svg" alt="WA" width={20} height={20} />
                        </Box>
                        <Text className="font-[family-name:var(--font-montserrat)]">WhatsApp</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};
