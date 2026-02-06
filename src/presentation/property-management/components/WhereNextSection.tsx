'use client';

import { Box, Text } from '@frooxi-labs/adaptive-ui';

interface NavCardProps {
    title: string;
    description: string;
    linkText: string;
}

const NavCard = ({ title, description, linkText }: NavCardProps) => (
    <div className="bg-white rounded-[24px] p-8 aspect-square flex flex-col justify-between border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all group cursor-pointer">
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0A0A30] leading-tight">
                {title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                {description}
            </p>
        </div>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-full border border-gray-100 text-xs font-semibold text-gray-600 group-hover:bg-gray-50 transition-colors">
            {linkText}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </button>
    </div>
);

export const WhereNextSection = () => {
    return (
        <Box as="section" className="w-full bg-white pb-24 pt-10 px-4 md:px-8 lg:px-16">
            <Box className="max-w-[1400px] mx-auto space-y-12">

                <Text as="h2" className="text-[32px] md:text-[40px] font-bold text-[#0A0A30]">
                    Where Next with Mateluxy?
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <NavCard
                        title="Need expert advice?"
                        description="Connect with our local specialists for personalized property guidance."
                        linkText="Speak to a Consultant"
                    />
                    <NavCard
                        title="New to renting in Dubai?"
                        description="Understand the full process with our step-by-step guide for tenants."
                        linkText="Tenant's Guide"
                    />
                    <NavCard
                        title="Looking to lease your property?"
                        description="Discover how we help landlords secure high-quality, long-term tenants."
                        linkText="Landlord's Handbook"
                    />
                    <NavCard
                        title="Explore the Mateluxy experience"
                        description="Learn what sets us apart in Dubai's luxury real estate market."
                        linkText="Why Mateluxy"
                    />
                </div>

            </Box>
        </Box>
    );
};
