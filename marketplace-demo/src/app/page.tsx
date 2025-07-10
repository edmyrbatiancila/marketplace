'use client';

import ItemGrid from "@/components/marketplace/item-grid";
import { usePageContext } from "@/contexts/PageContexts";
import { mockAPI } from "@/lib/dummyData";
import { useEffect } from "react";

export default function Home() {

  const { searchQuery, filteredListings, loading, setListings, setLoading, setFilteredListings, listings } = usePageContext();

  const fetchListings = async () => {
    try {
      const data = await mockAPI.getListings();
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
      listing.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredListings(filtered);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  useEffect(() => {
    filterListings();
  }, [listings, searchQuery]);
  

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
          {searchQuery ? `Search results for "${searchQuery}"` : "Today's picks"}
        </h1>
        {filteredListings.length > 0 ? (
          <ItemGrid />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              {searchQuery ? 'No listings found matching your search.' : 'No listings available yet.'}
            </div>
            {!searchQuery && (
              <p className="text-sm text-gray-400">
                Be the first to create a listing!
              </p>
            )}
          </div>
        )}
      </div>

  );
}