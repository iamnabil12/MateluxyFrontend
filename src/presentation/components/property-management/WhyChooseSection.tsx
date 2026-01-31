'use client';

import { Box, Text, Flex, Stack } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

export const WhyChooseSection = () => {
    return (
        <Box as="section" className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
            <Box className="max-w-7xl mx-auto">
                <Text as="h2" className="text-[32px] md:text-[40px] font-semibold mb-10 text-black leading-tight">
                    Why Choose Our Property Management?
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto lg:grid-rows-2 gap-6 h-auto lg:h-[600px]">
                    {/* 1. Hassle-Free Ownership (Black) */}
                    <div className="bg-black rounded-[30px] p-8 flex flex-col justify-between col-span-1 shadow-sm">
                        <div className="space-y-4">
                            <h3 className="text-white text-xl font-medium">Hassle-Free Ownership</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We handle tenants, contracts, and renewals.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold transform -rotate-2 hover:scale-105 hover:bg-gray-100 transition-all cursor-pointer">Tenants</button>
                            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold transform rotate-1 hover:scale-105 hover:bg-gray-100 transition-all cursor-pointer">Renewals</button>
                            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:scale-105 hover:bg-gray-100 transition-all cursor-pointer">Contracts</button>
                        </div>
                    </div>

                    {/* 2. Trusted Experience (Vertical Image) */}
                    <div className="bg-gray-100 rounded-[30px] relative overflow-hidden col-span-1 lg:row-span-2 group">
                        <Image
                            src="/Assets/Office work.png"
                            alt="Trusted Experience"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                            <h3 className="text-white text-2xl font-medium mb-2">Trusted Experience</h3>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                Over a decade of proven expertise in Dubai's property market.
                            </p>
                        </div>
                    </div>

                    {/* 3. 24/7 (Gradient Orange) */}
                    <div className="bg-[linear-gradient(to_top,#FF8400_0%,#ffffff_25%)] rounded-[30px] p-8 col-span-1 flex flex-col justify-between shadow-sm">
                        <div className="flex gap-4 mb-4">
                            {/* Icons */}
                            <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-gray-700 hover:scale-110 transition-transform">
                                <Image src="/Assets/Building Icon.png" alt="Building" width={24} height={24} />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-gray-700 hover:scale-110 transition-transform">
                                <Image src="/Assets/Support Icon.png" alt="Support" width={24} height={24} />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-gray-700 hover:scale-110 transition-transform">
                                <Image src="/Assets/Sheild Icon.png" alt="Protection" width={24} height={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-3xl font-medium mb-2">24/7</h3>
                            <p className="text-gray-700 text-md leading-relaxed">
                                Maintenance Support - Quick solutions to keep tenants satisfied and assets safe.
                            </p>
                        </div>
                    </div>

                    {/* 4. Maximized Returns (Wide/Image) */}
                    <div className="bg-[#F0FFF4] rounded-[30px] p-8 col-span-1 flex flex-col text-right justify-between relative overflow-hidden group">
                        <Image
                            src="/Assets/image 68.png"
                            alt="Key Handover"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="mt-auto z-10 pt-20 relative">
                            <h3 className="text-black text-xl font-medium mb-2">Maximized Returns</h3>
                            <p className="text-black/70 text-xs leading-relaxed font-medium">
                                Professional rent evaluations to ensure competitive pricing.
                            </p>
                        </div>
                    </div>

                    {/* 5. Legal Compliance (Texture Background) */}
                    <div className="bg-[#F8F9FA] rounded-[30px] p-8 flex flex-col justify-between col-span-1 shadow-sm relative overflow-hidden">
                        <Image
                            src="/Assets/Texture.png"
                            alt="Texture Background"
                            fill
                            className="object-cover opacity-100 pointer-events-none"
                        />
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-black text-xl font-medium">Legal Compliance</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We make sure your property complies with Dubai's real estate regulations.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-3 relative z-10">
                            <button className="bg-white border border-gray-200 text-black px-4 py-2 rounded-[15px] text-xs font-medium shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer">Dubai Law</button>
                            <button className="bg-white border border-gray-200 text-black px-4 py-2 rounded-[15px] text-xs font-medium shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer">Regulations</button>
                        </div>
                    </div>

                    {/* 6. Our Process (Blue) */}
                    <div className="bg-[#DEF0FF] rounded-[30px] p-8 col-span-1 lg:col-span-2 flex flex-col justify-between relative shadow-sm">
                        <div className="mb-4">
                            <h3 className="text-black text-3xl font-medium mb-1">Our Process</h3>
                            <p className="text-gray-500 text-sm">Steps to a successful property journey</p>
                        </div>

                        {/* Timeline */}
                        <div className="flex items-start justify-between relative mt-auto px-4">

                            {/* Step 1 */}
                            <div className="flex flex-col gap-3 relative z-10 items-center text-center shrink-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-black font-semibold text-xl">Onboard</span>
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                </div>
                                <p className="text-gray-500 text-[11px] leading-tight max-w-[120px]">
                                    Seamless start - we handle tenants, contracts, and setup.
                                </p>
                            </div>

                            {/* Connecting Line 1 */}
                            <div className="h-[2px] bg-black flex-1 mx-2 mt-[14px]"></div>


                            {/* Step 2 */}
                            <div className="flex flex-col gap-3 relative z-10 items-center text-center shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                    <span className="text-black font-semibold text-xl">Optimize</span>
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                </div>
                                <p className="text-gray-500 text-[11px] leading-tight max-w-[140px]">
                                    Turn your property into a profit engine with expert care.
                                </p>
                            </div>

                            {/* Connecting Line 2 */}
                            <div className="h-[2px] bg-black flex-1 mx-2 mt-[14px]"></div>

                            {/* Step 3 */}
                            <div className="flex flex-col gap-3 relative z-10 items-center text-center shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                    <span className="text-black font-semibold text-xl">Comply</span>
                                </div>
                                <p className="text-gray-500 text-[11px] leading-tight max-w-[120px]">
                                    Stay stress-free as we ensure full legal protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
};
