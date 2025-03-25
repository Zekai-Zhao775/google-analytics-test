import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
};

export default function AboutUs() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">About Our Organization</h1>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h2>
                <p className="mb-4 text-gray-700">
                    Our nonprofit organization is dedicated to creating positive change in our community through education, support, and empowerment. We believe in building a more equitable and compassionate society where everyone has the opportunity to thrive.
                </p>
                <p className="mb-4 text-gray-700">
                    Through our various programs and initiatives, we work tirelessly to address pressing social issues and provide support to those in need. Our team of dedicated staff and volunteers is committed to making a lasting impact.
                </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Our History</h2>
                <p className="mb-4 text-gray-700">
                    Founded in 2013, our organization began as a small group of community members concerned about local issues. What started as informal gatherings to discuss how to help our neighbors in need has grown into a structured nonprofit serving thousands of people annually.
                </p>
                <p className="mb-4 text-gray-700">
                    Over the years, we've expanded our programs, built partnerships with local businesses and government agencies, and developed a strong reputation for effective, compassionate service.
                </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                        <p className="text-gray-600">Executive Director</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                        <p className="text-gray-600">Program Manager</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
                        <p className="text-gray-600">Community Outreach</p>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><span className="font-semibold">Compassion:</span> We approach our work with empathy and understanding.</li>
                    <li><span className="font-semibold">Integrity:</span> We maintain the highest ethical standards in all we do.</li>
                    <li><span className="font-semibold">Inclusivity:</span> We ensure our programs and services are accessible to all.</li>
                    <li><span className="font-semibold">Collaboration:</span> We work with partners to maximize our impact.</li>
                    <li><span className="font-semibold">Innovation:</span> We continuously seek better ways to serve our community.</li>
                </ul>
            </section>
        </div>
    );
} 