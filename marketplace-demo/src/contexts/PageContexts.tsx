"use client";

import { Listing } from "@/lib/types";
import { ListingType } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

interface IProps {
    showCreateMenu: boolean;
    setShowCreateMenu: React.Dispatch<React.SetStateAction<boolean>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    listings: Listing[];
    setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
    filteredListings: Listing[];
    setFilteredListings: React.Dispatch<React.SetStateAction<Listing[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSubmitting: boolean;
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
    step: 'type' | 'details';
    setStep: React.Dispatch<React.SetStateAction<'type' | 'details'>>;
    listingType: ListingType;
    setListingType: React.Dispatch<React.SetStateAction<ListingType>>;
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const PageContext = createContext<IProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [showCreateMenu, setShowCreateMenu] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [listings, setListings] = useState<Listing[]>([]);
    const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [step, setStep] = useState<'type' | 'details'>('type');
    const [listingType, setListingType] = useState<ListingType>('item');
    const [activeCategory, setActiveCategory] = useState<string>('home')

    const contextValue: IProps = {
        showCreateMenu,
        setShowCreateMenu,
        searchQuery,
        setSearchQuery,
        listings,
        setListings,
        filteredListings,
        setFilteredListings,
        loading,
        setLoading,
        isSubmitting,
        setIsSubmitting,
        step,
        setStep,
        listingType,
        setListingType,
        activeCategory,
        setActiveCategory
    };

    return (
        <PageContext.Provider value={ contextValue }>
            { children }
        </PageContext.Provider>
    );

}; 

export const usePageContext = () => {
    const context = useContext(PageContext);

    if (context === undefined) {
        throw new Error('useTemplateManagementContext must be used within an PageProvider');
    }

    return context;
};