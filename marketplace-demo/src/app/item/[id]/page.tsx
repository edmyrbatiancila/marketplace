import ItemDetails from "@/components/item-detail";
import { mockAPI } from "@/lib/dummyData";
import { Listing } from "@/lib/types";
import { notFound } from "next/navigation";

interface ItemPageDetailProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const listings = await mockAPI.getListings();
    
    return listings.map((listing) => ({
        id: listing.id,
    }));
}

export default async function ItemPageDetail({ params }: ItemPageDetailProps) {
    let listing: Listing | null = null;

    try {
        listing = await mockAPI.getListing(params.id);
    } catch (error) {
        console.error('Error fetching listing:', error);
    }

    if (!listing) {
        notFound();
    }

    return <ItemDetails listing={listing} />;
}

