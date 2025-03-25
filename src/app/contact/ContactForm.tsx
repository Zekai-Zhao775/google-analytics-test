'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // In a real application, you would send this data to your server
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Contact Us</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Get in Touch</h2>

                    {isSubmitted ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            <p>Thank you for reaching out! We'll get back to you as soon as possible.</p>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Please select</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Donation Question">Donation Question</option>
                                <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                                <option value="Partnership Proposal">Partnership Proposal</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Office</h2>
                        <p className="mb-2"><strong>Address:</strong> 123 Nonprofit Way, Anytown, ST 12345</p>
                        <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                        <p className="mb-2"><strong>Email:</strong> info@nonprofitorg.org</p>
                        <p className="mb-2"><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM</p>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Other Ways to Connect</h2>
                        <p className="mb-4">Follow us on social media to stay updated on our latest initiatives and events.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-blue-700">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-medium mb-2">How can I volunteer with your organization?</h3>
                        <p className="text-gray-700">You can sign up to volunteer through our website or contact our volunteer coordinator directly at volunteer@nonprofitorg.org.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">Are donations tax-deductible?</h3>
                        <p className="text-gray-700">Yes, we are a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">How is my donation used?</h3>
                        <p className="text-gray-700">Your donations directly support our programs and services. We maintain a commitment to financial transparency, with over 85% of funds going directly to program expenses.</p>
                    </div>
                </div>
            </section>
        </div>
    );
} 