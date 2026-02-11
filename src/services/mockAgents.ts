
import { Agent } from './api';

export const MOCK_AGENTS: Agent[] = [
    {
        id: 'mock-1',
        name: 'Sarah Johnson',
        position: 'Senior Real Estate Agent',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png', // Assuming exist based on TeamGrid fallback
        languages: ['English', 'Spanish'],
        nationality: 'American',
        phone: '+971 50 123 4567',
        email: 'sarah.j@mateluxy.com',
        whatsapp: '+971 50 123 4567',
        experienceSince: 2018,
        areasExpertIn: ['Downtown Dubai', 'Business Bay']
    },
    {
        id: 'mock-2',
        name: 'Ahmed Al-Fayed',
        position: 'Luxury Property Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_2.png', // Placeholder
        languages: ['Arabic', 'English'],
        nationality: 'UAE',
        phone: '+971 50 987 6543',
        email: 'ahmed.a@mateluxy.com',
        whatsapp: '+971 50 987 6543',
        experienceSince: 2015,
        areasExpertIn: ['Palm Jumeirah', 'Dubai Marina']
    },
    {
        id: 'mock-3',
        name: 'Elena Petrova',
        position: 'Investment Advisor',
        department: 'Management',
        photoUrl: '/Image/profile_3.png', // Placeholder
        languages: ['Russian', 'English', 'French'],
        nationality: 'Russian',
        phone: '+971 52 345 6789',
        email: 'elena.p@mateluxy.com',
        whatsapp: '+971 52 345 6789',
        experienceSince: 2019,
        areasExpertIn: ['Dubai Hills', 'Jumeirah Golf Estates']
    },
    {
        id: 'mock-4',
        name: 'Michael Chen',
        position: 'Client Manager',
        department: 'Commercial', // Changed from Client Relations
        photoUrl: '/Image/profile_4.png', // Placeholder
        languages: ['English', 'Mandarin'],
        nationality: 'Canadian',
        phone: '+971 55 111 2222',
        email: 'michael.c@mateluxy.com',
        whatsapp: '+971 55 111 2222',
        experienceSince: 2020,
        areasExpertIn: ['Meydan', 'Sobha Hartland']
    },
    {
        id: 'mock-5',
        name: 'David Kim',
        position: 'Senior Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png', // Reusing placeholder
        languages: ['English', 'Korean'],
        nationality: 'Korean',
        phone: '+971 50 222 3333',
        email: 'david.k@mateluxy.com',
        whatsapp: '+971 50 222 3333',
        experienceSince: 2017,
        areasExpertIn: ['Downtown Dubai']
    },
    {
        id: 'mock-6',
        name: 'Fatima Al-Sayed',
        position: 'Listing Agent',
        department: 'Rentals',
        photoUrl: '/Image/profile_2.png', // Reusing placeholder
        languages: ['Arabic', 'English'],
        nationality: 'Egyptian',
        phone: '+971 50 444 5555',
        email: 'fatima.a@mateluxy.com',
        whatsapp: '+971 50 444 5555',
        experienceSince: 2021,
        areasExpertIn: ['JLT', 'Marina']
    },
    {
        id: 'mock-7',
        name: 'James Wilson',
        position: 'Property Manager',
        department: 'Management',
        photoUrl: '/Image/profile_3.png', // Reusing placeholder
        languages: ['English'],
        nationality: 'British',
        phone: '+971 52 666 7777',
        email: 'james.w@mateluxy.com',
        whatsapp: '+971 52 666 7777',
        experienceSince: 2016,
        areasExpertIn: ['Arabian Ranches']
    },
    {
        id: 'mock-8',
        name: 'Li Wei',
        position: 'Investment Specialist',
        department: 'Commercial',
        photoUrl: '/Image/profile_4.png', // Reusing placeholder
        languages: ['Chinese', 'English'],
        nationality: 'Chinese',
        phone: '+971 55 888 9999',
        email: 'li.w@mateluxy.com',
        whatsapp: '+971 55 888 9999',
        experienceSince: 2018,
        areasExpertIn: ['Business Bay']
    },
    // Duplicate 1
    {
        id: 'mock-9',
        name: 'Sarah Johnson',
        position: 'Senior Real Estate Agent',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png',
        languages: ['English', 'Spanish'],
        nationality: 'American',
        phone: '+971 50 123 4567',
        email: 'sarah.j@mateluxy.com',
        whatsapp: '+971 50 123 4567',
        experienceSince: 2018,
        areasExpertIn: ['Downtown Dubai', 'Business Bay']
    },
    // Duplicate 2
    {
        id: 'mock-10',
        name: 'Ahmed Al-Fayed',
        position: 'Luxury Property Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_2.png',
        languages: ['Arabic', 'English'],
        nationality: 'UAE',
        phone: '+971 50 987 6543',
        email: 'ahmed.a@mateluxy.com',
        whatsapp: '+971 50 987 6543',
        experienceSince: 2015,
        areasExpertIn: ['Palm Jumeirah', 'Dubai Marina']
    },
    // Duplicate 3
    {
        id: 'mock-11',
        name: 'Elena Petrova',
        position: 'Investment Advisor',
        department: 'Management',
        photoUrl: '/Image/profile_3.png',
        languages: ['Russian', 'English', 'French'],
        nationality: 'Russian',
        phone: '+971 52 345 6789',
        email: 'elena.p@mateluxy.com',
        whatsapp: '+971 52 345 6789',
        experienceSince: 2019,
        areasExpertIn: ['Dubai Hills', 'Jumeirah Golf Estates']
    },
    // Duplicate 4
    {
        id: 'mock-12',
        name: 'Michael Chen',
        position: 'Client Manager',
        department: 'Commercial', // Changed from Client Relations
        photoUrl: '/Image/profile_4.png', // Placeholder
        languages: ['English', 'Mandarin'],
        nationality: 'Canadian',
        phone: '+971 55 111 2222',
        email: 'michael.c@mateluxy.com',
        whatsapp: '+971 55 111 2222',
        experienceSince: 2020,
        areasExpertIn: ['Meydan', 'Sobha Hartland']
    },
    // Duplicate 5
    {
        id: 'mock-13',
        name: 'David Kim',
        position: 'Senior Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png', // Reusing placeholder
        languages: ['English', 'Korean'],
        nationality: 'Korean',
        phone: '+971 50 222 3333',
        email: 'david.k@mateluxy.com',
        whatsapp: '+971 50 222 3333',
        experienceSince: 2017,
        areasExpertIn: ['Downtown Dubai']
    },
    // Duplicate 6
    {
        id: 'mock-14',
        name: 'Fatima Al-Sayed',
        position: 'Listing Agent',
        department: 'Rentals',
        photoUrl: '/Image/profile_2.png', // Reusing placeholder
        languages: ['Arabic', 'English'],
        nationality: 'Egyptian',
        phone: '+971 50 444 5555',
        email: 'fatima.a@mateluxy.com',
        whatsapp: '+971 50 444 5555',
        experienceSince: 2021,
        areasExpertIn: ['JLT', 'Marina']
    },
    // Duplicate 7
    {
        id: 'mock-15',
        name: 'James Wilson',
        position: 'Property Manager',
        department: 'Management',
        photoUrl: '/Image/profile_3.png', // Reusing placeholder
        languages: ['English'],
        nationality: 'British',
        phone: '+971 52 666 7777',
        email: 'james.w@mateluxy.com',
        whatsapp: '+971 52 666 7777',
        experienceSince: 2016,
        areasExpertIn: ['Arabian Ranches']
    },
    // Duplicate 9
    {
        id: 'mock-17',
        name: 'Sarah Johnson',
        position: 'Senior Real Estate Agent',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png',
        languages: ['English', 'Spanish'],
        nationality: 'American',
        phone: '+971 50 123 4567',
        email: 'sarah.j@mateluxy.com',
        whatsapp: '+971 50 123 4567',
        experienceSince: 2018,
        areasExpertIn: ['Downtown Dubai', 'Business Bay']
    },
    // Duplicate 10
    {
        id: 'mock-18',
        name: 'Ahmed Al-Fayed',
        position: 'Luxury Property Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_2.png',
        languages: ['Arabic', 'English'],
        nationality: 'UAE',
        phone: '+971 50 987 6543',
        email: 'ahmed.a@mateluxy.com',
        whatsapp: '+971 50 987 6543',
        experienceSince: 2015,
        areasExpertIn: ['Palm Jumeirah', 'Dubai Marina']
    },
    // Duplicate 11
    {
        id: 'mock-19',
        name: 'Elena Petrova',
        position: 'Investment Advisor',
        department: 'Management',
        photoUrl: '/Image/profile_3.png',
        languages: ['Russian', 'English', 'French'],
        nationality: 'Russian',
        phone: '+971 52 345 6789',
        email: 'elena.p@mateluxy.com',
        whatsapp: '+971 52 345 6789',
        experienceSince: 2019,
        areasExpertIn: ['Dubai Hills', 'Jumeirah Golf Estates']
    },
    // Duplicate 12
    {
        id: 'mock-20',
        name: 'Michael Chen',
        position: 'Client Manager',
        department: 'Commercial',
        photoUrl: '/Image/profile_4.png',
        languages: ['English', 'Mandarin'],
        nationality: 'Canadian',
        phone: '+971 55 111 2222',
        email: 'michael.c@mateluxy.com',
        whatsapp: '+971 55 111 2222',
        experienceSince: 2020,
        areasExpertIn: ['Meydan', 'Sobha Hartland']
    },
    // Duplicate 13
    {
        id: 'mock-21',
        name: 'David Kim',
        position: 'Senior Consultant',
        department: 'Sales',
        photoUrl: '/Image/profile_1.png',
        languages: ['English', 'Korean'],
        nationality: 'Korean',
        phone: '+971 50 222 3333',
        email: 'david.k@mateluxy.com',
        whatsapp: '+971 50 222 3333',
        experienceSince: 2017,
        areasExpertIn: ['Downtown Dubai']
    },
    // Duplicate 14
    {
        id: 'mock-22',
        name: 'Fatima Al-Sayed',
        position: 'Listing Agent',
        department: 'Rentals',
        photoUrl: '/Image/profile_2.png',
        languages: ['Arabic', 'English'],
        nationality: 'Egyptian',
        phone: '+971 50 444 5555',
        email: 'fatima.a@mateluxy.com',
        whatsapp: '+971 50 444 5555',
        experienceSince: 2021,
        areasExpertIn: ['JLT', 'Marina']
    },
    // Duplicate 15
    {
        id: 'mock-23',
        name: 'James Wilson',
        position: 'Property Manager',
        department: 'Management',
        photoUrl: '/Image/profile_3.png',
        languages: ['English'],
        nationality: 'British',
        phone: '+971 52 666 7777',
        email: 'james.w@mateluxy.com',
        whatsapp: '+971 52 666 7777',
        experienceSince: 2016,
        areasExpertIn: ['Arabian Ranches']
    },
    // Duplicate 16
    {
        id: 'mock-24',
        name: 'Li Wei',
        position: 'Investment Specialist',
        department: 'Commercial',
        photoUrl: '/Image/profile_4.png',
        languages: ['Chinese', 'English'],
        nationality: 'Chinese',
        phone: '+971 55 888 9999',
        email: 'li.w@mateluxy.com',
        whatsapp: '+971 55 888 9999',
        experienceSince: 2018,
        areasExpertIn: ['Business Bay']
    }
];

