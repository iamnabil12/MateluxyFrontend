'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import { useState } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
        acceptedPrivacy: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Box className="w-full py-16 bg-[#FAFAFA]">
            <Flex className="px-4 md:px-8 xl:pl-[94px] xl:pr-[94px] gap-16 items-center">
                {/* Left Side - Text Content */}
                <Box className="flex-1">
                    <Text
                        className="text-[20px] font-medium text-[#FF0004] mb-4 uppercase tracking-wide"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        — Contact us
                    </Text>
                    <Text
                        className="text-[48px] font-bold text-[#170F49] leading-tight mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Find your dream <br /> property today
                    </Text>
                    <Text
                        className="text-[18px] text-[#6F6C90] leading-relaxed font-normal"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Looking for your next home, office, or investment? Fill out <br /> the form and our real estate experts will reach out to you shortly.
                    </Text>
                </Box>

                {/* Right Side - Form */}
                <Box className="w-[640px] bg-white rounded-[20px] border border-[#E5E5E5] p-10 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        {/* Name and Email Row */}
                        <Flex className="gap-4 mb-6">
                            <Box className="flex-1">
                                <Text className="text-[14px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Name
                                </Text>
                                <Box className="relative">
                                    <input
                                        type="text"
                                        placeholder="John Carter"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#F1F2F9] rounded-[10px] text-[14px] focus:outline-none focus:border-[#FF0000] focus:border-2 pr-10"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    />
                                    <Box className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex-1">
                                <Text className="text-[14px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Email
                                </Text>
                                <Box className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-[10px] text-[14px] focus:outline-none focus:border-[#FF0000] pr-10"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    />
                                    <Box className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                            <path d="m3 7 9 6 9-6"></path>
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>

                        {/* Phone and Property Type Row */}
                        <Flex className="gap-4 mb-6">
                            <Box className="flex-1">
                                <Text className="text-[14px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Phone number
                                </Text>
                                <Box className="relative">
                                    <input
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-[10px] text-[14px] focus:outline-none focus:border-[#FF0000] pr-10"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    />
                                    <Box className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex-1">
                                <Text className="text-[14px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Property type
                                </Text>
                                <Box className="relative">
                                    <input
                                        type="text"
                                        placeholder="Apartment"
                                        value={formData.propertyType}
                                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-[10px] text-[14px] focus:outline-none focus:border-[#FF0000] pr-10"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    />
                                    <Box className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>

                        {/* Message */}
                        <Box className="mb-6">
                            <Text className="text-[14px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Message
                            </Text>
                            <textarea
                                placeholder="If you have more to add, please type it here..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-[10px] text-[14px] focus:outline-none focus:border-[#FF0000] resize-none"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                        </Box>

                        {/* Privacy Policy Checkbox */}
                        <Flex className="gap-2 mb-6 items-start">
                            <input
                                type="checkbox"
                                checked={formData.acceptedPrivacy}
                                onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                                className="mt-1 w-4 h-4 accent-[#FF0000]"
                            />
                            <Text className="text-[13px] text-[#6B6B6B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                I have read and accept the Privacy Policy.
                            </Text>
                        </Flex>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#FF0000] text-white rounded-[10px] text-[16px] font-semibold hover:bg-[#E60000] transition-colors"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Submit
                        </button>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
};
