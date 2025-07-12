"use client";

import { Loader2, Upload } from "lucide-react";
import { Label } from "./ui/label";
import { useState } from "react";
import { usePageContext } from "@/contexts/PageContexts";
import { mockAPI } from "@/lib/dummyData";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { categories } from "@/lib/mock-data";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";

const CreateListingFlow = () => {
    const router = useRouter();
    const { isSubmitting, setIsSubmitting } = usePageContext();

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        email: '',
        sellerName: '',
        description: '',
        category: '',
        imageFile: null as File | null,
    });

    const handleInputChange = (field: string, value: string | File | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleInputChange('imageFile', file);
        }
    };

    const handleSubmit = async () => {
        if (!formData.title || !formData.price || !formData.email || !formData.sellerName || !formData.category) {
            alert('Please fill in all required fields');
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            let imageUrl = null;
            if (formData.imageFile) {
                imageUrl = await mockAPI.uploadImage(formData.imageFile);
            }
        
            const newListing = await mockAPI.createListing({
                title: formData.title,
                description: formData.description,
                price: parseFloat(formData.price),
                category: formData.category,
                image_url: imageUrl,
                seller_email: formData.email,
                seller_name: formData.sellerName,
                location: 'Palo Alto, CA',
            });
        
            // Redirect to the new listing
            router.push(`/item/${newListing.id}`);
        } catch (error) {
            console.error('Error creating listing:', error);
            alert('Error creating listing. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // if (step === 'type') {
    //     return (
    //         <div className="max-w-4xl mx-auto p-6">
    //             <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose listing type</h1>
                
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //             {listingTypes.map((type) => (
    //                 <button
    //                     key={type.id}
    //                     onClick={() => {
    //                         setListingType(type.id);
    //                         setStep('details');
    //                     }}
    //                     className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-blue-200 text-center"
    //                 >
    //                     <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
    //                     <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
    //                     <p className="text-sm text-gray-600">{type.description}</p>
    //                 </button>
    //             ))}
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Form */}
                    <div className="lg:w-1/2 p-6">
                        <div className="space-y-6">
                            {/* Photo Upload */}
                            <div>
                                <Label 
                                    htmlFor="photos" 
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Add Photos
                                </Label>
                                <div className="mt-2">
                                    <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer block">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-600">
                                        {formData.imageFile ? formData.imageFile.name : 'Add photos'}
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                                    Title *
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    className="mt-2"
                                    placeholder="Title"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                                    Category *
                                </Label>
                                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                                <SelectTrigger className="mt-2">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.filter(cat => cat.slug !== 'home').map((category) => (
                                    <SelectItem key={category.slug} value={category.slug}>
                                        {category.name}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            </div>

                            {/* Price */}
                            <div>
                                <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                                    Price *
                                </Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    className="mt-2"
                                    placeholder="0.00"
                                />
                            </div>

                            {/* Seller Name */}
                            <div>
                                <Label htmlFor="sellerName" className="text-sm font-medium text-gray-700">
                                    Your Name *
                                </Label>
                                <Input
                                    id="sellerName"
                                    type="text"
                                    value={formData.sellerName}
                                    onChange={(e) => handleInputChange('sellerName', e.target.value)}
                                    className="mt-2"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email *
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="mt-2"
                                    placeholder="your@email.com"
                                />
                            </div>
                            
                            {/* Description */}
                            <div>
                                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    className="mt-2"
                                    placeholder="Describe your item..."
                                    rows={6}
                                />
                            </div>

                            <Button 
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Creating Listing...
                                </>
                            ) : (
                                'Create Listing'
                            )}
                            </Button>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="lg:w-1/2 p-6 bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Preview</h3>
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="aspect-square bg-blue-100 relative">
                            {formData.imageFile ? (
                                <Image 
                                    src={ URL.createObjectURL(formData.imageFile) }
                                    alt="Preview"
                                    width={ 500 }
                                    height={ 500 }
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                                // <img
                                //     src={URL.createObjectURL(formData.imageFile)}
                                //     alt="Preview"
                                //     className="w-full h-full object-cover"
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

                            <div className="p-4">
                                <h4 className="font-semibold text-gray-900 text-lg">
                                    {formData.title || 'Title'}
                                </h4>
                                <p className="text-lg font-bold text-gray-900 mt-1">
                                    ${formData.price || '0.00'}
                                </p>

                                <div className="mt-4 text-sm text-gray-600">
                                    <p>Listed just now</p>
                                    <p>in Palo Alto, CA</p>
                                </div>

                                <div className="mt-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">Seller Information</h5>
                                    <p className="text-gray-700">{formData.sellerName || 'Your Name'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateListingFlow;