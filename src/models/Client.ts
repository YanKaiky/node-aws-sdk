export interface Contact {
  email: string;
  phone: string;
  isPrimary: boolean;
}

export interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export interface Client {
  id: string;
  fullName: string;
  birthDate: string;
  isActive: boolean;
  addresses: Address[];
  contacts: Contact[];
}
