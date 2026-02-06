'use client';

import { Box, Flex } from '@frooxi-labs/adaptive-ui';

export const PropertyCardSkeleton = () => {
    return (
        <Box className="bg-white rounded-[20px] border border-[#E6E6E6] flex flex-col w-full overflow-hidden p-[15px] animate-pulse">
            {/* Image Placeholder */}
            <Box className="w-full aspect-[1.548/1] rounded-[13px] bg-gray-200" />

            {/* Content Section */}
            <Box className="pt-4 flex-1 flex flex-col">
                {/* Title */}
                <Box className="h-7 bg-gray-200 rounded-md w-3/4 mb-3" />

                {/* Location */}
                <Flex className="items-center gap-1.5 mb-4">
                    <Box className="w-4 h-4 bg-gray-200 rounded-full shrink-0" />
                    <Box className="h-4 bg-gray-200 rounded w-1/2" />
                </Flex>

                {/* Specs */}
                <Flex className="items-center gap-4 mb-5">
                    <Flex className="items-center gap-1.5">
                        <Box className="w-[18px] h-[15px] bg-gray-200 rounded" />
                        <Box className="w-6 h-4 bg-gray-200 rounded" />
                    </Flex>
                    <Box className="w-[1px] h-3 bg-gray-200" />
                    <Flex className="items-center gap-1.5">
                        <Box className="w-[24px] h-[12.5px] bg-gray-200 rounded" />
                        <Box className="w-6 h-4 bg-gray-200 rounded" />
                    </Flex>
                    <Box className="w-[1px] h-3 bg-gray-200" />
                    <Flex className="items-center gap-1.5">
                        <Box className="w-[16px] h-[16px] bg-gray-200 rounded" />
                        <Box className="w-16 h-4 bg-gray-200 rounded" />
                    </Flex>
                </Flex>

                {/* Agent/Developer Info */}
                <Flex className="flex items-center justify-between mt-auto">
                    <Flex className="flex items-center gap-2.5">
                        <Box className="h-[50px] w-[50px] rounded-full bg-gray-200 shrink-0" />
                        <Flex className="flex flex-col gap-1.5">
                            <Box className="h-4 w-24 bg-gray-200 rounded" />
                            <Box className="h-3 w-32 bg-gray-200 rounded" />
                        </Flex>
                    </Flex>

                    <Flex className="flex gap-2">
                        <Box className="h-8 w-8 rounded-full bg-gray-200" />
                        <Box className="h-8 w-8 rounded-full bg-gray-200" />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};
