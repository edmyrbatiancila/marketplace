import { Bell, Facebook, Mail, Plus, Search, User, X } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePageContext } from "@/contexts/PageContexts";

const Header = () => {

    const { showCreateMenu, setShowCreateMenu } = usePageContext();


    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <Facebook className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Marketplace</span>
                        </Link>

                        {/* Search Bar */}
                    {onSearch && (
                        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    type="text"
                                    placeholder="Search marketplace..."
                                    value={localSearchQuery}
                                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                                    className="pl-10 w-64"
                                />
                            </div>
                            <Button type="submit" variant="outline" size="sm">
                                Search
                            </Button>
                        </form>
                    )}
                    </div>
                        
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                            onClick={() => setShowCreateMenu(!showCreateMenu)}
                        >
                            <Plus className="w-5 h-5" />
                        </Button>
                            
                        {showCreateMenu && (
                            <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg border p-4 w-64 z-50">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold">Create new listing</h3>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowCreateMenu(false)}
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Link href="/create" className="block p-2 hover:bg-gray-100 rounded">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                            <span>Choose listing type</span>
                                        </div>
                                    </Link>
                                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                            <span>Your listings</span>
                                        </div>
                                    </div>
                                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                            <span>Seller help</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                            
                        <Button variant="ghost" size="icon">
                            <Mail className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;