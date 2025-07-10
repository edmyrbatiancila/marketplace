export interface MarketplaceItem {
    id: string;
    title: string;
    price: string;
    location: string;
    listedTime: string;
    seller: string;
    description?: string;
    category: string;
    image_url?: string;
    seller_email?: string;
}

export interface Category {
    name: string;
    slug: string;
}
    
export interface Listing {
    id: string;
    title: string;
    description: string | null;
    price: number;
    category: string;
    image_url: string | null;
    seller_email: string;
    seller_name: string;
    location: string;
    created_at: string;
    updated_at: string;
}
    
export interface Message {
    id: string;
    listing_id: string;
    buyer_email: string;
    buyer_name: string;
    message: string;
    created_at: string;
}