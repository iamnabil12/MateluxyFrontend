'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import { useState } from 'react';

export const TeamFilter = () => {
    const [activeTab, setActiveTab] = useState<'agents' | 'team'>('agents');

    return (
        <Box className="container mx-auto px-4 py-8">
            <Flex className="flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Department Dropdown */}
                <Box className="relative group cursor-pointer">
                    <Flex className="bg-gray-100 rounded-full px-5 py-2.5 items-center gap-2 min-w-[180px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M4 21v-7"></path>
                            <path d="M4 10V3"></path>
                            <path d="M12 21v-9"></path>
                            <path d="M12 8V3"></path>
                            <path d="M20 21v-5"></path>
                            <path d="M20 12V3"></path>
                            <path d="M1 14h6"></path>
                            <path d="M9 8h6"></path>
                            <path d="M17 16h6"></path>
                        </svg>
                        <Text className="text-sm font-medium text-gray-700">All Departments</Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-auto">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </Flex>
                    {/* Mock Dropdown items could go here */}
                </Box>

                {/* Center: Tabs */}
                <Box className="bg-gray-100 p-1 rounded-full flex relative">
                    <Box
                        className={`absolute top-1 bottom-1 w-[80px] bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out ${activeTab === 'agents' ? 'left-1' : 'left-[84px]'}`}
                    />
                    <Box
                        className={`relative z-10 px-6 py-1.5 rounded-full cursor-pointer transition-colors ${activeTab === 'agents' ? 'text-black font-semibold' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('agents')}
                    >
                        <Text className="text-sm">Agents</Text>
                    </Box>
                    <Box
                        className={`relative z-10 px-6 py-1.5 rounded-full cursor-pointer transition-colors ${activeTab === 'team' ? 'text-black font-semibold' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('team')}
                    >
                        <Text className="text-sm">Team</Text>
                    </Box>
                </Box>

                {/* Right: Search */}
                <Box className="relative w-full md:w-[300px]">
                    <input
                        type="text"
                        placeholder="Search for agents or team..."
                        className="w-full bg-transparent border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-400 focus:ring-0 placeholder:text-gray-400 text-black"
                    />
                    <Box className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
