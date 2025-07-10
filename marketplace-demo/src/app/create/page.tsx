"use client";

import { usePageContext } from "@/contexts/PageContexts";
import { ListingType, listingTypes } from "@/lib/utils";
import { useRouter } from "next/navigation";

const CreatePage = () => {
    const { setListingType } = usePageContext();
    const router = useRouter();

    const handleSelect = (typeId: ListingType) => {
        setListingType(typeId);
        router.push("/create/item");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Choose Listing Type
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {listingTypes.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => handleSelect(type.id)}
                        className="p-6 bg-white rounded-lg shadow hover:shadow-md text-center border border-gray-200 hover:border-blue-500 transition"
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CreatePage;
