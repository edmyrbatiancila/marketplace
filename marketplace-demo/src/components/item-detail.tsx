'use client';

import { Listing, Message } from "@/lib/types";
import { formatTimeAgo } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { mockAPI } from "@/lib/dummyData";

interface ItemDetailsProps {
    listing: Listing;
}

const ItemDetails = ({ listing }: ItemDetailsProps) => {

    const [message, setMessage] = useState('I want to buy your item!');
    const [buyerName, setBuyerName] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const fetchMessages = async () => {
        try {
            const data = await mockAPI.getMessages(listing.id);
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleSendMessage = async () => {
        if (!message.trim() || !buyerName.trim() || !buyerEmail.trim()) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            await mockAPI.createMessage({
                listing_id: listing.id,
                buyer_email: buyerEmail,
                buyer_name: buyerName,
                message: message,
            });

            // Simulate email notification (in real app, this would be handled by backend)
            console.log(`Email notification sent to ${listing.seller_email}:
                New message about "${listing.title}"
                From: ${buyerName} (${buyerEmail})
                Message: ${message}`
            );

            setMessage('I want to buy your item!');
            setBuyerName('');
            setBuyerEmail('');
            fetchMessages();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [listing.id]);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/3">
                    <div className="aspect-square bg-blue-100 relative">
                    {listing.image_url ? (
                        <img
                            src={listing.image_url}
                            alt={listing.title}
                            className="w-full h-full object-cover"
                        />
                    ): (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-blue-600 text-lg font-medium">Photo</div>
                            </div>
                        </>
                    )}
                    </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/3 p-6">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{listing.title}</h1>
                            <p className="text-2xl font-bold text-gray-900 mt-2">${listing.price}</p>
                        </div>

                    {listing.description && (
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-700">{listing.description}</p>
                        </div>
                    )}   

                        <div className="text-sm text-gray-600">
                            <p>Listed { formatTimeAgo(listing.created_at) }</p>
                            <p>in {listing.location}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Seller Information</h3>
                            <p className="text-gray-700">{listing.seller_name}</p>
                            <p className="text-sm text-gray-600">{listing.seller_email}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Send seller a message</h3>
                            <div className="space-y-3">
                                <div>
                                    <Label htmlFor="buyerName" className="text-sm font-medium text-gray-700">
                                        Your Name
                                    </Label>
                                    <Input
                                        id="buyerName"
                                        value={buyerName}
                                        onChange={(e) => setBuyerName(e.target.value)}
                                        placeholder="Your name"
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="buyerEmail" className="text-sm font-medium text-gray-700">
                                        Your Email
                                    </Label>
                                    <Input
                                        id="buyerEmail"
                                        type="email"
                                        value={buyerEmail}
                                        onChange={(e) => setBuyerEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message here..."
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <Button
                                onClick={handleSendMessage}
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 mt-3"
                            >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                            </Button>
                        </div>

                        {messages.length > 0 && (
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Recent Messages</h3>
                                <div className="space-y-3 max-h-60 overflow-y-auto">
                                {messages.map((msg) => (
                                    <div key={msg.id} className="bg-gray-50 p-3 rounded-lg">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-medium text-sm text-gray-900">{msg.buyer_name}</span>
                                            <span className="text-xs text-gray-500">{formatTimeAgo(msg.created_at)}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{msg.message}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;