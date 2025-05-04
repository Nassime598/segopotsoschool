export interface School {
  id: string;
  name: string;
  phase: string;
  specialization: string;
  location: {
    province: string;
    municipality: string;
    district: string;
    address: string;
  };
  contact: {
    telephone: string;
    email?: string;
    addressee?: string;
  };
  emis: string;
  specialOffering?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Province {
  name: string;
  value: string;
}