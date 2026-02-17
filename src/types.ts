export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description?: string;
  reviews?: Review[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  rating: number;
  image: string;
  name: string;
}

export interface Brand {
  id: number;
  image: string;
  alt: string;
}