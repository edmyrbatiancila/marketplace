'use client';

import { useState, useEffect } from 'react';
import { Listing } from '@/lib/types';
import { usePageContext } from '@/contexts/PageContexts';
import { mockAPI } from '@/lib/dummyData';
import ItemGrid from '@/components/marketplace/item-grid';

interface CategoryPageProps {
    params: {
        slug: string;
    };
}

export default function CategoryPage({ params }: CategoryPageProps) {

    const [listings, setListings] = useState<Listing[]>([]);
    const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);
    const { searchQuery, setActiveCategory } = usePageContext();

    const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace('-', ' ');

    useEffect(() => {
        setActiveCategory(params.slug);
        fetchListings();
    }, [params.slug, setActiveCategory]);

    useEffect(() => {
        filterListings();
    }, [listings, searchQuery]);

    const fetchListings = async () => {
        try {
        const data = await mockAPI.getListings(params.slug);
        setListings(data);
        } catch (error) {
        console.error('Error fetching listings:', error);
        } finally {
        setLoading(false);
        }
    };

    const filterListings = () => {
        if (!searchQuery.trim()) {
        setFilteredListings(listings);
        return;
        }

        const filtered = listings.filter(listing =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredListings(filtered);
    };

    if (loading) {
        return (
        <div className="p-6">
            <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading listings...</div>
            </div>
        </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
                {searchQuery ? `Search results in ${categoryName}` : categoryName}
            </h1>
            {filteredListings.length > 0 ? (
                <ItemGrid />
            ) : (
                <div className="text-center py-12">
                    <div className="text-gray-500 mb-4">
                        {searchQuery ? 'No listings found matching your search in this category.' : `No listings in ${categoryName} yet.`}
                    </div>
                    <p className="text-sm text-gray-400">
                        Be the first to create a listing in this category!
                    </p>
                </div>
            )}
        </div>
    );
}