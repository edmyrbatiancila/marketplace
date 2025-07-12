import { usePageContext } from "@/contexts/PageContexts";
import { formatTimeAgo } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const ItemGrid = () => {

    const { filteredListings } = usePageContext();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredListings.map((item) => (
            <Link
                key={ item.id }
                href={`/item/${item.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="aspect-square bg-blue-100 relative overflow-hidden">
                {item.image_url ? (
                    <Image 
                        src={ item.image_url }
                        alt={ item.title }
                        width={ 500 }
                        height={ 500 }
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        unoptimized
                    />
                    // <img 
                    //     src={item.image_url} 
                    //     alt={item.title} 
                    //     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    // />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-blue-600 text-sm font-medium">Photo</div>
                        </div>
                    </>
                )}
                </div>
                <div className="p-3">
                    <div className="font-semibold text-gray-900 text-lg mb-1">
                        ${ item.price }
                    </div>
                    <div className="text-gray-600 text-sm mb-2 line-clamp-2">
                        { item.title }
                    </div>
                    <div className="text-gray-500 text-xs">
                        { item.location }
                    </div>
                    <div className="text-gray-500 text-xs">{formatTimeAgo(item.created_at)}</div>
                </div>
            </Link>
        ))}
        </div>
    );
}

export default ItemGrid;