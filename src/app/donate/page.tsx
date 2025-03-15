'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [donorInfo, setDonorInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
    });
    const [isMonthly, setIsMonthly] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('credit');

    const [isSubmitted, setIsSubmitted] = useState(false);

    const predefinedAmounts = [25, 50, 100, 250, 500];

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers and decimals
        if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
            setCustomAmount(value);
            setSelectedAmount(null);
        }
    };

    const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDonorInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const donationAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

        console.log('Donation submitted:', {
            amount: donationAmount,
            isMonthly,
            isAnonymous,
            paymentMethod,
            donorInfo: isAnonymous ? 'Anonymous' : donorInfo
        });

        // Track the donation event in Google Analytics
        sendGAEvent('event', 'donation_completed', {
            amount: donationAmount,
            currency: 'USD',
            recurring: isMonthly ? 'monthly' : 'one-time',
            payment_method: paymentMethod
        });

        setIsSubmitted(true);
    };

    const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Support Our Cause</h1>

            {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You for Your Donation!</h2>
                    <p className="text-lg mb-6">
                        Your generosity helps us continue our mission and make a positive impact in our community.
                    </p>
                    <p className="mb-8">
                        A receipt has been sent to your email address. Please check your inbox for confirmation.
                    </p>
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
                    >
                        Return to Homepage
                    </Link>
                </div>
            ) : (
                <>
                    <section className="bg-blue-50 p-6 rounded-lg text-center">
                        <p className="text-lg max-w-3xl mx-auto">
                            Your donation helps us provide essential services to those in need. All donations are tax-deductible.
                        </p>
                    </section>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Donation Amount Selection */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Select Donation Amount</h2>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                                {predefinedAmounts.map(amount => (
                                    <button
                                        key={amount}
                                        type="button"
                                        className={`p-4 rounded-lg border ${selectedAmount === amount
                                            ? 'bg-blue-100 border-blue-700 text-blue-700'
                                            : 'bg-white border-gray-300 hover:border-blue-300'
                                            }`}
                                        onClick={() => handleAmountSelect(amount)}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="customAmount" className="block mb-2 font-medium">
                                    Or enter a custom amount:
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                                    <input
                                        type="text"
                                        id="customAmount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        placeholder="Enter amount"
                                        className="w-full pl-8 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="monthlyDonation"
                                    checked={isMonthly}
                                    onChange={() => setIsMonthly(!isMonthly)}
                                    className="mr-2 h-5 w-5"
                                />
                                <label htmlFor="monthlyDonation">
                                    Make this a monthly donation
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="anonymousDonation"
                                    checked={isAnonymous}
                                    onChange={() => setIsAnonymous(!isAnonymous)}
                                    className="mr-2 h-5 w-5"
                                />
                                <label htmlFor="anonymousDonation">
                                    Make this an anonymous donation
                                </label>
                            </div>
                        </section>

                        {/* Donor Information */}
                        {!isAnonymous && (
                            <section className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold mb-6 text-blue-700">Your Information</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={donorInfo.firstName}
                                            onChange={handleInfoChange}
                                            required
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={donorInfo.lastName}
                                            onChange={handleInfoChange}
                                            required
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={donorInfo.email}
                                        onChange={handleInfoChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block mb-1 font-medium">Street Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={donorInfo.address}
                                        onChange={handleInfoChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block mb-1 font-medium">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={donorInfo.city}
                                            onChange={handleInfoChange}
                                            required
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block mb-1 font-medium">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={donorInfo.state}
                                            onChange={handleInfoChange}
                                            required
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="zipCode" className="block mb-1 font-medium">Zip Code</label>
                                        <input
                                            type="text"
                                            id="zipCode"
                                            name="zipCode"
                                            value={donorInfo.zipCode}
                                            onChange={handleInfoChange}
                                            required
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Payment Method */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Payment Method</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentMethod"
                                        value="credit"
                                        checked={paymentMethod === 'credit'}
                                        onChange={() => setPaymentMethod('credit')}
                                        className="mr-2 h-5 w-5"
                                    />
                                    <label htmlFor="creditCard" className="font-medium">
                                        Credit Card
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={() => setPaymentMethod('paypal')}
                                        className="mr-2 h-5 w-5"
                                    />
                                    <label htmlFor="paypal" className="font-medium">
                                        PayPal
                                    </label>
                                </div>
                            </div>

                            {/* For a real application, you would integrate with a payment processor */}
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-yellow-800">
                                    Note: This is a demo website. No actual payments will be processed.
                                </p>
                            </div>
                        </section>

                        {/* Donation Summary */}
                        <section className="bg-blue-50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Donation Summary</h2>

                            <div className="flex justify-between items-center mb-4">
                                <span className="font-medium">Donation Amount:</span>
                                <span className="text-xl font-bold">${finalAmount.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <span className="font-medium">Frequency:</span>
                                <span>{isMonthly ? 'Monthly' : 'One-time'}</span>
                            </div>

                            <div className="border-t border-blue-200 my-4 pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total:</span>
                                    <span className="text-xl font-bold">${finalAmount.toFixed(2)}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    {isMonthly ? `Your card will be charged $${finalAmount.toFixed(2)} monthly until canceled.` : ''}
                                </p>
                            </div>
                        </section>

                        <button
                            type="submit"
                            disabled={!finalAmount}
                            className={`w-full py-3 px-6 rounded-lg text-center text-lg font-semibold ${finalAmount ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {finalAmount ? `Donate ${isMonthly ? 'Monthly' : 'Now'}` : 'Please Select an Amount'}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
} 