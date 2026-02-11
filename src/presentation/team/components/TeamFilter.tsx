'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';

interface TeamFilterProps {
    activeTab: 'agents' | 'team';
    setActiveTab: (tab: 'agents' | 'team') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    department: string;
    setDepartment: (dept: string) => void;
}

export const TeamFilter = ({
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    department,
    setDepartment
}: TeamFilterProps) => {

    const departments = ['All Departments', 'Sales', 'Rentals', 'Management', 'Commercial'];

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
                        <Text className="text-sm font-medium text-gray-700">{department === 'All' ? 'All Departments' : department}</Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-auto">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </Flex>

                    {/* Dropdown Menu */}
                    <Box className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        {departments.map((dept) => (
                            <Box
                                key={dept}
                                onClick={() => setDepartment(dept === 'All Departments' ? 'All' : dept)}
                                className="px-4 py-2 hover:bg-gray-50 text-sm cursor-pointer text-gray-700"
                            >
                                {dept}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Center: Tabs */}
                <Box className="bg-[#F8F8F8] p-1.5 rounded-full flex relative">
                    <Box
                        className={`absolute top-1.5 bottom-1.5 w-[90px] bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out ${activeTab === 'agents' ? 'left-1.5' : 'left-[94px]'}`}
                    />
                    <Box
                        className={`relative z-10 px-8 py-2.5 rounded-full cursor-pointer transition-colors ${activeTab === 'agents' ? 'text-black font-semibold' : 'text-gray-500 font-medium'}`}
                        onClick={() => setActiveTab('agents')}
                    >
                        <Text className="text-sm">Agents</Text>
                    </Box>
                    <Box
                        className={`relative z-10 px-8 py-2.5 rounded-full cursor-pointer transition-colors ${activeTab === 'team' ? 'text-black font-semibold' : 'text-gray-500 font-medium'}`}
                        onClick={() => setActiveTab('team')}
                    >
                        <Text className="text-sm">Team</Text>
                    </Box>
                </Box>

                {/* Right: Search */}
                <Box className="relative w-full md:w-[320px]">
                    <input
                        type="text"
                        placeholder="Search for agents or team..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F8F8F8] border-none rounded-full py-3 pl-5 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-400 text-black transition-all"
                    />
                    <Box className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
