import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Logic for displaying the date in the item:
export const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'just now';
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

};

export type ListingType = 'item' | 'vehicle' | 'home' | 'multiple';

export const listingTypes = [
  {
    id: 'item' as ListingType,
    title: 'Item for sale',
    description: 'Sell individual items like electronics, furniture, etc.',
  },
  {
    id: 'multiple' as ListingType,
    title: 'Create multiple listings',
    description: 'Create several listings at once',
  },
  {
    id: 'vehicle' as ListingType,
    title: 'Vehicle for sale',
    description: 'Cars, motorcycles, boats, and other vehicles',
  },
  {
    id: 'home' as ListingType,
    title: 'Home for sale or rent',
    description: 'Houses, apartments, and rental properties',
  },
];
