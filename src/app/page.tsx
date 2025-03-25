import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center bg-blue-100 p-8 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Making Our World a Better Place</h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-700">
          We're dedicated to providing support, resources, and hope to those in need through community-driven initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-center"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-2">5000+</h3>
          <p className="text-gray-600">People Helped</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-2">25+</h3>
          <p className="text-gray-600">Community Programs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-2">10+</h3>
          <p className="text-gray-600">Years of Service</p>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Youth Education Program</h3>
            <p className="text-gray-600 mb-4">
              Providing educational resources and mentorship to underprivileged youth in our community.
            </p>
            <Link href="/beneficiaries" className="text-blue-700 hover:underline font-medium">
              Learn more →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Food Drive</h3>
            <p className="text-gray-600 mb-4">
              Regular food distribution events to help families facing food insecurity.
            </p>
            <Link href="/events" className="text-blue-700 hover:underline font-medium">
              View upcoming events →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether through donations, volunteering, or spreading awareness, every contribution helps us create positive change.
        </p>
        <Link
          href="/donate"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg inline-block"
        >
          Support Our Cause
        </Link>
      </section>
    </div>
  );
}
