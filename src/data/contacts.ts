export const whatsapp = {
  label: '(84) 99912-3905',
  hrefClean: 'https://wa.me/5584999123905',
  hrefWithMessage: 'https://wa.me/5584999123905?text=Olá, gostaria de saber mais sobre a IBE.',
  hrefToPray: 'https://wa.me/5584999123905?text=Gostaria de pedir oração.',
};

export const email = {
  label: 'familiaibe1969@gmail.com',
  href: 'mailto:familiaibe1969@gmail.com',
};

export const phone = {
  label: '(84) 99912-3905',
  href: 'tel:5584999123905',
};

interface LocationType {
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  googleMaps: string;
  getFullAddress(): string;
  firstLine(): string;
  secondLine(): string;
}

export const locationInfo: LocationType = {
  address: 'R. Adolfo Gordo, 1188',
  neighborhood: 'Cidade da Esperança',
  city: 'Natal',
  state: 'RN',
  zipCode: '59070-100',
  googleMaps: 'https://maps.app.goo.gl/D64iKMTtLtv8MuvXA',
  getFullAddress() {
    return `${this.address}, ${this.neighborhood}, ${this.city}, ${this.state}, ${this.zipCode}`;
  },
  firstLine() {
    return `${this.address}, ${this.neighborhood}`;
  },
  secondLine() {
    return `${this.city}, ${this.state}, ${this.zipCode}`;
  },
};

export const contacts = {
  whatsapp,
  phone,
  locationInfo,
};

export const socialLinks = {
  youtube: {
    label: 'YouTube',
    href: 'https://www.youtube.com/c/Fam%C3%ADliaIBE',
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/familiaibe',
  },
};
