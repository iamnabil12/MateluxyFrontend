'use client';

import { Box, Flex } from '@frooxi-labs/adaptive-ui';
import { MemberCard } from './MemberCard';
import { useEffect, useState } from 'react';
import { api, Agent } from '../../../services/api';

export const TeamGrid = () => {
    const [members, setMembers] = useState<Agent[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 8; // 2 rows * 4 columns

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const data = await api.getAgents();
                setMembers(data);
            } catch (error) {
                console.error('Failed to fetch agents:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, []);

    if (loading) {
        return (
            <Box className="container mx-auto px-4 py-8">
                <Box className="w-full h-96 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                </Box>
            </Box>
        );
    }

    // Pagination Logic
    const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentMembers = members.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Optional: Scroll to top of grid
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Box className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentMembers.map((member) => (
                    <MemberCard
                        key={member.id}
                        name={member.name}
                        role={member.position}
                        image={member.photoUrl || '/Image/profile_1.png'} // Fallback image
                        languages={member.languages && member.languages.length > 0 ? member.languages : ['English']}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <Flex className="justify-center mt-12 gap-2">
                    {/* Previous Button */}
                    <Box
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${currentPage === 1 ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </Box>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Box
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm cursor-pointer transition-all ${currentPage === page
                                ? 'bg-red-500 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {page}
                        </Box>
                    ))}

                    {/* Next Button */}
                    <Box
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${currentPage === totalPages ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};
