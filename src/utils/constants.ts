import { NavItem, Province, School } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Find a School', href: '/find-a-school' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'School Profile', href: '/school-profile' },
];

export const PROVINCES: Province[] = [
  { name: 'Eastern Cape', value: 'eastern-cape' },
  { name: 'Free State', value: 'free-state' },
  { name: 'Gauteng', value: 'gauteng' },
  { name: 'KwaZulu-Natal', value: 'kwazulu-natal' },
  { name: 'Limpopo', value: 'limpopo' },
  { name: 'Mpumalanga', value: 'mpumalanga' },
  { name: 'Northern Cape', value: 'northern-cape' },
  { name: 'North West', value: 'north-west' },
  { name: 'Western Cape', value: 'western-cape' },
];

export const FEATURED_SCHOOLS: School[] = [
  {
    id: '1',
    name: 'Segopotso Middle School',
    phase: 'Secondary School',
    specialization: 'Comprehensive',
    location: {
      province: 'Northern Cape',
      municipality: 'Moshaweng Municipality',
      district: 'Kgalagadi District Municipality',
      address: 'Mothibistad, Northern Cape',
    },
    contact: {
      telephone: '0738392046',
      addressee: 'S.D TAMOSE',
    },
    emis: '300101920',
  },
  {
    id: '2',
    name: 'Golden Fields Primary School',
    phase: 'Primary School',
    specialization: 'General Education',
    location: {
      province: 'Western Cape',
      municipality: 'City of Cape Town',
      district: 'Metro North Education District',
      address: 'Cape Town, Western Cape',
    },
    contact: {
      telephone: '0214567890',
    },
    emis: '100204580',
    specialOffering: ['Sports Excellence', 'Arts Program'],
  },
  {
    id: '3',
    name: 'Horizon High School',
    phase: 'Secondary School',
    specialization: 'Mathematics and Science',
    location: {
      province: 'Gauteng',
      municipality: 'City of Johannesburg',
      district: 'Johannesburg Central District',
      address: 'Johannesburg, Gauteng',
    },
    contact: {
      telephone: '0113456789',
      email: 'info@horizonhigh.co.za',
    },
    emis: '200309870',
    specialOffering: ['Advanced Mathematics', 'Science Laboratory'],
  },
];

export const RESOURCES = [
  {
    title: 'School Registration Guide',
    description: 'Step-by-step guide for registering your child at a new school',
    icon: 'FileText',
  },
  {
    title: 'School Comparison Tool',
    description: 'Compare multiple schools based on location, facilities, and performance',
    icon: 'BarChart',
  },
  {
    title: 'Educational Resources',
    description: 'Access curriculum guides and learning materials for students',
    icon: 'BookOpen',
  },
  {
    title: 'School Calendar',
    description: 'Important dates for the school year including holidays and exam periods',
    icon: 'Calendar',
  },
];