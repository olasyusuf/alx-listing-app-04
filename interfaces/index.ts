import { ReactNode } from 'react';

export interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  description: string;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

