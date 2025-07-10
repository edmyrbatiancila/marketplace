// import { Listing, Message } from './types';

import { Listing, Message } from "./types";

// Generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Mock listings data
export const mockListings: Listing[] = [
    {
        id: '1',
        title: 'Bike 24 inch',
        description: 'Great condition mountain bike, perfect for trails and city riding. Recently serviced with new tires.',
        price: 99,
        category: 'sporting-goods',
        image_url: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'wei@example.com',
        seller_name: 'Wei Gu',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
        id: '2',
        title: 'Vintage Camera',
        description: 'Professional vintage camera in excellent condition. Includes original case, manual, and extra lens.',
        price: 450,
        category: 'electronics',
        image_url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'john@example.com',
        seller_name: 'John Smith',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
    {
        id: '3',
        title: 'Leather Sofa',
        description: 'Comfortable 3-seater leather sofa in brown. Minor wear but very comfortable. Perfect for living room.',
        price: 800,
        category: 'home-goods',
        image_url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'maria@example.com',
        seller_name: 'Maria Garcia',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
        id: '4',
        title: 'Gaming Console',
        description: 'Latest generation gaming console with two controllers and 5 games included. Barely used.',
        price: 350,
        category: 'electronics',
        image_url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'alex@example.com',
        seller_name: 'Alex Johnson',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    },
    {
        id: '5',
        title: 'Mountain Bike',
        description: 'High-end mountain bike with full suspension. Great for serious riders. Includes helmet and accessories.',
        price: 1200,
        category: 'sporting-goods',
        image_url: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'sarah@example.com',
        seller_name: 'Sarah Wilson',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
        id: '6',
        title: 'Dining Table Set',
        description: 'Beautiful wooden dining table with 6 chairs. Perfect for family dinners. Excellent condition.',
        price: 600,
        category: 'home-goods',
        image_url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'michael@example.com',
        seller_name: 'Michael Brown',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    },
    {
        id: '7',
        title: 'Laptop Computer',
        description: 'High-performance laptop perfect for work or gaming. 16GB RAM, 512GB SSD. Like new condition.',
        price: 900,
        category: 'electronics',
        image_url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'emily@example.com',
        seller_name: 'Emily Davis',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(), // 7 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    },
    {
        id: '8',
        title: 'Tennis Racket',
        description: 'Professional tennis racket in excellent condition. Perfect weight and balance for competitive play.',
        price: 120,
        category: 'sporting-goods',
        image_url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
        seller_email: 'david@example.com',
        seller_name: 'David Miller',
        location: 'Palo Alto, CA',
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
        updated_at: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    },
    ];

    // Mock messages data
    export const mockMessages: Message[] = [
    {
        id: 'm1',
        listing_id: '1',
        buyer_email: 'buyer1@example.com',
        buyer_name: 'Alice Johnson',
        message: 'Is this bike still available? I\'m very interested!',
        created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    },
    {
        id: 'm2',
        listing_id: '2',
        buyer_email: 'buyer2@example.com',
        buyer_name: 'Bob Smith',
        message: 'Does the camera come with the original box and documentation?',
        created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    },
    ];

    // In-memory storage for new listings and messages
    const listings: Listing[] = [...mockListings];
    const messages: Message[] = [...mockMessages];

    // Mock API functions
    export const mockAPI = {
    // Listings
    getListings: async (category?: string): Promise<Listing[]> => {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
        
        if (category) {
        return listings.filter(listing => listing.category === category);
        }
        return [...listings].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    },

    getListing: async (id: string): Promise<Listing | null> => {
        await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
        return listings.find(listing => listing.id === id) || null;
    },

    createListing: async (listingData: Omit<Listing, 'id' | 'created_at' | 'updated_at'>): Promise<Listing> => {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        
        const newListing: Listing = {
        ...listingData,
        id: generateId(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        };
        
        listings.unshift(newListing); // Add to beginning of array
        return newListing;
    },

    // Messages
    getMessages: async (listingId: string): Promise<Message[]> => {
        await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
        return messages
        .filter(message => message.listing_id === listingId)
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    },

    createMessage: async (messageData: Omit<Message, 'id' | 'created_at'>): Promise<Message> => {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
        
        const newMessage: Message = {
        ...messageData,
        id: generateId(),
        created_at: new Date().toISOString(),
        };
        
        messages.push(newMessage);
        return newMessage;
    },

    // Image upload simulation
    uploadImage: async (file: File): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate upload delay
        
        // In a real app, this would upload to a storage service
        // For now, we'll return a placeholder image URL
        return `https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800`;
    },
};