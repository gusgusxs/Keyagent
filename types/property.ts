export interface ListingProps {
  id?: string | number;
  title: string;
  price: string;
  location: string;
  specs: string;
  images: string[];
  verified?: boolean;
  pricePerSqm: string;
  postedTime?: string;
  description?: string; 
  features?: string[];  
}
