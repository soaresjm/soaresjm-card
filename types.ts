
export interface BrokerData {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  whatsapp: string;
  email: string;
  website: string;
  location: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export interface PropertyHighlight {
  title: string;
  image: string;
  description: string;
  price: string;
}
