"use client";

import { categories } from "@/lib/mock-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISidebarProps {
    activeCategory?: string;
}

const Sidebar = ({ activeCategory }: ISidebarProps) => {

    const pathname = usePathname();

    return (
        <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-1">
                {categories.map((category) => (
                    <Link
                        key={ category.slug }
                        href={ category.slug === 'home' ? '/' : `/category/${
                            category.slug
                        }`}
                        className={ `block px-3 py-2 rounded-md text-sm transition-colors ${
                            (activeCategory === category.slug) ||
                            (pathname === '/' && category.slug === 'home')
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-100'
                        }` }
                    >
                        { category.name }
                    
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;